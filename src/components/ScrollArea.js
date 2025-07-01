import React, {useRef, useEffect} from 'react'
import './ScrollArea.css';

const ScrollArea = () => {
  // const containerRef = useRef(null);
  // const animationRef = useRef(null);
  // const velocityRef = useRef(0);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   const handleMouseMove = (e) => {
  //     const rect = container.getBoundingClientRect();
  //     const mouseX = e.clientX - rect.left;
  //     const center = rect.width / 2;
  //     const offset = mouseX - center;

  //     if (mouseX < 50 || mouseX > rect.width - 50) {
  //       velocityRef.current = 0; // Stop scrolling when near edges
  //       return;
  //     }

  //     // Use a curve for smooth speed
  //     const maxSpeed = 50;
  //     const deadZone = 20; // Prevent micro movement near center
  //     const rawSpeed = offset * 0.5;

  //     velocityRef.current = Math.abs(offset) < deadZone ? 0 : Math.max(-maxSpeed, Math.min(maxSpeed, rawSpeed));
  //     console.log(`Mouse X: ${mouseX}, Offset: ${offset}, Velocity: ${velocityRef.current}`);
  //   };

  //   const animate = () => {
  //     const el = containerRef.current;
  //     const velocity = velocityRef.current;

  //     if (velocity !== 0) {
  //       const maxScrollLeft = el.scrollWidth - el.clientWidth;
  //       const nextScrollLeft = el.scrollLeft + velocity;

  //       if (
  //         (velocity > 0 && el.scrollLeft >= maxScrollLeft) ||
  //         (velocity < 0 && el.scrollLeft <= 0)
  //       ) {
  //         velocityRef.current = 0; // Stop scrolling when edge is hit
  //       } else {
  //         el.scrollLeft = Math.min(Math.max(nextScrollLeft, 0), maxScrollLeft);
  //       }
  //     }

  //     animationRef.current = requestAnimationFrame(animate);
  //   };

  //   container.addEventListener('mousemove', handleMouseMove);
  //   animationRef.current = requestAnimationFrame(animate);

  //   return () => {
  //     container.removeEventListener('mousemove', handleMouseMove);
  //     cancelAnimationFrame(animationRef.current);
  //     velocityRef.current = 0;
  //     animationRef.current = null;
  //   }
  // }, []);

  return (
    <div className='scroll-area'>
      <div className='left-bar'></div>
      <div className='scroll-container'>
        <div className='scroll-track'>
          <div className='scroll-item'>
            <h3>Project 1</h3>
          </div>
          <div className='scroll-item'>
            <h3>Project 2</h3>
          </div>
          <div className='scroll-item'>
            <h3>Project 3</h3>
          </div>
          <div className='scroll-item'>
            <h3>Project 4</h3>
          </div>
        </div>
      </div>
      <div className='right-bar'></div>
    </div>
  )
}

export default ScrollArea
