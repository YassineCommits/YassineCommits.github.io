
import React from 'react';

const EmailLink = () => {
  return (
    <div className="fixed bottom-0 right-6 hidden lg:block">
      <div className="flex flex-col items-center">
        <a 
          href="mailto:yassinetbessi1234@gmail.com" 
          className="text-tech-light-slate hover:text-tech-teal transition-colors duration-200 font-mono tracking-wider vertical-text"
          style={{ writingMode: 'vertical-rl' }}
        >
          yassinetbessi1234@gmail.com
        </a>
        <div className="h-24 w-px bg-tech-light-slate/50 mt-6"></div>
      </div>
    </div>
  );
};

export default EmailLink;
