import React, { useRef } from 'react'
import './Card.css';
import HoverLabel from './HoverLabel'
import Tilt from 'react-parallax-tilt'

const Card = ({title = null, children, onClick}) => {
  const cardRef = useRef(null);

  return (
    <div
    className='card'
    onClick={onClick}
    >
      {title != null ? (
        <HoverLabel label={title}>
          <div className='card-content'>
            {children}
          </div>
        </HoverLabel>
      ) : (
        <div className='card-content'>
          {children}
        </div>
      )}
    </div>
  );
};

export default Card;
