import React from 'react'
import ParticleNetwork from '../Common/ParticleNetwork';
import { motion } from 'framer-motion';
import SplitText from '../Common/SplitText';
import MagneticButton from '../Common/MagneticButton';

export default function Hero() {

const GRADIENT_START = "#6b26d9";
const GRADIENT_END = "#f6339a";
  return (
    <div className='min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden'>

      <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />

      {/* Aurora Glassmorphism Background with Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Animated Aurora Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#6b26d9]/30 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[10%] right-[0%] w-[40vw] h-[60vw] max-w-[500px] max-h-[700px] bg-[#f6339a]/20 rounded-full blur-[120px]"
        />
        
        <ParticleNetwork 
          particleColor="rgba(246, 51, 154, 0.4)" 
          lineColor="rgba(107, 38, 217, 0.2)" 
          particleCount={60} 
          speed={0.3} 
        />
        

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      </div>

    
      <div className='flex flex-col justify-center items-center h-screen text-center relative z-10'>
        
        <motion.span 
        initial={{opacity:0 , y:10}}
        animate={{opacity:1 , y:0}}
        transition={{delay:0.3 , duration:0.8}}
          className='text-[#22d3ee] tracking-[0.2rem] text-xs font-semibold mb-4 uppercase'
        >
          Full-Stack Developer (Frontend-Focused)
        </motion.span>

        <div className='font-extrabold text-5xl md:text-7xl lg:text-[80px] mb-8 tracking-tight leading-[1.1]'>
          <SplitText text="Crafting Exceptional" delay={0.5} speed={0.03} className="justify-center" />
          <motion.span 
            initial={{opacity:0, scale: 0.9}}
            animate={{opacity:1, scale: 1}}
            transition={{delay: 1.2, duration: 0.8}}
            className='block bg-clip-text text-transparent bg-linear-to-r from-[#6b26d9] to-[#f6339a]'
          >
            Digital Experiences.
          </motion.span>
        </div>

        <motion.p
          initial={{opacity:0 , y:20}}
          animate={{opacity:1 , y:0}}
          transition={{delay:0.7 , duration:1}}
          className="text-lg md:text-xl text-gray-400 max-w-[600px] mb-10 leading-relaxed"
        >
          I build accessible, pixel-perfect, and performant web applications using modern technologies and best practices.
        </motion.p>

         <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <MagneticButton>
            <motion.a
              href="#projects"
              className="font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90 inline-block"
              style={{ background: `linear-gradient(90deg, ${GRADIENT_START}, ${GRADIENT_END})` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </MagneticButton>
          <MagneticButton>
            <motion.a
              href="#contact"
              className="font-medium px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/5 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </MagneticButton>
        </motion.div>

      </div>
    </div>
  )
}