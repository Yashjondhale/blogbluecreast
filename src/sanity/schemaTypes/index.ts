import { authorType } from "./author";
import { categoryType } from "./category";
import { newsType } from "./news";
import { postType } from "./post";
import { siteSettingsType } from "./siteSettings";
import { tagType } from "./tag";

export const schemaTypes = [
  newsType,
  postType,
  authorType,
  categoryType,
  tagType,
  siteSettingsType,
];
