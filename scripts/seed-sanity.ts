/**
 * BlueCrest Sanity CMS Seeding Script
 * Run with: npm run seed
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN in .env.local
 */

import { createClient } from "@sanity/client";
import { MOCK_AUTHORS, MOCK_CATEGORIES, MOCK_NEWS, MOCK_POSTS, MOCK_TAGS } from "../src/sanity/mockData";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.log("⚠️  NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN missing.");
  console.log("ℹ️  BlueCrest already ships with offline-first mock dataset enabled.");
  console.log("ℹ️  To push data to your live Sanity project, add both tokens in .env.local and re-run.");
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-01",
  token,
  useCdn: false,
});

async function seed() {
  console.log("🚀 Starting BlueCrest Sanity CMS seed...");

  try {
    // 1. Seed Categories
    console.log("📁 Seeding categories...");
    for (const cat of MOCK_CATEGORIES) {
      await client.createOrReplace({
        _id: cat._id || `cat-${cat.slug}`,
        _type: "category",
        title: cat.title,
        slug: { _type: "slug", current: cat.slug },
        description: cat.description,
        color: cat.color,
      });
    }

    // 2. Seed Tags
    console.log("🏷️  Seeding tags...");
    for (const tag of MOCK_TAGS) {
      await client.createOrReplace({
        _id: tag._id || `tag-${tag.slug}`,
        _type: "tag",
        title: tag.title,
        slug: { _type: "slug", current: tag.slug },
      });
    }

    // 3. Seed Authors
    console.log("✍️  Seeding authors with E-E-A-T credentials...");
    for (const author of MOCK_AUTHORS) {
      await client.createOrReplace({
        _id: author._id || `author-${author.slug}`,
        _type: "author",
        name: author.name,
        slug: { _type: "slug", current: author.slug },
        role: author.role,
        bio: author.bio,
        expertise: author.expertise,
        credentials: author.credentials,
        socials: author.socials,
      });
    }

    // 4. Seed Posts
    console.log("📰 Seeding 10 multi-niche articles with rich blocks...");
    for (const post of MOCK_POSTS) {
      await client.createOrReplace({
        _id: post._id || `post-${post.slug}`,
        _type: "post",
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        excerpt: post.excerpt,
        category: { _type: "reference", _ref: post.category._id || `cat-${post.category.slug}` },
        tags: post.tags.map((t) => ({ _type: "reference", _ref: t._id || `tag-${t.slug}`, _key: t.slug })),
        author: { _type: "reference", _ref: post.author._id || `author-${post.author.slug}` },
        publishedAt: post.publishedAt,
        readingTime: post.readingTime,
        featured: post.featured,
        trending: post.trending,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        body: post.body,
      });
    }

    // 5. Seed Daily News
    console.log("⚡ Seeding daily news desk articles...");
    for (const newsItem of MOCK_NEWS) {
      await client.createOrReplace({
        _id: newsItem._id || `news-${newsItem.slug}`,
        _type: "news",
        title: newsItem.title,
        slug: { _type: "slug", current: newsItem.slug },
        summary: newsItem.summary,
        highlights: newsItem.highlights,
        newsCategory: newsItem.category,
        publishedAt: newsItem.publishedAt,
        source: newsItem.source,
        sourceUrl: newsItem.sourceUrl,
        author: { _type: "reference", _ref: newsItem.author?._id || `author-aarav` },
        isBreaking: newsItem.isBreaking,
      });
    }

    console.log("✅ Seed completed successfully! All documents loaded into Sanity.");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  }
}

seed();
