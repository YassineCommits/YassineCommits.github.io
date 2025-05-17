
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="section-container">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <p className="text-tech-teal mb-5 font-mono">Hi, my name is</p>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-tech-lightest-slate mb-4">
            Yassine Tbessi.
          </h1>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-tech-slate mb-6">
            Driving Efficiency and Scalability.
          </h2>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <p className="text-tech-slate max-w-2xl mb-8 text-lg">
            I'm a <span className="text-tech-teal">DevOps & Site Reliability Engineer</span> specializing 
            in building and maintaining robust, scalable cloud infrastructure. Currently focused on 
            optimizing system performance, reducing costs, and ensuring high availability.
          </p>
        </div>
        
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a 
            href="#projects" 
            className={cn(
              "button-primary inline-flex items-center group",
              "hover:translate-x-1 transition-transform"
            )}
          >
            Check out my work
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
