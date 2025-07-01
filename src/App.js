import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Add more routes as needed */}
      {/* <Route path="/projects" element={<Projects />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
