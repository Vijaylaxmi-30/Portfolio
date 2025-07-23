import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react'; // Assuming you are using lucide-react icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/vijaylaxmi300704"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Vijaylaxmi-30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:vijaylaxmi.codes@gmail.com"
            className="hover:text-green-400 transition-colors duration-300"
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
