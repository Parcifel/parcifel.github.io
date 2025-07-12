import React, { useEffect, useRef, useContext } from 'react'
import './ShimmerBackground.css'
import { CursorContext } from './CursorContext';

const ShimmerBackground = () => {
  const canvasRef = useRef(null);
  const { pos } = useContext(CursorContext); 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x, y } = pos;
      const radius = 200;
      
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0, 'rgba(147, 73, 243, 0.8)');
      // grad.addColorStop(0.5, 'rgba(147, 73, 243, 0.3)');
      grad.addColorStop(1, 'rgba(147, 73, 243, 0)');

      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      // ctx.fillStyle = grad;
      // ctx.fillRect(x - 150, y - 150, 300, 300);
    }
  
    let animationFrameId;
    const loop = () => {
      draw();
      animationFrameId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [pos]);

  return (
    <canvas ref={canvasRef} className='shimmer-canvas'></canvas>
  )
}

export default ShimmerBackground
