import React from 'react'
import './ProjectCard.css'
import Dates from "./Dates"

const ProjectCard = ({ cardData }) => {
  const projectCoverImage = `/assets/images/project-default.png`;
  // if (cardData.coverImage) {
  //   projectCoverImage = `/assets/images/${cardData.coverImage}`;
  // }

  return (
    <>      
      {/* <img src={require(`../assets/images/${cardData.coverImage}`)} alt={title} className="project-image" /> */}
      <div className="project-card">
        <img src={projectCoverImage} alt="Project Cover Image" />
        <div className='project-info-container'>
          <div className='fade-wrapper' />
          <div className='project-info'>
            <div className='line'>
              <h3>{cardData.title}</h3>
              <div className='dates' >
                <Dates startDate={cardData.startDate} endDate={cardData.endDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
