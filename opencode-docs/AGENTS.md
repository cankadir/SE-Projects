# Studio 2263 portfolio — project context

Marketing/portfolio site for Studio 2263 (design + data + GIS studio). SvelteKit app, content
comes from Supabase, deployed on Vercel at https://www.studio2263.com/.

## Stack

| Thing | Version | Note |
| --- | --- | --- |
| Node | 22.x (engines, `engine-strict=true` in `.npmrc`) | Kit 3 needs >= 22.17; native `fetch`/`WebSocket` |
| SvelteKit | 3.1.x | config lives in `vite.config.js`, not `svelte.config.js` |
| Vite | 8.x | Kit 3 imports `parseSync` from Vite 8 — Vite 6/7 will not boot |
| vite-plugin-svelte | 7.x | plugin 6 does not support Vite 8 |
| Svelte | 5.57+ | legacy component API kept (see ADR-005) |
| TypeScript | 6.x | only for `svelte-check` / editor; app code is plain JS |
| Supabase JS | 2.x | content table + public storage bucket |
| marked | 13.x | project body Markdown |

Runtime deps are only `@supabase/supabase-js` and `marked`.

## Layout

- `src/routes/+layout.server.js` — loads the **listing fields only**
  (`name, short_url, code, work_types, topics`) from Supabase table `2263 website content`,
  ordered by `code`, returns `{ projects }` to every page. Deliberately excludes `text` and the
  metadata columns so the homepage does not ship every project's prose.
- `src/routes/+page.svelte` — intro text, project card grid, work-type/topic filter buttons.
  Filtering is client-side **ranking**, not filtering: projects with more selected terms float up,
  ties keep the Supabase order (`code`). Cards are a keyed each with `animate:flip`.
- `src/routes/projects/[id]/+page.server.js` — fetches the full row for one project by `short_url`
  (`select('*')`) plus the storage listing, in parallel; renders Markdown with `marked`
  (`breaks: true`, links get `target="_blank"`).
- `src/routes/projects/[id]/+page.svelte` — project page: metadata block, Markdown body, carousel.
- `src/routes/about/+page.svelte` — static about page.
- `src/lib/supabaseClient.js` — `createSupabase(fetch)`; no realtime transport needed.
- `src/lib/storage.js` — `storageUrl(path)` for the public bucket, built from
  `PUBLIC_SUPABASE_URL` (single source, no hardcoded project ref).
- `src/lib/components/component_*.svelte` — navbar, footer, cards, slider, carousel image.
- `src/env.js` — declares the two public env vars.
- `src/routes/styles.css` — global shell, tokens, fonts, base element defaults.

## Decisions

### ADR-001 — SvelteKit 3 + Vite 8 (2026-10-26)

`npm audit fix --force` bumped `@sveltejs/kit` 2 -> 3, adapters 3 -> 8 / 4 / 7, but left Vite at 6.
Kit 3 requires Vite >= 8.0.12 (`import { parseSync } from 'vite'`), so dev server died with
`SyntaxError: The requested module 'vite' does not provide an export named 'parseSync'`.
Fix: upgrade `vite` ^8, `@sveltejs/vite-plugin-svelte` ^7, `svelte-check` ^4, `typescript` ^6.
Lockfile was regenerated from scratch (old tree pinned plugin 6 and blocked resolution).

Rollback path if Kit 3 ever needs to be undone: pin `@sveltejs/kit` ^2.70, adapters ^3/^6,
`vite` ^6, restore `svelte.config.js`. Not done — the security bump was intentional.

### ADR-002 — Kit 3 config in `vite.config.js`

`svelte.config.js` is **not supported** in Kit 3; its presence is a hard error
(`config_file_unsupported`). Adapter, `compilerOptions`, `env`, etc. now sit in
`sveltekit({...})` inside `vite.config.js`. `optimizeDeps` stays top level.

### ADR-003 — env vars declared in `src/env.js`

Kit 3's `$app/env/*` modules are generated only for variables declared with `defineEnvVars`.
Without `src/env.js` every env export is `undefined` (this caused `supabaseUrl is required`).
`PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANONKEY` are declared `{ public: true, static: true }`,
so they behave like the old `$env/static/public` and are inlined at build time.
`.env` sits at repo root, read by Vite's `loadEnv` (default `env.dir`).

`src/env.js` holds **no secrets** — only names and flags. Values stay in `.env` (gitignored) locally
and in the host's environment variables in production. With `static: true` the values must be
present at build time; drop that flag if a var should be read at runtime instead.

Adding a variable: put it in `.env` and in Vercel, add it to `src/env.js`, import from
`$app/env/public` (or `$app/env/private` in `*.server.js` only), restart the dev server.

### ADR-004 — `#lib` subpath imports

