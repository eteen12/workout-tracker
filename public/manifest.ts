import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Workout Tracker v1",
    short_name: "v1.0.0",
    theme_color: "#0a0a0a",
    background_color: "#ffffff",
    display: "standalone",
    orientation: "any",
    scope: "/",
    start_url: "/",
    icons: [
      { src: "/icons-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icons-256.png", type: "image/png", sizes: "256x256" },
      { src: "/icons-512.png", type: "image/png", sizes: "512x512" },
    ],
  };
}
