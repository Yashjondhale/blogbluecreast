import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("BlueCrest Editorial Desk")
    .items([
      S.documentTypeListItem("post").title("📰 Articles / Longform Posts"),
      S.documentTypeListItem("news").title("⚡ Daily News Desk"),
      S.divider(),
      S.documentTypeListItem("career").title("💼 Careers & Job Openings"),
      S.documentTypeListItem("service").title("🛠️ Commercial Services"),
      S.divider(),
      S.documentTypeListItem("category").title("📁 Categories"),
      S.documentTypeListItem("tag").title("🏷️ Tags"),
      S.documentTypeListItem("author").title("✍️ Authors (E-E-A-T)"),
      S.divider(),
      S.listItem()
        .title("⚙️ Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
    ]);
