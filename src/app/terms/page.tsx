import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service - BlueCrest",
  description: "Terms and conditions governing the use of the BlueCrest website and publications.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};


export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Last Updated: October 8, 2026
      </p>

      <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By visiting, accessing, or reading content on bluecreast.in (&quot;BlueCrest&quot;), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            2. Intellectual Property & Copyright
          </h2>
          <p>
            All original analyses, articles, architectural diagrams, software code samples, and graphics published on BlueCrest are the exclusive intellectual property of BlueCrest and its credentialed authors, protected under Indian and international copyright treaties. Fair use quoting is permitted provided clear attribution and a direct link to the original article canonical URL is provided.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            3. Disclaimer of Informational Use
          </h2>
          <p>
            All content published on BlueCrest is strictly for general informational, educational, and journalistic purposes. It does not constitute professional financial, medical, or legal counsel.
          </p>
        </section>
      </div>
    </div>
  );
}
