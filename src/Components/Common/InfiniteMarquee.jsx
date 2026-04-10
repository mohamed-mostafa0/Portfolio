import React from 'react';
import { motion } from 'framer-motion';

export default function InfiniteMarquee({ children, speed = 20, direction = "left", className="" }) {
  return (
    <div className={`overflow-hidden flex w-full relative ${className}`}>
      {/* 
        We use an absolute gradient overlay to make the edges fade out smoothly, 
        enhancing the premium look.
      */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex min-w-max gap-8 pr-8 items-center"
      >
        {/* Render children twice to ensure seamless infinite looping */}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
