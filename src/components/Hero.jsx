import { FiFileText, FiArrowRight, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import profileImage from '../assets/vijaylaxmi.jpeg';

const Hero = () => {
  const technicalPills = [
    'Software Engineering',
    'Full-Stack Systems',
    'Backend & REST APIs',
    'C++ & Java',
    'Model Context Protocol (MCP)',
    'Data Structures & Algorithms'
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] bg-[#faf6f0] flex items-center pt-8 pb-16 overflow-hidden">
      {/* Subtle Background Glow Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-white/70 backdrop-blur-md/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Technical Narrative & Positioning */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-semibold hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Final-Year CS @ PICT • Actively Seeking SDE Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-800 tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-blue-600">Vijay Laxmi</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-stone-600">
                Software Engineer specializing in <span className="text-blue-600 font-semibold">backend architectures</span>, <span className="text-blue-600 font-semibold">full-stack systems</span>, and <span className="text-blue-600 font-semibold">AI-integrated tooling</span>.
              </p>
            </div>

            {/* Technical Capability Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {technicalPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-md bg-white/70 backdrop-blur-md/80 text-stone-600 font-mono text-xs font-medium border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/90"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Pursuing B.E. in Computer Engineering at <strong>Pune Institute of Computer Technology (PICT)</strong> with an <strong>8.96 GPA</strong>. Experienced in building production-ready TypeScript/MERN applications, Model Context Protocol (MCP) servers, and scalable RESTful services.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-stone-800 font-semibold text-sm hover:bg-blue-600 hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 hover:shadow-blue-100 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              <a
                href="./VIJAY_LAXMI_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-stone-200/50 bg-[#faf6f0] text-stone-600 font-semibold text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/40 hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 transition-all duration-200"
              >
                <FiFileText className="w-4 h-4 text-blue-600" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Direct Channels */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-4 text-stone-500">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">Connect:</span>
              <a
                href="https://github.com/Vijaylaxmi-30"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/70 backdrop-blur-md border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-stone-500 hover:text-stone-800 hover:border-slate-400 hover:bg-[#faf6f0] transition-all hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500"
                aria-label="GitHub Profile"
              >
                <FiGithub size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/vijaylaxmi300704"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/70 backdrop-blur-md border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-stone-500 hover:text-blue-600 hover:border-blue-600 hover:bg-[#faf6f0] transition-all hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={19} />
              </a>
              <a
                href="mailto:vijaylaxmi.codes@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/70 backdrop-blur-md border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-stone-500 hover:text-blue-600 hover:border-blue-600 hover:bg-[#faf6f0] transition-all hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500"
                aria-label="Send Email"
              >
                <FiMail size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Avatar Card with Technical Metadata */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Decorative accent frames */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-blue-600/20 via-emerald-400/10 to-transparent blur-lg opacity-70"></div>
              
              <div className="relative bg-[#faf6f0] p-3 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 max-w-sm">
                <div className="relative aspect-square w-72 sm:w-80 overflow-hidden rounded-xl bg-white/70 backdrop-blur-md">
                  <img
                    src={profileImage}
                    alt="Vijay Laxmi"
                    className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Micro Stats Card under Avatar */}
                <div className="mt-3 p-3.5 bg-white/70 backdrop-blur-md rounded-lg border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-semibold text-stone-800">Pune Inst. of Computer Tech</span>
                    <span className="text-stone-500">BE Computer Engineering</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      8.96 GPA
                    </span>
                    <span className="block text-stone-500 text-[10px] mt-0.5">Class of 2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;







