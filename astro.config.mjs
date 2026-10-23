import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

import designSystem from "patmos-design-system/astro";

export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? "/",
  integrations: [designSystem({ theme: "patmos" }), mdx()],
  markdown: { syntaxHighlight: false },
});
