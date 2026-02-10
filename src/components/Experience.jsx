import React from 'react';

const experiences = [
  {
    title: "AI/ML Intern",
    company: "AICTE Samarthan Program",
    organization: "NITTTR Bhopal",
    duration: "May 2025 – Jun 2025",
    type: "Internship",
    description: "Built regression and LSTM-based models for house price prediction, applying preprocessing and feature engineering on real datasets and delivering an end-to-end ML pipeline with evaluation results.",
    skills: ["Python", "Machine Learning", "LSTM", "Feature Engineering", "Model Evaluation"],
    icon: "🤖",
    gradient: "from-teal-600 to-emerald-500"
  },
  {
    title: "API Testing Intern",
    company: "Sequence Technologies",
    organization: "API & MCP Testing",
    duration: "Sep 2025 – Oct 2025",
    type: "Internship",
    description: "Performed integrated API and MCP testing using Cursor, Postman, and Swagger; validated APIs across GCP Billing, Gmail, Zendesk, and Workday integrations and reported 15+ bugs.",
    skills: ["Postman", "Swagger", "API Testing", "Bug Reporting", "QA"],
    icon: "🧪",
    gradient: "from-teal-500 to-cyan-500"
  }
];

const activities = [
  {
    title: "Fandom and Electroquest Lead",
    organization: "Pulzion' 24",
    type: "Leadership",
    description: "Led the Fandom and Electroquest events for PICT's annual techfest, managing team coordination and event execution.",
    icon: "👑",
    gradient: "from-teal-600 to-emerald-500"
  },
  {
    title: "FY Class Representative",
    organization: "Credenz",
    type: "Volunteer",
    description: "Served as First Year Class Representative, facilitating communication between students and faculty.",
    icon: "🎓",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Cultural Head — NSS 7-Day Camp",
    organization: "NSS, PICT",
    type: "Leadership",
    description: "Led cultural activities for the 7-day NSS camp in 2026, coordinating events and team participation.",
    icon: "🎭",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Publicity Head",
    organization: "NSS, PICT",
    type: "Leadership",
    description: "Led publicity initiatives for NSS events and outreach programs, coordinating communications and campaign planning.",
    icon: "📣",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    title: "Core Team Member",
    organization: "NSS, PICT",
    type: "Leadership",
    description: "Contributed to planning and execution of NSS events as part of the core team.",
    icon: "🧩",
    gradient: "from-teal-500 to-emerald-500"
  }
];

const Experience = () => (
  <section className="py-20 bg-slate-50 relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 right-10 w-32 h-32 bg-teal-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-cyan-100/50 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          My <span className="text-teal-700">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Building expertise through hands-on experience in AI/ML, leadership roles,
          and community engagement
        </p>
      </div>

      {/* Professional Experience */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Professional <span className="text-teal-700">Experience</span>
        </h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 hover:border-teal-300 transition-colors duration-200 shadow-sm"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-8 w-8 h-8 bg-teal-600 rounded-full border-4 border-slate-50"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors duration-200">
                      {exp.title}
                    </h4>
                    <p className="text-lg text-teal-700 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-slate-500">{exp.organization}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start lg:items-end space-y-2">
                  <span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium border border-teal-100">
                    {exp.type}
                  </span>
                  <span className="text-slate-500 text-sm">{exp.duration}</span>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-200">
                {exp.description}
              </p>

              {exp.skills && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-teal-600 hover:text-white transition-colors duration-200"
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
        <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Leadership & <span className="text-teal-700">Activities</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:border-teal-300 transition-colors duration-200 shadow-sm"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${activity.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <span className="text-xl">{activity.icon}</span>
              </div>

              <div className="mb-3">
                <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium border border-teal-100">
                  {activity.type}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors duration-200">
                {activity.title}
              </h4>

              <p className="text-teal-700 font-medium text-sm mb-3">
                {activity.organization}
              </p>

              <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;