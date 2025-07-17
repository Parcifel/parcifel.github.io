// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Dates from "./Dates";
// import HoverLabel from "./HoverLabel";
// import { FaTimes } from "react-icons/fa";
// import "./ProjectCard.css";

// const projectCoverImage = `/assets/images/project-default.png`;

// const ProjectCard = ({ cardData, expandedId, setExpandedId }) => {
//   const id = cardData.id;
//   const isExpanded = expandedId === id;

//   return (
//     <>
//       <motion.div
//         layoutId={`project-container-${id}`}
//         className="project-card"
//         onClick={() => setExpandedId(id)}
//         style={{
//           display: isExpanded ? "none" : "flex", // hide compact card when expanded
//         }}
//         whileHover={{ scale: 1.03 }}
//         transition={{ type: "spring", stiffness: 250, damping: 35 }}
//       >
//         <motion.img
//           layoutId={`project-image-${id}`}
//           src={projectCoverImage}
//           alt="Project Cover Image"
//           className="project-cover-image"
//         />
//         <div className="project-info-container">
//           <motion.div 
//             className="fade-wrapper" 
//             layoutId={`fade-wrapper-${id}`}  
//             style={{height: '50%'}}
//           />
//           <motion.div layoutId={`project-info-${id}`} className="project-info">
//             <div className="line">
//               <motion.h3
//                 layoutId={`project-title-${id}`}
//                 className="project-title"
//               >
//                 {cardData.title}
//               </motion.h3>
//             </div>
//             <div
//               className="line"
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 marginTop: 8,
//               }}
//             >
//               <div className="technology-list">{/* icons can go here */}</div>
//               <motion.div layoutId={`project-dates-${id}`} className="dates">
//                 <Dates
//                   startDate={cardData.startDate}
//                   endDate={cardData.endDate}
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>

//       <AnimatePresence>
//         {isExpanded && (
//           <ExpandedCard card={cardData} onClose={() => setExpandedId(null)} />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// import ReactDOM from "react-dom";

// function ExpandedCard({ card, onClose }) {
//   const id = card.id;

//   return ReactDOM.createPortal(
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         zIndex: 500,
//         background: "#ffffff00",
//         overflow: "hidden",
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//       onClick={onClose}
//     >
//       <motion.div
//         className="project-info-container"
//         layoutId={`project-container-${id}`}
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           position: "relative",
//           background: "#151515",
//           borderRadius: 32,
//           boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
//           width: "70%",
//           maxWidth: "700px",
//           height: "80%",
//           display: "flex",
//           flexDirection: "column",
//           cursor: "none",
//           overflowX: "hidden",
//           overflowY: "auto",
//         }}
//         transition={{ type: "spring", stiffness: 200, damping: 35 }}
//       >
//         <motion.img
//           className="project-cover-image"
//           layoutId={`project-image-${id}`}
//           src={projectCoverImage}
//           alt="Project Cover Image"
//           style={{
//             height: 250,
//             objectFit: "cover",
//           }}
//         />
//         <motion.div 
//           className="fade-wrapper"
//           layoutId={`fade-wrapper-${id}`}  
//           style={{
//             height: 'calc(250px + 2rem)',
//           }}
//         />

//         <motion.div layoutId={`project-info-${id}`} style={{ flex: "1 1 auto" }}>
//           <div className="line"> 
//             <motion.h3
//               className="project-title"
//               layoutId={`project-title-${id}`}
//               style={{ fontSize: 32 }}
//             >
//               {card.title}
//             </motion.h3>

//             <motion.div 
//               className="dates" 
//               layoutId={`project-dates-${id}`} 
//               style={{ marginLeft: "auto", maxWidth: "max-content", marginRight: '1rem'}}
//             >
//               <Dates startDate={card.startDate} endDate={card.endDate} />
//             </motion.div>
//           </div>

//           {/* Extra detail content */}
//           <div style={{ fontSize: 16, lineHeight: 1.5, color: "#555" }} className="display-area">
//             <p>{card.description}</p>
//             {/* Add Additional elements here */}
//           </div>

//           <button
//             onClick={onClose}
//             style={{
//               position: "absolute",
//               top: 0,
//               right: 0,
//               margin: "1rem",
//               padding: "1rem",
//               fontSize: 16,
//               borderRadius: 8,
//               border: "none",
//               borderRadius: "50%",
//               background: "#ffffff20",
//               color: "white",
//             }}
//           >
//             <FaTimes />
//           </button>
//         </motion.div>
//       </motion.div>
//     {/* </motion.div> */}
//     </div>,
//     document.body
//   );
// }

// export default ProjectCard;
import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Dates from "./Dates";
import HoverLabel from "./HoverLabel";
import { FaTimes } from "react-icons/fa";
import LabelList from "./LabelList";
import "./ProjectCard.css";

