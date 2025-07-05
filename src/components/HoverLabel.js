import React, { useContext, useRef } from 'react'
import { CursorContext } from './CursorContext'

const HoverLabel = ({ label, children }) => {
  const { setHoverLabel } = useContext(CursorContext)

  const handleEnter = () => {
    setHoverLabel(label);
  }

  const handleLeave = () => {
    setHoverLabel(null);
  }


  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}

export default HoverLabel
