import React, { useEffect, useState } from 'react';
import { FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const LINKEDIN = 'https://www.linkedin.com/in/mohamed-mostafa-852712254';
const GITHUB   = 'https://github.com/mohamed-mostafa0';

export default function Navbar() {
  const [scrolled,      setScrolled]    = useState(false);
  const [hoveredIndex,  setHoveredIndex] = useState(null);
  const [mobileOpen,    setMobileOpen]   = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'About',      href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech',       href: '#tech' },
    { name: 'Projects',   href: '#projects' },
    { name: 'Contact',    href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, mobileOpen ? 350 : 0); // wait for drawer close animation
  };

  const handleResumeClick = () => {
    window.open('/mohamed-mostafa-cv.pdf', '_blank');
  };

  return (
    <>
      {/* ── Main Navbar ────────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
        className={`fixed w-full z-50 top-0 transition-all duration-500 ease-out flex justify-center ${
          scrolled ? 'pt-4' : 'pt-0'
        }`}
      >
        <div className={`
          flex items-center justify-between mx-auto transition-all duration-500 ease-out
          ${scrolled
            ? 'w-[95%] md:w-[80%] max-w-5xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl py-3 px-6 shadow-[0_0_30px_rgba(107,38,217,0.15)]'
            : 'w-full max-w-screen-xl bg-transparent border-transparent py-5 px-8'
          }
        `}>

          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center flex-shrink-0 group relative">
            <span className="text-xl font-bold text-white tracking-widest uppercase relative z-10 transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6b26d9] group-hover:to-[#f6339a]">
              M.Mostafa
            </span>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-purple-500/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex relative items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                <span className="relative z-10">{link.name}</span>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      className="absolute inset-0 bg-white/10 rounded-full z-0"
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            {/* Social Icons — desktop only */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition-colors hover:scale-110 transform duration-300 text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300 text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* Resume Button — desktop only */}
            <motion.button
              onClick={handleResumeClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#6b26d9]/80 to-[#f6339a]/80 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 border border-white/10 transition-all duration-300"
            >
              Resume <FaDownload className="text-xs" />
            </motion.button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="w-7 h-7" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenuAlt3 className="w-7 h-7" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ───────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="fixed top-0 right-0 h-full w-72 z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl border-l border-white/10 flex flex-col p-8 md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between mb-10">
                <span className="text-lg font-bold text-white tracking-widest uppercase">
                  M.Mostafa
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-base font-medium group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#6b26d9] to-[#f6339a] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom actions */}
              <div className="mt-auto pt-8 border-t border-white/10 space-y-4">
                {/* Social row */}
                <div className="flex items-center gap-4">
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all text-sm"
                  >
                    <FaLinkedin className="text-lg" /> LinkedIn
                  </a>
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all text-sm"
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                </div>

                {/* Resume button */}
                <button
                  onClick={handleResumeClick}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#6b26d9] to-[#f6339a] text-white text-sm font-semibold shadow-lg shadow-purple-500/20 hover:opacity-90 transition-opacity"
                >
                  Resume <FaDownload className="text-xs" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
