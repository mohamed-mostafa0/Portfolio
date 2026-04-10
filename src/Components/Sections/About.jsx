import React from 'react'
import myPhoto from '../../assets/3534.jpg'
import { FaCheck } from "react-icons/fa";
import Reveal from '../Common/Reveal';
import { motion } from 'framer-motion';
export default function About() {
  return <>
  
    <Reveal yOffset={100}>
      <div className='bg-[#0A0A0A] py-24 relative overflow-hidden' id="about">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

        <div className='max-w-[1200px] mx-auto px-6 relative z-10'>
            <div className="flex flex-col items-center mb-16">
              <h2 className='text-3xl md:text-5xl font-bold mb-4 text-white'>Behind the Code</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#6b26d9] to-[#f6339a] rounded-full"></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 auto-rows-[250px]'>
                
                {/* Main Bio Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className='md:col-span-2 md:row-span-2 rounded-3xl p-8 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-center'
                >
                    <h3 className='text-2xl font-semibold text-white mb-4'>Who I am</h3>
                    <div className='text-gray-300 leading-relaxed text-base space-y-4 font-light'>
                        <p>I'm a passionate developer bridging the gap between design and engineering. With a strong foundation in UI/UX, I prioritize user experience without compromising on performance.</p>
                        <p>My journey began with a curiosity for how things work on the web, which evolved into a career building robust applications. I thrive in environments that value clean code and innovative solutions.</p>
                    </div>
                </motion.div>

                {/* Photo Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className='md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group border border-white/10'
                >
                    <img src={myPhoto} alt="Portrait" className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                        <span className="text-white font-medium text-lg">Creative Mind</span>
                    </div>
                </motion.div>

                {/* Experience/Stats Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className='md:col-span-1 md:row-span-1 rounded-3xl p-6 bg-gradient-to-br from-[#6b26d9]/20 to-[#f6339a]/20 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center'
                >
                    <span className="text-5xl font-black text-white mb-2">3+</span>
                    <span className="text-sm text-gray-300 uppercase tracking-widest font-semibold">Years Exp.</span>
                </motion.div>

                {/* Guiding Principles */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className='md:col-span-1 md:row-span-1 rounded-3xl p-6 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col justify-center'
                >
                     <ul className='space-y-3'>
                        <li className='flex items-center gap-3 text-gray-200 text-sm'><span className='p-1.5 bg-[#f6339a] rounded-full text-white text-xs'><FaCheck /></span>Performance Optimized</li>
                        <li className='flex items-center gap-3 text-gray-200 text-sm'><span className='p-1.5 bg-[#f6339a] rounded-full text-white text-xs'><FaCheck /></span>Pixel Perfect</li>
                    </ul>
                </motion.div>

                {/* Additional Info / Philosophy Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className='md:col-span-2 md:row-span-1 rounded-3xl p-8 bg-white/5 backdrop-blur-md border border-white/10 flex items-center'
                >
                    <p className="text-gray-300 italic text-lg text-center w-full">"When I'm not coding, you can find me exploring new technologies, contributing to open source, or refining my design skills."</p>
                </motion.div>

                {/* Tech Love Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className='md:col-span-2 md:row-span-1 rounded-3xl p-6 bg-[#050505] border border-white/10 relative overflow-hidden flex items-center justify-center'
                >
                    {/* Glowing orb effect */}
                    <div className="absolute w-32 h-32 bg-[#6b26d9] rounded-full blur-[50px] opacity-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <span className="text-white text-xl font-medium relative z-10 uppercase tracking-widest">Driven by Innovation</span>
                </motion.div>
            </div>
        </div>
      </div>
    </Reveal>
  </>
}
