import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/Projects.json';
import "../styles/ProjectDetail.css";
import Dates from '../components/Dates';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id == id);

  const projectCoverImage = `/assets/images/project-default.png`; // Or use project.coverImage if available

  return (
    <motion.div
      layoutId={`project-${id}`}
      className="project-detail"
      onClick={() => navigate(-1)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='project-info'>
        <motion.img
          layoutId={`image-${id}`}
          src={projectCoverImage}
          alt={project.title}
          className="project-detail-image"
        />
        <motion.div layoutId={`info-${id}`} className="project-detail-info">
          <motion.h3 layoutId={`title-${id}`}>
            {project.title}
          </motion.h3>
          <div className="technology-list">
            {/* Same tech icons or info as in ProjectCard */}
          </div>
          <motion.div layoutId={`dates-${id}`} className="dates">
            {/* Reuse your Dates component or render start/end dates */}
            <Dates startDate={project.startDate} endDate={project.endDate} />
          </motion.div>
          <p className="project-description">{project.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
