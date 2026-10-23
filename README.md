# Patmos brand guidelines

The Patmos brand guidelines site: color, logo, typography, imagery, layout,
and tone and messaging. It is built with the
[Patmos design system](https://github.com/evanmcmurdie-rgb/patmos-design-system-test),
which supplies the theme, the components, and the site frame (sidebar,
search, table of contents, and shared styles).

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview
```

## Layout

```text
src/brand/          one MDX page per guideline section
src/components/     the brand page components: color specs, logo frames, grids
src/layouts/        Shell and Page, wrapping the design system's site kit
src/lib/            the site's navigation and token helpers
src/pages/          the home page, the guideline pages, and the search index
src/styles/         styles for the brand components
public/brand/       photography and the logo download
```

## The design system dependency

`package.json` pins the design system to a commit of its repository. Once the
system cuts a release, pin its `vX.Y.Z` tag instead. To upgrade, read its
changelog, move the pin, run `npm install`, and check the site.

The design system repository is private. Locally, npm reads it over SSH with
your own key. In GitHub Actions it reads it with `DESIGN_SYSTEM_TOKEN`, a
repository secret holding a fine-grained token with read access to that
repository's contents.

## Publishing

`.github/workflows/pages.yml` builds and deploys to GitHub Pages on every push
to `main`. The site is served under `/<repository>/`, so links and images go
through `withBase`; the workflow reads the address and base path from the
Pages configuration, and local builds use `/`.
