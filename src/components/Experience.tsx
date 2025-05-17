
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type Experience = {
  company: string;
  position: string;
  period: string;
  achievements: string[];
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences: Experience[] = [
    {
      company: "Guepard",
      position: "DevOps and Site Reliability Engineer",
      period: "2022 - Present",
      achievements: [
        "Designed and implemented AWS infrastructure (EC2, VPC, networking, security groups, RDS, SSM) for 10+ clients, focusing on high availability and security.",
        "Automated infrastructure provisioning with CDKTF (TypeScript), reducing deployment time by 90%.",
        "Configured WireGuard VPN for 7 remote sites and integrated infrastructure via Nomad, improving scalability by 30%.",
        "Set up logging/monitoring (CloudWatch, Prometheus, Grafana) for 50+ metrics.",
        "Developed a tool to migrate 700GB+ of client database data, reducing transfer time by 40%.",
        "Implemented PostgreSQL autosuspend feature, reducing resource consumption by 30%.",
        "Created and maintained CI/CD pipelines (GitHub Actions, SAM Deploy in AWS and Vercel), improving deployment frequency by 50%.",
        "Led data migration from PostgreSQL to Supabase with 99.9% data consistency and minimal downtime.",
        "Automated unit tests, increasing coverage to 85% and reducing manual testing by 40%.",
        "Maintained 99.98% system uptime and handled DevTools management.",
        "Improved incident response time by 25% through proactive issue resolution and post-incident documentation."
      ]
    },
    {
      company: "The Quantic Factory",
      position: "DataOps and Site Reliability Engineer",
      period: "2021 - 2022",
      achievements: [
        "Developed and optimized ETL data pipelines (Go, BigQuery, Bash, MySQL, APIs).",
        "Increased data processing efficiency by 40% and reduced pipeline execution time by 30%.",
        "Reduced logging/monitoring costs by 80% (Graylog, Prometheus, Grafana, Alertmanager, Slack, Fluentd).",
        "Migrated a system to an event-driven architecture (Google Pub/Sub, Bash, Cloud Run, Go).",
        "Designed and implemented a job scheduler for HashiCorp Nomad (Go), improving resource utilization by 35%.",
        "Authored documentation for 8 applications, reducing support inquiries by 25%."
      ]
    },
    {
      company: "Inoteqia",
      position: "Software Engineering Intern",
      period: "2020",
      achievements: [
        "Designed and coded a monitoring dashboard for an embedded AI system (Dash Plotly).",
        "Integrated real-time insights and anomaly detection (LSTM autoEncoder, random forest classifier on Tensorflow).",
        "Containerized and deployed the dashboard using Docker and Kubernetes."
      ]
    },
    {
      company: "dB.Sense",
      position: "Data Visualization Intern",
      period: "2019",
      achievements: [
        "Designed a data visualization dashboard (Python, Pandas, Matplotlib, Seaborn, OpenCV) for sentiment analysis model results.",
        "Provided documentation and training for the dashboard."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <h2 className="section-heading">Where I've Worked</h2>
        
        <div className="flex flex-col md:flex-row mt-8 gap-8">
          {/* Company Tabs - Vertical for Desktop, Horizontal for Mobile */}
          <div className="md:w-1/4">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-6 md:mb-0 border-b md:border-b-0 md:border-l border-tech-slate/30">
              {experiences.map((exp, index) => (
                <button 
                  key={exp.company}
                  className={cn(
                    "px-4 py-3 text-left min-w-[120px] md:w-full transition-all",
                    "focus:outline-none hover:bg-tech-light-navy/50 hover:text-tech-teal",
                    activeTab === index 
                      ? "border-b-2 md:border-b-0 md:border-l-2 border-tech-teal text-tech-teal bg-tech-light-navy/30" 
                      : "border-b-2 md:border-b-0 md:border-l-2 border-transparent"
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Content */}
          <div className="md:w-3/4">
            <div className="animate-fade-in">
              <h3 className="text-xl md:text-2xl font-medium mb-2">
                <span className="text-tech-lightest-slate">{experiences[activeTab].position}</span>
                <span className="text-tech-teal"> @ {experiences[activeTab].company}</span>
              </h3>
              
              <p className="text-tech-light-slate mb-4">{experiences[activeTab].period}</p>
              
              <ul className="space-y-4">
                {experiences[activeTab].achievements.map((achievement, i) => (
                  <li key={i} className="flex">
                    <span className="text-tech-teal mr-2 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
