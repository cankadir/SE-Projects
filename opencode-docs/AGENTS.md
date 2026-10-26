# Studio 2263 portfolio — project context

Marketing/portfolio site for Studio 2263 (design + data + GIS studio). SvelteKit app, content
comes from Supabase, deployed at https://www.studio2263.com/.

## Stack

| Thing | Version | Note |
| --- | --- | --- |
| Node | 22.x (engines, `engine-strict=true` in `.npmrc`) | Kit 3 needs >= 22.17 |
| SvelteKit | 3.1.x | config lives in `vite.config.js`, not `svelte.config.js` |
| Vite | 8.x | Kit 3 imports `parseSync` from Vite 8 — Vite 6/7 will not boot |
| vite-plugin-svelte | 7.x | plugin 6 does not support Vite 8 |
| Svelte | 5.57+ | |
| TypeScript | 6.x | only for `svelte-check` / editor; app code is plain JS |
| Supabase JS | 2.x | content table + storage bucket |

## Layout

- `src/routes/+layout.server.js` — loads all projects from Supabase table `2263 website content`,
  ordered by `code`, returns `{ projects }` to every page.
- `src/routes/+page.svelte` — intro text, project card grid, and work-type/topic filter buttons.
  Filtering is client-side **ranking**, not filtering: projects with more selected terms float up,
  ties keep the Supabase order (`code`). Cards are a keyed each with `animate:flip`.
- `src/routes/projects/[id]/+page.server.js` — finds project by `short_url`, renders markdown
  (`marked`), lists images from storage folder `website_images/<id>`.
- `src/routes/projects/[id]/+page.svelte` — project page + carousel.
- `src/routes/about/+page.svelte` — static about page.
- `src/lib/supabaseClient.js` — `createSupabase(fetch)`; adds `ws` transport for realtime on server.
- `src/lib/components/component_*.svelte` — navbar, footer, cards, slider, carousel image.
- `src/env.js` — declares the two public env vars.
- `src/routes/styles.css` — global styles, imported in `+layout.svelte`.

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

### ADR-004 — `#lib` subpath imports

Kit 3 no longer generates `$lib`; it uses Node subpath imports declared in `package.json`:
`"#lib/*": "./src/lib/*"`. Imports therefore look like `#lib/components/component_navbar.svelte`
and `#lib/supabaseClient.js` (extension required).

### ADR-005 — legacy component API kept

`svelte.config`'s `compilerOptions.compatibility.componentApi: 4` was preserved in the Vite plugin,
so `export let` props and `on:load` handlers in `component_cards.svelte` keep working.
Migrating components to runes is optional, not required.

### ADR-006 — homepage top content matches Figma `2390:526`

Source of truth: Figma file `UpKdAED2xweCJm52m9zog2`, frame "top content" (1103 x 435).
Applied on `src/routes/+page.svelte`:

- title 40px (2.5rem) bold, intro copy 20px (1.25rem) at line-height 1.5, section heading 24px
  (1.5rem) bold, filter text 20px — all rem, 16px root default.
- text column capped at 65rem with 0.625rem (10px) padding, 0.25rem gaps between blocks.
- rem scaling ladder in `styles.css`: root 85% by default, 70% at <= 1200px, 65% at <= 750px.
  All type, spacing and container widths are rem so they follow it; media query breakpoints and
  1px/3px hairlines stay px. Tried 90% as the base, but 85% reads better at desktop widths.
- filter items are inline text, separated by `•`; active item is bold **#FF7300**; hover turns
  #FF7300. Design uses a dedicated orange for interaction — do not swap in `--orange` (#ED8206),
  which belongs to the card tint.
- fonts: the project registers separate families (`Alright Sans Regular`, `Alright Sans Bold`,
  `Alright Sans Black`), so bold means switching family, not `font-weight: 700`.
  `font-family: "Alright Sans"` does not exist and fell back to sans-serif.

