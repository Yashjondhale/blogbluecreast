import { getAllNews, getAllPosts } from "@/sanity/dataService";
import { DEFAULT_SITE_SETTINGS, SITE_URL } from "@/lib/constants";

export async function GET() {
  const [news, posts] = await Promise.all([
    getAllNews(),
    getAllPosts(),
  ]);

  const allItems = [
    ...news.map((n) => ({
      title: n.title,
      link: `${SITE_URL}/news/${n.slug}`,
      guid: `${SITE_URL}/news/${n.slug}`,
      description: n.summary,
      pubDate: new Date(n.publishedAt).toUTCString(),
      author: `${DEFAULT_SITE_SETTINGS.email} (${n.author?.name || "News Desk"})`,
      category: n.category,
      imageUrl: n.mainImage?.url,
    })),
    ...posts.map((p) => ({
      title: p.title,
      link: `${SITE_URL}/blog/${p.slug}`,
      guid: `${SITE_URL}/blog/${p.slug}`,
      description: p.excerpt,
      pubDate: new Date(p.publishedAt).toUTCString(),
      author: `${DEFAULT_SITE_SETTINGS.email} (${p.author.name})`,
      category: p.category.title,
      imageUrl: p.mainImage.url,
    })),
  ];

  const itemsXml = allItems
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.guid}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.pubDate}</pubDate>
      <author>${item.author}</author>
      <category>${item.category}</category>
      ${item.imageUrl ? `<enclosure url="${item.imageUrl}" length="0" type="image/jpeg" />` : ""}
    </item>`
    )
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${DEFAULT_SITE_SETTINGS.siteName}</title>
    <link>${SITE_URL}</link>
    <description>${DEFAULT_SITE_SETTINGS.description}</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
