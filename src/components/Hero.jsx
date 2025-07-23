import React from 'react';
import { Download, Send, Linkedin, Github, Mail } from 'lucide-react';


const Hero = () => {
  const badges = [
    { text: 'Problem Solver', color: 'from-green-800 to-green-600' },
    { text: 'Full Stack Developer', color: 'from-green-700 to-green-500' },
    { text: 'ML Enthusiast', color: 'from-green-600 to-green-400' }
  ];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 relative overflow-hidden flex items-center">
        {/* New Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-green-900/30"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fadeInUp">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-200 bg-clip-text text-transparent">
                    Vijay Laxmi
                  </span>
                </h1>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {badges.map((badge, index) => (
                    <div
                      key={badge.text}
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} text-white font-medium text-sm shadow-lg`}
                      style={{ animation: `fadeInUp 0.5s ${0.3 + index * 0.1}s ease-out forwards`, opacity: 0 }}
                    >
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Computer Engineering student passionate about building real-world solutions through the <span className="text-green-400 font-semibold">MERN stack</span> and <span className="text-green-400 font-semibold">AI/ML</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a
                href="/Portfolio/VIJAY_LAXMI_RESUME.pdf"
                download
                className="shine-button px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
                </a>

                <a href="mailto:vijaylaxmi.codes@gmail.com" className="glow-button px-8 py-3 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Send className="w-5 h-5 group-hover:animate-pulse" />
                  Contact Me
                </a>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start pt-4">
                <a href="https://www.linkedin.com/in/vijaylaxmi300704" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Vijaylaxmi-30" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-gray-500/25">
                  <Github size={24} />
                </a>
                <a href="mailto:vijaylaxmi.codes@gmail.com" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:order-first">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-400 to-green-300 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <img
                    src="/Portfolio/vijaylaxmi.jpg"
                    alt="Vijay Laxmi"
                    className="w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Component-specific styles for new animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .area {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
        }
        .circles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        .circles li {
            position: absolute;
            display: block;
            list-style: none;
            width: 20px;
            height: 20px;
            background: rgba(52, 211, 153, 0.2);
            animation: animate-circles 25s linear infinite;
            bottom: -150px;
        }
        .circles li:nth-child(1) { left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
        .circles li:nth-child(2) { left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; }
        .circles li:nth-child(3) { left: 70%; width: 20px; height: 20px; animation-delay: 4s; }
        .circles li:nth-child(4) { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
        .circles li:nth-child(5) { left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
        .circles li:nth-child(6) { left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
        .circles li:nth-child(7) { left: 35%; width: 150px; height: 150px; animation-delay: 7s; }
        .circles li:nth-child(8) { left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; }
        .circles li:nth-child(9) { left: 20%; width: 15px; height: 15px; animation-delay: 2s; animation-duration: 35s; }
        .circles li:nth-child(10) { left: 85%; width: 150px; height: 150px; animation-delay: 0s; animation-duration: 11s; }

        @keyframes animate-circles {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; border-radius: 0; }
            100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; border-radius: 50%; }
        }

        .shine-button {
          position: relative;
          overflow: hidden;
        }
        .shine-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(45deg);
          transition: transform 0.6s ease;
          opacity: 0;
        }
        .shine-button:hover::after {
          transform: translateX(50%) rotate(45deg);
          opacity: 1;
          transition: transform 0.6s ease;
        }
        
        @keyframes pulse-border {
            0%, 100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); }
            50% { box-shadow: 0 0 0 4px rgba(52, 211, 153, 0); }
        }
        .glow-button {
            animation: pulse-border 2.5s infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;