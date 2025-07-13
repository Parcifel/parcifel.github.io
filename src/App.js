import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import ShimmerBackground from './components/ShimmerBackground';
import ThemeSwitch from './components/ThemeSwitch';
import CustomCursor from './components/CustomCursor';
import { CursorProvider } from './components/CursorContext';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <CustomCursor />

        {/* <ShimmerBackground />
        <div className='dot-grid'/> */}
        <ThemeSwitch />

        <div style={{ position: 'relative', zIndex: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;

