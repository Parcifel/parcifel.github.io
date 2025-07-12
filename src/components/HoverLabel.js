import React, { useContext, useRef } from 'react'
import { CursorContext } from './CursorContext'
import { MdHeight } from 'react-icons/md'

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
      style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      {children}
    </div>
  )
}

export default HoverLabel
