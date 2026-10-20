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

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "GenAI & LLM Systems" | "Computer Vision & Deep Learning" | "Predictive Data Science" | "Published Research";
  secondaryCategories?: string[];
  summary: string;
  techStack: string[];
  metrics: ProjectMetric[];
  heroImage: string;
  featured: boolean;
  isFlagship: boolean;
  caseStudy?: CaseStudyArchitecture;
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

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Leadership & Community" | "Academic";
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
}

export const PORTFOLIO_HERO = {
  name: "Yash Jondhale",
  headline: "Machine Learning Engineer, Published AI Researcher & GenAI Systems Architect",
  subheadline:
    "Computer Engineering Graduate (SPPU, 8.34 CGPA) specializing in LLM Orchestration, Retrieval-Augmented Generation (RAG), Predictive Modeling, and Scalable FastAPI Microservices.",
  badges: [
    "Published in IJRTI (ISSN: 2456-3315)",
    "Ex-Intern @ Altair Engineering & Edunet Foundation",
    "6+ Production-Grade AI/ML Systems",
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    university: "Savitribai Phule Pune University (SPPU)",
    cgpa: "8.34 / 10.0",
    status: "Graduated with Distinction",
  },
  socials: {
    github: "https://github.com/Yashjondhale",
    linkedin: "https://www.linkedin.com/in/yashjondhale",
    email: "mailto:yashjondhale1294@gmail.com",
    rawEmail: "yashjondhale1294@gmail.com",
  },
  resumeUrl: "/yash-jondhale-resume.pdf",
  avatar: "/yash-jondhale.jpg",
};

