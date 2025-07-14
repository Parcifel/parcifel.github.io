import React, { createContext, useEffect, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [labelStack, setLabelStack] = useState([])
  // const [hoverLabel, setHoverLabel] = useState(null);
  const [pos, setPos] = useState({ x: -100, y: -100 });

  const pushLabel = (label, borderColor) => {
    setLabelStack((prev) => [...prev, { label, borderColor }])
  }

  const popLabel = (label) => {
    setLabelStack((prev) => prev.filter((e) => e.label !== label))
  }

  const top = labelStack[labelStack.length - 1];
  const hoverLabel = top?.label || null;
  const hoverBorderColor = top?.borderColor || null;

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move);
  }, [])

  return (
    <CursorContext.Provider value={{ pos, setPos, hoverLabel, pushLabel, popLabel, hoverBorderColor }}>
      {children}
    </CursorContext.Provider>
  );
}