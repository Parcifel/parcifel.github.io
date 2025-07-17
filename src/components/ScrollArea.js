import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/Projects.json';
import ProjectCard from './ProjectCard';
import HoverLabel from './HoverLabel';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './ScrollArea.css';

const ScrollArea = () => {  
  const [expandedId, setExpandedId] = useState(null);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const itemWidth = container.scrollWidth / fullProjectList.length;
  //   const middle = itemWidth * (projects.length);

  //   container.scrollLeft = middle;

  //   const handleScroll = () => {
  //     const maxScroll = container.scrollWidth;
  //     const current = container.scrollLeft;

  //     if (current < itemWidth) {
  //       container.scrollLeft += scrollWidth * projects.length;
  //     } else if (current > maxScroll - itemWidth * projects.length) {
  //       container.scrollLeft -= itemWidth * projects.length;
  //     }
  //   }

  //   container.addEventListener('scroll', handleScroll);
  //   return () => container.removeEventListener('scroll', handleScroll)
  // })

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef();

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  const projectList = projects;

  return (
    <div className='scroll-area'>

      {/* <div className='scroll-container' ref={containerRef}>
        <div className='scroll-track'>

          {projects.map((project, idx) => (
            <div className='scroll-item'>
              <ProjectCard key={idx} cardData={project} />
              </div>
          ))}
          
        </div>
      </div> */}
      
      <AnimatePresence>
        <Swiper
          className="scroll-container"
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          coverflowEffect={{
            rotate: 10,
            stretch: 60,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          watchSlidesProgress={true}
          onSlideChange={onSlideChange}
          onSwiper={setSwiperInstance}
          onProgress={(swiper) => {
            swiper.slides.forEach((slide) => {
              const progress = slide.progress;
              const abs = Math.abs(progress);

              const fadeAmount = Math.min(abs * 0.4, 1); // adjust intensity here
              const card = slide.querySelector('.scroll-item');
              if (card) {
                card.style.opacity = `${1 - fadeAmount}`;
                card.style.transform = `scale(${1 - Math.min(abs * 0.1, 0.3)})`;
              }
            });
          }}
        >
          {projectList.map((project, idx) => (
            <SwiperSlide key={idx} style={{ width: 'max-content' }}>
              <div 
                className="scroll-item fade-wrapper"
                onClick={() => swiperInstance?.slideToLoop(idx)}
              >
                <ProjectCard 
                  key={project.id}
                  cardData={project}
                  expandedId={expandedId}
                  setExpandedId={setExpandedId} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatePresence>
      
      <div className='left-bar' onClick={() => swiperInstance?.slidePrev()}>
        <HoverLabel label={'Previous'} />
      </div>
      <div className='right-bar' onClick={() => swiperInstance?.slideNext()}>
        <HoverLabel label={'Next'} />
      </div>
    </div>
  )
}

export default ScrollArea
