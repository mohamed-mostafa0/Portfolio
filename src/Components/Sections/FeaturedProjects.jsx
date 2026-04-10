import React from 'react'
import project1 from "../../assets/Screenshot 2026-02-09 152316.png" 
import project2 from "../../assets/Screenshot 2026-04-06 015120.png"
import Badge from '../Common/Badge'
import { FiGithub } from "react-icons/fi";
import {GrShare} from "react-icons/gr"
import TiltCard from '../Common/TiltCard'
import Reveal from '../Common/Reveal'

export default function FeaturedProjects() {

  return <> 
    <Reveal yOffset={80}>
        <div className='bg-[#0A0A0A] py-24' id="projects">
            <div className='max-w-[1200px] mx-auto px-6'>

                <div className="flex flex-col items-center mb-20">
                    <h2 className="font-bold text-3xl md:text-5xl text-white text-center mb-4 relative z-10">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#6b26d9] to-[#f6339a] rounded-full"></div>
                </div>

                <div className='projects grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <TiltCard>
                        <div className='border border-white/10 group rounded-2xl hover:border-purple-500/40 transition bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col h-full relative z-10'>
                            <div className='relative overflow-hidden'>
                                <img src={project1} alt="" className='w-full object-cover group-hover:scale-105 duration-700' />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80'></div>
                            </div>
                            <div className='text-white p-8 space-y-6 flex-grow flex flex-col'>
                                <div>
                                    <h3 className='text-3xl font-bold mb-2'>E-Commerce</h3>
                                    <p className='text-gray-400 font-light leading-relaxed'><p className='text-gray-400 font-light leading-relaxed'>
  A fully functional e-commerce web application that allows users to browse products, manage their cart, and complete purchases. Built with a focus on responsive design, smooth user experience, and efficient state management.
</p></p>
                                </div>
                                <ul className='flex flex-wrap gap-2 mt-auto'>
                                    <Badge>React.js</Badge>
                                    <Badge>Tailwind</Badge>
                                    <Badge>Framer</Badge>
                                </ul>
                                <div className='flex items-center gap-4 pt-4 border-t border-white/10'>
                                    <a href='https://github.com/mohamed-mostafa0/ecommerce-website.git' className='cursor-pointer flex items-center justify-center w-1/2 border border-white/20 text-sm rounded-lg py-3 font-semibold hover:bg-white/10 transition-colors'><FiGithub className='text-lg mr-2'/> Code</a>
                                    <a href='https://ecommerce-website2-psi.vercel.app' target="_blank" rel="noopener noreferrer" className='cursor-pointer flex items-center w-1/2 border justify-center text-sm bg-gradient-to-r from-[#6B26D9] to-[#f6339a] border-transparent rounded-lg py-3 font-semibold shadow-lg shadow-purple-500/25 hover:opacity-90 transition-opacity'><GrShare className='text-lg mr-2'/> Live Demo</a>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    <TiltCard>
                        <div className='border border-white/10 group rounded-2xl hover:border-purple-500/40 transition bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col h-full relative z-10'>
                            <div className='relative overflow-hidden'>
                                <img src={project2} alt="" className='w-full object-cover group-hover:scale-105 duration-700' />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80'></div>
                            </div>
                            <div className='text-white p-8 space-y-6 flex-grow flex flex-col'>
                                <div>
                                    <h3 className='text-3xl font-bold mb-2'>Global News Pulse</h3>
                                    <p className='text-gray-400 font-light leading-relaxed'><p className='text-gray-400 font-light leading-relaxed'>
  A dynamic news dashboard that displays global news with sentiment analysis, helping users understand the tone of current events. Features real-time updates, categorized news, and interactive data presentation.
</p></p>
                                </div>
                                <ul className='flex flex-wrap gap-2 mt-auto'>
                                    <Badge>React.js</Badge>
                                    <Badge>Tailwind</Badge>
                                    <Badge>Framer</Badge>
                                </ul>
                                <div className='flex items-center gap-4 pt-4 border-t border-white/10'>
                                    <a href='https://github.com/mohamed-mostafa0/Global-News-Pulse.git' className='cursor-pointer flex items-center justify-center w-1/2 border border-white/20 text-sm rounded-lg py-3 font-semibold hover:bg-white/10 transition-colors'><FiGithub className='text-lg mr-2'/> Code</a>
                                    <a href='https://global-news-pulse-seven.vercel.app' target="_blank" rel="noopener noreferrer" className='cursor-pointer flex items-center w-1/2 border justify-center text-sm bg-gradient-to-r from-[#6B26D9] to-[#f6339a] border-transparent rounded-lg py-3 font-semibold shadow-lg shadow-purple-500/25 hover:opacity-90 transition-opacity'><GrShare className='text-lg mr-2'/> Live Demo</a>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                </div>
            </div>
        </div>
    </Reveal>
  </>
}
