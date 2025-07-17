import React from 'react'

const LabelList = ({ list }) => {
  return (
    <div 
      className='knob-label'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {list.map((text, idx) => (
        <div
          key={idx}
          style={{
            width: 'max-content',
            minHeight: 'calc(13px + 0.1rem)',
            fontSize: 13,
            textAlign: "center",
            fontFamily: 'sans-serif',
            padding: '0.1rem 0.4rem',
            margin: '0.3rem 0.3rem',
            border: '1px solid purple',
            borderRadius: 'calc(13px + 0.1rem)',
            fontFamily: 'SpaceGrotesk-Regular',
          }}
        >
          {text}
        </div>
      ))}
    </div>
  )
}

export default LabelList
