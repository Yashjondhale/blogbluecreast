import { getAllNews, getAllPosts } from "@/sanity/dataService";
import { DEFAULT_SITE_SETTINGS, SITE_URL } from "@/lib/constants";

export async function GET() {
  const [dailyNews, posts] = await Promise.all([
    getAllNews(),
    getAllPosts(),
  ]);

  // Combine daily news and latest posts for Google News crawler
  const newsEntries = [
    ...dailyNews.map((n) => ({
      loc: `${SITE_URL}/news/${n.slug}`,
      title: n.title,
      publishedAt: n.publishedAt,
    })),
    ...posts.slice(0, 5).map((p) => ({
      loc: `${SITE_URL}/blog/${p.slug}`,
      title: p.title,
      publishedAt: p.publishedAt,
    })),
  ];

  const xmlEntries = newsEntries
    .map(
      (item) => `
    <url>
      <loc>${item.loc}</loc>
      <news:news>
        <news:publication>
          <news:name>${DEFAULT_SITE_SETTINGS.siteName}</news:name>
          <news:language>en</news:language>
        </news:publication>
        <news:publication_date>${new Date(item.publishedAt).toISOString()}</news:publication_date>
        <news:title><![CDATA[${item.title}]]></news:title>
      </news:news>
    </url>`
    )
    .join("");

  const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${xmlEntries}
</urlset>`;

  return new Response(newsSitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=1800, stale-while-revalidate",
    },
  });
}
