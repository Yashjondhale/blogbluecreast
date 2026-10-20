import { Suspense } from "react";
import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import {
  ALL_PORTFOLIO_PROJECTS,
  PRATHMESH_PORTFOLIO_HERO,
  YASH_PORTFOLIO_HERO,
} from "@/data/portfolioData";
import { PortfolioClientWrapper } from "@/components/portfolio/PortfolioClientWrapper";
import { PortfolioViewMode } from "@/components/portfolio/DualPortfolioHeader";

export const metadata: Metadata = {
  title: "Engineering Portfolios | Prathmesh Lohar & Yash Jondhale | BlueCreast",
  description:
    "Explore the technical portfolios of Prathmesh Lohar (Full Stack Web Developer, MERN Specialist & IIT Bombay NEC 2025 Finalist) and Yash Jondhale (AI/ML Engineer, Published Researcher & GenAI Systems Architect).",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: "Engineering Showcases: Prathmesh Lohar & Yash Jondhale",
    description:
      "Production Full-Stack MERN applications, real-time computer vision, RAG decision support engines, and peer-reviewed AI publications.",
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
      {
        url: `${SITE_URL}/yash-jondhale.jpg`,
        width: 1200,
        height: 1200,
        alt: "Yash Jondhale — AI/ML Engineer & Published IJRTI Researcher",
      },
    ],
  },
};

interface PortfolioPageProps {
  searchParams: Promise<{ profile?: string }>;
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const { profile } = await searchParams;

  let initialProfile: PortfolioViewMode = "dual";
  if (profile === "prathmesh") initialProfile = "prathmesh";
  else if (profile === "yash") initialProfile = "yash";

  // Structured Data Schema (Persons & Software Applications)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/portfolio#webpage`,
        "url": `${SITE_URL}/portfolio`,
        "name": "BlueCreast Technical Portfolios: Prathmesh Lohar & Yash Jondhale",
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
        "name": PRATHMESH_PORTFOLIO_HERO.name,
        "jobTitle": "Full Stack Web Developer & MERN Specialist",
        "description": PRATHMESH_PORTFOLIO_HERO.subheadline,
        "image": `${SITE_URL}${PRATHMESH_PORTFOLIO_HERO.avatar}`,
        "url": `${SITE_URL}/portfolio?profile=prathmesh`,
        "telephone": PRATHMESH_PORTFOLIO_HERO.socials.phone,
        "email": PRATHMESH_PORTFOLIO_HERO.socials.rawEmail,
        "sameAs": [
          PRATHMESH_PORTFOLIO_HERO.socials.github,
          PRATHMESH_PORTFOLIO_HERO.socials.linkedin,
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
        "@type": "Person",
        "@id": `${SITE_URL}/#yash-jondhale`,
        "name": YASH_PORTFOLIO_HERO.name,
        "jobTitle": "AI/ML Engineer & GenAI Systems Architect",
        "description": YASH_PORTFOLIO_HERO.subheadline,
        "image": `${SITE_URL}${YASH_PORTFOLIO_HERO.avatar}`,
        "url": `${SITE_URL}/portfolio?profile=yash`,
        "email": YASH_PORTFOLIO_HERO.socials.rawEmail,
        "sameAs": [
          YASH_PORTFOLIO_HERO.socials.github,
          YASH_PORTFOLIO_HERO.socials.linkedin,
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Guru Gobind Singh College of Engineering and Research Centre (SPPU)",
        },
        "knowsAbout": [
          "Machine Learning",
          "Retrieval-Augmented Generation (RAG)",
          "Large Language Models (LLMs)",
          "Computer Vision & OpenCV",
          "FastAPI Microservices",
          "PyTorch & TensorFlow",
          "Predictive Data Science",
        ],
      },
      {
        "@type": "ItemList",
        "name": "Production Engineering Projects",
        "itemListElement": ALL_PORTFOLIO_PROJECTS.map((proj, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": proj.title,
            "description": proj.summary,
            "applicationCategory": proj.category,
            "url": `${SITE_URL}/portfolio/${proj.slug}`,
            "author": {
              "@type": "Person",
              "name": proj.authorName,
            },
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

      <Suspense
        fallback={
          <div className="py-20 text-center animate-pulse">
            <div className="h-8 w-64 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-4" />
            <div className="h-4 w-96 bg-slate-200 dark:bg-slate-800 rounded mx-auto" />
          </div>
        }
      >
        <PortfolioClientWrapper initialProfile={initialProfile} />
      </Suspense>
    </div>
  );
}
