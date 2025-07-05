import React from 'react'
import Tilt from 'react-parallax-tilt';
import './BusinessCard.css';

import headshot from '../assets/images/headshot.png';
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import HoverLabel from './HoverLabel';

const BusinessCard = () => {
  return (
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="#ffffff"
        glarePosition='all'
        glareBorderRadius='10px'
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
        transitionSpeed={1000}
        scale={1.05}
        className='tilt-wrapper'
      >
        <div className='business-card'>
          <div className='card-left'>
            <h2 className='name'>Pierre du Toit</h2>
            <h2 className='title'>Computer Science Student</h2>
            <div className='social-links'>
              <HoverLabel label="GitHub" >
                <a href='https://link' className='github' target='_blank' rel='noopener noreferrer'>
                  <FaGithub className='icon' />
                </a>
              </HoverLabel>
              <HoverLabel label="LinkedIn" >
                <a href='https://link' className='linkedin' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin className='icon' />
                </a>
              </HoverLabel>
              <HoverLabel label="Email" >
                <a href='mailto:' className='email'>
                  <FaEnvelope className='icon' />
                </a>
              </HoverLabel>
            </div>
          </div>

          <div className='card-right'>
            <img src={headshot} alt="Headshot" />
          </div>
        </div>
      </Tilt>
  )
}

export default BusinessCard
