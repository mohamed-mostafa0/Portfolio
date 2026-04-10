import React from 'react';
import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, yOffset = 50, duration = 0.8, className = "" }) {
  return (
    <div className={`relative overflow-visible ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: duration, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
