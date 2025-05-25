
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
  };
  highlight?: boolean;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "autostart-docker-container",
      description: "A simple Bash script that ensures a Docker container starts automatically on system boot. It checks for the container's existence and running status, and starts it if it's not running.",
      technologies: ["Bash", "Docker", "System Administration"],
      links: {
        github: "https://github.com/YassineCommits/autostart-docker-conatiner"
      },
      highlight: true
    },
    {
      title: "Autostop-docker-containers",
      description: "This script stops idle Docker containers after a specified period of inactivity. It's useful for saving resources by automatically halting containers that aren't actively used.",
      technologies: ["Bash", "Docker", "Resource Management"],
      links: {
        github: "https://github.com/YassineCommits/Autostop-docker-containers"
      },
      highlight: true
    },
    {
      title: "postgres-user-manager",
      description: "A Node.js-based CLI tool to create, update, and delete PostgreSQL users. It simplifies PostgreSQL user management for developers or DBAs working with multiple environments.",
      technologies: ["Node.js", "PostgreSQL", "CLI"],
      links: {
        github: "https://github.com/YassineCommits/postgres-user-manager"
      }
    },
    {
      title: "postgres-migration",
      description: "A lightweight migration tool for PostgreSQL databases, built with Node.js. It allows developers to manage schema changes using simple SQL files and a versioning system.",
      technologies: ["Node.js", "PostgreSQL", "Database Migration"],
      links: {
        github: "https://github.com/YassineCommits/postgres-migration"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">Notable Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`experience-card flex flex-col h-full ${project.highlight ? 'border-tech-teal/40' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-medium text-tech-lightest-slate">
                  {project.title}
                </h3>
                
                <div className="flex space-x-3">
                  {project.links?.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-light-slate hover:text-tech-teal transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  
                  {project.links?.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tech-light-slate hover:text-tech-teal transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-tech-light-slate flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