const projectCoverImage = `/assets/images/project-default.png`;

const transitionSettings = {
  type: "spring",
  stiffness: 200,
  damping: 35,
};

const ProjectCard = ({ cardData, expandedId, setExpandedId }) => {
  const id = cardData.id;
  const isExpanded = expandedId === id;

  return (
    <>
      <AnimatePresence>
        {!isExpanded && (
          <motion.div
            layoutId={`project-container-${id}`}
            className="project-card"
            onClick={() => setExpandedId(id)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitionSettings}
            whileHover={{ scale: 1.03 }}
            style={{borderRadius: 16}}
          >
            <motion.img
              layoutId={`project-image-${id}`}
              src={projectCoverImage}
              alt="Project Cover Image"
              className="project-cover-image"
              transition={transitionSettings}
            />
            <motion.div
              className="project-info-container"
              layoutId={`project-info-container-${id}`}
              transition={transitionSettings}
            >
              <motion.div
                className="fade-wrapper"
                layoutId={`fade-wrapper-${id}`}
                style={{ height: '50%', opacity: 1 }}
                transition={transitionSettings}
              />
              <motion.div layoutId={`project-info-${id}`} className="project-info" transition={transitionSettings}>
                <div className="line">
                  <motion.h3
                    layoutId={`project-title-${id}`}
                    className="project-title"
                    transition={transitionSettings}
                  >
                    {cardData.title}
                  </motion.h3>
                </div>
                <div className="line">
                  <motion.div layoutId={`technology-list-${id}`} className="technology-list">
                    <LabelList list={cardData.technologies} />
                  </motion.div>
                  <motion.div
                    layoutId={`project-dates-${id}`}
                    className="dates"
                    transition={transitionSettings}
                  >
                    <Dates startDate={cardData.startDate} endDate={cardData.endDate} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && (
          <ExpandedCard card={cardData} onClose={() => setExpandedId(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

function ExpandedCard({ card, onClose }) {
  const id = card.id;

  return ReactDOM.createPortal(
    <motion.div
      className="expanded-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 150,
        background: "#00000088",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        layoutId={`project-container-${id}`}
        className="project-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "#151515",
          borderRadius: 32,
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          width: "70%",
          maxWidth: "700px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
        transition={transitionSettings}
      >
        <motion.img
          className="project-cover-image"
          layoutId={`project-image-${id}`}
          src={projectCoverImage}
          alt="Project Cover Image"
          style={{ height: 250, objectFit: "cover" }}
          transition={transitionSettings}
        />

        <motion.div
          className="fade-wrapper"
          layoutId={`fade-wrapper-${id}`}
          style={{ height: 254, opacity: 1}}
          transition={transitionSettings}
        />

        <motion.div
          className="project-info-container"
          layoutId={`project-info-container-${id}`}
          transition={transitionSettings}
          style={{
            position: "absolute",
            top: 250,
            paddingTop: '2rem'
          }}
        >
          <motion.div className="project-info" layoutId={`project-info-${id}`} style={{ flex: "1 1 auto" }} transition={transitionSettings}>
            <div className="line">
              <motion.h3
                className="project-title"
                layoutId={`project-title-${id}`}
                style={{ fontSize: 32 }}
                transition={transitionSettings}
              >
                {card.title}
              </motion.h3>

              <motion.div
                className="dates"
                layoutId={`project-dates-${id}`}
                style={{ marginLeft: "auto", maxWidth: "max-content", marginRight: '1rem' }}
                transition={transitionSettings}
              >
                <Dates startDate={card.startDate} endDate={card.endDate} />
              </motion.div>
            </div>

            <div className="line">
              <motion.div 
                layoutId={`technology-list-${id}`}
                className="technology-lsit"
                style={{margin: "0 1.5rem"}}
              >
                <LabelList list={card.technologies} />
              </motion.div>
            </div>

            <div style={{ fontSize: 16, lineHeight: 1.5, color: "#bbb" }} className="display-area">
              <p>{card.description}</p>
            </div>

            {/* <div style={{ fontSize: 16, lineHeight: 1.5, color: "#bbb" }} className="display-area">  
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>

            <div style={{ fontSize: 16, lineHeight: 1.5, color: "#bbb" }} className="display-area">  
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>

            <div style={{ fontSize: 16, lineHeight: 1.5, color: "#bbb" }} className="display-area">  
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div> */}

            {/* <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                // margin: "1rem",
                padding: "1rem",
                fontSize: 16,
                borderRadius: "50%",
                background: "#ffffff20",
                color: "white",
                border: "none",
                zIndex: 502,
              }}
            >
              <FaTimes />
            </button> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default ProjectCard;
