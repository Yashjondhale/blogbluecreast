"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, Copy, ExternalLink, HelpCircle, Info, Lightbulb, TriangleAlert } from "lucide-react";
import { PortableTextBlock } from "@/types";
import { slugify } from "@/lib/utils";

interface PortableTextRendererProps {
  blocks: PortableTextBlock[];
}

export function PortableTextRenderer({ blocks }: PortableTextRendererProps) {
  if (!blocks || !blocks.length) return null;

  return (
    <div className="prose prose-slate max-w-none text-slate-800 dark:prose-invert dark:text-slate-200">
      {blocks.map((block) => (
        <RenderBlock key={block._key} block={block} />
      ))}
    </div>
  );
}

function RenderBlock({ block }: { block: PortableTextBlock }) {
  // 1. Custom Callout Block
  if (block._type === "callout" && block.callout) {
    const { tone = "info", title, text } = block.callout;
    const toneStyles: Record<string, string> = {
      info: "border-blue-500/50 bg-blue-50/70 text-blue-950 dark:bg-blue-950/30 dark:text-blue-100",
      tip: "border-emerald-500/50 bg-emerald-50/70 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100",
      warning: "border-amber-500/50 bg-amber-50/70 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100",
      success: "border-emerald-500/50 bg-emerald-50/70 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100",
    };
    const toneIcons: Record<string, React.ReactNode> = {
      info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      tip: <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
      warning: <TriangleAlert className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
      success: <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    };

    return (
      <aside className={`my-6 flex gap-3.5 rounded-xl border-l-4 p-4.5 shadow-xs ${toneStyles[tone]}`}>
        <div className="mt-0.5 flex-shrink-0">{toneIcons[tone]}</div>
        <div className="flex-1 text-sm leading-relaxed">
          {title && <h4 className="mb-1 font-semibold text-inherit">{title}</h4>}
          <p className="m-0 text-inherit/90">{text}</p>
        </div>
      </aside>
    );
  }

  // 2. Custom Code Block
  if (block._type === "codeBlock" && block.codeBlock) {
    return <CodeSnippetBlock snippet={block.codeBlock} />;
  }

  // 3. Custom Table
  if (block._type === "table" && block.table) {
    const { headers, rows } = block.table;
    return (
      <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
          {headers && (
            <thead className="bg-slate-100/80 font-semibold text-slate-900 dark:bg-slate-800/80 dark:text-slate-100">
              <tr>
                {headers.map((h, i) => (
                  <th key={i} className="px-4 py-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="divide-y divide-slate-200/60 bg-white dark:divide-slate-800/60 dark:bg-slate-900/40">
            {rows?.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                {(Array.isArray(row) ? row : (row as { cells?: string[] }).cells || []).map((cell: string, cIdx: number) => (
                  <td key={cIdx} className="px-4 py-3 text-slate-700 dark:text-slate-300">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // 4. Custom FAQ Block
  if (block._type === "faqBlock" && block.faq) {
    return (
      <div className="my-8 space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-[#1E90FF] uppercase">
          <HelpCircle className="h-4 w-4" />
          Frequently Asked Questions
        </div>
        {block.faq.map((item, idx) => (
          <FaqAccordionItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </div>
    );
  }

  // 5. YouTube Video Embed
  if (block._type === "youtube" && block.youtube) {
    const videoUrl = block.youtube.url;
    // Extract video ID
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    const videoId = match ? match[1] : null;

    if (!videoId) return null;

    return (
      <figure className="my-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-md">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={block.youtube.caption || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
        {block.youtube.caption && (
          <figcaption className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
            {block.youtube.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // 6. Image Block
  if (block._type === "image" && block.image) {
    return (
      <figure className="my-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
          <Image
            src={block.image.url}
            alt={block.image.alt || "Article illustration"}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        {block.image.caption && (
          <figcaption className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
            {block.image.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // 7. Standard Text Block (Headings, Paragraphs, Quotes)
  const textContent = block.children?.map((c) => c.text).join("") || "";
  const headingId = slugify(textContent);

  switch (block.style) {
    case "h2":
      return (
        <h2
          id={headingId}
          className="group relative mt-10 mb-4 font-serif text-2xl font-bold tracking-tight text-slate-900 scroll-mt-24 sm:text-3xl dark:text-slate-100"
        >
          <a
            href={`#${headingId}`}
            className="absolute -left-6 top-1 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-[#1E90FF]"
            aria-label={`Link to ${textContent}`}
          >
            #
          </a>
          {textContent}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={headingId}
          className="group relative mt-8 mb-3 font-serif text-xl font-bold tracking-tight text-slate-900 scroll-mt-24 sm:text-2xl dark:text-slate-100"
        >
          <a
            href={`#${headingId}`}
            className="absolute -left-5 top-1 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 hover:text-[#1E90FF]"
            aria-label={`Link to ${textContent}`}
          >
            #
          </a>
          {textContent}
        </h3>
      );
    case "blockquote":
      return (
        <blockquote className="my-6 border-l-4 border-[#1E90FF] pl-4 italic text-slate-700 dark:text-slate-300">
          <p className="text-lg leading-relaxed">{textContent}</p>
        </blockquote>
      );
    case "normal":
    default:
      return (
        <p className="my-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {textContent}
        </p>
      );
  }
}

function CodeSnippetBlock({ snippet }: { snippet: { code: string; language?: string; filename?: string } }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-800 bg-[#071328] text-slate-200 shadow-md">
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#050e1d] px-4 py-2 text-xs">
        <span className="font-mono text-slate-400">{snippet.filename || snippet.language || "code"}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded px-2 py-1 text-slate-400 hover:bg-slate-800 hover:text-white"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs sm:text-sm leading-relaxed text-slate-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur-xs transition-colors dark:border-slate-800/80 dark:bg-slate-900/40">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left font-serif text-base font-semibold text-slate-900 dark:text-slate-100"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="border-t border-slate-100 p-4 text-sm leading-relaxed text-slate-600 dark:border-slate-800/60 dark:text-slate-300">
          {answer}
        </div>
      )}
    </div>
  );
}
