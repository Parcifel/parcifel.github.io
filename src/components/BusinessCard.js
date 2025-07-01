import React from 'react'
import './BusinessCard.css';

import headshot from '../assets/images/headshot.png';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const BusinessCard = () => {
  return (
    <div className='business-card'>
      <div className='card-left'>
        <h2 className='name'>Pierre du Toit</h2>
        <h2 className='title'>Computer Science Student</h2>
        <div className='social-links'>
          <a href='https://link' target='_blank' rel='noopener noreferrer'>
            <FaGithub className='icon' />
            <span className='link-text'>GitHub</span>
          </a>
          <a href='https://link' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className='icon' />
            <span className='link-text'>LinkedIn</span>
          </a>
          <a href='mailto:'>
            <FaEnvelope className='icon' />
            <span className='link-text'>Email</span>
          </a>
        </div>
      </div>

      <div className='card-right'>
        <img src={headshot} alt="Headshot" />
      </div>
    </div>
  )
}

export default BusinessCard
