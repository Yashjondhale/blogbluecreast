import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy - BlueCrest",
  description: "Privacy policy complying with India's Digital Personal Data Protection Act 2023 and GDPR standards.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};


export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
        Privacy & Data Protection Policy
      </h1>
      <p className="mt-2 text-sm text-slate-500">
        Effective Date: October 8, 2026 &bull; Compliant with India DPDP Act 2023 & GDPR
      </p>

      <div className="mt-8 space-y-8 text-base leading-relaxed text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            1. Overview & Commitment
          </h2>
          <p>
            BlueCrest (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;, operating via bluecreast.in) is dedicated to safeguarding the privacy and digital autonomy of our readers. This Privacy Policy details how we handle information collected during your interaction with our articles, newsletters, and interactive features.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            2. Personal Data We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Newsletter Subscriptions:</strong> Your email address when you voluntarily subscribe to The BlueCrest Dispatch with double opt-in.</li>
            <li><strong>Contact Inquiries:</strong> Your name, email, and message text submitted via our contact desk.</li>
            <li><strong>Aggregated Technical Metrics:</strong> Anonymized telemetry such as browser version, operating system, approximate geographic country (India, US, etc.), and page view counts to assess content performance.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            3. India DPDP Act 2023 Compliance
          </h2>
          <p>
            In accordance with India&apos;s Digital Personal Data Protection Act (DPDP Act, 2023), BlueCrest functions as a Data Fiduciary. We process personal data solely for specific, legitimate, and lawful purposes with reader consent. Readers retain full rights to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Request a summary of personal data held about them.</li>
            <li>Request correction or erasure of personal data.</li>
            <li>Withdraw newsletter or communications consent at any time with a single click.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            4. Cookie Choices & Analytics
          </h2>
          <p>
            We do not track you across unrelated external websites. Non-essential analytical telemetry is gated behind our on-site Cookie Consent banner and is only engaged upon affirmative consent.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            5. Contact Our Data Protection Officer
          </h2>
          <p>
            For data protection inquiries or grievance redressal, email us directly at <a href="mailto:privacy@bluecreast.in" className="text-[#1E90FF] underline">privacy@bluecreast.in</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
