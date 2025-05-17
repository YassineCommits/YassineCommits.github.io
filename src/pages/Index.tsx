
import React, { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update page title
    document.title = 'Yassine Tbessi - DevOps & SRE Engineer';
    
    // Simulated loading for initial animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Track mouse position for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85 && sectionBottom > 0) {
          section.classList.add('section-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-tech-navy flex items-center justify-center z-50">
        <div className="text-tech-teal text-4xl font-bold">
          <span className="inline-block animate-bounce">Y</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>T</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>d</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>e</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>v</span>
        </div>
      </div>
    );
  }

  // Apply subtle parallax effect based on mouse position
  const getParallaxStyle = (strength = 20) => {
    return {
      transform: `translate(${(mousePosition.x - 0.5) * strength}px, ${(mousePosition.y - 0.5) * strength}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <div className="bg-tech-navy text-tech-slate overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-tech-teal/10 rounded-full blur-3xl opacity-30"
          style={getParallaxStyle(30)}
        ></div>
        <div 
          className="absolute -bottom-40 -right-20 w-96 h-96 bg-tech-teal/10 rounded-full blur-3xl opacity-20"
          style={getParallaxStyle(40)}
        ></div>
      </div>
      <Header />
      <div className="relative z-10"> 
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <SocialLinks />
      <EmailLink />
    </div>
  );
};

export default Index;
