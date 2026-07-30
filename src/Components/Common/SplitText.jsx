import React from 'react';
import { motion } from 'framer-motion';

export default function SplitText({ text, className = "", wordClassName = "", letterClassName = "", delay = 0, speed = 0.05 }) {
  
  // Split words first, then characters to handle spacing correctly
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: speed, 
        delayChildren: delay 
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          variants={container} // Propagate variants to nested motion spans
          className={`inline-block mr-[0.25em] whitespace-nowrap ${wordClassName}`}
        >
          {Array.from(word).map((letter, index) => (
            <motion.span variants={child} key={index} className={`inline-block ${letterClassName}`}>
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
}
