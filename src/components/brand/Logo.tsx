import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showTagline = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <Link
      href="/"
      aria-label="BlueCrest"
      className={cn("group flex items-center gap-2.5 transition-transform hover:opacity-95", className)}
    >
      <div className={cn("relative aspect-square flex-shrink-0", sizeClasses[size])}>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="logoShield" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E90FF" />
              <stop offset="60%" stopColor="#0B3D91" />
              <stop offset="100%" stopColor="#061D47" />
            </linearGradient>
            <linearGradient id="logoAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#1E90FF" />
            </linearGradient>
          </defs>
          <path d="M 32 6 L 56 16 C 56 46 44 56 32 60 C 20 56 8 46 8 16 Z" fill="url(#logoShield)" />
          <path d="M 32 11 L 50 19 C 50 42 41 50 32 54 Z" fill="url(#logoAccent)" opacity="0.9" />
          <path d="M 32 16 L 41 40 L 32 35 L 23 40 Z" fill="#FFFFFF" />
          <circle cx="32" cy="46" r="3" fill="#FFFFFF" />
          <circle cx="32" cy="5" r="2.5" fill="#00D2FF" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={cn(
            "font-serif font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-900 dark:text-white dark:group-hover:text-blue-300",
            size === "sm" ? "text-xl" : size === "lg" ? "text-3xl" : "text-2xl"
          )}
        >
          Blue<span className="text-[#1E90FF]">Crest</span>
        </span>
        {showTagline && (
          <span className="text-[10px] font-semibold tracking-widest text-[#1E90FF] uppercase opacity-90">
            Insights &bull; Discovery
          </span>
        )}
      </div>
    </Link>
  );
}
