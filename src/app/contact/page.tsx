import { Metadata } from "next";
import { Mail, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactPageJsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "./ContactForm";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Editorial Desk & Press | BlueCrest Journalism",
  description:
    "Get in touch with the BlueCrest newsroom, technical fact-checkers, and editorial leadership. Submit pitches, report corrections, or request syndication.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact BlueCrest | Editorial Desk & Inquiries",
    description:
      "Reach our editorial desk, fact-checkers, and partnerships team directly.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <ContactPageJsonLd />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
        {/* Info Column (Col 1-5) */}
        <div className="lg:col-span-5">
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            Get In Touch
          </span>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100">
            Let&apos;s Connect.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
            Have a story lead, technical correction, press briefing, or syndicated publishing inquiry? We respond to all authentic inquiries within two business days.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-xl border border-slate-200/80 bg-white p-5 dark:border-slate-800/80 dark:bg-slate-900/60">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Editorial Inquiries
              </h2>
              <a
                href="mailto:editorial@bluecreast.in"
                className="mt-1 flex items-center gap-2 text-base font-semibold text-[#1E90FF] hover:underline"
              >
                <Mail className="h-4 w-4" />
                editorial@bluecreast.in
              </a>
              <p className="mt-1 text-xs text-slate-500">
                Story pitches, whistleblower leaks, and fact-checking corrections.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200/80 bg-white p-5 dark:border-slate-800/80 dark:bg-slate-900/60">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Syndication & Corporate Labs
              </h2>
              <a
                href="mailto:partnerships@bluecreast.in"
                className="mt-1 flex items-center gap-2 text-base font-semibold text-[#1E90FF] hover:underline"
              >
                <Mail className="h-4 w-4" />
                partnerships@bluecreast.in
              </a>
              <p className="mt-1 text-xs text-slate-500">
                Sponsored whitepapers, technical labs, and API content licensing.
              </p>
            </div>

            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 text-xs text-slate-600 dark:text-slate-400">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                Security & Whistleblower Protection
              </h3>
              <p>
                We protect confidential sources. For sensitive data or whistleblower dispatches, include your Signal or PGP public key in the message body.
              </p>
            </div>
          </div>
        </div>

        {/* Form Column (Col 6-12) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
