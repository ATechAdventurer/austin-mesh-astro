// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://austin-mesh-astro.pages.dev",
  adapter: cloudflare(),

  redirects: {
    "/solar": "/devices#solar",
  },

  integrations: [sitemap()],
});