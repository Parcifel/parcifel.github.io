import React from 'react'
import './ScrollArea.css';

const ScrollArea = () => {
  return (
    <div className='scroll-area'>
      <div className='left-bar'></div>
      <div className='scroll-container'>
        <div className='scroll-track'>
          <div className='scroll-item'>
            <h3>Project 1</h3>
          </div>
          <div className='scroll-item'>
            <h3>Project 1</h3>
          </div>
          <div className='scroll-item'>
            <h3>Project 1</h3>
          </div>
          <div className='scroll-item'>
            <h3>Project 1</h3>
          </div>
        </div>
      </div>
      <div className='right-bar'></div>
    </div>
  )
}

export default ScrollArea
