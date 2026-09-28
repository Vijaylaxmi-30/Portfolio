import { FiServer, FiLayers, FiCode, FiCpu, FiAward, FiBookOpen, FiStar, FiUsers } from 'react-icons/fi';

const engineeringPillars = [
  {
    title: "Backend & System Protocols",
    description: "Architecting reliable REST APIs and JSON-RPC services with Model Context Protocol (MCP) standards, schema validation, and stateless authentication.",
    icon: <FiServer className="w-6 h-6 text-emerald-500" />,
    tag: "Node.js • Express • MCP • REST"
  },
  {
    title: "Full-Stack Web Development",
    description: "Developing scalable web applications with React 18, TypeScript, and modern component systems, backed by optimized MongoDB and Firestore schemas.",
    icon: <FiLayers className="w-6 h-6 text-emerald-500" />,
    tag: "TypeScript • React • MongoDB • Tailwind"
  },
  {
    title: "Algorithmic Foundations & C++",
    description: "Solid theoretical and practical grasp of Data Structures, Algorithms, Object-Oriented Design, Operating Systems, and Database Management Systems.",
    icon: <FiCode className="w-6 h-6 text-emerald-500" />,
    tag: "C++ • Java • DSA • DBMS • OS"
  },
  {
    title: "Applied AI & RAG Tooling",
    description: "Designing Retrieval-Augmented Generation (RAG) pipelines with LangChain and ChromaDB, alongside multimodal vision processing via Google Gemini.",
    icon: <FiCpu className="w-6 h-6 text-emerald-500" />,
    tag: "LangChain • ChromaDB • Gemini AI • Python"
  }
];

const highlights = [
  {
    title: "Hackathon Runner-Up",
    description: "Awarded 2nd place at Sinhgad College Hackathon for architecting VitalSync, a full-stack health platform.",
    icon: <FiAward className="w-6 h-6 text-emerald-600" />,
    badge: "Sinhgad College"
  },
  {
    title: "Academic Excellence",
    description: "Maintaining a cumulative 8.96/10.0 GPA across rigorous Computer Engineering coursework at PICT.",
    icon: <FiBookOpen className="w-6 h-6 text-emerald-500" />,
    badge: "8.96 / 10.0 GPA"
  },
  {
    title: "PMSSS Scholarship Recipient",
    description: "Recipient of the Prime Minister's Special Scholarship Scheme for meritorious higher education.",
    icon: <FiStar className="w-6 h-6 text-emerald-500" />,
    badge: "Govt. of India"
  },
  {
    title: "Campus & Tech Leadership",
    description: "Technical Team Member at CSI (Computer Society of India) PICT and Event Lead for Pulzion'24.",
    icon: <FiUsers className="w-6 h-6 text-cyan-600" />,
    badge: "CSI & Pulzion"
  }
];

const About = () => {
  return (
    <section className="py-20 bg-zinc-900/40 backdrop-blur-md relative overflow-hidden border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/60">
            Background & Engineering Focus
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 mt-4 mb-4 tracking-tight">
            About <span className="text-emerald-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          
          <div className="max-w-3xl mx-auto space-y-4 text-zinc-500 text-base sm:text-lg leading-relaxed">
            <p>
              I am a final-year <strong>Computer Engineering</strong> student at <strong>Pune Institute of Computer Technology (PICT)</strong> preparing for software engineering roles. My focus centers on building reliable software systems: from robust backend services and protocol handlers to responsive, production-ready web applications.
            </p>
            <p>
              Having worked on enterprise API and Model Context Protocol (MCP) validation during my internship at <strong>Cequence Security</strong>, as well as hands-on predictive modeling at <strong>NITTTR Bhopal</strong>, I combine deep theoretical CS foundations (DSA, OOP, DBMS, OS) with clean code practices.
            </p>
          </div>
        </div>

        {/* Engineering Competency Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-zinc-100 text-center mb-10 tracking-tight">
            Core Engineering <span className="text-emerald-500">Competencies</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {engineeringPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 bg-[#0a0a0a] rounded-xl border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/90 hover:border-emerald-500 hover:hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-900 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-100 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="pt-3 border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <span className="font-mono text-xs font-medium text-emerald-500 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-900">
                    {pillar.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Honors & Highlights */}
        <div>
          <h3 className="text-2xl font-bold text-zinc-100 text-center mb-10 tracking-tight">
            Key <span className="text-emerald-500">Highlights</span> & Recognition
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 bg-[#0a0a0a] rounded-xl border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/90 hover:border-emerald-500 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-zinc-900/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-900/40 backdrop-blur-md px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-zinc-100 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;








