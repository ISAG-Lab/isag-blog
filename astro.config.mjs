import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  site: "http://localhost:3000",
  integrations: [
    tailwind({
      config: {
        path: "./tailwind.config.mjs",
      },
    }),
    mdx(),
    sitemap(),
    prefetch(),
  ],
});
