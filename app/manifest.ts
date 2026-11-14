import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "LocksCodes", short_name: "LocksCodes", description: "Web and app agency", start_url: "/", display: "standalone", background_color: "#070707", theme_color: "#070707", icons: [{ src: "/icon-512.png", sizes: "any", type: "image/png" }] };
}
