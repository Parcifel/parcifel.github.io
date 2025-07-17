// MobileWarningOverlay.jsx
import React, { useEffect, useState } from 'react';
import './MobileWarning.css';

const MobileWarning = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Check screen width only on first render
    if (window.innerWidth < 768) {
      setShowOverlay(true);
    }
  }, []);

  if (!showOverlay) return null;

  return (
    <div className="mobile-overlay">
      <div className="mobile-warning-box">
        <h2>Heads up!</h2>
        <p>
          This site is not fully optimized for mobile screens. Some elements might appear misaligned or not scale correctly.
        </p>
        <p>
          Please view the website on a laptop or desktop to get the intended experience.
        </p>
        <button onClick={() => setShowOverlay(false)}>Continue Anyway</button>
      </div>
    </div>
  );
};

export default MobileWarning;
