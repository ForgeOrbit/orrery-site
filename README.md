<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/orrery-mark-dark.svg">
    <img src="assets/orrery-mark.svg" alt="Orrery" width="80">
  </picture>
</p>

<h1 align="center">Orrery website</h1>

<p align="center">
  The landing page for <a href="https://github.com/ForgeOrbit/orrery">Orrery</a>:
  self-hosted project management for teams of humans and AI agents.
</p>

<p align="center"><em>Status: first draft of the landing page. Served from GitHub Pages; no custom domain yet.</em></p>

---

## What lives here

- **The landing page**: what Orrery is, who it's for, how it works, and how to self-host it.
- **Later, the docs site**: product docs are written in the main repo under
  [`docs/`](https://github.com/ForgeOrbit/orrery), next to the code they describe, and pulled in
  here at build time so the website has one place for both.

The product code, roadmap and design discussions live in
[ForgeOrbit/orrery](https://github.com/ForgeOrbit/orrery).

## Develop

Needs Node 22.23.4 or later.

```sh
npm install
npm run dev       # http://localhost:4321/orrery-site/
npm run build     # static output in dist/
npm run preview   # serve the build locally
```

Page copy that describes the product (features, MCP tools, milestones and links) lives in
[`src/data/site.ts`](src/data/site.ts). Orrery is in its design phase, so everything there is
labeled as planned. Keep it that way until a feature ships.

```
src/
  pages/index.astro      the landing page, one component per section
  components/            Header, Hero, Problem, HowItWorks, Features, Architecture,
                         SelfHosted, Roadmap, GetInvolved, Footer
  data/site.ts           product copy and links to ForgeOrbit/orrery
  styles/global.css      design tokens (colors from the logo, type, spacing)
public/                  favicon and logo marks
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages at
<https://forgeorbit.github.io/orrery-site/> (see
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)). Pull requests build only.

The site is built for the `/orrery-site/` path. When it moves to a custom domain, set
`SITE_URL` to the domain and `BASE_PATH` to `/` (see [`astro.config.mjs`](astro.config.mjs)).

## Decided

- Stack: [Astro](https://astro.build), static output.
- Hosting: GitHub Pages for now.
- No waitlist. Calls to action point to GitHub and the design discussion.
- Design: light-first "instrument" style with a dark mode. Ink `#14161B`, cream `#F6F3EC`,
  accent `#F2561D`. Instrument Serif for headings, Inter for text, JetBrains Mono for code.

Still open: the domain. See the issues labeled `need discussion`.

## License

MIT. See [LICENSE](LICENSE).
