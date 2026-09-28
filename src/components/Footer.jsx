import { FiLinkedin, FiGithub, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="text-center sm:text-left">
            <a href="#home" className="text-xl font-bold tracking-tight text-zinc-100 hover:text-indigo-400 transition-colors">
              Vijay Laxmi<span className="text-indigo-400">.</span>
            </a>
            <p className="text-xs text-zinc-500 mt-1">
              Final-Year Computer Engineering • Pune Institute of Computer Technology (PICT)
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">
              &copy; {new Date().getFullYear()} Vijay Laxmi. All rights reserved.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/vijaylaxmi300704"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-zinc-500 hover:text-indigo-400 hover:border-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://github.com/Vijaylaxmi-30"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-zinc-500 hover:text-zinc-100 hover:border-slate-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="mailto:vijaylaxmi.codes@gmail.com"
              className="w-9 h-9 rounded-lg bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-zinc-500 hover:text-indigo-400 hover:border-indigo-400 transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-800/80 flex items-center justify-center text-indigo-400 hover:bg-indigo-400 hover:text-zinc-100 transition-colors"
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








