import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "bluecreast",
  title: "BlueCreast Editorial Desk",
  projectId: projectId || "27dtb4gi",
  dataset: dataset || "production",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
  releases: {
    enabled: false,
  },
  scheduledDrafts: {
    enabled: false,
  },
});
