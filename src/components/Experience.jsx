import React from 'react';

const experiences = [
  {
    title: "AI/ML Intern",
    company: "AICTE Samarth Internship",
    organization: "NITTTR Bhopal",
    duration: "Recent",
    type: "Internship",
    description: "Developed an AI/ML-based project focused on house price prediction using the Melbourne Housing Dataset. Gained hands-on experience in AI/ML technologies, data preprocessing, model training, and evaluation.",
    skills: ["Python", "Machine Learning", "Data Preprocessing", "Model Training", "Data Analysis"],
    icon: "🤖",
    gradient: "from-green-800 to-green-600"
  }
];

const activities = [
  {
    title: "Fandom and Electroquest Lead",
    organization: "Pulzion' 24",
    type: "Leadership",
    description: "Led the Fandom and Electroquest events for PICT's annual techfest, managing team coordination and event execution.",
    icon: "👑",
    gradient: "from-green-700 to-green-500"
  },
  {
    title: "FY Class Representative",
    organization: "Credenz",
    type: "Volunteer",
    description: "Served as First Year Class Representative, facilitating communication between students and faculty.",
    icon: "🎓",
    gradient: "from-green-600 to-green-400"
  },
  {
    title: "NSS Volunteer",
    organization: "National Service Scheme, PICT",
    type: "Community Service",
    description: "Actively participated in multiple community service activities and social welfare programs.",
    icon: "🌟",
    gradient: "from-green-500 to-green-300"
  }
];

const Experience = () => (
  <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-600/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My{' '}
          <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Building expertise through hands-on experience in AI/ML, leadership roles,
          and community engagement
        </p>
      </div>

      {/* Professional Experience */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Professional <span className="text-green-400">Experience</span>
        </h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transform hover:scale-[1.02] transition-all duration-500 shadow-xl hover:shadow-green-500/10 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-green-600 to-green-400 rounded-full border-4 border-gray-800 group-hover:scale-110 transition-transform duration-300"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <p className="text-lg text-green-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-gray-400">{exp.organization}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start lg:items-end space-y-2">
                  <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium border border-green-600/30">
                    {exp.type}
                  </span>
                  <span className="text-gray-400 text-sm">{exp.duration}</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {exp.description}
              </p>

              {exp.skills && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Activities */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Leadership & <span className="text-green-400">Activities</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-green-500/10 animate-fadeInUp`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${activity.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <span className="text-xl">{activity.icon}</span>
              </div>

              <div className="mb-3">
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-xs font-medium border border-green-600/30">
                  {activity.type}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                {activity.title}
              </h4>

              <p className="text-green-400 font-medium text-sm mb-3">
                {activity.organization}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Custom CSS for blob animation */}
    <style>{`
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  </section>
);

export default Experience;