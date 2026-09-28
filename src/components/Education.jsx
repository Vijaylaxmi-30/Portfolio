import { FiBookOpen, FiAward, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const educationData = [
  {
    institution: "Pune Institute of Computer Technology (PICT), Pune",
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    duration: "Aug 2023 – June 2027",
    score: "Cumulative GPA: 8.96 / 10.0",
    honors: "Prime Minister's Special Scholarship Scheme (PMSSS) Recipient",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++/Java)",
      "Database Management Systems (DBMS)",
      "Operating Systems & System Programming",
      "Computer Networks & Protocols",
      "Software Engineering & Agile Methodologies"
    ]
  },
  {
    institution: "Govt Girls Hr. Sec. School Reasi, JKBOSE",
    degree: "Higher Secondary Certificate (12th Grade) — PCMB",
    duration: "Graduated 2022",
    score: "Percentage: 95.4%",
    honors: "Distinction in Physics, Chemistry, Mathematics, Biology",
    coursework: [
      "Advanced Mathematics & Calculus",
      "Computer Applications",
      "Physics & Mechanics",
      "Chemistry"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-zinc-900/40 backdrop-blur-md relative overflow-hidden border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/60">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 mt-4 mb-4 tracking-tight">
            Academic <span className="text-emerald-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-500 text-base sm:text-lg max-w-2xl mx-auto">
            Formal Computer Engineering coursework at one of India's premier engineering institutes.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.institution}
              className="bg-[#0a0a0a] p-7 sm:p-8 rounded-xl border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-emerald-500 hover:hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4 pb-4 border-b border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                    {edu.institution}
                  </h3>
                  <p className="text-emerald-500 font-semibold text-base mt-1">
                    {edu.degree}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-zinc-500 bg-zinc-900/40 backdrop-blur-md px-3 py-1 rounded">
                    <FiCalendar className="w-3.5 h-3.5 text-emerald-500" />
                    {edu.duration}
                  </span>
                  <div className="mt-1.5">
                    <span className="inline-block font-mono font-bold text-xs text-emerald-500 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800/70">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>

              {edu.honors && (
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-zinc-900/40 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80">
                  <FiAward className="w-4 h-4 text-emerald-500" />
                  <span>{edu.honors}</span>
                </div>
              )}

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                  Key Academic Coursework
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-500">
                      <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;









