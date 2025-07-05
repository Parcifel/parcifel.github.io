import React, { useContext, useRef } from 'react'
import { CursorContext } from './CursorContext'

const HoverLabel = ({ label, children, borderColor }) => {
  // const { setHoverLabel } = useContext(CursorContext)
  const { pushLabel, popLabel } = useContext(CursorContext)

  const handleEnter = () => {
    // setHoverLabel(label);
    pushLabel(label, borderColor)
  }

  const handleLeave = () => {
    // setHoverLabel(null);
    popLabel(label)
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
