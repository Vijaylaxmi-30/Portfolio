import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#faf6f0] border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="text-center sm:text-left">
            <a href="#home" className="text-xl font-bold tracking-tight text-stone-800 hover:text-blue-600 transition-colors">
              Vijay Laxmi<span className="text-blue-600">.</span>
            </a>
            <p className="text-xs text-stone-500 mt-1">
              Final-Year Computer Engineering • Pune Institute of Computer Technology (PICT)
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              &copy; {new Date().getFullYear()} Vijay Laxmi. All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vijaylaxmi300704"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/70 backdrop-blur-md border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-stone-500 hover:text-blue-600 hover:border-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://github.com/Vijaylaxmi-30"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/70 backdrop-blur-md border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-stone-500 hover:text-stone-800 hover:border-slate-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="mailto:vijaylaxmi.codes@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/70 backdrop-blur-md border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-stone-500 hover:text-blue-600 hover:border-blue-600 transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-stone-800 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={18} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;







