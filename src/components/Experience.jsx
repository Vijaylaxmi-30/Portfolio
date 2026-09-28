import { FiBriefcase, FiAward, FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    title: "API Testing Intern",
    company: "Cequence Security",
    location: "Pune, India",
    duration: "Sep 2025 – Oct 2025",
    type: "Internship",
    bullets: [
      "Executed integrated API and Model Context Protocol (MCP) verification suites using Cursor, Postman, and Swagger across enterprise cloud services.",
      "Validated end-to-end API workflows and connector reliability for GCP Billing, Gmail, Zendesk, and Workday enterprise integrations.",
      "Identified, documented, and verified 15+ critical bug tickets in active collaboration with engineering teams, significantly bolstering test coverage."
    ],
    skills: ["Model Context Protocol (MCP)", "Postman", "Swagger", "API Validation", "GCP Billing", "Cursor"]
  },
  {
    title: "AI/ML Intern",
    company: "AICTE Samarthan Program — NITTTR Bhopal",
    location: "Remote / Bhopal, India",
    duration: "May 2025 – Jun 2025",
    type: "Internship",
    bullets: [
      "Built multivariate regression and Long Short-Term Memory (LSTM) time-series forecasting models for price prediction on complex real-world datasets.",
      "Engineered automated feature selection, correlation analysis, and data normalization pipelines using Pandas and NumPy.",
      "Evaluated model convergence, loss curves, and predictive accuracy against baseline estimators using RMSE and MAE metrics."
    ],
    skills: ["Python", "LSTM", "Scikit-Learn", "Feature Engineering", "Data Modeling", "Pandas"]
  }
];

const leadershipRoles = [
  {
    role: "Technical Team Member",
    organization: "Computer Society of India (CSI), PICT",
    duration: "2024 – Present",
    description: "Contributed to student technical workshops, hackathons, and technical event infrastructure for computer engineering students."
  },
  {
    role: "Lead Event Coordinator (Fandom)",
    organization: "Pulzion'24 — PICT Annual Techfest",
    duration: "2024",
    description: "Spearheaded planning, participant management, and technical logistics for Pulzion'24 flagship competitive events."
  },
  {
    role: "Publicity Head & Cultural Coordinator",
    organization: "National Service Scheme (NSS), PICT",
    duration: "2024 – 2026",
    description: "Directed publicity outreach campaigns and cultural programming for university community service camps and outreach initiatives."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white/70 backdrop-blur-md relative overflow-hidden border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-800 mt-4 mb-4 tracking-tight">
            Work & <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-500 text-base sm:text-lg max-w-2xl mx-auto">
            Practical engineering experience across enterprise security API testing and machine learning pipelines.
          </p>
        </div>

        {/* Professional Experience Cards */}
        <div className="space-y-8 mb-20 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="bg-[#faf6f0] p-7 sm:p-8 rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-600 hover:hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5 pb-4 border-b border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200/60 mb-2">
                    <FiBriefcase className="w-3 h-3 text-blue-600" />
                    {exp.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-800">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-base">
                    {exp.company}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="inline-block font-mono text-xs font-semibold text-stone-500 bg-white/70 backdrop-blur-md px-3 py-1 rounded">
                    {exp.duration}
                  </span>
                  <span className="block text-stone-500 text-xs mt-1">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Action-Oriented Technical Bullets */}
              <ul className="space-y-2.5 mb-6 text-stone-500 text-sm leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <FiCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs font-medium text-stone-600 bg-white/70 backdrop-blur-md px-2.5 py-1 rounded border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Campus Roles */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-stone-800 tracking-tight">
              Technical & Campus <span className="text-blue-600">Leadership</span>
            </h3>
            <p className="text-stone-500 text-sm mt-1">
              Active involvement in departmental societies, annual techfests, and student communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadershipRoles.map((role) => (
              <div
                key={role.role}
                className="bg-[#faf6f0] p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-600 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                    <FiAward className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-stone-800 text-base mb-1">
                    {role.role}
                  </h4>
                  <p className="text-blue-600 text-xs font-semibold mb-3">
                    {role.organization}
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed mb-4">
                    {role.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="font-mono text-[11px] text-stone-500 font-medium">
                    {role.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;






