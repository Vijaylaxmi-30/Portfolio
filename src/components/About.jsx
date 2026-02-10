import React from 'react';



const qualities = [
  {
    title: "Quick Learner",
    description: "Rapidly adapts to new technologies and frameworks, constantly expanding knowledge base",
    icon: "🚀",
    gradient: "from-teal-600 to-emerald-500"
  },
  {
    title: "Collaborative Team Player",
    description: "Thrives in team environments, contributing effectively to group projects and initiatives",
    icon: "🤝",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Creative Thinker",
    description: "Approaches problems with innovative solutions and out-of-the-box thinking",
    icon: "💡",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "User-Centric Focus",
    description: "Prioritizes user experience and creates solutions that truly serve end-users",
    icon: "👥",
    gradient: "from-cyan-500 to-teal-500"
  }
];

const achievements = [
  {
    title: "Second Runner-Up",
    description: "Hackathon organized by Sinhgad College of Engineering",
    icon: "🏆",
    gradient: "from-teal-600 to-emerald-500"
  },
  {
    title: "Academic Excellence",
    description: "Maintaining 8.8/10 GPA in Computer Engineering",
    icon: "🎓",
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    title: "Leadership Role",
    description: "Fandom and Electroquest Lead for Pulzion' 24",
    icon: "👑",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Community Service",
    description: "Active volunteer in NSS and multiple college initiatives",
    icon: "🌟",
    gradient: "from-cyan-500 to-teal-500"
  }
];

const About = () => (
  <section className="py-20 bg-slate-50 relative overflow-hidden">

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          About <span className="text-teal-700">Me</span>
        </h2>
        <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full mb-8"></div>
        {/* Summary */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            I'm a passionate Computer Engineering student with a deep love for creating 
            <span className="text-teal-700 font-semibold"> real-world solutions</span> that make a difference. 
            My journey in tech is driven by curiosity and the desire to build applications that solve actual problems.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether it's developing full-stack applications, exploring machine learning algorithms, or collaborating 
            on innovative projects, I bring <span className="text-teal-700 font-semibold">dedication</span>, 
            <span className="text-teal-700 font-semibold"> creativity</span>, and a 
            <span className="text-teal-700 font-semibold"> growth mindset</span> to everything I do.
          </p>
        </div>
      </div>

      {/* Qualities Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
          My <span className="text-teal-700">Qualities</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {qualities.map((quality, index) => (
            <div
              key={quality.title}
              className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 transition-colors duration-200 shadow-sm"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${quality.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{quality.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-200">
                {quality.title}
              </h4>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
          My <span className="text-teal-700">Achievements</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-teal-300 transition-colors duration-200 shadow-sm"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{achievement.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors duration-200">
                {achievement.title}
              </h4>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;