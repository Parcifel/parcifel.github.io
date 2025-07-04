import React, { useEffect, useRef } from 'react'
import './ShimmerBackground.css'

const ShimmerBackground = () => {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const draw = (x, y) => {
      console.log(`Drawing at: ${x}, ${y}`);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 300);
      grad.addColorStop(0, 'rgba(147, 73, 243, 0.8)');
      grad.addColorStop(0.5, 'rgba(147, 73, 243, 0.3)');
      grad.addColorStop(1, 'rgba(147, 73, 243, 0)');

      ctx.fillStyle = grad;
      ctx.fillRect(x - 150, y - 150, 300, 300);
    }
  
    const handleMouseMove = (e) => draw(e.clientX, e.clientY);
    window.addEventListener('mousemove', handleMouseMove);
    
    draw(-9999, -9999);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove); 
    };
  }, []);

  return (
    <canvas ref={canvasRef} className='shimmer-canvas'></canvas>
  )
}

export default ShimmerBackground
