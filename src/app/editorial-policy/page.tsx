import { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Editorial Policy & Standards - BlueCrest",
  description:
    "Our commitment to rigorous reporting, fact-checking methodology, transparent AI disclosures, and corrections protocol.",
  alternates: {
    canonical: `${SITE_URL}/editorial-policy`,
  },
};


export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Editorial Policy" }]} />

      <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
        Editorial Standards & Ethics
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        How we verify information, source data, and preserve journalistic integrity.
      </p>

      <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            1. Fact-Checking & Primary Sourcing
          </h2>
          <p>
            At BlueCrest, accuracy is paramount. We prioritize primary source documents: audited financial statements, peer-reviewed clinical trials, GitHub repositories, official regulatory filings (such as RBI circulars or SEC 10-Ks), and on-the-record interviews with engineering architects and clinicians.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            2. Responsible AI Disclosure
          </h2>
          <p>
            We view artificial intelligence as a supportive research tool for querying documentation and formatting datasets. However, all core narrative analyses, original theses, code verifications, and editorial evaluations are conceived, authored, and fact-checked by human journalists. We do not publish unverified, synthetic, or regurgitated AI summaries.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            3. Corrections & Accountability Protocol
          </h2>
          <p>
            When an error occurs, our policy is prompt, transparent correction. Substantive factual corrections will be updated directly in the article body with an explicit update timestamp and an editorial footnote detailing what was changed and why.
          </p>
          <p className="mt-2">
            To report an error, readers can email our desk directly at <a href="mailto:corrections@bluecreast.in" className="text-[#1E90FF] underline">corrections@bluecreast.in</a>.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            4. Editorial Independence
          </h2>
          <p>
            No advertiser or partner ever dictates editorial conclusions, star ratings, or coverage timing. Our journalists do not hold equity stakes in companies they actively report on without explicit public disclosure.
          </p>
        </section>
      </div>
    </div>
  );
}
