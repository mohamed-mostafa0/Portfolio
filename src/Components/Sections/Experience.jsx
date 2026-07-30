import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../Common/Reveal';
import Floating3DGeometry from '../Common/Floating3DGeometry';

const experiences = [
  {
    id: 1,
    role: "Frontend Trainee",
    company: "NTI (National Telecommunication Institute)",
    duration: "Jan 2026",
    description:
      "Completed a frontend internship where I built responsive web applications using React and TypeScript. Focused on modern UI/UX practices, component-based architecture, and performance optimization through hands-on projects."
  },
  {
    id: 2,
    role: "Backend Trainee",
    company: "Route Academy",
    duration: "Sep 2024",
    description:
      "Learned backend development using Node.js, Express.js, and NestJS with TypeScript. Built RESTful APIs and worked on real-world backend projects including authentication, database integration, and scalable architecture."
  },
  {
    id: 3,
    role: "Frontend Developer Trainee",
    company: "Route Academy",
    duration: "Apr 2024",
    description:
      "Studied frontend development and built multiple projects using React, JavaScript, and TypeScript. Gained strong experience in component design, state management, and responsive web design."
  }
];
export default function Experience() {
  return (
    <div className="bg-[#030303] py-24 relative overflow-hidden transition-colors duration-500" id="experience">
      
      {/* Animated Developer Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 overflow-hidden pointer-events-none">
        {/* Animated Grid Base */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]"
          animate={{ backgroundPosition: ["0px 0px", "30px 30px"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        
        {/* Soft Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#6b26d9]/10 to-[#030303]"></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        {[
          { symbol: "</>", top: "10%", left: "5%", duration: 15, delay: 0 },
          { symbol: "{ }", top: "70%", left: "15%", duration: 20, delay: 2 },
          { symbol: "()", top: "40%", left: "80%", duration: 18, delay: 1 },
          { symbol: "[]", top: "80%", left: "75%", duration: 22, delay: 3 },
          { symbol: "&&", top: "20%", left: "60%", duration: 16, delay: 0.5 },
          { symbol: "||", top: "50%", left: "10%", duration: 19, delay: 1.5 },
          { symbol: "=>", top: "90%", left: "40%", duration: 17, delay: 2.5 },
          { symbol: "##", top: "15%", left: "90%", duration: 21, delay: 0.8 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-6xl font-mono text-[#6b26d9] font-bold"
            style={{ top: item.top, left: item.left }}
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <Reveal yOffset={50}>
          <div className="flex flex-col items-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4 transition-colors">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6b26d9] to-[#f6339a] rounded-full"></div>
          </div>
        </Reveal>

        <div className="relative">
          
          {/* Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6b26d9] via-[#f6339a] to-transparent transform md:-translate-x-1/2 rounded-full hidden md:block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="hidden md:block w-5/12"></div>
                
                <div className="z-20 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#6b26d9] to-[#f6339a] rounded-full shadow-[0_0_20px_rgba(107,38,217,0.5)] flex-shrink-0 relative">
                   <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <Reveal delay={index * 0.2} className="w-full md:w-5/12 mt-4 md:mt-0">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:border-[#6b26d9]/40 transition-all duration-300 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6b26d9]/10 to-[#f6339a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <h3 className="text-2xl font-bold text-white mb-1 transition-colors">{exp.role}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#6b26d9] dark:text-[#f6339a] font-medium text-base transition-colors">{exp.company}</span>
                      <span className="text-gray-400 text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">{exp.duration}</span>
                    </div>
                    <p className="text-gray-400 font-light text-sm leading-relaxed transition-colors">
                      {exp.description}
                    </p>
                  </div>
                </Reveal>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
