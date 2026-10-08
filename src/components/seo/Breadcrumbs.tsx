import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/types";
import { SITE_URL } from "@/lib/constants";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? (item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`) : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center overflow-x-auto py-2 text-sm text-slate-500 dark:text-slate-400">
        <ol className="flex items-center space-x-2 whitespace-nowrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="mx-1.5 h-3.5 w-3.5 flex-shrink-0 text-slate-400 dark:text-slate-600" />
                )}
                {index === 0 ? (
                  <Link
                    href="/"
                    className="flex items-center gap-1 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                    title="Home"
                  >
                    <Home className="h-3.5 w-3.5" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast || !item.href ? (
                  <span
                    aria-current="page"
                    className="font-medium text-slate-900 truncate max-w-[280px] sm:max-w-md dark:text-slate-100"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-blue-600 hover:underline dark:hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
