import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { createImageUrlBuilder } from "@sanity/image-url";

const token =
  process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to ensure immediate real-time sync when documents are edited
  token,
  perspective: token ? "drafts" : "published",
});

export const fetchOptions = {
  next: {
    revalidate: process.env.NODE_ENV === "development" ? 0 : 60,
    tags: ["sanity"],
  },
};

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

