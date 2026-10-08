# BlueCrest (bluecreast.in)

> Production-ready, high-performance, multi-niche publication built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**.

---

## 🚀 Live Overview & Core Features

- **Brand & Domain**: BlueCrest (`bluecreast.in`)
- **Editorial Coverage**: Technology & AI, Wealth & Markets, Preventive Medicine, Digital Nomadism, and Startup Leadership.
- **Embedded CMS**: Sanity Studio available directly at `/studio`.
- **Search System**: Global Command Palette (`Cmd/Ctrl+K`) + `/search` route.
- **Accessibility & UX**:
  - Full Dark Mode with persistent theme storage.
  - WCAG 2.2 AA compliant focus indicators, ARIA landmarks, and skip-to-content links.
  - Cumulative Layout Shift (CLS) guarded reserved ad units.
  - Sticky Table of Contents with scroll-spy and mobile drawer.
  - Real-time reading progress bar.
  - Social sharing suite (WhatsApp with pre-filled text, X, LinkedIn, Telegram, and copy link).
  - India DPDP Act 2023 & GDPR compliant cookie consent banner.
- **Technical SEO & Feeds**:
  - Automated `sitemap.xml` with content splitting and `lastmod`.
  - Google News sitemap at `/news-sitemap.xml`.
  - RSS 2.0 feed at `/rss.xml`.
  - Discovery file for LLMs at `/llms.txt`.
  - Edge dynamic OpenGraph image generation via Next.js `ImageResponse` at `/api/og`.
  - JSON-LD Schemas: `WebSite`, `Organization`, `BlogPosting`, `BreadcrumbList`, `Person` (E-E-A-T), and `FAQPage`.
  - Hreflang configured for `en-IN` and clean canonical permalinks.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) + React 19 |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 + Custom Design Tokens |
| **Icons** | Lucide React |
| **Content Management** | Sanity CMS (Embedded Studio at `/studio`) |
| **Typography** | `Playfair Display` (Headings) & `Inter` (Body) via `next/font/google` |
| **Validation** | Zod |
| **Hosting Target** | Vercel |

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg          # Vector favicon package
│   ├── logo.svg             # Brand wordmark SVG
│   ├── manifest.json        # Web app manifest
│   └── llms.txt             # AI crawler discovery catalog
├── src/
│   ├── app/
│   │   ├── (legal)/         # Privacy, Terms, Disclaimer, Editorial Policy
│   │   ├── about/           # Mission & Editorial Board
│   │   ├── api/             # Newsletter, Contact, OG image, Revalidate webhook
│   │   ├── author/[slug]/   # E-E-A-T Author profiles
│   │   ├── blog/            # Paginated archive (12/page)
│   │   ├── blog/[slug]/     # Article view with TOC, Reading bar & JSON-LD
│   │   ├── category/[slug]/ # Category archive
│   │   ├── contact/         # Contact form with spam protection
│   │   ├── search/          # Site-wide search
│   │   ├── studio/          # Embedded Sanity Studio
│   │   ├── tag/[slug]/      # Tag archive
│   │   ├── layout.tsx       # Root layout with fonts, JSON-LD, Header & Footer
│   │   ├── not-found.tsx    # Custom 404 page
│   │   ├── page.tsx         # Homepage with hero, trending & latest grid
│   │   ├── robots.ts        # Dynamic robots.txt
│   │   └── sitemap.ts       # Dynamic sitemap.xml
│   ├── components/
│   │   ├── brand/           # Logo
│   │   ├── layout/          # Header, Footer, MegaMenu, ThemeToggle, CookieConsent
│   │   ├── post/            # PostCard, HeroPost, TOC, ReadingBar, SocialShare, etc.
│   │   ├── search/          # CommandMenu modal
│   │   └── seo/             # Breadcrumbs, JsonLd schemas
│   ├── lib/
│   │   ├── constants.ts     # Brand settings, categories, navigation items
│   │   └── utils.ts         # Formatting, slugify, reading time
│   ├── sanity/
│   │   ├── schemaTypes/     # Post, Author, Category, Tag, SiteSettings
│   │   ├── client.ts        # Sanity client & image builder
│   │   ├── dataService.ts   # Dual-mode data access layer (Sanity + Mock fallback)
│   │   └── mockData.ts      # 10 rich articles across 5 niches + 3 authors
│   └── types/               # TypeScript models
├── scripts/
│   └── seed-sanity.ts       # CLI seeding script
└── sanity.config.ts         # Sanity Studio configuration
```

---

## 💻 Local Development Setup

1. **Clone and Install Dependencies**:
   ```bash
   git clone <repo-url>
   cd blogbluecreast
   npm install
   ```

2. **Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *(Note: The site is fully functional offline out-of-the-box using the bundled rich multi-niche dataset!)*

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Access the Embedded Sanity Studio**:
   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio).

---

## ✍️ How to Write, Schedule & Publish in Sanity Studio

1. **Open Studio**: Visit `/studio` locally or `https://bluecreast.in/studio` in production.
2. **Create or Select an Author**:
   - Go to **Authors (E-E-A-T)** -> **Create New**.
   - Fill in Name, Title, Bio, and Credentials (e.g., *MD General Medicine, CFA, PhD*).
