
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import SocialLinks from '@/components/SocialLinks';
import EmailLink from '@/components/EmailLink';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Yassine Tbessi - DevOps & SRE Engineer';
  }, []);

  return (
    <div className="bg-tech-navy text-tech-slate">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <SocialLinks />
      <EmailLink />
    </div>
  );
};

export default Index;
