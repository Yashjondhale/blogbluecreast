"use client";

import { useEffect, useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { TOCHeading } from "@/types";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: TOCHeading[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/60",
        className
      )}
    >
      {/* Mobile Accordion Header */}
      <div className="flex items-center justify-between lg:block">
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex w-full items-center justify-between font-serif text-base font-bold text-slate-900 lg:pointer-events-none lg:text-lg dark:text-slate-100"
        >
          <span className="flex items-center gap-2">
            <List className="h-4 w-4 text-[#1E90FF]" />
            Table of Contents
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-slate-500 transition-transform lg:hidden dark:text-slate-400",
              isOpenMobile && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Headings List */}
      <ul
        className={cn(
          "mt-3 space-y-2 text-sm lg:block",
          isOpenMobile ? "block" : "hidden lg:block"
        )}
      >
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li
              key={heading.id}
              className={cn(
                "transition-all",
                heading.level === 3 ? "ml-4" : "ml-0"
              )}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(heading.id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    setActiveId(heading.id);
                    setIsOpenMobile(false);
                  }
                }}
                className={cn(
                  "block py-1 transition-colors hover:text-[#1E90FF]",
                  isActive
                    ? "font-semibold text-[#1E90FF] dark:text-[#38bdf8]"
                    : "text-slate-600 dark:text-slate-400"
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
