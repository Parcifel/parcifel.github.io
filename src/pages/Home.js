import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import ContactCard from '../components/ContactCard'
import BusinessCard from '../components/BusinessCard'
import ScrollArea from '../components/ScrollArea'
import IconCloud from '../components/IconCloud'
import ThemeSwitch from '../components/ThemeSwitch'
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
        <Card onClick={() => navigate('/about')} title={'About Me'}>
          <p>
            I’m a final-year Computer Science student at Stellenbosch University. I’m passionate about exploring how software can solve real worl problems, with a special interest in machine learning and autonomous systems. My academic interests lie at the intersection of Computer Science and Applied Mathematics. Outside the classroom, I enjoy drawing, swimming, and playing Ultimate Frisbee. I also serve as Vice-Primarius in one of our university’s Commuter Student Communities, where I’ve grown as a leader and active member of campus life.
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
