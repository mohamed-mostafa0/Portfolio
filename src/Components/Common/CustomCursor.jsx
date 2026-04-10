import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    // Track when hovering over clickable elements
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // If mobile/touch device, don't show custom cursor
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
     return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-fuchsia-500 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center bg-white/10 backdrop-blur-[1px]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.8 : 1,
        backgroundColor: isHovering ? "rgba(246, 51, 154, 0.2)" : "rgba(255,255,255,0)",
        borderColor: isHovering ? "rgba(246, 51, 154, 0.8)" : "rgba(246, 51, 154, 0.5)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        <motion.div 
            className="w-1 h-1 bg-fuchsia-500 rounded-full"
            animate={{ scale: isHovering ? 0 : 1 }}
        />
    </motion.div>
  );
}
