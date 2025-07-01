import React from 'react'

const ContactCard = () => {
  return (
    <form className='contact-form'>
      <input type='text' placeholder='Your Name' required />
      <input type='email' placeholder='Your Email' required />
      <textarea placeholder='Your Message' required></textarea>
      <button type='submit'>Send Message</button>
    </form>
  )
}

export default ContactCard
