import type { MetadataRoute } from "next";
import { SITE_URL, routes } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: SITE_URL + (r === "/" ? "" : r), lastModified: new Date(), changeFrequency: r === "/" ? "weekly" : "monthly", priority: r === "/" ? 1 : 0.7 }));
}
