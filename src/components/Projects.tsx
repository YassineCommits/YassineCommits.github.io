
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
      title: "Network Security Architecture & Monitoring System",
      description: "Designed and implemented a comprehensive network security architecture with integrated monitoring, securing enterprise networks against common attack vectors while providing real-time monitoring and alerting capabilities.",
      technologies: ["GNS3", "VMware", "Nagios", "ELK Stack"],
      highlight: true
    },
    {
      title: "Azure Kubernetes E-Commerce Deployment",
      description: "Deployed a .NET MVC E-commerce application on Azure Kubernetes Services with a complete CI/CD pipeline, ensuring scalability, high availability, and automated deployment processes.",
      technologies: ["Azure Kubernetes Services", ".NET MVC", "Azure DevOps", "CI/CD"],
      highlight: true
    },
    {
      title: "Malicious URL Detection System",
      description: "Built a PySpark ETL pipeline to process large datasets and train machine learning models for detecting malicious URLs, significantly improving threat detection rates.",
      technologies: ["PySpark", "Decision Tree", "Random Forest", "ETL"],
    },
    {
      title: "Network Monitoring Infrastructure",
      description: "Implemented a robust network monitoring infrastructure using MPLS-TE and RSVP-TE for traffic engineering, with comprehensive monitoring via SNMP and Nagios.",
      technologies: ["MPLS-TE", "RSVP-TE", "SNMP", "Nagios"],
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
