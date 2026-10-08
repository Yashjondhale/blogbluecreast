"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export function Studio() {
  return (
    <div className="fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-[#101112]">
      <NextStudio config={config} />
    </div>
  );
}