### ADR-007 — project metadata block matches Figma `20:16`

Figma `20:16` is the metadata text layer (412 x 253) beside the project body. Applied to
`.kunye` in `src/routes/projects/[id]/+page.svelte`:

- 16px, line-height 1.5, black; bold labels via the `Alright Sans Bold` family, values regular.
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

- Single Enter in Supabase → `<br>` (visible line break inside one paragraph). 12 of 19 rows
  originally relied on this, so it fixed old content without touching the database.
- Blank line → separate `<p>` with 1.25rem spacing. Use this when the copy is really paragraphs;
  `mjd` has since been edited to blank lines and renders 3 `<p>`.
- Authoring stays standard Markdown: links, bold, italic, lists, `##`/`###` headings all render.
- Styling lives in `.project-text :global(...)` in the project page, because the HTML is injected
  with `{@html}` and never receives Svelte's scope class.
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
- The homepage now sets colour once (`.title-content { color: #000 }`), size/line-height once
  (`#explore { font-size: 1.25rem; line-height: 1.5 }`), and both buttons share one reset rule.
  `font-size`/`font-family` come from `input, button` in the global sheet, so the page no longer
  repeats them.
- Removed dead code: `.visually-hidden`, and `.card-slot { display: block }` (divs are block).
- Filter buttons switch to the Bold family on **hover** as well as when selected. This reflows the
  row slightly; it is the designer's intent, not a bug. Do not "fix" it.

## Conventions

- Plain JS, no TS in app code. `jsconfig.json` extends `$app/tsconfig`; `checkJs` is on but Svelte
  files use `// @ts-nocheck` where Supabase data shapes are loose.
- Component filenames: `component_<name>.svelte`, snake_case.
- Supabase columns come back snake_case (`short_url`, `code`, `text`, `name`) — do not rename.
- Project order is owned by Supabase: `+layout.server.js` orders by `code`. Any client-side sort
  must be a stable rank on top of that array and must fall back to the given order for ties.
- `work_types` / `topics` labels are free text in the DB and not normalised — e.g. "Public Data"
  vs "Public Data Platforms", "UX / UI Design" vs "UX & UI Design" show up as separate filters.
- Storage images: `.../2263_websiteImgs/website_images/<short_url>/cover.jpg` for cards,
  sibling files for the project gallery. `STORAGE_BASE` is hardcoded in the project route.

## Known noise / gotchas

- `svelte-carousel@1.0.25` has a `svelte` field but no `exports` condition; vite-plugin-svelte
  prints a warning on every start. Harmless.
- `#lib` imports need the file extension (`#lib/supabaseClient.js`). Without it Vite resolves but
  TypeScript cannot, and `npm run check` reports `Cannot find module`.
- Console noise: `Cookie "__cf_bm" ... rejected for invalid domain` comes from Supabase's
  Cloudflare edge (`server: cloudflare`, `Domain=supabase.co`, `SameSite=None`) on every storage
  response. The site is on Vercel, so it is a third-party cookie and browsers reject it. One
  message per image (≈19 covers on the homepage). Harmless, not fixable in app code.
- `ws` typings do not match supabase's `WebSocketLikeConstructor`; the transport assignment in
  `supabaseClient.js` is cast to `any` on purpose.
- `optimizeDeps.include` lists `lodash.get`, `lodash.isequal`, `lodash.clonedeep` (transitive via
  svelte-carousel). Keep unless the carousel is replaced.
- Dev server on this WSL `/mnt/c` checkout takes ~35 s to become ready. Not a hang.
- File watching on `/mnt/c` is unreliable: edits land on disk but Vite keeps serving stale modules.
  `vite.config.js` now sets `server.watch.usePolling: true` (300 ms). Verified: edit -> page
  updates, revert -> page reverts, no server restart needed. A clone inside the WSL filesystem
  would not need polling.
- Vite 8 uses rolldown; build scripts and adapters changed but this app only uses adapter-auto.
