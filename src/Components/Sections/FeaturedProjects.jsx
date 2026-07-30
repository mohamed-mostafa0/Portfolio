import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import project1 from "../../assets/Screenshot 2026-07-26 055557.png";
import project2 from "../../assets/Screenshot 2026-04-06 015120.png";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce",
    description: "A fully functional e-commerce web application that allows users to browse products, manage their cart, and complete purchases. Built with a focus on responsive design, smooth user experience, and efficient state management.",
    image: project1,
    techStack: ["React.js", "Tailwind", "Framer"],
    github: "https://github.com/mohamed-mostafa0/ecommerce-website.git",
    live: "https://velora03.vercel.app"
  },
  {
    id: 2,
    title: "Global News Pulse",
    description: "A dynamic news dashboard that displays global news with sentiment analysis, helping users understand the tone of current events. Features real-time updates, categorized news, and interactive data presentation.",
    image: project2,
    techStack: ["React.js", "Tailwind", "Framer"],
    github: "https://github.com/mohamed-mostafa0/Global-News-Pulse.git",
    live: "https://global-news-pulse-seven.vercel.app"
  }
];


const ProjectPreview = ({ image, title }) => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 130, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]), springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      whileHover={{ scale: 1.015, y: -6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full relative rounded-[28px] overflow-hidden group cursor-pointer border border-white/10 hover:border-[#22d3ee]/50 bg-[#07070a] shadow-[0_25px_70px_rgba(0,0,0,0.7)] hover:shadow-[0_30px_80px_rgba(34,211,238,0.14)] transition-all duration-500"
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-white/[0.02]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/70 via-transparent to-transparent pointer-events-none" />

        <span className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.18] to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
        
        <div className="absolute inset-0 rounded-[28px] border border-white/5 group-hover:border-white/25 transition-colors pointer-events-none" />
      </div>
    </motion.div>
  );
};

const ProjectScene = ({ project }) => {
  const sceneRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.55, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.35]);

  const formattedNum = String(project.id).padStart(2, '0');

  const contentContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const contentItem = {
    hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div 
      ref={sceneRef}
      style={{ scale, opacity }}
      className="w-full min-h-[85vh] flex items-center justify-center py-16 md:py-24 relative"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 w-full order-2 lg:order-1"
        >
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="block">
            <ProjectPreview image={project.image} title={project.title} />
          </a>
        </motion.div>

        <motion.div 
          variants={contentContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 flex flex-col justify-center relative order-1 lg:order-2 pl-0 lg:pl-4"
        >
          <span className="absolute -top-14 sm:-top-20 -left-4 sm:-left-8 text-[120px] sm:text-[160px] md:text-[180px] font-mono font-black text-white/[0.06] select-none pointer-events-none tracking-tighter leading-none z-0">
            {formattedNum}
          </span>

          <div className="relative z-10 flex flex-col">
            
            <motion.div variants={contentItem} className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b26d9]" />
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-[0.22em]">
                Exhibition // Case {formattedNum}
              </span>
            </motion.div>

            <motion.h3 
              variants={contentItem}
              className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.05] mb-6 group inline-block cursor-default w-fit"
            >
              <span className="bg-gradient-to-r from-white via-white to-white group-hover:from-[#6b26d9] group-hover:via-[#f6339a] group-hover:to-[#22d3ee] bg-clip-text group-hover:text-transparent transition-all duration-700 bg-[length:200%_auto]">
                {project.title}
              </span>
            </motion.h3>

            <motion.p 
              variants={contentItem}
              className="text-gray-400 font-normal text-base sm:text-lg leading-relaxed max-w-[500px] mb-8"
            >
              {project.description}
            </motion.p>
            <motion.div variants={contentItem} className="flex flex-wrap gap-2.5 mb-11 max-w-[500px]">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/10 text-gray-300 text-xs font-mono tracking-wider transition-all duration-300 hover:border-[#22d3ee]/60 hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-default select-none"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={contentItem} className="flex flex-wrap items-center gap-4 w-full sm:max-w-[420px]">
              
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative flex-1 sm:flex-initial min-w-[160px] inline-flex items-center justify-center px-7 py-3.5 rounded-2xl overflow-hidden font-medium text-white transition-all duration-300 shadow-[0_4px_25px_rgba(107,38,217,0.3)] hover:shadow-[0_6px_35px_rgba(246,51,154,0.45)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#6b26d9] to-[#f6339a] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="absolute -inset-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                
                <span className="absolute inset-0 border border-white/30 rounded-2xl group-hover:border-white/60 transition-colors" />

                <span className="relative z-10 flex items-center gap-2.5 text-sm sm:text-base font-semibold tracking-wide">
                  Live Demo
                  <FiArrowUpRight className="text-lg text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </a>

              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex-1 sm:flex-initial min-w-[140px] inline-flex items-center justify-center px-6 py-3.5 rounded-2xl bg-transparent hover:bg-white/[0.03] border border-white/15 hover:border-white/40 text-gray-300 hover:text-white transition-all duration-300 text-sm sm:text-base font-semibold tracking-wide shadow-[inset_0_0_15px_rgba(255,255,255,0.01)]"
              >
                <FiGithub className="mr-2.5 text-lg transition-transform duration-500 ease-out group-hover:rotate-[20deg] group-hover:scale-110 text-gray-400 group-hover:text-[#22d3ee]" />
                GitHub
              </a>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};


export default function FeaturedProjects() {
  return (
    <section className="bg-[#030303] text-white py-32 md:py-48 relative overflow-hidden transition-colors duration-500" id="projects">
      
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#030303]" />
        
        <div className="absolute top-[5%] left-[5%] w-[65vw] max-w-[750px] h-[65vw] max-h-[750px] bg-[#6b26d9]/15 rounded-full blur-[170px] pointer-events-none" />
        
        <div className="absolute bottom-[5%] right-[5%] w-[65vw] max-w-[750px] h-[65vw] max-h-[750px] bg-[#22d3ee]/15 rounded-full blur-[170px] pointer-events-none" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.025] pointer-events-none" />
        
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] opacity-50 pointer-events-none" />
      </div>

      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start md:items-center text-left md:text-center mb-20 md:mb-28"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.025] border border-white/[0.08] backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(34,211,238,0.04)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
            <span className="text-[11px] sm:text-xs font-mono font-medium text-gray-300 tracking-[0.25em] uppercase">
              Curated Exhibition
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Featured <span className="bg-gradient-to-r from-[#6b26d9] via-[#f6339a] to-[#22d3ee] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 font-normal text-base md:text-xl max-w-[560px] leading-relaxed">
            Flagship applications engineered with high-end aesthetics, robust state architecture, and timeless digital craftsmanship.
          </p>
        </motion.div>

        <div className="flex flex-col space-y-24 md:space-y-40">
          {projectsData.map((project) => (
            <ProjectScene key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

