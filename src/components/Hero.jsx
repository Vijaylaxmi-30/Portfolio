import React from 'react';
import { Download, Send, Linkedin, Github, Mail } from 'lucide-react';
import profileImage from '../assets/vijaylaxmi.jpeg';


const Hero = () => {
  const badges = [
    { text: 'Problem Solver' },
    { text: 'Full Stack Developer' },
    { text: 'ML Enthusiast' }
  ];

  return (
    <>
      <section className="min-h-screen bg-white relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-slate-50"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                  Vijay Laxmi
                </h1>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {badges.map((badge, index) => (
                    <div
                      key={badge.text}
                      className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm border border-slate-200"
                    >
                      {badge.text}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Computer Engineering student passionate about building real-world solutions through the <span className="text-teal-600 font-semibold">MERN stack</span> and <span className="text-teal-600 font-semibold">AI/ML</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <a
                href="/VIJAY_LAXMI_RESUME.pdf"
                download
                className="px-8 py-3 bg-teal-600 text-white rounded-md font-semibold shadow-sm hover:bg-teal-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                <Download className="w-5 h-5" />
                Download Resume
                </a>

                <a href="mailto:vijaylaxmi.codes@gmail.com" className="px-8 py-3 border border-teal-600 text-teal-600 rounded-md font-semibold hover:bg-teal-50 transition-colors duration-300 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Contact Me
                </a>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start pt-4">
                <a href="https://www.linkedin.com/in/vijaylaxmi300704" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors duration-300 shadow-sm">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/Vijaylaxmi-30" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors duration-300 shadow-sm">
                  <Github size={24} />
                </a>
                <a href="mailto:vijaylaxmi.codes@gmail.com" className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-teal-600 transition-colors duration-300 shadow-sm">
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:order-first">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border border-teal-200 shadow-lg"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <img
                    src={profileImage}
                    alt="Vijay Laxmi"
                    className="w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
