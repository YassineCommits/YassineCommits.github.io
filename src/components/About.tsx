
import React from 'react';

const About = () => {
  const skills = [
    'Go', 'Python', 'C#', 'SQL', 'NoSQL', 'Bash',
    'Docker', 'Kubernetes', 'Terraform', 'Jenkins',
    'AWS (EC2, VPC, RDS, CloudWatch)', 'CI/CD',
    'Prometheus', 'Grafana', 'ELK Stack',
    'OSPF', 'BGP', 'MPLS', 'SDN',
  ];

  const languages = [
    { language: 'English', level: 'C1' },
    { language: 'French', level: 'B2' },
    { language: 'Arabic', level: 'Native' }
  ];

  return (
    <section id="about" className="py-20 bg-tech-dark-navy">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <p className="text-tech-light-slate mb-4">
              I'm a skilled DevOps and Site Reliability Engineer with a passion for automation, 
              cloud technologies, and building robust systems that scale. My focus is on creating 
              efficient, reliable infrastructure that enables teams to deliver value quickly and consistently.
            </p>
            
            <p className="text-tech-light-slate mb-4">
              With expertise in infrastructure as code, CI/CD pipelines, and monitoring solutions, 
              I strive to reduce operational complexity while improving system reliability. I enjoy 
              solving complex problems and finding ways to optimize both technical processes and team workflows.
            </p>
            
            <p className="text-tech-light-slate">
              I'm currently seeking a challenging role in DevOps, Site Reliability Engineering, or Cloud Computing 
              where I can leverage my technical skills and experience to make meaningful contributions.
            </p>

            <div className="mt-8">
              <h3 className="text-xl mb-3 font-medium">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {languages.map((lang) => (
                  <div key={lang.language} className="tech-tag">
                    {lang.language} ({lang.level})
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-4 font-medium">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
