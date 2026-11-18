---
title: Writing the docs
description: Where Orrery's docs live and how they get onto this site.
editUrl: false
sidebar:
  order: 1
---

Orrery's docs are written in the main repo,
[forge-orbit/orrery](https://github.com/forge-orbit/orrery), in a `docs/` folder. They change in the
same pull request as the code they describe, so a released version and its docs always match.

The website ([forge-orbit/orrery-site](https://github.com/forge-orbit/orrery-site)) copies that
folder when it builds. You don't need to touch the website to change the docs.

## Conventions

- **One Markdown file per page.** `docs/guides/install.md` becomes `/docs/guides/install/`.
- **Folders become sidebar groups.** A `README.md` or `index.md` in a folder is that group's
  first page.
- **Title.** Use frontmatter `title:`, or start the file with a `# Heading`. The heading becomes the
  page title.
- **Links.** Link to other pages with relative paths, as you would on GitHub, for example
  `[Install](./install.md)`. The website rewrites them to page URLs.
- **Images.** Put them next to the page and use relative paths.
- **Optional frontmatter.** `description:` for search results and link previews, and
  `sidebar: { order: 2 }` to change the order in the sidebar.

## When the site updates

The site rebuilds on every push to its own `main`. Rebuilding it when the docs change in the main
repo is planned (a `docs-updated` event from the main repo's CI).

Until the main repo has a `docs/` folder, the site shows these placeholder pages.
