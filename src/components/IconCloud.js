'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import * as d3 from 'd3-force';
import './IconCloud.css';
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub, FaPython, FaNodeJs, FaJava, FaJediOrder, FaUnity
} from 'react-icons/fa';

const icons = [
  { icon: <FaReact />, label: 'React', color: '#61DBFA' },
  { icon: <FaJs />, label: 'JavaScript', color: '#F2E33A' },
  { icon: <FaHtml5 />, label: 'HTML5', color: '#ED6535' },
  { icon: <FaCss3Alt />, label: 'CSS3', color: '#2865EF' },
  { icon: <FaNodeJs />, label: 'Node.js', color: '#81BE28' },
  { icon: <FaGithub />, label: 'GitHub', color: '#81BE28' },
  { icon: <FaPython />, label: 'Python', color: '#3370A1' },
  { icon: <FaJava />, label: 'Java', color: '#F9982F' },
  { icon: <FaJediOrder />, label: 'JediOrder', color: '#000000' },
  { icon: <FaUnity />, label: 'Unity', color: '#000000' },
];

const compressed = 30;
const expanded = 50;

const IconCloud = () => {
  const containerSize = 400;
  const simulationRef = useRef(null);
  const nodeData = useRef(
    icons.map((item, idx) => ({
      id: idx,
      x: Math.random() * containerSize,
      y: Math.random() * containerSize,
      icon: item.icon,
      label: item.label,
      radius: compressed,
      color: item.color,
    }))
  );
  const hoverIndexRef = useRef(null);

  const controlsRef = useRef(
    nodeData.current.map(() => ({
      x: useMotionValue(0),
      y: useMotionValue(0),
      radius: useSpring(compressed, {
        stiffness: 200,
        damping: 20,
      }),
    }))
  );

  simulationRef.current = d3.forceSimulation(nodeData.current)
    .force('center', d3.forceCenter(containerSize / 2, containerSize / 2))
    .force('charge', d3.forceManyBody().strength(30))
    .force('collision', d3.forceCollide((d) => d.radius))
    .alphaDecay(0.01)
    .on('tick', () => {
      nodeData.current.forEach((node, i) => {
        const radius =controlsRef.current[i].radius.get() 
        node.radius = radius;

        const min = radius
        const max = containerSize - radius;
        node.x = Math.max(min, Math.min(max, node.x));
        node.y = Math.max(min, Math.min(max, node.y));

        controlsRef.current[i].x.set(node.x);
        controlsRef.current[i].y.set(node.y);
      });

      simulationRef.current.nodes(nodeData.current);
    });

  return (
    <div
      className="icon-cloud"
      style={{ width: containerSize, height: containerSize }}
    >
      {nodeData.current.map((node, i) => (
        <motion.div
          key={node.id}
          className="icon-cloud-item"
          style={{
            x: controlsRef.current[i].x,
            y: controlsRef.current[i].y,
            backgroundColor: node.color,
          }}
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onHoverStart={() => {
            hoverIndexRef.current = node.id;
            controlsRef.current[i].radius.set(expanded);
            simulationRef.current.alpha(0.5).restart();
          }}
          onHoverEnd={() => {
            hoverIndexRef.current = null;
            controlsRef.current[i].radius.set(compressed);
            simulationRef.current.alpha(0.5).restart();
          }}
          animate={{ scale: controlsRef.current[i].radius.get() / compressed }}
        >
          {node.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default IconCloud;
