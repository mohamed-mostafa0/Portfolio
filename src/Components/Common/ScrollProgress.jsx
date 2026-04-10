import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[1000] bg-gradient-to-r from-[#6b26d9] via-[#f6339a] to-[#22d3ee] shadow-[0_0_15px_rgba(246,51,154,0.5)]"
      style={{ scaleX }}
    />
  );
}
