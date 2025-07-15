import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const cardsData = [
  { id: "1", title: "Card One", description: "Description for card one." },
  { id: "2", title: "Card Two", description: "Description for card two." },
  { id: "3", title: "Card Three", description: "Description for card three." },
];

export default function MorphingCards() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <LayoutGroup>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
          padding: 20,
          filter: expandedId ? "brightness(0.5)" : "none",
          pointerEvents: expandedId ? "none" : "auto",
          userSelect: expandedId ? "none" : "auto",
          minHeight: "100vh",
          background: "#f0f0f0",
        }}
      >
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-container-${card.id}`}
            style={{
              background: "white",
              borderRadius: 16,
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              padding: 20,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onClick={() => setExpandedId(card.id)}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.h3 layoutId={`title-${card.id}`} style={{ margin: 0 }}>
              {card.title}
            </motion.h3>
            <motion.div layoutId={`desc-${card.id}`} style={{ opacity: 0.7 }}>
              {card.description}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {expandedId && (
          <ExpandedCard
            key="expanded"
            card={cardsData.find((c) => c.id === expandedId)}
            onClose={() => setExpandedId(null)}
          />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

function ExpandedCard({ card, onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "80vw",
        maxWidth: 600,
        height: "70vh",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div
        layoutId={`card-container-${card.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          background: "white",
          borderRadius: 20,
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          padding: 30,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            alignSelf: "flex-end",
            border: "none",
            background: "transparent",
            fontSize: 24,
            cursor: "pointer",
          }}
          aria-label="Close detail"
        >
          &times;
        </button>

        {/* Shared title */}
        <motion.h3 layoutId={`title-${card.id}`} style={{ margin: "10px 0 20px" }}>
          {card.title}
        </motion.h3>

        {/* Shared description */}
        <motion.div layoutId={`desc-${card.id}`} style={{ opacity: 1, flex: 1 }}>
          <p>{card.description}</p>

          {/* Extra detail content */}
          <p>
            This is the expanded card detail area where you can add more info,
            images, links, or anything else.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fringilla nulla at leo facilisis, eu congue arcu luctus.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
