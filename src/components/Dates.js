import React from 'react'
import "./Dates.css"
import { MotionGlobalConfig } from 'framer-motion';

const Dates = ({ startDate, endDate}) => {
  const startDateText = new Date(startDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const endDateText = new Date(endDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="date-visual">
      <div className="date-item">
        <div className="dot unfilled"></div>
        <div className="date-text">{startDateText}</div>
      </div>
      <div className="connecting-line"></div>
      <div className="date-item">
        <div className="dot filled"></div>
        <div className="date-text">{endDateText}</div>
      </div>
    </div>
  )
}

export default Dates
