import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "bluecrest-studio",
  title: "BlueCrest Editorial Desk",
  projectId: projectId || "demo_project_id",
  dataset: dataset || "production",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
