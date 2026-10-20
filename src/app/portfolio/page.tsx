import { Metadata } from "next";
import {
  Download,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import {
  FLAGSHIP_PROJECTS,
  PORTFOLIO_HERO,
} from "@/data/portfolioData";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { PortfolioTerminal } from "@/components/portfolio/PortfolioTerminal";
import { PortfolioSkills } from "@/components/portfolio/PortfolioSkills";
import { PortfolioHonors } from "@/components/portfolio/PortfolioHonors";
import { PortfolioExperience } from "@/components/portfolio/PortfolioExperience";
import { MotionSection } from "@/components/portfolio/MotionComponents";
import { GithubIcon, LinkedinIcon } from "@/components/brand/SocialIcons";

export const metadata: Metadata = {
  title: "Prathmesh Lohar | Full Stack Web Developer & MERN Specialist",
  description:
    "Portfolio of Prathmesh Lohar — Full Stack Web Developer proficient in MERN stack (MongoDB, Express.js, React.js, Node.js) and Java DSA. National Finalist at IIT Bombay NEC 2025 and GWSWeb Intern.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: "Prathmesh Lohar — Full Stack Web Developer Portfolio",
    description:
      "Full Stack MERN web applications, dynamic CMS platforms, IIT Bombay NEC 2025 honors, and Java algorithm problem solving by Prathmesh Lohar.",
    url: `${SITE_URL}/portfolio`,
    siteName: "BlueCreast",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: `${SITE_URL}/prathmesh-lohar.jpg`,
        width: 1200,
        height: 1200,
        alt: "Prathmesh Lohar — Full Stack Web Developer & IIT Bombay NEC 2025 Finalist",
      },
    ],
  },
};

export default function PortfolioPage() {
  // Structured Data (ProfilePage, Person, ItemList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/portfolio#webpage`,
        "url": `${SITE_URL}/portfolio`,
        "name": "Prathmesh Lohar | Full Stack Web Developer Portfolio",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "name": "BlueCreast",
          "url": SITE_URL,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#prathmesh-lohar`,
        "name": PORTFOLIO_HERO.name,
        "jobTitle": "Full Stack Web Developer & MERN Specialist",
        "description": PORTFOLIO_HERO.subheadline,
        "image": `${SITE_URL}${PORTFOLIO_HERO.avatar}`,
        "url": `${SITE_URL}/portfolio`,
        "telephone": PORTFOLIO_HERO.socials.phone,
        "email": PORTFOLIO_HERO.socials.rawEmail,
        "sameAs": [
          PORTFOLIO_HERO.socials.github,
          PORTFOLIO_HERO.socials.linkedin,
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Guru Gobind Singh College of Engineering and Research Centre (SPPU)",
        },
        "knowsAbout": [
          "Full Stack Web Development",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Java Data Structures and Algorithms",
          "REST APIs",
          "Tailwind CSS",
          "Firebase",
        ],
      },
      {
        "@type": "ItemList",
        "name": "Featured Web Engineering Projects by Prathmesh Lohar",
        "itemListElement": FLAGSHIP_PROJECTS.map((proj, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": proj.title,
            "description": proj.summary,
            "applicationCategory": proj.category,
            "url": `${SITE_URL}/portfolio/${proj.slug}`,
          },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Portfolio & Engineering Showcase" }]} />

      {/* 1. Hero Section with Podium Photo & Holographic Aura */}
      <PortfolioHero />

      {/* 2. Interactive Terminal / CLI Playground */}
      <PortfolioTerminal />

      {/* 3. Featured Production Projects & Filter */}
      <div className="mt-20">
        <PortfolioFilter />
      </div>

      {/* 4. National Honors & Key Achievements (IIT Bombay NEC 2025 & GFG) */}
      <PortfolioHonors />

      {/* 5. Animated Skills Matrix */}
      <PortfolioSkills />

      {/* 6. Work Experience, Leadership & Education */}
      <PortfolioExperience />

      {/* 7. Direct Recruiter & Collaboration CTA Banner */}
      <MotionSection className="mt-24 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#0B3D91] via-blue-950 to-slate-950 p-8 sm:p-12 text-white shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Direct Engineering Hiring & Engagement
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-4xl font-bold leading-tight">
              Looking for a Driven Full Stack Developer or MERN Engineer?
            </h3>
            <p className="mt-3 text-sm text-blue-100/90 leading-relaxed">
              Prathmesh Lohar brings proven internship experience from GWSWeb, algorithmic excellence from GeeksforGeeks, and national innovation pedigree from IIT Bombay NEC 2025. Available for Full Stack Web Developer roles, frontend engineering, and backend API integration.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-blue-200">
              <span>📞 {PORTFOLIO_HERO.socials.phone}</span>
              <span>&bull;</span>
              <span>✉️ {PORTFOLIO_HERO.socials.rawEmail}</span>
              <span>&bull;</span>
              <span>📍 Nashik, Maharashtra</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={PORTFOLIO_HERO.resumeUrl}
              download="Prathmesh_Lohar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-colors"
            >
              <Download className="h-4 w-4 text-[#0B3D91]" />
              <span>Download Resume</span>
            </a>

            <a
              href={PORTFOLIO_HERO.socials.email}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email Prathmesh</span>
            </a>

            <a
              href={`tel:${PORTFOLIO_HERO.socials.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-6 py-3.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/30 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Directly</span>
            </a>

            <a
              href={PORTFOLIO_HERO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
