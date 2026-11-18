// @ts-check
import { defineConfig } from 'astro/config';

// Served from GitHub Pages as a project page: https://forgeorbit.github.io/orrery-site/
// When the site moves to a custom domain, set SITE_URL to it and BASE_PATH to "/".
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://forgeorbit.github.io',
  base: process.env.BASE_PATH ?? '/orrery-site',
  trailingSlash: 'ignore',
});
