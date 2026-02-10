import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Data sourced from your resume
  const projects = [
    {
      title: "Wellness Tracker — Health Monitoring Platform",
      description: "Built a full-stack app to track daily health metrics, habits, and activities with JWT authentication, personalized dashboards, and real-time habit analytics.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      liveLink: null, // Add live link when available
      githubLink: "https://github.com/Vijaylaxmi-30"
    },
    {
      title: "Modified Early Warning System (MEWS)",
      description: "Developed ML models to predict in-hospital mortality and ICU transfers from early vitals using time-series features and model comparisons.",
      tech: ["Python", "XGBoost", "SVM", "Ridge Regression", "Pandas"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30"
    },
    {
      title: "GoSafe — Safe Routes Recommendation App",
      description: "A safety-aware routing app using OSRM, OSM, and Nominatim APIs, with Firebase Firestore for live crime data updates and admin tools.",
      tech: ["Flutter", "Firebase", "OSRM API", "React"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30/GoSafe-App"
    },
    {
      title: "ASCVD Risk Calculator",
      description: "A health website that assesses cardiovascular risk using user health metrics and provides a personalized dashboard for goal tracking.",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30"
    },
    {
      title: "Clash — Competitive Website",
      description: "Developed the leaderboard page frontend for a competitive event website, showcasing real-time user rankings and scores.",
      tech: ["React.js", "CSS", "JavaScript"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30/Clash_Frontend_Rd1"
    },
    {
      title: "PCSB Xenia — Contact Page",
      description: "Developed a responsive Contact Us page for the PCSB Xenia event to improve user interaction and accessibility.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            My <span className="text-teal-700">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl overflow-hidden transition-shadow duration-200 shadow-sm hover:shadow-teal-100"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-200">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full border border-teal-100">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors duration-200">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-teal-700 transition-colors duration-200">
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;