import { 
  FiCode, 
  FiServer, 
  FiLayout, 
  FiDatabase, 
  FiCpu, 
  FiTerminal, 
  FiBookOpen 
} from 'react-icons/fi';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FiCode className="w-5 h-5 text-blue-600" />,
    skills: [
      { name: "C++", level: "Proficient (STL, OOP)" },
      { name: "Java", level: "Core Java, OOP" },
      { name: "TypeScript", level: "Strict Typing, Interfaces" },
      { name: "JavaScript", level: "ES6+, Async/Await" },
      { name: "Python", level: "Data Science, Scripting" },
      { name: "SQL", level: "Queries, Normalization" }
    ]
  },
  {
    title: "Backend & System Protocols",
    icon: <FiServer className="w-5 h-5 text-blue-600" />,
    skills: [
      { name: "Node.js", level: "Event-driven runtime" },
      { name: "Express.js", level: "REST API Architecture" },
      { name: "Model Context Protocol (MCP)", level: "JSON-RPC Stdio Tools" },
      { name: "RESTful APIs", level: "CRUD, Authentication" },
      { name: "JWT & Bcrypt", level: "Stateless Auth, Hashing" }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: <FiLayout className="w-5 h-5 text-blue-600" />,
    skills: [
      { name: "React.js (18/19)", level: "Hooks, Context, State" },
      { name: "Vite", level: "Bundling & Build Pipelines" },
      { name: "Tailwind CSS", level: "Responsive Utility Design" },
      { name: "TanStack Query", level: "Caching & Invalidation" },
      { name: "HTML5 & CSS3", level: "Semantic, Accessible" }
    ]
  },
  {
    title: "Databases & Vector Stores",
    icon: <FiDatabase className="w-5 h-5 text-blue-600" />,
    skills: [
      { name: "MongoDB", level: "Aggregation, Mongoose" },
      { name: "ChromaDB", level: "Vector Embeddings & RAG" },
      { name: "MySQL", level: "Relational Schemas, Joins" },
      { name: "Firebase Firestore", level: "Real-time Sync & NoSQL" }
    ]
  },
  {
    title: "AI / ML & Intelligent Tooling",
    icon: <FiCpu className="w-5 h-5 text-blue-600" />,
    skills: [
      { name: "LangChain (LCEL)", level: "Pipelines, Prompt Templates" },
      { name: "Google Gemini 1.5 API", level: "Multimodal Vision Inference" },
      { name: "Scikit-Learn & XGBoost", level: "Classification, Regression" },
      { name: "Pandas & NumPy", level: "Time-Series Data Engineering" }
    ]
  },
  {
    title: "Developer Tools & Testing",
    icon: <FiTerminal className="w-5 h-5 text-blue-600" />,
    skills: [
      { name: "Git & GitHub", level: "Version Control, PR Workflows" },
      { name: "Postman & Swagger", level: "API Testing & Docs" },
      { name: "Pytest", level: "Unit & Integration Testing" },
      { name: "Cursor & VS Code", level: "AI-Augmented Development" },
      { name: "Vercel", level: "Frontend CI/CD & Deployments" }
    ]
  },
  {
    title: "Core Computer Science Fundamentals",
    icon: <FiBookOpen className="w-5 h-5 text-blue-600" />,
    skills: [
      { name: "Data Structures & Algorithms", level: "Arrays, Trees, Graphs, DP" },
      { name: "Object-Oriented Programming", level: "Polymorphism, Inheritance, SOLID" },
      { name: "Database Management Systems", level: "ACID, Indexing, Transactions" },
      { name: "Operating Systems", level: "Concurrency, Threads, Memory" },
      { name: "Computer Networks", level: "TCP/IP, HTTP/HTTPS, DNS" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#faf6f0] relative overflow-hidden border-t border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-800 mt-4 mb-4 tracking-tight">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-stone-500 text-base sm:text-lg max-w-2xl mx-auto">
            Grouped by architectural domain, verified by project codebases and enterprise internships.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/70 backdrop-blur-md/70 p-6 rounded-xl border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-600 hover:bg-[#faf6f0] hover:hover:border-white/20 hover:bg-white/60 shadow-none hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-500 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-stone-800 text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-xs py-1 px-2.5 rounded bg-[#faf6f0] border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/60"
                    >
                      <span className="font-bold text-stone-700">
                        {skill.name}
                      </span>
                      <span className="font-mono text-stone-500 text-[11px]">
                        {skill.level}
                      </span>
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

export default Skills;







