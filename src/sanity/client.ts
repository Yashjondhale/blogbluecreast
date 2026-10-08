import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./env";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}
