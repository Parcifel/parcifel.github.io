import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
// import COnstruction from './pages/Construction'

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
        <ThemeSwitch />

        <div style={{ position: 'relative', zIndex: 3 }}>
          <AnimatePresence mode="wait">
            <LayoutGroup>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </LayoutGroup>
          </AnimatePresence>
        </div>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;

