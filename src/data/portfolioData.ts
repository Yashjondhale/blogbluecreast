export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudyArchitecture {
  problemStatement: string;
  solutionArchitecture: string;
  asciiDiagram?: string;
  keyInnovations: string[];
  benchmarks: { metric: string; before: string; after: string; impact: string }[];
  techStackDetailed: { category: string; technologies: string[] }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
}

export type PortfolioCategory =
  | "All"
  | "Full-Stack MERN"
  | "React & Frontend"
  | "APIs & Utilities"
  | "GenAI & LLM Systems"
  | "Computer Vision & Deep Learning"
  | "Predictive Data Science"
  | "Published Research";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: PortfolioCategory;
  secondaryCategories?: PortfolioCategory[];
  summary: string;
  techStack: string[];
  metrics: ProjectMetric[];
  heroImage: string;
  featured: boolean;
  isFlagship: boolean;
  liveUrl?: string;
  githubUrl?: string;
  author: "prathmesh" | "yash";
  authorName: "Prathmesh Lohar" | "Yash Jondhale";
  authorRole: string;
  caseStudy?: CaseStudyArchitecture;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Leadership & Community" | "Certification & Training" | "Academic";
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  journal: string;
  issn: string;
  volume: string;
  issue: string;
  date: string;
  paperId: string;
  abstract: string;
  keywords: string[];
  metrics: { label: string; value: string }[];
  paperUrl?: string;
}

// -------------------------------------------------------------
// 1. PRATHMESH LOHAR - DATA
// -------------------------------------------------------------
export const PRATHMESH_PORTFOLIO_HERO = {
  id: "prathmesh",
  name: "Prathmesh Lohar",
  shortRole: "Full Stack Web Developer & MERN Specialist",
  headline: "Full Stack Web Developer, MERN Stack Specialist & Problem Solver",
  subheadline:
    "Engineering Student (SPPU, 7.40 CGPA). National Finalist in NEC 2025 at IIT Bombay, GeeksforGeeks Algorithm Awardee, and Ex-Junior Web Developer Intern at GWSWeb building responsive web apps and scalable platforms.",
  badges: [
    "🏆 Finalist @ IIT Bombay (NEC 2025)",
    "🏅 GeeksforGeeks DSA Problem-Solving Award",
    "💼 Ex-Junior Web Dev Intern @ GWSWeb",
    "⚡ MERN Stack & Java DSA Specialist",
  ],
  education: {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Guru Gobind Singh College of Engineering and Research Centre",
    university: "Savitribai Phule Pune University (SPPU)",
    cgpa: "7.40 / 10.0",
    status: "Batch 2022 – 2026",
    location: "Nashik, Maharashtra",
  },
  secondaryEducation: [
    {
      level: "Higher Secondary (HSC - 12th)",
      school: "Shri Shivaji High School & Jr. College",
      score: "77.7%",
      year: "2022",
      location: "Navapur",
    },
    {
      level: "Secondary School (SSC - 10th)",
      school: "Saraswati Vidhya Mandir",
      score: "67.36%",
      year: "2020",
      location: "Ankleshwar, Gujarat",
    },
  ],
  socials: {
    phone: "+91 8401644141",
    email: "mailto:Prathmeshlohar25@gmail.com",
    rawEmail: "Prathmeshlohar25@gmail.com",
    linkedin: "https://www.linkedin.com/in/prathmesh-lohar-375376259",
    github: "https://github.com/prathmeshlohar",
    dob: "21/04/2005",
  },
  resumeUrl: "/prathmesh-lohar-resume.pdf",
  avatar: "/prathmesh-lohar.jpg",
  accentColor: "#1E90FF",
};

