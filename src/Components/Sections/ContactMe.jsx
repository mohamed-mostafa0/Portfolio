import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import Reveal from "../Common/Reveal";
import MagneticButton from "../Common/MagneticButton";

export default function ContactMe() {
  const GRADIENT_START = "#6b26d9";
  const GRADIENT_END = "#f6339a";

  return (
    <div className="bg-[#050505] py-24 relative overflow-hidden" id="contact">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6b26d9]/20 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f6339a]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <Reveal yOffset={50}>
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#6b26d9] to-[#f6339a] rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Contact Info */}
          <Reveal delay={0.2} className="lg:col-span-2 h-full">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-full space-y-10 relative overflow-hidden">
              {/* Subtle inner grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-2">Let's Connect</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-5 text-gray-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f6339a]">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Email</p>
                      <a href="mailto:mohamedmostafa7474@example.com" className="hover:text-white transition-colors">mohamedmostafa7474@gmail.com</a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-5 text-gray-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f6339a]">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Phone</p>
                      <a href="tel:01144727253" className="hover:text-white transition-colors">01144727253</a>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 5 }} className="flex items-center gap-5 text-gray-300">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f6339a]">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Location</p>
                      <span className="text-white">Giza, Egypt</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="flex gap-4 relative z-10 pt-8 border-t border-white/10">
                <a href="https://www.linkedin.com/in/mohamed-mostafa-852712254" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#6b26d9] hover:text-white hover:border-[#6b26d9] transition-all duration-300">
                  <FaLinkedin className="text-lg" />
                </a>
                <a href="https://github.com/mohamed-mostafa0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#f6339a] hover:text-white hover:border-[#f6339a] transition-all duration-300">
                  <FaGithub className="text-lg" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.4} className="lg:col-span-3">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative">
              
              <form className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#6b26d9] focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Your Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#f6339a] focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 font-medium ml-1">Your Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#6b26d9] focus:bg-white/10 transition-all duration-300 resize-none placeholder:text-gray-600"
                    placeholder="Hello! I have a project in mind..."
                  />
                </div>
                
                <div className="pt-4">
                  <MagneticButton className="w-full md:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full md:w-auto bg-gradient-to-r from-[#6b26d9] to-[#f6339a] text-white px-10 py-4 rounded-xl font-semibold shadow-[0_0_30px_rgba(246,51,154,0.3)] border border-white/20 transition-all"
                    >
                      Send Message
                    </motion.button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}