3. **Draft a New Post**:
   - Go to **Articles / Posts** -> **Create New**.
   - **Title**: Enter your headline.
   - **Slug**: Click **Generate** from title.
   - **Excerpt**: 120-160 characters summary for card previews and meta descriptions.
   - **Featured Image**: Upload image and fill out the **Mandatory Alt Text** for SEO.
   - **Category & Tags**: Select primary category and relevant tags.
   - **Author**: Link to the verified author.
   - **Body (Portable Text)**:
     - Add Headings (H2 / H3) to automatically build the **Table of Contents**.
     - Add **Callout Boxes** for editorial tips or warnings.
     - Add **Data Tables** for comparisons.
     - Add **FAQ Blocks** to automatically inject Google Rich Results **FAQPage** JSON-LD.
     - Add **Code Blocks** with syntax labels.
     - Add **YouTube Embeds**.
   - **Scheduling**: Set the **Published At** field to your desired publication timestamp.
4. **Publish**: Click the green **Publish** button at the bottom right.
5. **Instant Revalidation**: If webhooks are configured, your article will appear instantly on the live site without waiting for full rebuilds.

---

## ☁️ Deployment on Vercel

1. Push your repository to GitHub / GitLab.
2. Go to [Vercel Dashboard](https://vercel.com/new) and import the repository.
3. In **Environment Variables**, add:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (set to `production`)
   - `SANITY_REVALIDATE_SECRET`
   - `NEXT_PUBLIC_SITE_URL` (set to `https://bluecreast.in`)
4. Click **Deploy**.

---

## 🌐 DNS Setup for `bluecreast.in`

Configure your DNS provider (Cloudflare, GoDaddy, Namecheap) with the following records:

| Type | Name / Host | Value / Target | TTL |
|---|---|---|---|
| **A** | `@` | `76.76.21.21` (Vercel IP) | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300 |

*In Vercel Domain settings, set `bluecreast.in` as the primary domain and configure `www.bluecreast.in` to automatically redirect to `bluecreast.in`.*

---

## 📈 Post-Launch Technical SEO Checklist

1. **Google Search Console**:
   - Add property `https://bluecreast.in`.
   - Submit the XML Sitemap: `https://bluecreast.in/sitemap.xml`.
   - Submit the News Sitemap: `https://bluecreast.in/news-sitemap.xml`.
2. **Bing Webmaster Tools**:
   - Import verification directly from Google Search Console.
3. **Validate Structured Data**:
   - Test articles with [Google Rich Results Test](https://search.google.com/test/rich-results) to verify `BlogPosting`, `BreadcrumbList`, and `FAQPage` schemas.
4. **Inspect Core Web Vitals**:
   - Verify LCP (< 2.0s), CLS (< 0.05), and INP (< 150ms) using PageSpeed Insights.
5. **Monitor Indexing**:
   - Set up weekly indexing checks via GSC URL Inspection.
