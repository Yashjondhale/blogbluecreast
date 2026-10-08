import { cn } from "@/lib/utils";

interface AdSlotProps {
  slotId?: string;
  className?: string;
  format?: "banner" | "in-article" | "sidebar";
}

export function AdSlot({
  slotId = "default-slot",
  className,
  format = "in-article",
}: AdSlotProps) {
  const heightClasses = {
    banner: "min-h-[120px] max-h-[140px]",
    "in-article": "min-h-[250px] max-h-[280px]",
    sidebar: "min-h-[300px] max-h-[350px]",
  };

  return (
    <aside
      aria-label="Advertisement placeholder"
      data-ad-slot={slotId}
      className={cn(
        "my-8 flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4 text-center transition-colors dark:border-slate-800 dark:bg-slate-900/50",
        heightClasses[format],
        className
      )}
    >
      <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase dark:text-slate-500">
        Advertisement
      </span>
      <p className="mt-1 text-xs text-slate-400 dark:text-slate-600">
        Reserved CLS-Protected Ad Unit &bull; Sponsor Placements
      </p>
    </aside>
  );
}
