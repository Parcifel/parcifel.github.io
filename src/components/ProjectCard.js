import React from 'react'

const ProjectCard = ({ cardData }) => {
  return (
    <>      
      {/* <img src={require(`../assets/images/${cardData.coverImage}`)} alt={title} className="project-image" /> */}
      <div className="project-info">
        <h3>{cardData.title}</h3>
        <p>{cardData.description}</p>
      </div>
    </>
  )
}

export default ProjectCard