export const PORTFOLIO_CATEGORIES = [
  "All",
  "GenAI & LLM Systems",
  "Computer Vision & Deep Learning",
  "Predictive Data Science",
  "Published Research",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export const FLAGSHIP_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    slug: "nyaya-ai-legal-intelligence",
    title: "NyayaAI — Judiciary Legal Intelligence System",
    subtitle: "RAG-driven judicial decision-support, statutory fact extraction, and bail prediction with explainable AI (XAI)",
    category: "GenAI & LLM Systems",
    secondaryCategories: ["Published Research"],
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
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
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
    id: "proj-2",
    slug: "interviewxpert-ai-platform",
    title: "InterviewXpert — AI-Powered Mock Interview Platform",
    subtitle: "Dynamic resume-to-question LLM orchestration paired with real-time OpenCV computer vision for candidate behavioral telemetry",
    category: "GenAI & LLM Systems",
    secondaryCategories: ["Computer Vision & Deep Learning"],
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
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    caseStudy: {
      problemStatement:
        "Traditional technical mock interview platforms rely on static question banks that fail to adapt to a candidate's specific background or probe deep technical claims made on their resume. Furthermore, candidates lack actionable feedback on non-verbal delivery: eye contact stability, posture fidgeting, speaking tempo, and emotional composure under pressure.",
      solutionArchitecture:
        "InterviewXpert links a dynamic React.js frontend with an asynchronous FastAPI microservice backend over duplex WebSockets. When a resume PDF is uploaded, a custom parsing pipeline extracts skills, projects, and work experience. The Gemini API dynamically designs a progressive 5-stage interview plan. As the candidate answers through their camera and microphone, an OpenCV pipeline calculates facial landmark alignment, eye gaze drift, and head motion stability while speech-to-text streams answers into a semantic evaluation engine.",
      asciiDiagram: `
+---------------------------------------------------------------------------------------+
|                           INTERVIEWXPERT ARCHITECTURE FLOW                            |
+---------------------------------------------------------------------------------------+
|  [Candidate Resume (PDF)] ---> [PDF Parser & Skill Vectorizer]                         |
|                                       |                                               |
|                    +------------------v--------------------+                          |
|                    | Gemini Dynamic Question Orchestration |                          |
|                    +------------------+--------------------+                          |
|                                       |                                               |
|          +----------------------------+----------------------------+                  |
|          | (Real-Time WebSocket Stream during live interview)      |                  |
|  +-------v---------------------+                   +---------------v---------------+  |
|  | Video Stream (Webcam)       |                   | Audio Stream (Microphone)     |  |
|  +-------+---------------------+                   +---------------+---------------+  |
|          |                                                         |                  |
|  +-------v---------------------+                   +---------------v---------------+  |
|  | OpenCV Facial Landmark      |                   | Whisper STT & Semantic        |  |
|  | & Eye-Gaze Drift Detector   |                   | Technical Answer Evaluator    |  |
|  +-------+---------------------+                   +---------------+---------------+  |
|          |                                                         |                  |
|          +----------------------------+----------------------------+                  |
|                                       |                                               |
|                       +---------------v---------------+                               |
|                       | Holistic Candidate Scorecard  |                               |
|                       | (Code, Delivery, Confidence)  |                               |
|                       +-------------------------------+                               |
+---------------------------------------------------------------------------------------+
`,
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
    id: "proj-3",
    slug: "omega-ai-voice-assistant",
    title: "OMEGA — End-to-End AI Voice Assistant",
    subtitle: "Event-driven desktop voice assistant automating operating system commands, search pipelines, and productivity workflows",
    category: "GenAI & LLM Systems",
    secondaryCategories: [],
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
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    caseStudy: {
      problemStatement:
        "Developers and power users navigate fragmented desktop environments, repeatedly switching contexts to run shell commands, launch local IDEs, query weather conditions, search documentation, or configure agenda reminders. Conventional voice assistants are cloud-locked, leak telemetry, and cannot execute low-level OS operations.",
      solutionArchitecture:
        "OMEGA was architected as an event-driven desktop micro-agent utilizing Python and PyQt6. An asynchronous background thread continuously samples microphone input via SpeechRecognition, converting spoken acoustic waveforms into structured textual transcripts. A rule-based and NLP intent classification router parses commands, executing local OS scripts or invoking external REST APIs. Feedback is rendered simultaneously through an animated PyQt6 UI and synthesized offline speech via pyttsx3.",
      asciiDiagram: `
+---------------------------------------------------------------------------------------+
|                               OMEGA ARCHITECTURE PIPELINE                             |
+---------------------------------------------------------------------------------------+
|  [Voice Command Audio] ---> [SpeechRecognition Listener (PyAudio)]                    |
|                                       |                                               |
|                        +--------------v---------------+                               |
|                        | Async NLP Intent Classifier  |                               |
|                        +--------------+---------------+                               |
|                                       |                                               |
|        +------------------------------+------------------------------+                |
|        |                                                             |                |
|  +-----v----------------------+                            +---------v-------------+  |
|  | System Automation Tier     |                            | External API Tier     |  |
|  | (Shell, Apps, Files, OS)  |                            | (Weather, Search, UI) |  |
|  +-----+----------------------+                            +---------+-------------+  |
|        |                                                             |                |
|        +------------------------------+------------------------------+                |
|                                       |                                               |
|                       +---------------v---------------+                               |
|                       | PyQt6 Event Dispatcher &      |                               |
|                       | Offline pyttsx3 TTS Engine    |                               |
|                       +-------------------------------+                               |
+---------------------------------------------------------------------------------------+
`,
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
    id: "proj-4",
    slug: "solar-power-prediction-model",
    title: "Solar Power Generation Forecasting Engine",
    subtitle: "Predictive regression modeling and exploratory data science pipeline analyzing multi-sensor weather & irradiation telemetry",
    category: "Predictive Data Science",
    secondaryCategories: [],
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
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    caseStudy: {
      problemStatement:
        "Grid-tied solar photovoltaic installations suffer from unpredictable energy delivery due to sudden shifts in cloud cover, ambient temperature, and angle of solar irradiation. Inaccurate day-ahead generation estimates lead to expensive spinning reserve activations and grid frequency instability.",
      solutionArchitecture:
        "Developed during the Data Science Internship at Altair Engineering. The pipeline ingests multi-sensor historical telemetry from solar plant inverters and weather monitoring stations. Conducted statistical Exploratory Data Analysis (EDA), Pearson correlation mapping, and feature transformations (polynomial irradiation terms). Built multiple regression models comparing Linear, Ridge, Lasso, and Random Forest algorithms before packaging the top-performing model into an interactive Streamlit dashboard.",
      asciiDiagram: `
+---------------------------------------------------------------------------------------+
|                       SOLAR FORECASTING DATA PIPELINE                                 |
+---------------------------------------------------------------------------------------+
|  [Weather & Inverter Sensors] ---> [Pandas Ingestion & Outlier Winsorization]         |
|                                                   |                                   |
|                         +-------------------------v-------------------------+         |
|                         | Feature Engineering: Irradiation x Temp Covariance|         |
|                         +-------------------------+-------------------------+         |
|                                                   |                                   |
|                         +-------------------------v-------------------------+         |
|                         | Model Training & Hyperparameter Tuning (K-Fold)   |         |
|                         | (Linear Regression vs Ridge vs Random Forest)     |         |
|                         +-------------------------+-------------------------+         |
|                                                   |                                   |
|                         +-------------------------v-------------------------+         |
|                         | Interactive Streamlit Web UI & Live Prediction    |         |
|                         +---------------------------------------------------+         |
+---------------------------------------------------------------------------------------+
`,
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
    id: "proj-5",
    slug: "plant-disease-detection-cnn",
    title: "Real-Time Plant Disease Detection System",
    subtitle: "Computer vision image classification pipeline utilizing fine-tuned CNN architectures for automated agricultural pathology",
    category: "Computer Vision & Deep Learning",
    secondaryCategories: [],
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
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: true,
    isFlagship: true,
    caseStudy: {
      problemStatement:
        "Agronomists and smallholder farmers frequently diagnose crop leaf diseases too late, resulting in catastrophic yield destruction. Visual diagnosis by human specialists is slow, inaccessible in rural farming regions, and subjective.",
      solutionArchitecture:
        "Built a deep Convolutional Neural Network utilizing TensorFlow and Keras trained on thousands of plant leaf photographs from the PlantVillage corpus. Implemented aggressive image augmentation (random rotations, horizontal flips, Gaussian blurs, and brightness variations) to immunize the model against erratic real-world field lighting conditions. Trained with Adam optimizer and categorical cross-entropy, reaching high precision across 38 categories including tomato blight, apple scab, and corn rust.",
      asciiDiagram: `
+---------------------------------------------------------------------------------------+
|                           PLANT DISEASE CNN PIPELINE                                  |
+---------------------------------------------------------------------------------------+
|  [Leaf Image Capture] ---> [OpenCV Preprocessing & Adaptive Rescaling]               |
|                                       |                                               |
|                    +------------------v--------------------+                          |
|                    | Data Augmentation Pipeline (TensorFlow)|                         |
|                    +------------------+--------------------+                          |
|                                       |                                               |
|                    +------------------v--------------------+                          |
|                    | Deep CNN Feature Extraction           |                          |
|                    | [Conv2D -> BatchNorm -> MaxPooling] x4|                          |
|                    +------------------+--------------------+                          |
|                                       |                                               |
|                    +------------------v--------------------+                          |
|                    | Dense Classification Head             |                          |
|                    | [Dropout 0.5 -> Dense Softmax (38)]   |                          |
|                    +------------------+--------------------+                          |
|                                       |                                               |
|                    +------------------v--------------------+                          |
|                    | Pathology Diagnosis + Remedy Guide    |                          |
|                    +---------------------------------------+                          |
+---------------------------------------------------------------------------------------+
`,
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

export const COMPACT_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-compact-1",
    slug: "garbage-classification-cnn",
    title: "Garbage Classification System (CNN)",
    subtitle: "Automated municipal waste sorting using deep convolutional neural networks",
    category: "Computer Vision & Deep Learning",
    summary:
      "Trained a high-precision multi-class classification model using TensorFlow and Keras to automatically categorize waste into recyclable, biodegradable, and hazardous streams for smart city recycling plants.",
    techStack: ["TensorFlow", "Keras", "CNN", "OpenCV", "Python"],
    metrics: [
      { label: "Classes", value: "6 Waste Categories" },
      { label: "Accuracy", value: "92.3% Test Score" },
    ],
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: false,
    isFlagship: false,
  },
  {
    id: "proj-compact-2",
    slug: "spam-mail-classification-nlp",
    title: "Spam Mail Classification (NLP)",
    subtitle: "Natural language text classification engine for predatory message filtering",
    category: "GenAI & LLM Systems",
    summary:
      "Built a high-throughput email spam filtering microservice utilizing TF-IDF n-gram vectorization and Naive Bayes / SVM classifiers, achieving 98.5% precision against phishing datasets.",
    techStack: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "FastAPI"],
    metrics: [
      { label: "Precision", value: "98.5% Spam Precision" },
      { label: "Latency", value: "<15ms Per Email" },
    ],
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: false,
    isFlagship: false,
  },
  {
    id: "proj-compact-3",
    slug: "ecommerce-product-recommendation",
    title: "E-Commerce Product Recommendation System",
    subtitle: "Hybrid collaborative filtering and content-based recommendation engine",
    category: "Predictive Data Science",
    summary:
      "Engineered an item-to-item and user-to-user collaborative filtering engine using sparse matrix factorization and Cosine Similarity over user transaction histories to maximize checkout cart conversion.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Surprise Library"],
    metrics: [
      { label: "Recommendation Diversity", value: "+34% Catalog Reach" },
      { label: "Algorithm", value: "Matrix Factorization (SVD)" },
    ],
    heroImage: "/images/blog/invisible-war-hft-retail-options.jpg",
    featured: false,
    isFlagship: false,
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

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-1",
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
    id: "exp-2",
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
    id: "exp-3",
    role: "Community Member & AI Technical Contributor",
    organization: "Google Developer Group (GDG) Nashik",
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
    id: "exp-4",
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
