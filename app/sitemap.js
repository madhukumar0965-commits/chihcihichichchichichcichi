import { siteUrl } from "./site";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
