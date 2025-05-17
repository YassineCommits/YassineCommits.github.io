
import React from 'react';
import { Progress } from "@/components/ui/progress";

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    proficiency: number;
  }[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "Go", proficiency: 85 },
        { name: "C#", proficiency: 80 },
        { name: "Bash", proficiency: 90 },
        { name: "SQL/NoSQL", proficiency: 85 },
        { name: "C/C++", proficiency: 75 },
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker", proficiency: 95 },
        { name: "Kubernetes", proficiency: 90 },
        { name: "Terraform", proficiency: 85 },
        { name: "AWS", proficiency: 90 },
        { name: "Jenkins", proficiency: 80 },
        { name: "GitHub Actions", proficiency: 85 },
        { name: "Nomad", proficiency: 80 },
      ]
    },
    {
      name: "Monitoring & Logging",
      skills: [
        { name: "Prometheus", proficiency: 90 },
        { name: "Grafana", proficiency: 85 },
        { name: "ELK Stack", proficiency: 80 },
        { name: "CloudWatch", proficiency: 85 },
        { name: "Graylog", proficiency: 80 },
        { name: "Fluentd", proficiency: 75 },
      ]
    },
    {
      name: "Networking",
      skills: [
        { name: "OSPF", proficiency: 80 },
        { name: "BGP", proficiency: 75 },
        { name: "MPLS", proficiency: 75 },
        { name: "SDN", proficiency: 70 },
        { name: "Routing & Switching", proficiency: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-tech-dark-navy">
      <div className="section-container">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-medium mb-6 text-tech-teal">{category.name}</h3>
              
              <div className="space-y-5">
                {category.skills.map(skill => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-tech-light-slate">{skill.name}</span>
                    </div>
                    <Progress 
                      value={skill.proficiency} 
                      className="h-2 bg-tech-teal/20"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
