import { Metadata } from "next";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Editorial & Legal Disclaimer - BlueCrest",
  description: "Financial, medical, and general educational disclaimers for BlueCrest articles.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
};


export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
        Disclaimers & Disclosures
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Important notice regarding Your Money or Your Life (YMYL) content &bull; October 2026
      </p>

      <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        {/* Financial Disclaimer */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
          <div className="flex items-center gap-2 font-serif text-lg font-bold text-amber-900 dark:text-amber-200">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Financial & Investment Disclaimer
          </div>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-300/90">
            Articles in our Finance and Markets sections are published for educational and journalistic reporting purposes only. Nothing on BlueCrest constitutes investment advice, tax guidance, or a solicitation to buy or sell securities, mutual funds, or digital assets. Investing in financial markets involves risk of loss. Always consult a registered investment adviser (SEBI RIA in India, or equivalent authority in your jurisdiction) before executing financial transactions.
          </p>
        </div>

        {/* Medical Disclaimer */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
          <div className="flex items-center gap-2 font-serif text-lg font-bold text-blue-900 dark:text-blue-200">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
            Medical & Health Disclaimer
          </div>
          <p className="mt-2 text-sm leading-relaxed text-blue-900/90 dark:text-blue-300/90">
            Health and wellness articles on BlueCrest review published peer-reviewed clinical studies and physiological protocols. They are not intended as a substitute for professional medical diagnosis, advice, or treatment by a licensed physician. Never disregard professional medical counsel or delay seeking it because of something you read on this website.
          </p>
        </div>

        {/* Affiliate Disclosure */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Affiliate Links & Sponsorship Transparency
          </h2>
          <p>
            When we review hardware, software, or tools, we may occasionally include affiliate links. If you purchase through these links, BlueCrest may earn a modest commission at zero additional cost to you. We strictly review products independently and never recommend tools solely for affiliate compensation.
          </p>
        </section>
      </div>
    </div>
  );
}
