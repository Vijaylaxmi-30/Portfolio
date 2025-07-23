import React from 'react';



const qualities = [
  {
    title: "Quick Learner",
    description: "Rapidly adapts to new technologies and frameworks, constantly expanding knowledge base",
    icon: "🚀",
    gradient: "from-green-800 to-green-600"
  },
  {
    title: "Collaborative Team Player",
    description: "Thrives in team environments, contributing effectively to group projects and initiatives",
    icon: "🤝",
    gradient: "from-green-700 to-green-500"
  },
  {
    title: "Creative Thinker",
    description: "Approaches problems with innovative solutions and out-of-the-box thinking",
    icon: "💡",
    gradient: "from-green-600 to-green-400"
  },
  {
    title: "User-Centric Focus",
    description: "Prioritizes user experience and creates solutions that truly serve end-users",
    icon: "👥",
    gradient: "from-green-500 to-green-300"
  }
];

const achievements = [
  {
    title: "Second Runner-Up",
    description: "Hackathon organized by Sinhgad College of Engineering",
    icon: "🏆",
    gradient: "from-green-800 to-green-600"
  },
  {
    title: "Academic Excellence",
    description: "Maintaining 8.8/10 GPA in Computer Engineering",
    icon: "🎓",
    gradient: "from-green-700 to-green-500"
  },
  {
    title: "Leadership Role",
    description: "Fandom and Electroquest Lead for Pulzion' 24",
    icon: "👑",
    gradient: "from-green-600 to-green-400"
  },
  {
    title: "Community Service",
    description: "Active volunteer in NSS and multiple college initiatives",
    icon: "🌟",
    gradient: "from-green-500 to-green-300"
  }
];

const About = () => (
  <section className="py-20 bg-gray-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-8"></div>
        {/* Summary */}
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            I'm a passionate Computer Engineering student with a deep love for creating 
            <span className="text-green-400 font-semibold"> real-world solutions</span> that make a difference. 
            My journey in tech is driven by curiosity and the desire to build applications that solve actual problems.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Whether it's developing full-stack applications, exploring machine learning algorithms, or collaborating 
            on innovative projects, I bring <span className="text-green-400 font-semibold">dedication</span>, 
            <span className="text-green-400 font-semibold"> creativity</span>, and a 
            <span className="text-green-400 font-semibold"> growth mindset</span> to everything I do.
          </p>
        </div>
      </div>

      {/* Qualities Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          My <span className="text-green-400">Qualities</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {qualities.map((quality, index) => (
            <div
              key={quality.title}
              className={`group p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-green-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-green-500/10 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${quality.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{quality.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                {quality.title}
              </h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          My <span className="text-green-400">Achievements</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`group p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-green-500/50 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-green-500/10 animate-fadeInUp`}
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{achievement.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                {achievement.title}
              </h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Custom CSS for blob animation */}
    <style>{`
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
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

export default About;