export interface ProjectMetric {
  label: string;
  value: string;
}

export interface CaseStudyArchitecture {
  problemStatement: string;
  solutionArchitecture: string;
  keyInnovations: string[];
  benchmarks: { metric: string; before: string; after: string; impact: string }[];
  techStackDetailed: { category: string; technologies: string[] }[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Full-Stack MERN" | "React & Frontend" | "APIs & Utilities";
  secondaryCategories?: string[];
  summary: string;
  techStack: string[];
  metrics: ProjectMetric[];
  heroImage: string;
  featured: boolean;
  isFlagship: boolean;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: CaseStudyArchitecture;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Leadership & Community" | "Certification & Training";
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
}

export const PORTFOLIO_HERO = {
  name: "Prathmesh Lohar",
  headline: "Full Stack Web Developer, MERN Stack Specialist & Problem Solver",
  subheadline:
    "Engineering Student (SPPU, 7.40 CGPA). National Finalist in NEC 2025 at IIT Bombay, GeeksforGeeks Algorithm Awardee, and Ex-Junior Web Developer Intern at GWSWeb building responsive web apps and AI-driven platforms.",
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
};

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Full-Stack MERN",
  "React & Frontend",
  "APIs & Utilities",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const FLAGSHIP_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    slug: "pixelflow-dynamic-cms",
    title: "PixelFlow — Dynamic Media & Content Management Platform",
    subtitle: "Enterprise-grade dynamic website with granular admin panel and photo description workflows",
    category: "Full-Stack MERN",
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
    id: "proj-2",
    slug: "responsive-news-portal",
    title: "PulseNews — High-Performance Digital News Portal",
    subtitle: "Modern React-powered news portal with dynamic content rendering, Cloudinary media delivery, and Firebase sync",
    category: "React & Frontend",
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
    id: "proj-3",
    slug: "taskflow-pro-web-app",
    title: "TaskFlow Pro — Modern Task & Workflow Management App",
    subtitle: "Intuitive task organizer with categorization, real-time persistence, and clean state handling",
    category: "Full-Stack MERN",
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
    id: "proj-4",
    slug: "atmosphere-weather-forecast-app",
    title: "AtmoSphere — Real-Time Weather Intelligence Engine",
    subtitle: "Global meteorological application integrating OpenWeatherMap API for live climate forecasting",
    category: "APIs & Utilities",
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

export const COMPACT_PROJECTS = FLAGSHIP_PROJECTS.slice(2);

export const KEY_ACHIEVEMENTS = [
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

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-1",
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
    id: "exp-2",
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
    id: "exp-3",
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
    id: "exp-4",
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
    id: "exp-5",
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
    id: "exp-6",
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

export const SKILLS_MATRIX = [
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
