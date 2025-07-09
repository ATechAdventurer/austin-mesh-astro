// @ts-check
import { defineConfig, envField } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://austin-mesh-astro.pages.dev",
  adapter: cloudflare(),

  redirects: {
    "/solar": "/devices#solar",
  },

  integrations: [sitemap(), mdx()],

  env: {
    schema: {
      DISCORD_GUILD_ID: envField.string({
        context: "server",
        access: "secret",
      }),
      DISCORD_BOT_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
