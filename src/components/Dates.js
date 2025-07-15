import React from 'react'
import "./Dates.css"

const Dates = ({ startDate, endDate}) => {
  const startDateText = new Date(startDate);
  const endDateText = new Date(endDate)

  return (
    <div className="date-visual">
      <div className="date-item">
        <div className="dot unfilled"></div>
        <div className="date-text">{startDate}</div>
      </div>
      <div className="connecting-line"></div>
      <div className="date-item">
        <div className="dot filled"></div>
        <div className="date-text">{endDate}</div>
      </div>
    </div>
  )
}

export default Dates
