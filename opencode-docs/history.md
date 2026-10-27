# History

## 2026-10-26 — Kit 3 / Vite 8 recovery, design pass, cleanup

**Recovery**
- Dev server failed with `SyntaxError: The requested module 'vite' does not provide an export
  named 'parseSync'`. Root cause: `npm audit fix --force` bumped `@sveltejs/kit` to 3.1.0 (and the
  adapters) but left `vite` at 6.4.5. Kit 3 requires Vite >= 8.0.12.
- Upgraded `vite` 8.3.5, `@sveltejs/vite-plugin-svelte` 7.3.1, `svelte-check` 4.7.7,
  `typescript` 6.0.3; regenerated `package-lock.json` from scratch after peer conflicts.
- Kit 3 migration: deleted `svelte.config.js` (hard error in Kit 3), moved adapter +
  `compatibility.componentApi: 4` into `sveltekit({...})` in `vite.config.js`; replaced `$lib` with
  `#lib` (package.json `imports`); `$app/environment` -> `$app/env`, `$env/static/public` ->
  `$app/env/public`; `jsconfig.json` now extends `$app/tsconfig`.
- Added `src/env.js` with `defineEnvVars`. Without it Kit 3 generates empty env modules and the
  Supabase client crashed with `supabaseUrl is required`.
- `npm run check`: 0 errors. Fixes along the way: `#lib` imports need file extensions,
  `SupabaseClientOptions<'public'>` needs its generic.
- Diagnosed stale dev server (edits on disk, old HTML served): `/mnt/c` in WSL does not emit
  reliable fs events. Added `server.watch.usePolling: true` (300 ms); verified with a probe edit.
- Created `opencode-docs/` KB (`AGENTS.md` + `history.md`).

**Homepage**
- Work-type/topic buttons toggle a selection and **rank** the grid: projects matching more selected
  terms float up, ties keep Supabase `code` order (stable sort). Cards are a keyed each with
  `animate:flip`. Script simplified on request: no JSDoc, `rank`/`terms` one-liners, a project's
  terms deduped. No lodash added.
- Connected Figma MCP (hosted `https://mcp.figma.com/mcp`; the desktop `127.0.0.1:3845` endpoint
  times out under WSL) and matched frame `2390:526`: 40/24/20px type, 80rem column, inline text
  filters, `#FF7300` hover/active, bold via the `Alright Sans Bold` family.
- Found a real bug while doing it: `font-family: "Alright Sans"` never existed, so headings fell
  back to sans-serif and `font-weight: bold` did nothing.
- Responsive ladder iterated on screen: 100% -> 90% / 1400px step -> 85% base; final rules are 85%
  default, 70% at <= 1200px, 65% at <= 750px. Converted leftover px type, margins and container
  widths (navbar, project page, slider, about, `.app`) to rem; only hairlines and media query
  breakpoints stay px.
- Hover bolding on the filter buttons is intentional (designer) and documented so it is not
  "fixed" later.
- Favicon replaced with `S_white_bg.png` (49x49) from the Dropbox logo folder.

**Project pages**
- Metadata block rebuilt to Figma `20:16`: 1rem / lh 1.5 black, bold labels, 8px gaps, Client,
  Year, Project Scope, Work types, Topics, Link. Every line guarded by `filled()`/`list()` so
  empty columns render nothing. Verified on riverkeeper (all lines), waba (no link),
  connected-by-water (no client). Scope kept as an extra line although the frame omits it.
- Body Markdown: `marked.parse(text, { breaks: true })`, plus styles for `p`, `a`, `strong`, `em`,
  `ul`/`ol`, `h2`/`h3` under `.project-text :global(...)` (needed because `{@html}` gets no scope
  class). Links post-processed to `target="_blank" rel="noreferrer"`.
- Single Enter in Supabase renders `<br>`; blank line renders a spaced `<p>`. Content has since
  largely been converted: 12 of 19 rows use blank lines.
- Body paragraphs and metadata set to 1rem; Collaborators line sits 1.25rem below the body.
- Carousel arrows: dark pill removed, grey chevron (`hsl(0, 0%, 25%)`) turning black on hover.

**Review / cleanup**
- CSS deduplicated: `.title-content` and `.projects-grid` moved out of the global sheet into the
  homepage (dropping two `!important`s); `color` removed from global `h1, h2, p` (body already sets
  it); repeated `#000` / font-family / font-size / line-height collapsed; both button resets merged;
  filter labels changed from `<p>` to `<span>`; dead `.visually-hidden` and `.card-slot` deleted.
- Data fetching split: layout selects only `name, short_url, code, work_types, topics`; the project
  route fetches its own full row. Homepage HTML 55 KB -> 27 KB, `/__data.json` 29 KB -> 3.2 KB.
- Added `src/lib/storage.js` (`storageUrl()`), removing two hardcoded Supabase project URLs.
- Removed unused packages: `@fontsource/fira-mono`, `@fontsource-variable/source-sans-3`,
  `@neoconfetti/svelte`, `@sveltejs/adapter-static`, `rollup` (still transitive), `ws`. Dropped the
  `ws` realtime branch in `supabaseClient.js`; Node 22 has native `WebSocket` and no channel is
  used. `npm audit`: 0 vulnerabilities.
- Tidy-ups: `src/app.d.ts` stray comment, unused `.project-col` class, `// @ts-nocheck` on
  `storage.js`.

- Removed the `optimizeDeps.include` entries for `lodash.get` / `lodash.isequal` /
  `lodash.clonedeep` at the user's request after a Vercel warning: they are transitive
  (`svelte-carousel` -> `easy-reactive`), never imported by app code, so nothing else referenced
  them. `Vercel=1 npm run build` is clean and still bundles the carousel.
- Favicon link changed to absolute `/favicon.png` in `app.html` (was
  `%sveltekit.assets%/favicon.png`, which produced `../favicon.png` on nested routes). Build copies
  `static/favicon.png` to the client output; production `/favicon.png` returns 200.

- Dev server was slow / site not loading: two Vite instances were running (one on 5173, one
  auto-bound to 5174 after the first), both polling `/mnt/c`. Killed both, started a single server;
  requests went from 13-25 s timeouts to 0.13-0.72 s after the first cold compile (static assets
  27 ms). Raised the poll interval 300 ms -> 1000 ms (idle CPU ~19% instead of ~40%, HMR still
  verified with a probe edit).

- Vercel still showed the Svelte icon after the favicon swap. Server side was proven correct
  (live `/favicon.png` md5 == local file, one `<link>` tag, apex redirects to www), so the cause was
  the browser's icon cache keyed by the unchanged URL. Renamed to `/favicon-2263.png` to bust it,
  added `static/favicon.ico` (48/32/16, since `/favicon.ico` was 404), kept `/favicon.png` for old
  cached HTML. `VERCEL=1 npm run build` copies all three into `.vercel/output/static`.

**Final state**
- `npm run check`: 0 errors, 0 warnings.
- Verified 200 + rendered content on `/`, `/about`, `/projects/mjd`, `/projects/riverkeeper`,
  `/projects/hap`, `/projects/waba`, `/projects/connected-by-water`, `/projects/does-not-exist`.
- Pending, needs a decision: unused fonts in `static/` (5.4 MB SourceSans3 + 512 KB Alright
  Light/Medium/Thin), 49x49 favicon may look soft (512px export available from `S.svg`), and the
  env vars must exist in Vercel's build environment because `static: true` inlines them.
