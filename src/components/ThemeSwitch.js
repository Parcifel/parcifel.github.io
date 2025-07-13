// ThemeSwitch.js
import React, { useRef, useState } from 'react';
import { useTheme } from './ThemeContext';
import ThemeBackground from './ThemeBackground';
import './ThemeSwitch.css';
import ShimmerBackground from './ShimmerBackground';

const ThemeSwitch = () => {
  const darkTheme = () => (
    <>
      <ShimmerBackground />
      <div className='dot-grid' />
    </>
  )
  const lightTheme = () => (
    <div className='background'
      style={{backgroundColor: "#ffffff"}}
    ></div>
  )

  const { theme, toggleTheme } = useTheme();
  const buttonRef = useRef();
  const [origin, setOrigin] = useState(null);
  const [background, setBackground] = useState(darkTheme);

  const handleClick = () => {
    const rect = buttonRef.current.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    toggleTheme();
  };

  return (
    <>
      <label className="switch" ref={buttonRef}>
        <input type="checkbox" onChange={handleClick} checked={theme === 'light'} />
        <span className="slider" />
      </label>
      {background}

      {origin && (
        <ThemeBackground
          origin={origin}
          color={theme === 'dark' ? '#151515' : '#ffffff'} // fade to target theme
          onComplete={() => {
            setBackground(theme === 'dark' ? darkTheme : lightTheme)
            setOrigin(null)
          }}
          toDark={theme === 'dark'}
        />
      )}
    </>
  );
};

export default ThemeSwitch;
