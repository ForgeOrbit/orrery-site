// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Served from GitHub Pages as a project page: https://forgeorbit.github.io/orrery-site/
// When the site moves to a custom domain, set SITE_URL to it and BASE_PATH to "/".
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://forgeorbit.github.io',
  base: process.env.BASE_PATH ?? '/orrery-site',
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'Orrery Docs',
      description: 'Documentation for Orrery: self-hosted project management for teams of humans and AI agents.',
      logo: {
        light: './src/assets/orrery-mark.svg',
        dark: './src/assets/orrery-mark-dark.svg',
      },
      favicon: '/favicon.svg',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ForgeOrbit/orrery' }],
      customCss: ['./src/styles/docs.css'],
      sidebar: [{ autogenerate: { directory: 'docs' } }],
      // Pages are copied from ForgeOrbit/orrery, so this repo's git dates would be wrong.
      lastUpdated: false,
      pagination: true,
    }),
  ],
});
