import React, { createContext, useEffect, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [hoverLabel, setHoverLabel] = useState(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move);
  }, [])

  return (
    <CursorContext.Provider value={{ pos, setPos, hoverLabel, setHoverLabel }}>
      {children}
    </CursorContext.Provider>
  );
}