import { authorType } from "./author";
import { categoryType } from "./category";
import { careerType } from "./career";
import { newsType } from "./news";
import { postType } from "./post";
import { serviceType } from "./service";
import { siteSettingsType } from "./siteSettings";
import { tagType } from "./tag";

export const schemaTypes = [
  postType,
  newsType,
  careerType,
  serviceType,
  authorType,
  categoryType,
  tagType,
  siteSettingsType,
];
