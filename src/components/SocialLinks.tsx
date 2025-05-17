
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed bottom-0 left-6 hidden lg:block">
      <div className="flex flex-col items-center">
        <ul className="space-y-6">
          <li>
            <a 
              href="https://github.com/yassinetbessi" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="text-tech-light-slate hover:text-tech-teal transform hover:-translate-y-1 transition-all duration-200 flex"
            >
              <Github size={20} />
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/yassine-tbessi" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="text-tech-light-slate hover:text-tech-teal transform hover:-translate-y-1 transition-all duration-200 flex"
            >
              <Linkedin size={20} />
            </a>
          </li>
          <li>
            <a 
              href="mailto:yassinetbessi1234@gmail.com" 
              aria-label="Email"
              className="text-tech-light-slate hover:text-tech-teal transform hover:-translate-y-1 transition-all duration-200 flex"
            >
              <Mail size={20} />
            </a>
          </li>
        </ul>
        <div className="h-24 w-px bg-tech-light-slate/50 mt-6"></div>
      </div>
    </div>
  );
};

export default SocialLinks;
