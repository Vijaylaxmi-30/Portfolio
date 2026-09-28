import { useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiCopy, FiCheck, FiFileText } from 'react-icons/fi';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "vijaylaxmi.codes@gmail.com";
  const phone = "+91-9149441304";
  const linkedin = "https://www.linkedin.com/in/vijaylaxmi300704";
  const github = "https://github.com/Vijaylaxmi-30";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#faf6f0] relative overflow-hidden border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Recruiter & Engineering Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-800 mt-4 mb-4 tracking-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-500 text-base sm:text-lg max-w-2xl mx-auto">
            Actively interviewing for full-time Software Engineer / SDE roles. Feel free to reach out directly via email or LinkedIn.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Direct Communication Card */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                Direct Communication
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Direct contact channels for campus recruiters, hiring managers, and engineering teams.
              </p>

              <div className="space-y-4">
                {/* Email with 1-click copy */}
                <div className="p-3.5 bg-[#faf6f0] rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <FiMail size={18} />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Email Address</span>
                      <a href={`mailto:${email}`} className="text-sm font-semibold text-stone-800 hover:text-blue-600 transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-stone-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copied ? <FiCheck className="w-4 h-4 text-emerald-600" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 bg-[#faf6f0] rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Phone</span>
                    <a href={`tel:${phone}`} className="text-sm font-semibold text-stone-800 hover:text-blue-600 transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-3.5 bg-[#faf6f0] rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-stone-800">
                      Pune, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/70">
              <a
                href="./VIJAY_LAXMI_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 text-stone-800 font-semibold text-sm hover:bg-blue-600 flex items-center justify-center gap-2 hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 transition-colors"
              >
                <FiFileText className="w-4 h-4" />
                <span>Open Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Profiles Card */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-stone-800 mb-2">
                Profiles & Repositories
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Inspect genuine Git commit histories, repository architectures, and professional career milestones.
              </p>

              <div className="space-y-4">
                {/* LinkedIn */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#faf6f0] rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80 flex items-center justify-between hover:border-blue-600 hover:hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-stone-800 transition-colors">
                      <FiLinkedin size={20} />
                    </div>
                    <div>
                      <span className="block font-bold text-stone-800 text-sm">LinkedIn Profile</span>
                      <span className="text-xs text-stone-500 font-mono">linkedin.com/in/vijaylaxmi300704</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 group-hover:underline">View ↗</span>
                </a>

                {/* GitHub */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#faf6f0] rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80 flex items-center justify-between hover:border-slate-400 hover:hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/70 backdrop-blur-md border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-stone-700 group-hover:bg-white group-hover:text-stone-800 transition-colors">
                      <FiGithub size={20} />
                    </div>
                    <div>
                      <span className="block font-bold text-stone-800 text-sm">GitHub Workspace</span>
                      <span className="text-xs text-stone-500 font-mono">github.com/Vijaylaxmi-30</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-stone-700 group-hover:underline">View ↗</span>
                </a>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/70 text-xs text-stone-500">
              ⚡ Open to relocation and immediate technical discussions for 2027 SDE campus hiring.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;







