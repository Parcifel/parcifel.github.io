import React, { useContext, useEffect } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { FaLocationArrow } from 'react-icons/fa'
import { CursorContext } from './CursorContext'
import './CustomCursor.css'

const CustomCursor = () => {
  const stiffnessValue = 2000;
  const dampingValue = 100;

  const { pos, hoverLabel, hoverStyle } = useContext(CursorContext);

  const rawX = useMotionValue(pos.x);
  const rawY = useMotionValue(pos.y);
  const cursorX = useSpring(rawX, { stiffness: stiffnessValue, damping: dampingValue });
  const cursorY = useSpring(rawY, { stiffness: stiffnessValue, damping: dampingValue });

  useEffect(() => {
    rawX.set(pos.x);
    rawY.set(pos.y);
  }, [pos.x, pos.y]);

  const isLabeling = !!hoverLabel;
  const size = '1.5rem';

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          padding: isLabeling ? '0.5rem 1rem' : 0,
          left: isLabeling ? 0 : '-'+size,
        }}
        animate={{
          backgroundColor: isLabeling ? "rgba(10, 10, 10, 1)" : 'rgba(10, 10, 10, 0)',
          color: isLabeling ? "#fff" : '#f5f5f5',
        }}
        transition={{ type: 'spring', stiffness: stiffnessValue, damping: dampingValue }}
      >
        <AnimatePresence mode="wait">
          {isLabeling ? (
            <motion.span
              key="label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: 13 }}
            >
              {hoverLabel}
            </motion.span>
          ) : (
            <motion.span
              key="icon"
              initial={{ opacity: 0, scale: 0.6}}
              animate={{ opacity: 1, scale: 1}}
              exit={{ opacity: 0, scale: 0.6}}
              transition={{ duration: 0.2 }}
            >
              <FaLocationArrow size={size} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* {isLabeling ? hoverLabel : <FaLocationArrow style={{ width: size.width, height: size.height}}/> } */}
      </motion.div>

      <motion.div
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 10000,
          background: '#fff',
          color: '#000',
          padding: '5px 10px',
          fontSize: '12px'
        }}
      >
        {isLabeling ? "Labeled: "+hoverLabel :  ("x: "+pos.x+" y:"+pos.y)}
      </motion.div>
    </>
  )
}


export default CustomCursor
