import React from 'react'
import './HobbyCard.css'

const HobbyCard = ({ image }) => {
  const imageSource = `/assets/images/${image}`

  return (
    <div className='hobby-card-container'>
      <div className='boxshadow-wrapper' />
      <img src={imageSource} alt="Hobby Image" />
      <div className='card-content-container' />
    </div>
  )
}

export default HobbyCard
