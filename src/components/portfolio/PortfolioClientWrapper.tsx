"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  DualPortfolioHeader,
  PortfolioViewMode,
} from "./DualPortfolioHeader";
import { DualPartitionShowcase } from "./DualPartitionShowcase";
import { PrathmeshPortfolioShowcase } from "./PrathmeshPortfolioShowcase";
import { YashPortfolioShowcase } from "./YashPortfolioShowcase";

interface PortfolioClientWrapperProps {
  initialProfile?: PortfolioViewMode;
}

export function PortfolioClientWrapper({
  initialProfile = "dual",
}: PortfolioClientWrapperProps) {
  const searchParams = useSearchParams();
  const paramProfile = searchParams.get("profile");

  const [viewMode, setViewMode] = useState<PortfolioViewMode>(() => {
    if (paramProfile === "prathmesh") return "prathmesh";
    if (paramProfile === "yash") return "yash";
    if (paramProfile === "dual" || paramProfile === "all") return "dual";
    return initialProfile;
  });

  // Keep in sync if search params change externally
  useEffect(() => {
    if (paramProfile === "prathmesh") {
      setViewMode("prathmesh");
    } else if (paramProfile === "yash") {
      setViewMode("yash");
    } else if (paramProfile === "dual" || paramProfile === "all") {
      setViewMode("dual");
    }
  }, [paramProfile]);

  const handleSelectViewMode = (mode: PortfolioViewMode) => {
    setViewMode(mode);
    // Update browser URL query param cleanly without full reload
    const url = new URL(window.location.href);
    if (mode === "dual") {
      url.searchParams.delete("profile");
    } else {
      url.searchParams.set("profile", mode);
    }
    window.history.pushState({}, "", url.toString());
  };

  const getBreadcrumbLabel = () => {
    if (viewMode === "prathmesh") return "Prathmesh Lohar Portfolio (Full Stack)";
    if (viewMode === "yash") return "Yash Jondhale Portfolio (AI/ML & GenAI)";
    return "Engineering Portfolios & Innovation Showcase";
  };

  return (
    <div>
      <Breadcrumbs items={[{ label: getBreadcrumbLabel() }]} />

      {/* Top Interactive Dual-Portfolio Partition Grid & Segmented Switcher */}
      <DualPortfolioHeader
        viewMode={viewMode}
        onSelectViewMode={handleSelectViewMode}
      />

      {/* Dynamic View Body */}
      {viewMode === "dual" && <DualPartitionShowcase />}
      {viewMode === "prathmesh" && <PrathmeshPortfolioShowcase />}
      {viewMode === "yash" && <YashPortfolioShowcase />}
    </div>
  );
}
