import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react'; // Assuming you are using lucide-react icons

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/vijaylaxmi300704"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Vijaylaxmi-30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:vijaylaxmi.codes@gmail.com"
            className="hover:text-teal-700 transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Vijay Laxmi. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
