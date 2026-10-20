"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Code2,
  Cpu,
  ExternalLink,
  Layers,
  Sparkles,
  Terminal,
  User,
} from "lucide-react";
import { GithubIcon } from "@/components/brand/SocialIcons";
import {
  ALL_PORTFOLIO_PROJECTS,
  PortfolioCategory,
  PortfolioProject,
} from "@/data/portfolioData";

interface PortfolioFilterProps {
  initialAuthorFilter?: "all" | "prathmesh" | "yash";
  showAuthorToggle?: boolean;
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

export function PortfolioFilter({
  initialAuthorFilter = "all",
  showAuthorToggle = true,
  title = "Featured Production Projects & Case Studies",
  subtitle = "Explore verified full-stack applications, enterprise RAG architectures, and predictive machine learning models.",
  badgeText = "Production Engineering Implementations",
}: PortfolioFilterProps) {
  const [authorFilter, setAuthorFilter] = useState<"all" | "prathmesh" | "yash">(
    initialAuthorFilter
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Filter projects by author and category
  const filteredProjects = ALL_PORTFOLIO_PROJECTS.filter((project) => {
    // Author filter
    if (authorFilter !== "all" && project.author !== authorFilter) {
      return false;
    }
    // Category filter
    if (activeCategory === "All") return true;
    if (project.category === activeCategory) return true;
    if (project.secondaryCategories?.includes(activeCategory as PortfolioCategory)) return true;
    return false;
  });

  // Calculate dynamic categories available for current author
  const availableCategories = [
    "All",
    ...Array.from(
      new Set(
        ALL_PORTFOLIO_PROJECTS.filter(
          (p) => authorFilter === "all" || p.author === authorFilter
        ).map((p) => p.category)
      )
    ),
  ];

  return (
    <section id="case-studies" className="scroll-mt-24">
      {/* Category & Engineer Filter Tabs Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col gap-6 border-b border-slate-200 pb-6 dark:border-slate-800"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5" />
              {badgeText}
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              {title}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          </div>

          {/* Engineer Selector (when enabled) */}
          {showAuthorToggle && (
            <div className="inline-flex items-center p-1 rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 self-start lg:self-auto shadow-2xs">
              <button
                type="button"
                onClick={() => {
                  setAuthorFilter("all");
                  setActiveCategory("All");
                }}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  authorFilter === "all"
                    ? "bg-white text-slate-950 shadow-xs dark:bg-slate-800 dark:text-white"
                    : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                All Projects ({ALL_PORTFOLIO_PROJECTS.length})
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthorFilter("prathmesh");
                  setActiveCategory("All");
                }}
                className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  authorFilter === "prathmesh"
                    ? "bg-[#0B3D91] text-white shadow-xs dark:bg-[#1E90FF] dark:text-slate-950"
                    : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>Prathmesh Lohar (4)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthorFilter("yash");
                  setActiveCategory("All");
                }}
                className={`flex items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  authorFilter === "yash"
                    ? "bg-purple-600 text-white shadow-xs dark:bg-purple-500 dark:text-slate-950"
                    : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>Yash Jondhale (8)</span>
              </button>
            </div>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {availableCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-950"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Flagship Projects Grid with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${authorFilter}-${activeCategory}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8 space-y-10"
        >
          {filteredProjects.map((project, idx) => (
            <FlagshipProjectCard key={project.id} project={project} index={idx} />
          ))}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-dashed border-slate-200 p-12 text-center dark:border-slate-800"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                No projects found in this category filter. Try selecting &quot;All&quot;.
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function getSnippetForProject(slug: string) {
  switch (slug) {
    case "pixelflow-dynamic-cms":
      return {
        filename: "pixelFlowController.js",
        badge: "Express.js REST API",
        code: `// GWSWeb Client CMS Controller
router.post('/api/media/upload', async (req, res) => {
  const { title, description, tags, mediaUrl } = req.body;
  const entry = await MediaModel.create({
    title,
    description,
    tags,
    mediaUrl,
    author: req.user._id,
    createdAt: new Date()
  });
  return res.status(201).json({ success: true, entry });
});`,
      };
    case "responsive-news-portal":
      return {
        filename: "useNewsFeed.jsx",
        badge: "React + Cloudinary",
        code: `// Cloudinary AVIF/WebP Auto-Transform
export function NewsCard({ article }) {
  const optimizedImg = buildUrl(article.imageId, {
    transformations: { format: 'auto', quality: 'auto', width: 800 }
  });
  return (
    <article className="news-item">
      <img src={optimizedImg} alt={article.title} loading="lazy" />
      <h3>{article.headline}</h3>
    </article>
  );
}`,
      };
    case "taskflow-pro-web-app":
      return {
        filename: "taskStateManager.js",
        badge: "Offline Sync Engine",
        code: `// LocalStorage + Cloud Real-time Persistence
export function syncTasks(newTask) {
  const local = JSON.parse(localStorage.getItem('tasks') || '[]');
  const updated = [newTask, ...local];
  localStorage.setItem('tasks', JSON.stringify(updated));
  if (navigator.onLine) {
    firebaseDb.ref('tasks/' + newTask.id).set(newTask);
  }
}`,
      };
    case "atmosphere-weather-forecast-app":
      return {
        filename: "weatherService.js",
        badge: "OpenWeatherMap API",
        code: `// Real-Time Asynchronous Fetch
export async function getCityWeather(cityName) {
  const endpoint = \`https://api.openweathermap.org/data/2.5/weather?q=\${cityName}&units=metric&appid=\${API_KEY}\`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error('City not found');
  const data = await response.json();
  return sanitizeWeatherData(data);
}`,
      };
    case "nyaya-ai-legal-intelligence":
      return {
        filename: "ragEngine.py",
        badge: "FastAPI + BERT + Groq",
        code: `# Hybrid Cosine + BM25 Legal Precedent Retrieval
@router.post("/api/v1/predict-bail")
async def evaluate_bail_risk(case_docket: CaseDocketSchema):
    doc_hash = hashlib.sha256(case_docket.text.encode()).hexdigest()
    query_vector = embed_model.encode(case_docket.facts)
    precedents = vector_store.similarity_search_by_vector(query_vector, k=5)
    bail_prob = classifier.predict_proba(query_vector)
    return {"doc_hash": doc_hash, "bail_prob": bail_prob, "precedents": precedents}`,
      };
    case "interviewxpert-ai-platform":
      return {
        filename: "telemetryStream.py",
        badge: "FastAPI + OpenCV",
        code: `# Real-Time Facial Landmark & Eye-Gaze Stream
async def process_video_frame(frame_bytes: bytes):
    np_img = np.frombuffer(frame_bytes, np.uint8)
    frame = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
    landmarks = face_mesh.process(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
    gaze_ratio = compute_gaze_drift(landmarks.multi_face_landmarks[0])
    return {"gaze_stability": gaze_ratio, "confidence": calculate_composure(frame)}`,
      };
    case "omega-ai-voice-assistant":
      return {
        filename: "voiceDispatcher.py",
        badge: "Python + PyQt6 + AsyncIO",
        code: `# Asynchronous Voice Command Intent Routing
class VoiceWorker(QThread):
    command_detected = pyqtSignal(dict)
    def run(self):
        with sr.Microphone() as source:
            audio = recognizer.listen(source, phrase_time_limit=5)
            transcript = recognizer.recognize_google(audio)
            intent = parse_system_intent(transcript)
            self.command_detected.emit(intent)`,
      };
    case "solar-power-prediction-model":
      return {
        filename: "solarForecaster.py",
        badge: "Scikit-Learn + Streamlit",
        code: `# Covariance Irradiation Telemetry Regression
def predict_generation(ambient_temp, module_temp, irradiation):
    features = np.array([[ambient_temp, module_temp, irradiation, irradiation**2]])
    predicted_kw = trained_pipeline.predict(scaler.transform(features))
    return float(np.clip(predicted_kw[0], 0, None))`,
      };
    case "plant-disease-detection-cnn":
      return {
        filename: "pathologyModel.py",
        badge: "TensorFlow / Keras CNN",
        code: `# Deep 38-Class Leaf Disease Classification
def classify_crop_pathology(image_tensor):
    normalized = tf.cast(image_tensor, tf.float32) / 255.0
    predictions = cnn_model.predict(tf.expand_dims(normalized, axis=0))
    class_idx = np.argmax(predictions[0])
    return {"disease": CLASS_LABELS[class_idx], "confidence": float(predictions[0][class_idx])}`,
      };
    default:
      return {
        filename: "inferenceService.py",
        badge: "Python Microservice",
        code: `# Production Inference Pipeline
def execute_pipeline(input_payload):
    sanitized = preprocess_features(input_payload)
    output = model.predict(sanitized)
    return format_results(output)`,
      };
  }
}

function FlagshipProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const snippet = getSnippetForProject(project.slug);
  const isPrathmesh = project.author === "prathmesh";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.08, 0.25),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className={`group overflow-hidden rounded-3xl border bg-white shadow-xs transition-all hover:shadow-xl dark:bg-slate-900/50 ${
        isPrathmesh
          ? "border-slate-200/80 hover:border-[#1E90FF]/40 dark:border-slate-800"
          : "border-slate-200/80 hover:border-purple-500/40 dark:border-slate-800"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left / Content Info */}
        <div
          className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
            isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
          }`}
        >
          <div>
            {/* Header Tags: Author Badge + Category */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                  isPrathmesh
                    ? "bg-blue-50 text-[#0B3D91] dark:bg-blue-950/60 dark:text-cyan-300"
                    : "bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300"
                }`}
              >
                <User className="h-3 w-3" />
                {project.authorName}
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                <Sparkles className="h-3 w-3 text-[#1E90FF]" />
                {project.category}
              </span>

              {project.isFlagship && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                  <Award className="h-3 w-3" />
                  Flagship
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3
              className={`font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 transition-colors ${
                isPrathmesh
                  ? "group-hover:text-[#1E90FF]"
                  : "group-hover:text-purple-600 dark:group-hover:text-purple-400"
              }`}
            >
              <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>

            {/* Narrative Summary */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.summary}
            </p>

            {/* Key Metrics Dashboard */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              {project.metrics.map((metric, mIdx) => (
                <div key={mIdx}>
                  <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    {metric.label}
                  </div>
                  <div
                    className={`mt-0.5 text-xs sm:text-sm font-bold ${
                      isPrathmesh
                        ? "text-[#0B3D91] dark:text-[#1E90FF]"
                        : "text-purple-700 dark:text-purple-300"
                    }`}
                  >
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200/70 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <Link
              href={`/portfolio/${project.slug}`}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-colors ${
                isPrathmesh
                  ? "bg-[#0B3D91] hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400"
                  : "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:text-slate-950 dark:hover:bg-purple-400"
              }`}
            >
              <span>Explore Case Study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Right / Visual Code Preview Side */}
        <div
          className={`relative bg-gradient-to-br p-6 sm:p-8 flex flex-col justify-between text-white ${
            isPrathmesh
              ? "from-slate-950 via-slate-900 to-[#0B3D91]/90"
              : "from-slate-950 via-slate-900 to-purple-950/90"
          } ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}
        >
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between text-xs text-blue-200/70 border-b border-white/10 pb-3">
              <span className="font-mono flex items-center gap-1.5 text-cyan-300">
                <Terminal className="h-3.5 w-3.5 text-[#1E90FF]" />
                {snippet.filename}
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
                {snippet.badge}
              </span>
            </div>

            {/* Simulated Architecture Code Snippet */}
            <div className="rounded-xl bg-black/60 p-4 font-mono text-[11px] leading-relaxed text-blue-100/90 backdrop-blur-xs border border-white/5 overflow-x-auto">
              <pre className="text-slate-300 whitespace-pre">{snippet.code.trim()}</pre>
            </div>

            {/* Key Innovations */}
            {project.caseStudy?.keyInnovations && (
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                  Engineering Highlights
                </span>
                <ul className="mt-2 space-y-1.5 text-xs text-blue-100/80">
                  {project.caseStudy.keyInnovations.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1E90FF] mt-0.5">•</span>
                      <span className="line-clamp-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-200/80">
            <span className="font-medium text-slate-300">
              Lead: {project.authorName}
            </span>
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:underline"
            >
              Full Case Study <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
