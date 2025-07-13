// ThemeOverlay.js
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ThemeBackground.css';
import ShimmerBackground from './ShimmerBackground';

const ThemeOverlay = ({ origin, color, onComplete, toDark }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      if (onComplete) onComplete();
    }, 1500);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  console.log(toDark ? 'Go To Dark' : ' Go To Light')

  return (
    // <AnimatePresence>
    //   {show && (
    //     <motion.div
    //       className="theme-overlay"
    //       initial={{
    //         top: origin.y,
    //         left: origin.x,
    //         opacity: 1,
    //         width: 0,
    //         height: 0
    //       }}
    //       animate={{
    //         opacity: 1,
    //         width: '200vw',
    //         height: '200vh',
    //         transition: { duration: 1.5, ease: 'easeInOut' },
    //       }}
    //       exit={{
    //         opacity: 0,
    //         transition: { duration: 0.2 },
    //       }}
    //       style={{
    //         backgroundColor: 'transparent',
    //       }}
    //     >
    //       <div className='background-temp' />
    //     </motion.div>
    //   )}
    // </AnimatePresence>

    <>
      <div 
        className='background-clipped' 
        style={{
          WebkitMask: 'url(#circleMask)',
          mask: 'url(#circleMask)'
        }}
      >
        {toDark ? (
          <>
            <ShimmerBackground />
            <div className='dot-grid' />
          </>
        ) : (
          <div className='light-bg' />
        )}
      </div>
      
      <svg className="hidden-svg">
        <defs>
          <mask id="circleMask">
            <rect width="100%" height="100%" fill="black" />
            {show && (
              <motion.circle
                cx={origin.x}
                cy={origin.y}
                r="100px"
                fill="white"
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 50,
                  transition: {duration: 1.5, ease: 'easeInOut'}
                }}
              />
            )}
          </mask>
        </defs>
      </svg>
    </>

  );
};

export default ThemeOverlay;
