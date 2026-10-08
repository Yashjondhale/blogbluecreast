"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Editorial Pitch",
    message: "",
    _gotcha: "", // Formspree honeypot field
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _gotcha: formData._gotcha,
          formType: "Contact Desk Inquiry",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thank you for reaching out. An editor will review your inquiry within 24-48 hours.");
        setFormData({ name: "", email: "", subject: "Editorial Pitch", message: "", _gotcha: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setResponseMsg(data?.errors?.[0]?.message || "Failed to deliver message. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network connection error. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
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

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1E90FF] dark:bg-blue-950/60">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Editorial Desk Email</p>
                <a href="mailto:contact@bluecreast.in" className="font-semibold text-slate-900 hover:text-[#1E90FF] dark:text-slate-100">
                  contact@bluecreast.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Press & Partnerships</p>
                <a href="mailto:press@bluecreast.in" className="font-semibold text-slate-900 hover:text-[#1E90FF] dark:text-slate-100">
                  press@bluecreast.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column (Col 6-12) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Message Dispatched
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {responseMsg}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl bg-[#0B3D91] px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Formspree honeypot */}
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                    Inquiry Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                  >
                    <option value="Editorial Pitch">Editorial Pitch / Story Lead</option>
                    <option value="Fact Check / Correction">Fact Check / Correction Request</option>
                    <option value="Sponsorship & Advertising">Sponsorship & Brand Collaboration</option>
                    <option value="Syndication Rights">Content Syndication / Licensing</option>
                    <option value="General Feedback">General Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please include relevant citations, URLs, or background context..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-rose-500 font-medium">{responseMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3D91] py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 disabled:opacity-50 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400"
                >
                  {status === "loading" ? "Submitting..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
