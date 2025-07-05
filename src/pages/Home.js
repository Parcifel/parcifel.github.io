import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import ContactCard from '../components/ContactCard'
import BusinessCard from '../components/BusinessCard'
import ScrollArea from '../components/ScrollArea'
import IconCloud from '../components/IconCloud'
import HoverLabel from '../components/HoverLabel'
import '../styles/Dashboard.css'

const Home = () => {
  const navigate = useNavigate();
  // const { setHoverLabel } = useContext(CustomCursor);

  return (
    <div className='dashboard'>
      <div className='grid-item business-card-area'>
        <BusinessCard />
      </div>

      <div className='grid-item about-card-area'>
        <Card title="About me" onClick={() => navigate('/about')}>
          <p>
            A quick summary about me. CLick for more!
          </p>
        </Card>
      </div>

      <div className='grid-item skills-card-area'>
        <IconCloud />
      </div>

      <div className='grid-item projects-card-area'>
        <ScrollArea />
      </div>

      <div className='grid-item personal-card-area'>
        <Card title="Hobbies" onClick={() => navigate('/projects')}>
          <p>
            A quick summary about my hobbies. Click for more!
          </p>
        </Card>
      </div>

      <div className='grid-item timeline-card-area'>
        <Card title="Timeline"></Card>
      </div>

      <div className='grid-item contact-card-area'>
        <Card title="Contact me">
          <ContactCard />
        </Card>
      </div>
    </div>
  )
}

export default Home