Kit 3 no longer generates `$lib`; it uses Node subpath imports declared in `package.json`:
`"#lib/*": "./src/lib/*"`. Imports therefore look like `#lib/components/component_navbar.svelte`
and `#lib/storage.js` (extension required).

### ADR-005 — legacy component API kept

`svelte.config`'s `compilerOptions.compatibility.componentApi: 4` was preserved in the Vite plugin,
so `export let` props and `on:load` handlers in the components keep working.
Migrating components to runes is optional, not required.

### ADR-006 — homepage top content matches Figma `2390:526`

Source of truth: Figma file `UpKdAED2xweCJm52m9zog2`, frame "top content" (1103 x 435).
Applied on `src/routes/+page.svelte`:

- design px at 100% root: title 40, heading 24, intro copy and filter text 20. All are rem
  (2.5 / 1.5 / 1.25) so they scale with the root ladder below.
- text column capped at **80rem** (raised from 65 -> 70 -> 80) with 0.625rem padding, 0.25rem gaps.
- rem scaling ladder in `styles.css`: root **85%** by default, 70% at <= 1200px, 65% at <= 750px.
  All type, spacing and container widths are rem so they follow it; media query breakpoints and
  1px/3px hairlines stay px. There is no 1400px step — 100%/85%/90% were all tried, 85% won.
