import { useState, useEffect } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiLayers, 
  FiCpu, 
  FiCheckCircle, 
  FiX, 
  FiAward, 
  FiCode,
  FiActivity
} from 'react-icons/fi';

const projectsData = [
  {
    id: "vitalsync",
    title: "VitalSync — AI-Powered Digital Health & Wellness Platform",
    tagline: "Full-stack health platform featuring multimodal AI meal analysis, automated macronutrient extraction, and habit analytics.",
    category: "Full-Stack & Multimodal AI",
    tech: ["TypeScript", "React 18", "Node.js", "Express.js", "MongoDB", "Google Gemini 1.5 Flash", "JWT", "Tailwind CSS", "Recharts"],
    githubLink: "https://github.com/Vijaylaxmi-30/personal-wellness-tracker",
    liveLink: "https://personal-wellness-tracker-chi.vercel.app/",
    badge: "Hackathon Runner-Up",
    featured: true,
    problem: "Tracking daily nutrition and fitness manually is cumbersome, leading to high drop-off rates and inaccurate calorie/macro estimations.",
    solution: "Engineered an intelligent tracking system where users simply upload a meal photo; the backend pipelines the image to Gemini 1.5 Flash to automatically detect ingredients, compute macronutrients, and update daily intake trends.",
    architecture: "Decoupled client-server architecture with React 18 / TypeScript frontend deployed on Vercel and Express.js REST API on Node.js. Uses Multer in-memory buffers for zero-disk-write AI image streaming, backed by MongoDB Mongoose schemas.",
    keyFeatures: [
      "Multimodal Vision Pipeline: In-memory image buffer streaming to Gemini 1.5 Flash returning structured JSON nutrition data (calories, protein, carbs, fat, confidence score).",
      "Stateless JWT Authentication: Bcrypt-hashed credentials with custom token verification middleware protecting private user records.",
      "Daily Stats & Streak Aggregation: Optimized MongoDB aggregation queries computing daily calorie quotas, activity burns, and habit streaks.",
      "Interactive Analytics: Responsive biometric data visualization utilizing Recharts and TanStack Query cache invalidation."
    ],
    technicalHighlights: "Implemented memory-only buffer processing via Multer to avoid file-system bottlenecks when forwarding high-resolution images to the Gemini API, maintaining sub-second inference roundtrips."
  },
  {
    id: "mcp-rag-server",
    title: "Document Q&A MCP Server with RAG Pipeline",
    tagline: "Anthropic Model Context Protocol (MCP) server implementing LangChain LCEL Retrieval-Augmented Generation for AI agent document querying.",
    category: "Systems & Protocol Engineering",
    tech: ["Python 3.11", "Model Context Protocol (MCP)", "LangChain (LCEL)", "ChromaDB", "OpenAI API", "Pydantic v2", "Pytest"],
    githubLink: "https://github.com/Vijaylaxmi-30/Document-Q-A-MCP-Server-using-RAG-",
    liveLink: null,
    badge: "Protocol Engineering",
    featured: true,
    problem: "AI developer agents (like Claude Desktop or Cursor) need standardized, secure protocols to connect to local external documents without custom brittle integrations.",
    solution: "Built a standards-compliant MCP server exposing four core tools (`load_documents`, `query_documents`, `get_document_stats`, `clear_documents`) communicating via JSON-RPC stdio transport with an isolated LangChain RAG engine.",
    architecture: "Multi-layered Python architecture: Stdio transport layer -> MCP Tool Registry -> RAG Execution Engine -> Chroma vector storage with OpenAI text embeddings.",
    keyFeatures: [
      "Standardized MCP Tool Interface: Implements Anthropic's MCP specification allowing plug-and-play integration with Claude Desktop, Cursor, and custom agentic frameworks.",
      "LangChain Expression Language (LCEL): Declarative chain execution (`PromptTemplate | ChatOpenAI | StrOutputParser`) with top-k similarity retrieval.",
      "Deterministic Chunking: RecursiveCharacterTextSplitter with 1000-token chunk window and 100-token overlap preserving document context integrity.",
      "Automated Testing Suite: Pytest integration and component test coverage verifying tool registration, vector ingestion, and similarity retrieval accuracy."
    ],
    technicalHighlights: "Refactored from deprecated LangChain chains to modern LCEL composition pipelines; enforced runtime configuration validation with Pydantic v2 BaseSettings."
  },
  {
    id: "early-warning-system",
    title: "Clinical Early Warning & Deterioration Prediction (MEWS)",
    tagline: "Time-series clinical machine learning system predicting in-hospital mortality and ICU transfers from ICU physiological vitals.",
    category: "Machine Learning & Clinical Data",
    tech: ["Python", "NumPy", "Pandas", "Scikit-Learn", "XGBoost", "Random Forest", "Streamlit"],
    githubLink: "https://github.com/Vijaylaxmi-30/early-warning-detection-system-in-hospitals",
    liveLink: null,
    badge: "Clinical Time-Series ML",
    featured: true,
    problem: "Traditional hospital threshold scores (like MEWS) rely on static cutoff values that miss complex multi-variable interactions preceding patient cardiac arrest or ICU transfer.",
    solution: "Trained tree-based and regularized linear classifiers on multi-parameter vital sign time series (HR, RR, SBP, SpO2) across 4-hour clinical observation windows to forecast physiological deterioration early.",
    architecture: "Data engineering pipeline that cleans raw clinical vitals, derives multi-scale statistical features and 1D random-projection temporal convolutions, followed by stratified cross-validation.",
    keyFeatures: [
      "900-Dimensional Convolution Feature Space: Multi-scale random-projection convolution filters capturing non-linear temporal dynamics in vital sign trends.",
      "Rigorous Clinical Benchmarking: Evaluated XGBoost, Random Forest, and L2-regularized Logistic Regression against standard MEWS score baselines via ROC-AUC metrics.",
      "Statistical Temporal Indicators: Extracted rolling window mean, variance, min-max ranges, deterioration indices, and physiological trend slopes.",
      "Interactive Streamlit Dashboard: Decision-support interface enabling clinicians to visualize simulated patient trajectories and deterioration risk scores."
    ],
    technicalHighlights: "Employed random-projection temporal feature matrices to efficiently generate high-dimensional convolution-like representations without GPU-intensive CNN training overhead."
  },
  {
    id: "gosafe-app",
    title: "GoSafe — Safe Route Recommendation & Navigation Platform",
    tagline: "Geospatial safety-aware routing and navigation mobile application comparing shortest vs safest travel corridors using live crime data.",
    category: "Geospatial & Mobile",
    tech: ["Flutter", "Dart", "Firebase Firestore", "OSRM API", "OpenStreetMap", "Nominatim API"],
    githubLink: "https://github.com/Vijaylaxmi-30/GoSafe-App",
    liveLink: null,
    badge: "TechFista Hackathon",
    featured: false,
    problem: "Standard navigation apps optimize strictly for shortest travel time or distance, often directing pedestrians and commuters through poorly lit or high-crime zones.",
    solution: "Developed a Flutter application integrating the Open Source Routing Machine (OSRM) and OpenStreetMap with dynamic area safety scoring based on verified historical and live crime incident reports.",
    architecture: "Cross-platform Flutter frontend connected to OpenStreetMap / OSRM REST routing engines and Google Firebase Firestore for real-time geospatial incident streaming.",
    keyFeatures: [
      "Multi-Route Safety Comparison: Queries OSRM routing engine to present dual route recommendations: shortest route vs risk-minimized route.",
      "Real-Time Incident Sync: Firestore snapshot listeners broadcasting active safety reports and localized risk zones dynamically.",
      "One-Tap Emergency SOS: Broadcasts instant distress alerts with real-time GPS coordinates directly to designated emergency contacts.",
      "Administrative Safety Dashboard: Portal for verified updates and crime data curation to prevent false reporting."
    ],
    technicalHighlights: "Implemented geospatial polygon intersection algorithms against Firestore crime coordinate clusters to compute dynamic risk multipliers for road segments."
  },
  {
    id: "ozoneiq",
    title: "OzoneIQ — Environmental Intelligence & Air Quality Dashboard",
    tagline: "Environmental data intelligence dashboard visualizing Central Pollution Control Board (CPCB) metrics, pollutant heatmaps, and forecasts.",
    category: "Data Visualization & Web",
    tech: ["TypeScript", "React 18", "Tailwind CSS", "Leaflet Maps", "Recharts", "Radix UI"],
    githubLink: "https://github.com/Vijaylaxmi-30/OzoneIQ",
    liveLink: null,
    badge: "Environmental Intelligence",
    featured: false,
    problem: "Public air pollution data is typically fragmented, dense, and difficult for citizens to interpret for daily health and outdoor activity decisions.",
    solution: "Built a high-performance web dashboard providing interactive Leaflet map overlays, pollutant breakdown charts (PM2.5, PM10, CO, Ozone), and personalized health advisories.",
    architecture: "Modular React 18 architecture with strict TypeScript typing, Tailwind CSS design tokens, and optimized component memoization.",
    keyFeatures: [
      "Interactive Geospatial Maps: Leaflet map integration displaying multi-city monitoring stations with color-coded AQI severity badges.",
      "Multi-Pollutant Breakdown: Granular metric tracking for PM2.5, PM10, NO2, and Ozone with historical trend comparisons.",
      "Accessible Component Architecture: Built with Radix UI primitives ensuring keyboard accessibility and WCAG contrast compliance.",
      "Contextual Health Advisories: Dynamic recommendation engine mapping AQI levels to actionable outdoor exercise and purifier guidelines."
    ],
    technicalHighlights: "Employed route-level lazy loading and code splitting to maintain lightweight bundle sizes while rendering interactive geospatial tile layers."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/60">
            Source Code Backed Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 mt-4 mb-4 tracking-tight">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
          <p className="text-zinc-500 text-base sm:text-lg max-w-3xl mx-auto">
            Real software systems inspected from local and remote Git repositories. Click any project to inspect its architectural design and engineering implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`bg-[#0a0a0a] rounded-xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                project.featured 
                  ? 'border-white/5/90 hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500 hover:border-emerald-500 hover:hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500' 
                  : 'border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500 hover:border-emerald-500 hover:hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500'
              }`}
            >
              <div className="p-7">
                {/* Category & Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800/70">
                      <FiAward className="w-3 h-3 text-emerald-500" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-2.5 leading-snug">
                  {project.title}
                </h3>

                {/* Tagline / Problem-Solution summary */}
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {project.tagline}
                </p>

                {/* Key Technical Features (Brief) */}
                <div className="space-y-2 mb-6 text-xs text-zinc-400">
                  {project.keyFeatures.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] font-medium text-zinc-400 bg-zinc-900/40 backdrop-blur-md/90 px-2 py-0.5 rounded border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar Footer */}
              <div className="px-7 py-4 bg-zinc-900/40 backdrop-blur-md/80 border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500 hover:text-emerald-500 transition-colors"
                >
                  <FiLayers className="w-3.5 h-3.5" />
                  View Architecture & Details
                </button>

                <div className="flex items-center gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500 text-zinc-100 text-xs font-semibold hover:bg-emerald-500 hover:border-white/20 hover:bg-zinc-900/60 shadow-none hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-500 transition-colors"
                    >
                      <FiExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/5 bg-[#0a0a0a] text-zinc-400 text-xs font-semibold hover:border-slate-400 hover:text-zinc-100 transition-colors"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0a0a0a] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-zinc-500 hover:text-zinc-400 hover:bg-zinc-900/40 backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Links Bar */}
            <div className="flex flex-wrap items-center gap-3 py-4 border-b border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-zinc-100 text-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Launch Live Deployment</span>
                </a>
              )}
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-[#0a0a0a] text-zinc-400 text-xs font-semibold hover:border-slate-400 hover:text-zinc-100 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                <span>Inspect GitHub Source Code</span>
              </a>
            </div>

            {/* Modal Body: Architecture & Deep Dive */}
            <div className="py-6 space-y-6 text-sm text-zinc-400">
              
              {/* Problem & Solution */}
              <div>
                <h4 className="font-bold text-zinc-100 text-base mb-1.5 flex items-center gap-2">
                  <FiActivity className="w-4 h-4 text-emerald-500" />
                  Engineering Challenge & Problem Statement
                </h4>
                <p className="text-zinc-500 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-zinc-100 text-base mb-1.5 flex items-center gap-2">
                  <FiCpu className="w-4 h-4 text-emerald-500" />
                  Technical Solution & Architecture
                </h4>
                <p className="text-zinc-500 leading-relaxed mb-2">
                  {selectedProject.solution}
                </p>
                <div className="p-3.5 bg-zinc-900/40 backdrop-blur-md rounded-lg border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300/80 font-mono text-xs text-zinc-200">
                  {selectedProject.architecture}
                </div>
              </div>

              {/* Implementation Highlight */}
              <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/70">
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block mb-1">
                  Key Technical Implementation
                </span>
                <p className="text-emerald-400 text-xs leading-relaxed">
                  {selectedProject.technicalHighlights}
                </p>
              </div>

              {/* Full Feature Set */}
              <div>
                <h4 className="font-bold text-zinc-100 text-base mb-3 flex items-center gap-2">
                  <FiCode className="w-4 h-4 text-emerald-500" />
                  Major Engineering Features
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-500 leading-relaxed">
                      <FiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-bold text-zinc-100 text-xs uppercase tracking-wider mb-2.5 text-zinc-500">
                  Complete Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs font-medium text-zinc-400 bg-zinc-900/40 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-lg bg-zinc-900/40 backdrop-blur-md text-zinc-400 font-semibold text-xs hover:bg-zinc-900/20 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;








