
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-heading text-center mx-auto">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-tech-light-slate mb-8">
            I'm currently looking for new opportunities in DevOps, SRE, or Cloud 
            Computing roles. My inbox is always open whether you have a question 
            or just want to say hi. I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="mailto:yassinetbessi1234@gmail.com" 
              className="button-primary flex items-center"
            >
              <Mail size={16} className="mr-2" />
              Email Me
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yassine-tbessi" 
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary flex items-center"
            >
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/yassinetbessi" 
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary flex items-center"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </a>
          </div>
          
          <div className="text-tech-slate text-sm">
            <p>Designed & Built by Yassine Tbessi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
