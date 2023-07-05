import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { SITE_BASE, SITE_URL } from './src/data/config';

import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), relativeLinks()],
  site: SITE_URL,
  base: SITE_BASE,
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'material-theme',
      wrap: false
    }
  }
});