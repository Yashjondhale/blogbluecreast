"use client";

import dynamic from "next/dynamic";

const Studio = dynamic(
  () => import("./Studio").then((mod) => mod.Studio),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 flex items-center justify-center bg-[#101112] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          <span className="text-xs font-medium text-slate-400">Loading BlueCrest Editorial Desk...</span>
        </div>
      </div>
    ),
  }
);

export default function StudioPage() {
  return <Studio />;
}
