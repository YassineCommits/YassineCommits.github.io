
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: "ICT Engineering Degree",
      major: "Telecommunications (specialized in cloud computing)",
      institution: "Ecole Nationale d'Ingénieurs de Tunis",
      period: "2018 - 2022",
      icon: GraduationCap,
    },
    {
      degree: "Two-year undergraduate degree in Physics and Technology",
      institution: "El Manar Preparatory Engineering Institute",
      period: "2016 - 2018",
      achievements: ["Graduated top 14%"],
      icon: BookOpen,
    }
  ];

  const certifications = [
    {
      name: "Advanced Kubernetes/AKS Network & Infrastructure",
      issuer: "Udemy",
      date: "2023"
    },
    {
      name: "Deploy Infra in the Cloud using Terraform",
      issuer: "Udemy",
      date: "2022"
    },
    {
      name: "Kubernetes for Developers",
      issuer: "Udemy",
      date: "2021"
    }
  ];

  const volunteering = [
    {
      role: "Google Developer Student Club President",
      organization: "GDSC",
      description: "Led GDSC, organized student events and workshops.",
      period: "2020 - 2022"
    }
  ];

  return (
    <section id="education" className="py-20 bg-tech-dark-navy">
      <div className="section-container">
        <h2 className="section-heading">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-tech-teal flex items-center">
              <GraduationCap className="mr-2" size={20} />
              Education
            </h3>
            
            <div className="space-y-8">
              {educations.map((edu) => (
                <div key={edu.degree} className="experience-card">
                  <h4 className="text-lg font-medium mb-1">{edu.degree}</h4>
                  {edu.major && (
                    <p className="text-tech-teal mb-2">{edu.major}</p>
                  )}
                  <p className="text-tech-light-slate">{edu.institution}</p>
                  <p className="text-sm text-tech-slate mt-2">{edu.period}</p>
                  
                  {edu.achievements && (
                    <div className="mt-3">
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-tech-teal mr-2">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications & Volunteering Column */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-tech-teal flex items-center">
              <Award className="mr-2" size={20} />
              Certifications & Activities
            </h3>
            
            <div className="space-y-6 mb-10">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-tech-light-navy border border-tech-teal/20 rounded-md p-4">
                  <h4 className="font-medium">{cert.name}</h4>
                  <p className="text-sm text-tech-slate mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-medium mb-6 text-tech-teal flex items-center">
              <BookOpen className="mr-2" size={20} />
              Volunteering
            </h3>
            
            <div className="space-y-6">
              {volunteering.map((vol) => (
                <div key={vol.role} className="bg-tech-light-navy border border-tech-teal/20 rounded-md p-4">
                  <h4 className="font-medium">{vol.role}</h4>
                  <p className="text-sm text-tech-light-slate">{vol.organization}</p>
                  <p className="mt-2">{vol.description}</p>
                  <p className="text-sm text-tech-slate mt-1">{vol.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
