import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  // Data sourced from your resume
  const projects = [
    {
      title: "GoSafe - Safe Routes App",
      description: "A Flutter app for safer navigation using real-time crime data and alerts from Firebase, with an admin panel for secure report updates.",
      tech: ["Flutter", "Firebase", "OSRM API", "React"],
      liveLink: null, // Add live link when available
      githubLink: "https://github.com/Vijaylaxmi-30/GoSafe-App" // Add specific repo link
    },
    {
      title: "ASCVD Risk Calculator",
      description: "A health website that assesses cardiovascular risk using user health metrics and provides a personalized dashboard for goal tracking.",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30"
    },
    {
      title: "Clash - Competitive Website",
      description: "Developed the Leaderboard Page frontend for a competitive event website, showcasing real-time user rankings and scores.",
      tech: ["React.js", "CSS", "JavaScript"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30/Clash_Frontend_Rd1"
    },
    {
      title: "PCSB Xenia - Contact Page",
      description: "Developed a responsive 'Contact Us' page for the PCSB Xenia event to improve user interaction and accessibility.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      liveLink: null,
      githubLink: "https://github.com/Vijaylaxmi-30"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-green-900/50 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300">
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