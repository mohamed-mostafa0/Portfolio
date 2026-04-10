import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import Technologies from '../Sections/Technologies'
import FeaturedProjects from '../Sections/FeaturedProjects'
import ContactMe from '../Sections/ContactMe'
import Experience from '../Sections/Experience'
import ScrollProgress from '../Common/ScrollProgress'

export default function Home() {
  return <>
    <ScrollProgress />
    <Navbar/>
    <Hero/> 
    <About/>
    <Experience/>
    <Technologies/>
    <FeaturedProjects/>
    <ContactMe/>
  </>
}