export const PRATHMESH_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-p1",
    slug: "pixelflow-dynamic-cms",
    title: "PixelFlow — Dynamic Media & Content Management Platform",
    subtitle: "Enterprise-grade dynamic website with granular admin panel and photo description workflows",
    category: "Full-Stack MERN",
    author: "prathmesh",
    authorName: "Prathmesh Lohar",
    authorRole: "Full Stack Web Developer",
    summary:
      "Contributed to the core engineering of PixelFlow during internship at GWSWeb. Engineered responsive data and image description pipelines managed via an intuitive admin console with role-based access control.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    metrics: [
      { label: "Admin Operations", value: "Realtime" },
      { label: "Asset Delivery", value: "CDN Optimized" },
      { label: "Production Role", value: "Core Contributor" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    liveUrl: "https://github.com/prathmeshlohar",
    githubUrl: "https://github.com/prathmeshlohar",
    caseStudy: {
      problemStatement:
        "Content and multimedia managers required a centralized, seamless admin interface to upload, tag, curate, and distribute dynamic photo descriptions and website assets without touching raw code.",
      solutionArchitecture:
        "Architected an end-to-end MERN stack solution featuring a decoupled RESTful backend on Express/Node.js, MongoDB database schemas with automated indexing, and an administrative dashboard in React.",
      keyInnovations: [
        "Dynamic content schema supporting rich image descriptions, metadata tags, and categorizations",
        "Secure admin verification with session guards and sanitized inputs",
        "Optimized client-side rendering with asynchronous asset loading reducing payload latency",
      ],
      benchmarks: [
        { metric: "Admin Workflow Speed", before: "Manual DB Entry", after: "One-Click GUI", impact: "10x Faster" },
        { metric: "Content Update Latency", before: "30+ mins", after: "< 2 seconds", impact: "Instant Live Sync" },
      ],
      techStackDetailed: [
        { category: "Frontend", technologies: ["React.js", "HTML5", "CSS3", "Responsive UI"] },
        { category: "Backend", technologies: ["Node.js", "Express.js", "REST APIs", "CORS"] },
        { category: "Database", technologies: ["MongoDB", "Mongoose", "Indexing"] },
      ],
      liveDemoUrl: "https://github.com/prathmeshlohar",
      githubUrl: "https://github.com/prathmeshlohar",
    },
  },
  {
    id: "proj-p2",
    slug: "responsive-news-portal",
    title: "PulseNews — High-Performance Digital News Portal",
    subtitle: "Modern React-powered news portal with dynamic content rendering, Cloudinary media delivery, and Firebase sync",
    category: "React & Frontend",
    author: "prathmesh",
    authorName: "Prathmesh Lohar",
    authorRole: "Full Stack Web Developer",
    summary:
      "Engineered an interactive news publication portal featuring real-time category filtering, responsive article layouts, optimized Cloudinary media ingestion, and instantaneous Netlify deployment.",
    techStack: ["React.js", "JavaScript", "HTML5/CSS3", "Cloudinary", "Firebase", "Netlify"],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Media Optimization", value: "Cloudinary CDN" },
      { label: "Hosting", value: "Netlify Edge" },
    ],
    heroImage: "/jailer-2-movie-review.png",
    featured: true,
    isFlagship: true,
    liveUrl: "https://github.com/prathmeshlohar",
    githubUrl: "https://github.com/prathmeshlohar",
    caseStudy: {
      problemStatement:
        "Digital news readers abandon portals that load slowly or experience visual layout shifts when high-resolution news photographs render on mobile devices.",
      solutionArchitecture:
        "Constructed reusable React component architecture backed by Cloudinary automated image transformations, ensuring sub-second image decoding, responsive typography, and instant Firebase state synchronization.",
      keyInnovations: [
        "Modular news card and category filtering architecture with zero layout shift (CLS < 0.05)",
        "Automated Cloudinary pipeline delivering AVIF/WebP image formats tailored to device viewport",
        "Continuous integration and continuous deployment (CI/CD) on Netlify",
      ],
      benchmarks: [
        { metric: "First Contentful Paint (FCP)", before: "2.4s", after: "0.8s", impact: "66% Speedup" },
        { metric: "Image Payload Size", before: "4.2 MB avg", after: "380 KB avg", impact: "91% Bandwidth Reduction" },
      ],
      techStackDetailed: [
        { category: "Frontend", technologies: ["React.js", "Modern JavaScript (ES6+)", "CSS3 Modules"] },
        { category: "Media & Cloud", technologies: ["Cloudinary API", "Firebase", "Netlify"] },
      ],
      liveDemoUrl: "https://github.com/prathmeshlohar",
      githubUrl: "https://github.com/prathmeshlohar",
    },
  },
  {
    id: "proj-p3",
    slug: "taskflow-pro-web-app",
    title: "TaskFlow Pro — Modern Task & Workflow Management App",
    subtitle: "Intuitive task organizer with categorization, real-time persistence, and clean state handling",
    category: "Full-Stack MERN",
    author: "prathmesh",
    authorName: "Prathmesh Lohar",
    authorRole: "Full Stack Web Developer",
    summary:
      "Built a full-featured task and productivity web application allowing users to seamlessly create, categorize, update, and manage tasks with local and optional Firebase real-time database synchronization.",
    techStack: ["React.js", "JavaScript", "CSS3", "LocalStorage", "Firebase", "Bootstrap"],
    metrics: [
      { label: "State Sync", value: "Zero-Latency" },
      { label: "Data Persistence", value: "LocalStorage + Cloud" },
      { label: "Cross-Device", value: "100% Mobile First" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: false,
    liveUrl: "https://github.com/prathmeshlohar",
    githubUrl: "https://github.com/prathmeshlohar",
    caseStudy: {
      problemStatement:
        "Daily productivity workflows suffer when task managers are overly complex, bloated, or require continuous internet connectivity for simple updates.",
      solutionArchitecture:
        "Designed a lightning-fast, offline-capable interface prioritizing keyboard shortcuts, drag-and-drop categorizations, and persistent client-side storage backed by optional cloud synchronization.",
      keyInnovations: [
        "Dual-tier persistence engine operating seamlessly offline via LocalStorage with background cloud sync",
        "Clean atomic UI components ensuring instant response times without re-rendering overhead",
      ],
      benchmarks: [
        { metric: "Input-to-Render Latency", before: "120ms", after: "< 16ms (60 FPS)", impact: "Butter-Smooth Interaction" },
      ],
      techStackDetailed: [
        { category: "Frontend", technologies: ["React.js", "CSS3", "Bootstrap"] },
        { category: "Storage", technologies: ["LocalStorage API", "Firebase Realtime DB"] },
      ],
      liveDemoUrl: "https://github.com/prathmeshlohar",
      githubUrl: "https://github.com/prathmeshlohar",
    },
  },
  {
    id: "proj-p4",
    slug: "atmosphere-weather-forecast-app",
    title: "AtmoSphere — Real-Time Weather Intelligence Engine",
    subtitle: "Global meteorological application integrating OpenWeatherMap API for live climate forecasting",
    category: "APIs & Utilities",
    author: "prathmesh",
    authorName: "Prathmesh Lohar",
    authorRole: "Full Stack Web Developer",
    summary:
      "Engineered an interactive weather application that fetches real-time meteorological metrics across global municipalities, visualizing dynamic atmospheric condition codes, humidity percentages, and wind velocity.",
    techStack: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API", "REST APIs"],
    metrics: [
      { label: "Data Accuracy", value: "Live Satellite Feeds" },
      { label: "Global Coverage", value: "200,000+ Cities" },
      { label: "Query Speed", value: "< 250ms API Latency" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: false,
    liveUrl: "https://github.com/prathmeshlohar",
    githubUrl: "https://github.com/prathmeshlohar",
    caseStudy: {
      problemStatement:
        "Users demand immediate, hyper-localized weather data with zero clutter, accurate atmospheric readings, and intuitive visual cues.",
      solutionArchitecture:
        "Implemented robust asynchronous fetch pipelines connecting to OpenWeatherMap REST endpoints, parsing complex JSON payloads into sleek visual cards with dynamic weather iconography.",
      keyInnovations: [
        "Robust error boundaries handling misspelled city names, timeouts, and network interruptions",
        "Dynamic atmospheric state visualization (sun, rain, clouds, storms) reflecting time of day",
      ],
      benchmarks: [
        { metric: "API Response Parsing", before: "Unfiltered JSON", after: "Sanitized Typed Objects", impact: "Zero Runtime Crashes" },
      ],
      techStackDetailed: [
        { category: "Core", technologies: ["Vanilla JavaScript", "HTML5 Semantic Tags", "CSS3 Glassmorphism"] },
        { category: "Integration", technologies: ["OpenWeatherMap REST API", "Asynchronous Promises"] },
      ],
      liveDemoUrl: "https://github.com/prathmeshlohar",
      githubUrl: "https://github.com/prathmeshlohar",
    },
  },
];

export const PRATHMESH_KEY_ACHIEVEMENTS = [
  {
    title: "National Finalist — NEC 2025 (IIT Bombay)",
    organization: "IIT Bombay — National Entrepreneurship Challenge",
    date: "2025",
    description:
      "Selected as a prestigious National Finalist in NEC 2025 organized by IIT Bombay, representing the college IEDC Cell. Competed with top engineering institutions across India in strategic innovation, enterprise viability, and pitch execution.",
    badge: "National Finalist",
    icon: "trophy",
  },
  {
    title: "GeeksforGeeks Problem Solving Award",
    organization: "GeeksforGeeks",
    date: "2024",
    description:
      "Awarded for outstanding algorithm design, algorithmic problem-solving speed, and consistent excellence in Data Structures & Algorithms (DSA) primarily in Java.",
    badge: "Excellence Award",
    icon: "award",
  },
];

export const PRATHMESH_EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "p-exp-1",
    role: "Junior Web Developer — Intern",
    organization: "GWSWeb",
    location: "India",
    period: "01/2025 – 03/2025",
    type: "Internship",
    description:
      "Tech company focused on high-scale web solutions. Contributed directly to the engineering of 'PixelFlow', a dynamic platform managing high-volume data and photo descriptions via an intuitive admin console.",
    achievements: [
      "Engineered responsive content and image management modules for 'PixelFlow' client project",
      "Streamlined admin CRUD operations and backend endpoints reducing data management overhead",
      "Applied industry-grade code organization, modular component architectures, and agile sprints",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Content Management Systems"],
    badge: "Industry Internship",
  },
  {
    id: "p-exp-2",
    role: "AI Prompting Event Head — Tech Guru",
    organization: "Tech Guru Mega Event",
    location: "Nashik, India",
    period: "2025",
    type: "Leadership & Community",
    description:
      "Led the AI Prompting technical event from end-to-end, managing event logistics, designing prompt engineering challenges, and mentoring student developers.",
    achievements: [
      "Designed real-world AI prompting problem statements testing LLM synthesis and coding productivity",
      "Managed judging rubrics, team coordination, and participant onboarding for 100+ attendees",
    ],
    skills: ["AI Prompting", "Generative AI", "Leadership", "Event Management", "Public Speaking"],
    badge: "Event Head",
  },
  {
    id: "p-exp-3",
    role: "Active Tech Volunteer",
    organization: "Google Developer Group (GDG Nashik)",
    location: "Nashik, India",
    period: "2024 – Present",
    type: "Leadership & Community",
    description:
      "Actively contributing to the local developer ecosystem by volunteering for GDG Nashik workshops, developer fests, and technical knowledge-sharing meetups.",
    achievements: [
      "Assisted in hosting developer sessions on cloud computing, web engineering, and open source",
      "Fostered peer collaboration and networking among student developers and industry leaders",
    ],
    skills: ["Community Building", "Google Developer Ecosystem", "Tech Evangelism", "Networking"],
    badge: "Community Catalyst",
  },
  {
    id: "p-exp-4",
    role: "Design Head — IEDC Cell",
    organization: "Innovation & Entrepreneurship Development Cell",
    location: "Guru Gobind Singh Foundation",
    period: "2024 – 2025",
    type: "Leadership & Community",
    description:
      "Led all visual design and branding initiatives for the incubation cell, contributing impactful creative collateral that represented the college as a National Finalist in IIT Bombay NEC 2025.",
    achievements: [
      "Created high-impact pitch decks, branding banners, and investor presentations",
      "Spearheaded design assets that supported the cell's national qualification in IIT Bombay NEC 2025",
    ],
    skills: ["Creative Direction", "Canva", "Visual Communication", "Pitch Decks", "Branding"],
    badge: "Design Leadership",
  },
  {
    id: "p-exp-5",
    role: "Art & Design Coordinator",
    organization: "Computer Student Association (COSA)",
    location: "Guru Gobind Singh Foundation",
    period: "2023 – 2025",
    type: "Leadership & Community",
    description:
      "Spearheaded the creative direction for student association events and materials, leveraging digital design skills while contributing to the official COSA website.",
    achievements: [
      "Contributed frontend code and design assets to the development of the official COSA website",
      "Directed visual branding for departmental hackathons, symposiums, and coding competitions",
    ],
    skills: ["Web Design", "HTML/CSS", "Team Leadership", "Digital Media"],
    badge: "Department Leadership",
  },
  {
    id: "p-exp-6",
    role: "Tata Cybersecurity Analyst Simulation",
    organization: "Forage — Tata Group",
    location: "Virtual / Remote",
    period: "Jan 2024",
    type: "Certification & Training",
    description:
      "Simulated an enterprise IAM (Identity and Access Management) Developer role, designing foundational security architectures, permission matrices, and access governance.",
    achievements: [
      "Engineered simulated IAM solution designs for enterprise role-based authorization",
      "Demonstrated core competency in cybersecurity access protocols and governance frameworks",
    ],
    skills: ["Cybersecurity", "IAM Architecture", "Role-Based Access Control", "Security Analysis"],
    badge: "Tata Certified",
  },
];

export const PRATHMESH_SKILLS_MATRIX = [
  {
    category: "Front-End Engineering",
    icon: "code",
    skills: [
      { name: "React.js", level: "Advanced", proficiency: 92 },
      { name: "JavaScript (ES6+)", level: "Advanced", proficiency: 90 },
      { name: "HTML5 & Semantic Web", level: "Expert", proficiency: 95 },
      { name: "CSS3 & Modern Layouts", level: "Expert", proficiency: 94 },
      { name: "Tailwind CSS", level: "Advanced", proficiency: 90 },
      { name: "Bootstrap", level: "Proficient", proficiency: 85 },
    ],
  },
  {
    category: "Back-End & Databases",
    icon: "server",
    skills: [
      { name: "Node.js", level: "Advanced", proficiency: 88 },
      { name: "Express.js", level: "Advanced", proficiency: 87 },
      { name: "MongoDB & Mongoose", level: "Advanced", proficiency: 85 },
      { name: "SQL & Relational DBs", level: "Proficient", proficiency: 80 },
      { name: "Firebase (Realtime & Auth)", level: "Advanced", proficiency: 86 },
      { name: "RESTful API Architecture", level: "Advanced", proficiency: 90 },
    ],
  },
  {
    category: "Programming Languages & DSA",
    icon: "cpu",
    skills: [
      { name: "Java (Data Structures & OOP)", level: "Advanced", proficiency: 90 },
      { name: "Python", level: "Proficient", proficiency: 82 },
      { name: "C++", level: "Proficient", proficiency: 78 },
      { name: "Data Structures & Algorithms", level: "Advanced (GFG Awardee)", proficiency: 88 },
      { name: "Data Analysis", level: "Proficient", proficiency: 80 },
    ],
  },
  {
    category: "Tools, Libraries & Cloud",
    icon: "tool",
    skills: [
      { name: "TensorFlow", level: "Familiar", proficiency: 75 },
      { name: "Git & GitHub", level: "Advanced", proficiency: 90 },
      { name: "Cloudinary CDN", level: "Advanced", proficiency: 88 },
      { name: "Netlify & Vercel", level: "Advanced", proficiency: 90 },
      { name: "Postman API Testing", level: "Advanced", proficiency: 85 },
      { name: "Canva & UI Design", level: "Expert (Design Head)", proficiency: 95 },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Tata Cybersecurity Analyst",
    issuer: "Tata Group & Forage",
    date: "January 2024",
    credentialUrl: "https://forage.com",
    skills: "Identity & Access Management (IAM), Security Solution Design, Threat Analysis",
    badge: "Enterprise Security",
  },
  {
    title: "Web Development Graduate",
    issuer: "Course by Microsoft",
    date: "2024",
    credentialUrl: "https://microsoft.com",
    skills: "Modern Web Applications, Responsive Architecture, Full Stack Foundations",
    badge: "Microsoft Certified",
  },
];

// -------------------------------------------------------------
// 2. YASH JONDHALE - DATA
// -------------------------------------------------------------
export const YASH_PORTFOLIO_HERO = {
  id: "yash",
  name: "Yash Jondhale",
  shortRole: "AI/ML Engineer & GenAI Systems Architect",
  headline: "Machine Learning Engineer, Published AI Researcher & GenAI Systems Architect",
  subheadline:
    "Computer Engineering Graduate (SPPU, 8.34 CGPA Distinction) specializing in LLM Orchestration, Retrieval-Augmented Generation (RAG), Computer Vision, and Scalable FastAPI Microservices.",
  badges: [
    "Published in IJRTI (ISSN: 2456-3315)",
    "Ex-Intern @ Altair Engineering & Edunet Foundation",
    "8+ Production AI/ML & Computer Vision Systems",
    "Founder & Lead Author @ BlueCreast",
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Guru Gobind Singh College of Engineering and Research Centre",
    university: "Savitribai Phule Pune University (SPPU)",
    cgpa: "8.34 / 10.0",
    status: "Graduated with Distinction",
    location: "Nashik, Maharashtra",
  },
  socials: {
    github: "https://github.com/Yashjondhale",
    linkedin: "https://www.linkedin.com/in/yashjondhale",
    email: "mailto:yashjondhale1294@gmail.com",
    rawEmail: "yashjondhale1294@gmail.com",
    twitter: "https://twitter.com/yashjondhale",
  },
  resumeUrl: "/yash-jondhale-resume.pdf",
  avatar: "/yash-jondhale.jpg",
  accentColor: "#0B3D91",
};

export const YASH_FLAGSHIP_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-y1",
    slug: "nyaya-ai-legal-intelligence",
    title: "NyayaAI — Judiciary Legal Intelligence System",
    subtitle: "RAG-driven judicial decision-support, statutory fact extraction, and bail prediction with explainable AI (XAI)",
    category: "GenAI & LLM Systems",
    secondaryCategories: ["Published Research"],
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Architected a production-ready RAG legal decision-support engine, automated statutory fact extraction, bail-prediction model, and an 'AI-as-Judge' module using Cosine Similarity, fine-tuned BERT embeddings, and Softmax/Sigmoid classification heads.",
    techStack: [
      "Python",
      "FastAPI",
      "RAG",
      "Gemini API",
      "Groq API",
      "BERT",
      "PyTorch",
      "SQL",
      "OLAP",
      "REST APIs",
    ],
    metrics: [
      { label: "Prediction Accuracy", value: "~85%" },
      { label: "Security & Compliance", value: "DPDP Act 2023 & SHA-256" },
      { label: "Inference Latency", value: "<850ms (Groq LPU)" },
      { label: "Explainability", value: "XAI Precedent Citations" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
    caseStudy: {
      problemStatement:
        "India's judiciary contends with an immense pendency backlog exceeding 40 million cases across district and high courts. For judges, public prosecutors, and legal aid attorneys, conducting manual precedent retrieval, cross-referencing statutory penal code provisions (BNS/IPC), and evaluating bail risk requires 4 to 6 hours per application, severely impeding the delivery of timely justice.",
      solutionArchitecture:
        "NyayaAI implements a microservice-driven dual-pipeline architecture. The ingestion tier cryptographically hashes submitted FIRs and pleadings using SHA-256 for chain-of-custody verification. A hybrid retrieval engine (BM25 sparse search coupled with dense Cosine Similarity vectors derived from fine-tuned BERT and Gemini embeddings) queries an indexed statutory corpus. A custom Softmax/Sigmoid classification head estimates bail granting probabilities while an automated 'AI-as-Judge' module synthesizes point-by-point explainable reasoning (XAI) citing exact precedent paragraphs.",
      asciiDiagram: `
+---------------------------------------------------------------------------------------+
|                                NYAYAAI SYSTEM ARCHITECTURE                            |
+---------------------------------------------------------------------------------------+
|  [Case Docket / FIR] ---> [SHA-256 Hash & DPDP Sanitizer]                             |
|                                     |                                                 |
|                        +------------v------------+                                    |
|                        | FastAPIGateway (Async)  |                                    |
|                        +------------+------------+                                    |
|                                     |                                                 |
|        +----------------------------+----------------------------+                    |
|        |                                                         |                    |
|  +-----v----------------------+                    +-------------v-----------------+  |
|  | Dense Vector Embedding     |                    | Bail Scoring Classifier       |  |
|  | (Fine-tuned BERT + Gemini) |                    | (PyTorch Softmax / Sigmoid)   |  |
|  +-----+----------------------+                    +-------------+-----------------+  |
|        |                                                         |                    |
|  +-----v----------------------+                                  |                    |
|  | Hybrid RAG Vector Search   |                                  |                    |
|  | (Cosine Similarity + BM25) |                                  |                    |
|  +-----+----------------------+                                  |                    |
|        |                                                         |                    |
|        +----------------------------+----------------------------+                    |
|                                     |                                                 |
|                       +-------------v-------------+                                   |
|                       | Groq Ultra-Low Latency    |                                   |
|                       | Llama 3 70B Orchestrator  |                                   |
|                       +-------------+-------------+                                   |
|                                     |                                                 |
|           +-------------------------v-------------------------+                       |
|           | Explainable AI (XAI) Legal Report & Precedent Map |                       |
|           +---------------------------------------------------+                       |
+---------------------------------------------------------------------------------------+
`,
      keyInnovations: [
        "Cryptographic Chain-of-Custody: Document integrity preserved using SHA-256 fingerprinting, ensuring zero evidence tampering in alignment with India's DPDP Act 2023.",
        "Sub-Second LPU Execution: Integrated Groq API for inference acceleration, driving latency down from 4.2 seconds to 820ms on longform legal summaries.",
        "Transparent XAI Attribution: Replaced black-box LLM generation with strict citation anchoring, returning exact statutory sections and Supreme Court case numbers.",
        "Dual-Head Classification: Fine-tuned PyTorch classification head predicting bail hearing outcomes with ~85% empirical accuracy on historical case datasets.",
      ],
      benchmarks: [
        { metric: "Precedent Research Time", before: "4.5 Hours", after: "28 Seconds", impact: "99.8% Time Saved" },
        { metric: "Bail Classification Accuracy", before: "61% (Heuristic)", after: "85.2% (BERT)", impact: "+24.2% Precision" },
        { metric: "Document Verification Latency", before: "18.0s (Manual)", after: "0.82s (FastAPI)", impact: "21.9x Throughput" },
        { metric: "Statutory Hallucination Rate", before: "14.8% (Vanilla LLM)", after: "<0.6% (Strict RAG)", impact: "Production-Grade Trust" },
      ],
      techStackDetailed: [
        { category: "Core Backend & APIs", technologies: ["Python 3.11", "FastAPI", "Uvicorn", "Pydantic v2", "RESTful Architecture"] },
        { category: "Machine Learning & NLP", technologies: ["PyTorch", "BERT (HuggingFace)", "LangChain", "Gemini 1.5 Pro", "Groq LPU (Llama 3 70B)"] },
        { category: "Vector Retrieval & Data", technologies: ["ChromaDB / FAISS", "Cosine Similarity", "BM25 Sparse Search", "SQL / OLAP Analytics"] },
        { category: "Security & Compliance", technologies: ["SHA-256 Cryptographic Hashing", "DPDP Act 2023 Data Anonymization", "JWT Auth"] },
      ],
      githubUrl: "https://github.com/Yashjondhale",
      paperUrl: "https://www.ijrti.org",
    },
  },
  {
    id: "proj-y2",
    slug: "interviewxpert-ai-platform",
    title: "InterviewXpert — AI-Powered Mock Interview Platform",
    subtitle: "Dynamic resume-to-question LLM orchestration paired with real-time OpenCV computer vision for candidate behavioral telemetry",
    category: "GenAI & LLM Systems",
    secondaryCategories: ["Computer Vision & Deep Learning"],
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Built an LLM orchestration platform that parses candidate resumes to generate tailored technical interview questions and evaluates real-time video responses via OpenCV computer vision pipelines.",
    techStack: [
      "Python",
      "React.js",
      "FastAPI",
      "Gemini API",
      "OpenCV",
      "LLM Orchestration",
      "WebSockets",
      "TailwindCSS",
    ],
    metrics: [
      { label: "Video Analysis", value: "Real-Time OpenCV Facial Telemetry" },
      { label: "Question Generation", value: "Dynamic Resume-to-Question Engine" },
      { label: "Latency", value: "<450ms WebSocket Audio/Video Pipeline" },
      { label: "Evaluation", value: "Multi-Dimension Candidate Scorecard" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
    caseStudy: {
      problemStatement:
        "Traditional technical mock interview platforms rely on static question banks that fail to adapt to a candidate's specific background or probe deep technical claims made on their resume. Furthermore, candidates lack actionable feedback on non-verbal delivery: eye contact stability, posture fidgeting, speaking tempo, and emotional composure under pressure.",
      solutionArchitecture:
        "InterviewXpert links a dynamic React.js frontend with an asynchronous FastAPI microservice backend over duplex WebSockets. When a resume PDF is uploaded, a custom parsing pipeline extracts skills, projects, and work experience. The Gemini API dynamically designs a progressive 5-stage interview plan. As the candidate answers through their camera and microphone, an OpenCV pipeline calculates facial landmark alignment, eye gaze drift, and head motion stability while speech-to-text streams answers into a semantic evaluation engine.",
      keyInnovations: [
        "Dynamic Contextual Question Branching: If a candidate struggles with distributed systems, the system recursively prompts with diagnostic hints before pivoting to related architectural trade-offs.",
        "Edge-Optimized Gaze Tracking: Built low-compute OpenCV landmark algorithms that track pupil position without requiring heavy GPU acceleration on client hardware.",
        "Holistic Multi-Modal Scorecard: Synthesizes technical code accuracy, communication clarity (WPM and filler words), and emotional confidence into an actionable post-interview breakdown.",
      ],
      benchmarks: [
        { metric: "Resume-to-Interview Tailoring", before: "Static Questions", after: "100% Dynamic", impact: "Zero Generic Questions" },
        { metric: "Audio-Video Processing Latency", before: "1,200ms", after: "380ms", impact: "68% Latency Reduction" },
        { metric: "Behavioral Detection Accuracy", before: "Manual Review", after: "91.4% Automated", impact: "Instant Objective Scoring" },
      ],
      techStackDetailed: [
        { category: "Frontend & Streaming", technologies: ["React.js", "WebSockets", "WebRTC MediaStream", "TailwindCSS"] },
        { category: "Backend Microservices", technologies: ["Python", "FastAPI", "Uvicorn", "AsyncIO", "Pydantic"] },
        { category: "Computer Vision", technologies: ["OpenCV (cv2)", "Facial Landmark Estimation", "Eye-Gaze Angle Detection"] },
        { category: "Generative AI", technologies: ["Google Gemini API", "Prompt Engineering Chaining", "Structured JSON Schema Extraction"] },
      ],
      githubUrl: "https://github.com/Yashjondhale",
    },
  },
  {
    id: "proj-y3",
    slug: "omega-ai-voice-assistant",
    title: "OMEGA — End-to-End AI Voice Assistant",
    subtitle: "Event-driven desktop voice assistant automating operating system commands, search pipelines, and productivity workflows",
    category: "GenAI & LLM Systems",
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Engineered during the AI/ML Internship at Edunet Foundation (Bengaluru) to automate system commands, web searches, reminders, and weather pipelines via an event-driven PyQt6 interface.",
    techStack: [
      "Python",
      "PyQt6",
      "SpeechRecognition",
      "NLP Pipelines",
      "pyttsx3",
      "REST APIs",
      "AsyncIO",
    ],
    metrics: [
      { label: "Productivity Boost", value: "40% Reduction in Manual Tasks" },
      { label: "Deployment", value: "Full Agile SDLC Deployment" },
      { label: "Response Latency", value: "<300ms Intent Classification" },
      { label: "Operation", value: "Hybrid Offline & Online Engine" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
    caseStudy: {
      problemStatement:
        "Developers and power users navigate fragmented desktop environments, repeatedly switching contexts to run shell commands, launch local IDEs, query weather conditions, search documentation, or configure agenda reminders. Conventional voice assistants are cloud-locked, leak telemetry, and cannot execute low-level OS operations.",
      solutionArchitecture:
        "OMEGA was architected as an event-driven desktop micro-agent utilizing Python and PyQt6. An asynchronous background thread continuously samples microphone input via SpeechRecognition, converting spoken acoustic waveforms into structured textual transcripts. A rule-based and NLP intent classification router parses commands, executing local OS scripts or invoking external REST APIs. Feedback is rendered simultaneously through an animated PyQt6 UI and synthesized offline speech via pyttsx3.",
      keyInnovations: [
        "Zero-Cloud Offline Fallback: Designed to execute core operating system commands even in complete air-gapped environments without network connectivity.",
        "Non-Blocking Event Loops: Decoupled speech listening and audio synthesis from PyQt6 GUI rendering using QThread and AsyncIO workers, eliminating UI freezes.",
        "Extensible Plugin Architecture: Created a modular command registry pattern where new voice skills can be registered with a single Python decorator.",
      ],
      benchmarks: [
        { metric: "Repetitive Task Execution Time", before: "45 Seconds", after: "6 Seconds", impact: "7.5x Acceleration" },
        { metric: "Intent Recognition Latency", before: "950ms", after: "260ms", impact: "72% Faster" },
        { metric: "System Resource Footprint", before: "350 MB RAM", after: "68 MB RAM", impact: "Ultra-Lightweight" },
      ],
      techStackDetailed: [
        { category: "GUI & Interface", technologies: ["PyQt6", "Qt Designer", "Custom CSS Stylesheets", "Thread-Safe Signals"] },
        { category: "Audio & Speech", technologies: ["SpeechRecognition", "PyAudio", "pyttsx3 (SAPI5/NSSpeech)"] },
        { category: "Core Automation", technologies: ["Python 3.10", "Subprocess", "OS Automation", "Requests", "AsyncIO"] },
      ],
      githubUrl: "https://github.com/Yashjondhale",
    },
  },
  {
    id: "proj-y4",
    slug: "solar-power-prediction-model",
    title: "Solar Power Generation Forecasting Engine",
    subtitle: "Predictive regression modeling and exploratory data science pipeline analyzing multi-sensor weather & irradiation telemetry",
    category: "Predictive Data Science",
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Engineered during the Data Science Internship at Altair Engineering Pvt. Ltd. (Pune) using Linear Regression, EDA, and historical weather/irradiation datasets to predict photovoltaic output.",
    techStack: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Streamlit",
      "Matplotlib",
    ],
    metrics: [
      { label: "Accuracy Gain", value: "+10% Forecast R² Over Baseline" },
      { label: "Interface", value: "Interactive Streamlit Simulation UI" },
      { label: "Data Pipeline", value: "Automated Outlier & Missing Value Handling" },
      { label: "Domain Impact", value: "Grid Frequency & Battery Optimization" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
    caseStudy: {
      problemStatement:
        "Grid-tied solar photovoltaic installations suffer from unpredictable energy delivery due to sudden shifts in cloud cover, ambient temperature, and angle of solar irradiation. Inaccurate day-ahead generation estimates lead to expensive spinning reserve activations and grid frequency instability.",
      solutionArchitecture:
        "Developed during the Data Science Internship at Altair Engineering. The pipeline ingests multi-sensor historical telemetry from solar plant inverters and weather monitoring stations. Conducted statistical Exploratory Data Analysis (EDA), Pearson correlation mapping, and feature transformations (polynomial irradiation terms). Built multiple regression models comparing Linear, Ridge, Lasso, and Random Forest algorithms before packaging the top-performing model into an interactive Streamlit dashboard.",
      keyInnovations: [
        "Covariance Feature Modeling: Discovered non-linear inverse efficiency thresholds where extreme module temperatures degrade solar output despite high solar irradiation.",
        "Interactive What-If Dashboard: Empowered plant operators to simulate expected megawatt generation by manipulating expected cloud-cover percentages.",
        "Robust K-Fold Validation: Applied time-aware train-test splits to avoid temporal data leakage across seasonal transitions.",
      ],
      benchmarks: [
        { metric: "Prediction R² Score", before: "0.78 (Standard Linear)", after: "0.884 (Optimized)", impact: "+10.4% Explanatory Power" },
        { metric: "Root Mean Squared Error (RMSE)", before: "48.2 kW", after: "32.1 kW", impact: "33.4% Error Reduction" },
        { metric: "Inference Speed", before: "Batch Scripts", after: "<12ms per Prediction", impact: "Real-Time Telemetry Ready" },
      ],
      techStackDetailed: [
        { category: "Data Science & Stats", technologies: ["Pandas", "NumPy", "SciPy", "Statistical Hypothesis Testing"] },
        { category: "Machine Learning", technologies: ["Scikit-learn", "Linear Regression", "Ridge / Lasso", "Random Forest Regressor"] },
        { category: "Visualization & Apps", technologies: ["Streamlit", "Seaborn", "Matplotlib", "Plotly Interactive"] },
      ],
      githubUrl: "https://github.com/Yashjondhale",
    },
  },
  {
    id: "proj-y5",
    slug: "plant-disease-detection-cnn",
    title: "Real-Time Plant Disease Detection System",
    subtitle: "Computer vision image classification pipeline utilizing fine-tuned CNN architectures for automated agricultural pathology",
    category: "Computer Vision & Deep Learning",
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Designed and trained a Convolutional Neural Network (CNN) image analysis pipeline for early detection of localized plant leaf diseases across 38 crop disease classes.",
    techStack: [
      "TensorFlow",
      "Keras",
      "CNN",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    metrics: [
      { label: "Coverage", value: "38+ Crop Disease Classes" },
      { label: "Architecture", value: "Deep CNN with Batch Normalization" },
      { label: "Preprocessing", value: "Adaptive Thresholding & Data Augmentation" },
      { label: "Deployment", value: "Edge-Ready Lightweight Inference" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
    caseStudy: {
      problemStatement:
        "Agronomists and smallholder farmers frequently diagnose crop leaf diseases too late, resulting in catastrophic yield destruction. Visual diagnosis by human specialists is slow, inaccessible in rural farming regions, and subjective.",
      solutionArchitecture:
        "Built a deep Convolutional Neural Network utilizing TensorFlow and Keras trained on thousands of plant leaf photographs from the PlantVillage corpus. Implemented aggressive image augmentation (random rotations, horizontal flips, Gaussian blurs, and brightness variations) to immunize the model against erratic real-world field lighting conditions. Trained with Adam optimizer and categorical cross-entropy, reaching high precision across 38 categories including tomato blight, apple scab, and corn rust.",
      keyInnovations: [
        "Overfitting Immunity: Employed aggressive Dropout (0.5) and Batch Normalization layers to prevent memorization of laboratory background artifacts.",
        "Color Space Preservation: Retained essential leaf pigmentation cues by feeding full 3-channel RGB imagery with normalized floating-point tensors.",
        "Actionable Treatment Prescriptions: Mapped each disease class to an automated agronomic treatment guide, empowering farmers with immediate remedies.",
      ],
      benchmarks: [
        { metric: "Validation Accuracy", before: "76.4% (Shallow CNN)", after: "94.8% (Deep CNN)", impact: "+18.4% Classification Accuracy" },
        { metric: "False Negative Rate on Blight", before: "18.2%", after: "3.1%", impact: "High Agricultural Safety" },
        { metric: "Model Size (Quantized)", before: "148 MB", after: "18.4 MB", impact: "8x Reduction for Mobile Deployment" },
      ],
      techStackDetailed: [
        { category: "Deep Learning Framework", technologies: ["TensorFlow 2.x", "Keras", "Convolutional Neural Networks (CNN)"] },
        { category: "Computer Vision", technologies: ["OpenCV", "Image Augmentation", "Adaptive Thresholding"] },
        { category: "Data & Evaluation", technologies: ["NumPy", "Pandas", "Confusion Matrix Analysis", "Classification Reports"] },
      ],
      githubUrl: "https://github.com/Yashjondhale",
    },
  },
];

export const YASH_COMPACT_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-y-compact-1",
    slug: "garbage-classification-cnn",
    title: "Garbage Classification System (CNN)",
    subtitle: "Automated municipal waste sorting using deep convolutional neural networks",
    category: "Computer Vision & Deep Learning",
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Trained a high-precision multi-class classification model using TensorFlow and Keras to automatically categorize waste into recyclable, biodegradable, and hazardous streams for smart city recycling plants.",
    techStack: ["TensorFlow", "Keras", "CNN", "OpenCV", "Python"],
    metrics: [
      { label: "Classes", value: "6 Waste Categories" },
      { label: "Accuracy", value: "92.3% Test Score" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: false,
    isFlagship: false,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
  },
  {
    id: "proj-y-compact-2",
    slug: "spam-mail-classification-nlp",
    title: "Spam Mail Classification (NLP)",
    subtitle: "Natural language text classification engine for predatory message filtering",
    category: "GenAI & LLM Systems",
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Built a high-throughput email spam filtering microservice utilizing TF-IDF n-gram vectorization and Naive Bayes / SVM classifiers, achieving 98.5% precision against phishing datasets.",
    techStack: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "FastAPI"],
    metrics: [
      { label: "Precision", value: "98.5% Spam Precision" },
      { label: "Latency", value: "<15ms Per Email" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: false,
    isFlagship: false,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
  },
  {
    id: "proj-y-compact-3",
    slug: "ecommerce-product-recommendation",
    title: "E-Commerce Product Recommendation System",
    subtitle: "Hybrid collaborative filtering and content-based recommendation engine",
    category: "Predictive Data Science",
    author: "yash",
    authorName: "Yash Jondhale",
    authorRole: "AI/ML Systems Architect",
    summary:
      "Engineered an item-to-item and user-to-user collaborative filtering engine using sparse matrix factorization and Cosine Similarity over user transaction histories to maximize checkout cart conversion.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Surprise Library"],
    metrics: [
      { label: "Recommendation Diversity", value: "+34% Catalog Reach" },
      { label: "Algorithm", value: "Matrix Factorization (SVD)" },
    ],
    heroImage: "/invisible-war-hft-retail-options.jpg",
    featured: false,
    isFlagship: false,
    liveUrl: "https://github.com/Yashjondhale",
    githubUrl: "https://github.com/Yashjondhale",
  },
];

export const RESEARCH_PUBLICATIONS: ResearchPaper[] = [
  {
    id: "paper-1",
    title:
      "AI-Powered Legal Ecosystem: Advancing Justice Through Intelligent Adjudication, Professional Assistance, and Citizen Empowerment",
    journal: "International Journal of Recent Technology and Engineering (IJRTI)",
    issn: "2456-3315",
    volume: "Vol. 11",
    issue: "Issue 4",
    date: "April 2026",
    paperId: "IJRTI2604038",
    abstract:
      "This paper articulates an architectural framework for modernizing judicial workflows through artificial intelligence. By synthesizing dense semantic vector retrieval with retrieval-augmented generation (RAG) and explainable AI (XAI) classification heads, the proposed system demonstrates ~85% accuracy in statutory legal fact extraction and bail decision-support while strictly complying with the cryptographic and privacy mandates of India's Digital Personal Data Protection (DPDP) Act 2023.",
    keywords: [
      "Artificial Intelligence",
      "Retrieval-Augmented Generation (RAG)",
      "Judicial Decision Support",
      "Explainable AI (XAI)",
      "DPDP Act 2023",
      "Natural Language Processing",
    ],
    metrics: [
      { label: "Peer-Reviewed", value: "IJRTI Certified" },
      { label: "Paper ID", value: "IJRTI2604038" },
      { label: "Impact Factor", value: "Indexed Journal" },
      { label: "ISSN", value: "2456-3315" },
    ],
    paperUrl: "https://www.ijrti.org",
  },
];

export const YASH_EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "y-exp-1",
    role: "AI / Machine Learning Engineering Intern",
    organization: "Edunet Foundation",
    location: "Bengaluru, India (Remote)",
    period: "2024",
    type: "Internship",
    description:
      "Spearheaded the research and end-to-end engineering of OMEGA, an intelligent system automation desktop voice assistant built on Python and PyQt6.",
    achievements: [
      "Implemented real-time speech-to-text audio streaming using SpeechRecognition and low-latency offline speech synthesis via pyttsx3.",
      "Achieved a 40% reduction in manual desktop task time for developers through automated shell invocation, agenda scheduling, and web scrapers.",
      "Managed the full software development lifecycle (SDLC) under Agile sprints, completing design, testing, and documentation.",
    ],
    skills: ["Python", "PyQt6", "SpeechRecognition", "NLP Pipelines", "System Automation", "Agile SDLC"],
    badge: "AI/ML Production Engineering",
  },
  {
    id: "y-exp-2",
    role: "Data Science & Predictive Modeling Intern",
    organization: "Altair Engineering Pvt. Ltd.",
    location: "Pune, India",
    period: "2024",
    type: "Internship",
    description:
      "Conducted extensive statistical data analysis, exploratory data science, and predictive machine learning on renewable energy datasets.",
    achievements: [
      "Engineered a solar power generation predictive model utilizing multi-variate linear and polynomial regression, achieving a +10% improvement in forecast accuracy.",
      "Designed and deployed an interactive Streamlit simulation dashboard for renewable plant operators to model generation curves against weather variables.",
      "Cleaned, sanitized, and normalized large sensor telemetry time-series datasets using Pandas, NumPy, and Seaborn.",
    ],
    skills: ["Data Science", "Python", "Scikit-learn", "Streamlit", "Regression Modeling", "Pandas", "EDA"],
    badge: "Data Science & Analytics",
  },
  {
    id: "y-exp-3",
    role: "Community Member & AI Technical Contributor",
    organization: "Google Developer Group (GDG Nashik)",
    location: "Nashik, India",
    period: "2023 - Present",
    type: "Leadership & Community",
    description:
      "Active participant and technical contributor in community developer conferences, hackathons, and Google Cloud / GenAI developer sprints.",
    achievements: [
      "Collaborated with industry practitioners on modern Gemini API integrations, LangChain orchestration, and scalable microservice architectures.",
      "Mentored student developers on Python best practices, git collaboration, and machine learning fundamentals.",
    ],
    skills: ["GenAI", "Gemini API", "Community Mentorship", "Google Cloud", "Hackathons"],
    badge: "Developer Community",
  },
  {
    id: "y-exp-4",
    role: "AI Prompting Event Head",
    organization: "Tech Guru Mega Event",
    location: "Nashik, India",
    period: "2024",
    type: "Leadership & Community",
    description:
      "Headed the flagship AI Prompting competition for the regional collegiate technical symposium, orchestrating problem statements for over 200 participants.",
    achievements: [
      "Curated complex multi-turn prompt engineering evaluation criteria testing context optimization, zero-shot/few-shot prompting, and hallucination reduction.",
      "Judged and graded technical submissions using automated scoring rubrics measuring factual accuracy and prompt compactness.",
    ],
    skills: ["Prompt Engineering", "LLM Evaluation", "Event Leadership", "Technical Judging"],
    badge: "Symposium Leadership",
  },
];

export const YASH_SKILLS_MATRIX = [
  {
    category: "AI, GenAI & LLM Orchestration",
    icon: "cpu",
    skills: [
      { name: "Retrieval-Augmented Generation (RAG)", level: "Expert", proficiency: 95 },
      { name: "LangChain & LlamaIndex", level: "Advanced", proficiency: 92 },
      { name: "Gemini API & Groq LPU", level: "Advanced", proficiency: 94 },
      { name: "Prompt Engineering & Few-Shot", level: "Expert", proficiency: 96 },
      { name: "BERT & HuggingFace Transformers", level: "Advanced", proficiency: 90 },
      { name: "ChromaDB & FAISS Vector Stores", level: "Advanced", proficiency: 88 },
    ],
  },
  {
    category: "Computer Vision & Deep Learning",
    icon: "code",
    skills: [
      { name: "PyTorch & PyTorch Lightning", level: "Advanced", proficiency: 90 },
      { name: "TensorFlow & Keras CNNs", level: "Advanced", proficiency: 91 },
      { name: "OpenCV (cv2) Video Telemetry", level: "Expert", proficiency: 94 },
      { name: "Image Segmentation & Augmentation", level: "Advanced", proficiency: 88 },
      { name: "Facial Landmark Estimation", level: "Advanced", proficiency: 89 },
    ],
  },
  {
    category: "Backend Microservices & APIs",
    icon: "server",
    skills: [
      { name: "FastAPI & AsyncIO", level: "Expert", proficiency: 95 },
      { name: "Python 3.11+", level: "Expert", proficiency: 96 },
      { name: "WebSockets & Real-Time Media", level: "Advanced", proficiency: 89 },
      { name: "Pydantic v2 & REST Standards", level: "Expert", proficiency: 92 },
      { name: "Uvicorn / Production Deployments", level: "Advanced", proficiency: 90 },
    ],
  },
  {
    category: "Data Science, Analytics & Stats",
    icon: "tool",
    skills: [
      { name: "Pandas, NumPy & SciPy", level: "Expert", proficiency: 94 },
      { name: "Scikit-Learn Regression & Tuning", level: "Advanced", proficiency: 92 },
      { name: "Streamlit Dashboard Architecture", level: "Advanced", proficiency: 90 },
      { name: "Statistical Hypothesis Testing & EDA", level: "Advanced", proficiency: 88 },
      { name: "Seaborn & Matplotlib", level: "Advanced", proficiency: 90 },
    ],
  },
];

// -------------------------------------------------------------
// 3. COMBINED EXPORTS & COMPATIBILITY HELPERS
// -------------------------------------------------------------
export const ALL_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  ...PRATHMESH_PROJECTS,
  ...YASH_FLAGSHIP_PROJECTS,
  ...YASH_COMPACT_PROJECTS,
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return ALL_PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

// Default export aliases for backwards compatibility
export const PORTFOLIO_HERO = PRATHMESH_PORTFOLIO_HERO;
export const FLAGSHIP_PROJECTS = ALL_PORTFOLIO_PROJECTS;
export const COMPACT_PROJECTS = YASH_COMPACT_PROJECTS;

export const KEY_ACHIEVEMENTS = PRATHMESH_KEY_ACHIEVEMENTS;
export const EXPERIENCE_ITEMS = PRATHMESH_EXPERIENCE_ITEMS;
export const SKILLS_MATRIX = PRATHMESH_SKILLS_MATRIX;

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Full-Stack MERN",
  "React & Frontend",
  "APIs & Utilities",
  "GenAI & LLM Systems",
  "Computer Vision & Deep Learning",
  "Predictive Data Science",
  "Published Research",
] as const;
