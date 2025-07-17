import React from 'react'
import './ContactCard.css'
import { CiLocationArrow1 } from 'react-icons/ci'

const ContactCard = () => {
  return (
    <form 
      className='contact-form'
      action="https://formsubmit.co/pierredtuni@gmail.com"
      method='POST'
    >
      <h1>
        CONTACT ME
      </h1>
      <input 
        type='text' 
        placeholder='Your Name' 
        name='name'
        required 
      />
      <input 
        type='email' 
        placeholder='Your Email'
        name='email' 
        required 
      />
      <textarea 
        placeholder='Your Message' 
        name='message' 
        required 
      />
      <div className='button-container'>
        <button type='submit'>Send Message</button>
      </div>
      <div className='arrow-icon'>
        <CiLocationArrow1 />
      </div>
    </form>
  )
}

export default ContactCard