- filter items are inline text, separated by `•`; active item is bold **#FF7300**; hover turns
  #FF7300 (and bolds — deliberate, see ADR-009). Design uses an interaction orange distinct from
  `--orange` (#ED8206), which belongs to the card tint.
- fonts: the project registers separate families (`Alright Sans Regular`, `Alright Sans Bold`,
  `Alright Sans Black`), so bold means switching family, not `font-weight: 700`.
  `font-family: "Alright Sans"` does not exist and fell back to sans-serif.

### ADR-007 — project metadata block matches Figma `20:16`

Figma `20:16` is the metadata text layer (412 x 253) beside the project body. Applied to
`.kunye` in `src/routes/projects/[id]/+page.svelte`:

- 16px (1rem), line-height 1.5, black; bold labels via `Alright Sans Bold`, values regular.
- 0.5rem (8px) between lines, none after the last.
- Lines: Client, Year, Project Scope, Work types, Topics, Link. Work types/Topics come from the
  Supabase arrays joined with ` • `; Link is underlined and inherits black.
- **Every line is guarded** by `filled()` (trimmed string check) or `list()` (non-empty array), so
  empty or whitespace-only columns render nothing at all.
- Project Scope is kept although the frame does not show it: 14 of 19 rows have `roles / scope`
  text. Delete that one block if the design must be followed literally.

### ADR-008 — project body renders Markdown with `breaks: true`

`+page.server.js` has a `markdown(text)` helper: `marked.parse(text, { breaks: true })`, then
`.replaceAll('<a href="', '<a target="_blank" rel="noreferrer" href="')` so every rendered link
opens in a new tab. Keying on `<a href="` is safe because marked only emits anchors in that exact
shape (verified for inline, titled, bare-URL and angle-bracket links).

- Single Enter in Supabase → `<br>` (line break inside one paragraph). Kept for legacy rows; the
  content has since been converted, 12 of 19 rows now use blank lines.
- Blank line → separate `<p>` with 1.25rem spacing. This is the preferred authoring style.
- Authoring stays standard Markdown: links, bold, italic, lists, `##`/`###` headings all render.
- Styling lives in `.project-text :global(...)` in the project page, because the HTML is injected
  with `{@html}` and never receives Svelte's scope class.
- The Collaborators line (11 of 19 rows) sits 1.25rem below the body, matching paragraph spacing.
- `+page.server.js` starts with `// @ts-nocheck`: marked's types return `string | Promise<string>`
  even with `async: false`, and the project does not want type ceremony.

### ADR-009 — CSS ownership

`styles.css` owns the shell, tokens, fonts and base element defaults only. Page-specific layout
classes live in the page's own `<style>`.

- Global rules must not target page classes. `.title-content` and `.projects-grid` (plus their
  760px overrides) moved out of `styles.css` into `+page.svelte`; this also removed two
  `!important`s.
- `h1, h2, p` no longer set `color` globally; `html, body` already sets `--text-color` and children
  inherit. That lets a page set one colour on a wrapper and have headings follow.
- The homepage sets colour once (`.title-content { color: #000 }`), size/line-height once
  (`#explore { font-size: 1.25rem; line-height: 1.5 }`), and both buttons share one reset rule.
  `font-size`/`font-family` come from `input, button` in the global sheet.
- Removed dead code: `.visually-hidden`, and `.card-slot { display: block }` (divs are block).
- Filter buttons switch to the Bold family on **hover** as well as when selected. This reflows the
  row slightly; it is the designer's intent, not a bug. Do not "fix" it.

### ADR-010 — data fetching and dependency cleanup

- The layout query was slimmed to listing fields; the project route fetches its own full row.
  Homepage HTML dropped from ~55 KB to ~27 KB and `/__data.json` from 29 KB to 3.2 KB, because
  project prose is no longer serialized into every page.
- `src/lib/storage.js` replaced two hardcoded copies of the Supabase project URL.
- Removed unused packages: `@fontsource/fira-mono`, `@fontsource-variable/source-sans-3`,
  `@neoconfetti/svelte`, `@sveltejs/adapter-static`, `rollup` (transitive via adapter-vercel) and
  `ws`. The `ws` realtime transport branch was removed too; Node 22 has native `WebSocket` and the
  app never opens a realtime channel.
- `adapter-auto` stays, with `adapter-vercel` installed for the Vercel deploy.
- Favicon replaced with `S_white_bg.png` (49 x 49 — small; export 512px from `S.svg` if it looks
  soft on retina).

## Conventions

- Plain JS, no TS in app code. `jsconfig.json` extends `$app/tsconfig`; `checkJs` is on, and files
  with loose external types (Supabase rows, marked output, `storageUrl`) start with
  `// @ts-nocheck`.
- Component filenames: `component_<name>.svelte`, snake_case.
- Supabase columns are snake_case except `Collaborators` (capital C, legacy) — do not rename.
- Project order is owned by Supabase: `+layout.server.js` orders by `code`. Any client-side sort
  must be a stable rank on top of that array and must fall back to the given order for ties.
- `work_types` / `topics` labels are free text in the DB and not normalised — e.g. "Public Data"
  vs "Public Data Platforms", "UX / UI Design" vs "UX & UI Design" show up as separate filters.
- Storage images: `2263_websiteImgs/website_images/<short_url>/cover.jpg` for cards, sibling files
  for the project gallery. Always build URLs with `storageUrl()` from `#lib/storage.js`.

## Known noise / gotchas

- `svelte-carousel@1.0.25` has a `svelte` field but no `exports` condition; vite-plugin-svelte
  prints a warning on every start. Harmless.
- `#lib` imports need the file extension (`#lib/supabaseClient.js`). Without it Vite resolves but
  TypeScript cannot, and `npm run check` reports `Cannot find module`.
- Console noise: `Cookie "__cf_bm" ... rejected for invalid domain` comes from Supabase's
  Cloudflare edge (`server: cloudflare`, `Domain=supabase.co`, `SameSite=None`) on every storage
  response. The site is on Vercel, so it is a third-party cookie and browsers reject it. One
  message per image (≈19 covers on the homepage). Harmless, not fixable in app code.
- `lodash.get`, `lodash.isequal`, `lodash.clonedeep` appear in `npm ls` but are **not** project
  deps: they come from `svelte-carousel` -> `easy-reactive`. Nothing in `src` imports them, and
  `optimizeDeps.include` no longer references them, so Vite resolves them on its own. Removing the
  carousel is what would remove them.
- Favicon is `/favicon-2263.png` (absolute) in `src/app.html`, not
  `%sveltekit.assets%/favicon.png`. Two reasons: relative assets emitted `../favicon.png` on nested
  routes, and the old `/favicon.png` URL stayed in browser icon caches after the logo changed, so
  the filename was bumped to force a refetch. `static/favicon.ico` (48/32/16) also exists for tools
  that ignore `<link>`; `static/favicon.png` is kept only so old cached HTML does not 404.
- Dev server on this WSL `/mnt/c` checkout takes ~35 s to become ready. Not a hang.
- File watching on `/mnt/c` is unreliable: edits land on disk but Vite keeps serving stale modules.
  `vite.config.js` sets `server.watch.usePolling: true, interval: 1000`. 300 ms worked but kept a
  Vite process at ~40% CPU; 1 s idles around 19% and still reloads within a second. A clone inside
  the WSL filesystem would not need polling at all.
- Run **one** dev server. If 5173 is taken, Vite silently starts on 5174; two polling watchers on
  the same `/mnt/c` tree thrash CPU/IO and requests stall (observed 25 s timeouts and a dead
  process). Check with `ss -ltn | grep 517`. Each Vite 8 process also sits around 650 MB RSS.
- `.env` uses CRLF and spaces around `=`. Vite's `loadEnv` copes (verified), but normalise before
  using `vercel env pull` or dotenv-based scripts.
- dead weight in `static/`: 5.4 MB of unused `SourceSans3-*.ttf`, plus unused Alright Sans
  Light/Medium/Thin (512 KB). Total `static/` is 6.8 MB. Deleting them only affects deploy size;
  git history keeps them.
- Vite 8 uses rolldown; this app still deploys through `adapter-auto` -> Vercel.
