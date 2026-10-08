import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("BlueCrest Editorial Desk")
    .items([
      S.documentTypeListItem("news").title("⚡ Daily News Desk"),
      S.divider(),
      S.documentTypeListItem("post").title("Articles / Longform Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("tag").title("Tags"),
      S.documentTypeListItem("author").title("Authors (E-E-A-T)"),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
    ]);
