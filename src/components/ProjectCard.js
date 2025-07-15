import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dates from "./Dates";
import HoverLabel from "./HoverLabel";
import "./ProjectCard.css";

const projectCoverImage = `/assets/images/project-default.png`;

const ProjectCard = ({ cardData, expandedId, setExpandedId }) => {
  const id = cardData.id;
  const isExpanded = expandedId === id;

  return (
    <>
      {/* Compact card */}
      <motion.div
        layoutId={`project-container-${id}`}
        className="project-card"
        onClick={() => setExpandedId(id)}
        style={{
          cursor: "pointer",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          background: "white",
          display: isExpanded ? "none" : "flex", // hide compact card when expanded
          flexDirection: "column",
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.img
          layoutId={`project-image-${id}`}
          src={projectCoverImage}
          alt="Project Cover Image"
          style={{ width: "100%", height: "auto", display: "block" }}
        />

        <div className="project-info-container" style={{ padding: 16 }}>
          <motion.div layoutId={`project-info-${id}`} className="project-info">
            <div className="line">
              <motion.h3
                layoutId={`project-title-${id}`}
                style={{ margin: 0, fontSize: 20 }}
              >
                {cardData.title}
              </motion.h3>
            </div>
            <div
              className="line"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 8,
              }}
            >
              <div className="technology-list">{/* icons can go here */}</div>
              <motion.div layoutId={`project-dates-${id}`} className="dates">
                <Dates
                  startDate={cardData.startDate}
                  endDate={cardData.endDate}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Expanded detail */}
      <AnimatePresence>
        {isExpanded && (
          <ExpandedCard card={cardData} onClose={() => setExpandedId(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

import ReactDOM from "react-dom";

function ExpandedCard({ card, onClose }) {
  const id = card.id;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 10000,
        background: "#ffffff50",
        overflow: "hidden",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClose}
    >
      {/* Inner motion.div with layoutId for morphing */}
      <motion.div
        layoutId={`project-container-${id}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          borderRadius: 20,
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          padding: 32,
          width: "70%",
          maxWidth: "700px",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          cursor: "auto",
          overflowY: "auto",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
    {/* <motion.div
      onClick={onClose}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "80vw",
        maxWidth: 700,
        height: "70vh",
        transform: "translate(-50%, -50%)",
        zIndex: 10000,
        cursor: "pointer",
        background: "rgba(0,0,0,0.3)", // backdrop tint
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    > */}
      {/* The morphing card container */}
      <motion.div
        layoutId={`project-container-${id}`}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside card
        style={{
          background: "white",
          borderRadius: 20,
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          padding: 32,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: "auto",
          overflowY: "auto",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.img
          layoutId={`project-image-${id}`}
          src={projectCoverImage}
          alt="Project Cover Image"
          style={{
            width: "100%",
            height: 250,
            objectFit: "cover",
            borderRadius: 12,
            marginBottom: 24,
          }}
        />

        <motion.div layoutId={`project-info-${id}`} style={{ flex: "1 1 auto" }}>
          <motion.h3
            layoutId={`project-title-${id}`}
            style={{ margin: "0 0 20px 0", fontSize: 32 }}
          >
            {card.title}
          </motion.h3>

          <motion.div layoutId={`project-dates-${id}`} style={{ marginBottom: 24 }}>
            <Dates startDate={card.startDate} endDate={card.endDate} />
          </motion.div>

          {/* Extra detail content */}
          <div style={{ fontSize: 16, lineHeight: 1.5, color: "#555" }}>
            <p>{card.description}</p>
            <p>
              Here you can add more detailed information about the project,
              links, images, or whatever else you want.
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              marginTop: 24,
              padding: "10px 20px",
              fontSize: 16,
              borderRadius: 8,
              border: "none",
              background: "#007bff",
              color: "white",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>,
    document.body
  );
}

export default ProjectCard;
