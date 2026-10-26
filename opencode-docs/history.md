# History

## 2026-10-26 — Kit 3 / Vite 8 recovery + KB

- Investigated dev server failure after `npm audit fix --force`:
  `SyntaxError: The requested module 'vite' does not provide an export named 'parseSync'`.
- Root cause: forced audit bumped `@sveltejs/kit` to 3.1.0 (also adapters to 8/4/7) but left
  `vite` at 6.4.5. Kit 3 requires Vite >= 8.0.12.
- Upgraded `vite` 8.3.5, `@sveltejs/vite-plugin-svelte` 7.3.1, `svelte-check` 4.7.7,
  `typescript` 6.0.3; regenerated `package-lock.json` from scratch after peer conflicts.
- Migrated to Kit 3 config model: deleted `svelte.config.js`, moved adapter +
  `compatibility.componentApi: 4` into `sveltekit({...})` in `vite.config.js`.
- Replaced `$lib` with `#lib` (`imports` field in `package.json`) across 6 files.
- Replaced `$app/environment` -> `$app/env`, `$env/static/public` -> `$app/env/public`.
- Added `src/env.js` with `defineEnvVars`; without it Kit 3 generates empty env modules and the
  Supabase client failed with `supabaseUrl is required`.
- `jsconfig.json` now extends `$app/tsconfig`.
- Verified with dev server: `/`, `/about`, `/projects/riverkeeper` return 200 and render content.
- `npm run check` (svelte-check 4 + TS 6) reports 0 errors, 0 warnings. Fixes along the way:
  `#lib` imports need the `.js` extension, `SupabaseClientOptions<'public'>` needs its generic,
  and the `ws` realtime transport needs an `any` cast.
- Created `opencode-docs/` KB.
- Diagnosed stale dev server: `src/routes/+page.svelte` edits (homepage copy) were on disk but the
  running server served old HTML. `/mnt/c` in WSL does not emit reliable fs events. Added
  `server.watch.usePolling: true` (300 ms) to `vite.config.js`; verified with a probe edit
  (appears, then disappears after revert) and restored the file byte-identical.
- Homepage: work-type/topic buttons now toggle a selection and rank the project grid. Base order
  remains Supabase's `code` order (stable sort by rank, ties untouched). Cards are keyed by
  `short_url` with `animate:flip` for the reorder. Verified SSR renders 14 toggle buttons; ranking
  logic checked in Node (one term / two terms / topic only). Clicking itself needs a browser check.
- Connected the hosted Figma MCP server (`https://mcp.figma.com/mcp`) after the desktop endpoint
  `127.0.0.1:3845` timed out under WSL. Pulled frame `2390:526` and restyled the homepage top
  content: 40/24/20px type, 68.9rem column, inline text filters, #FF7300 hover/active, bold via the
  `Alright Sans Bold` family. Spacing, type sizes and states follow the frame; filter order stays
  alphabetical from the data, and the "Clear selection" control is ours (not in the frame).
- Responsive sizing: root font-size ladder 100% / 90% (<= 1400px) / 70% (<= 1200px) / 65%
  (<= 750px), with `.title-content` capped at 65rem. Converted remaining px type, margins and
  container widths (navbar, project page, slider, about, `.app` shell) to rem so they scale with
  it; hairlines and media query breakpoints stay px.
- Project carousel arrows restyled: no dark pill, transparent background, grey chevron
  (`hsl(0, 0%, 25%)`) that goes black on hover.
- Project page body paragraphs (markdown output and collaborators) and metadata lines set to 1rem.
- Project metadata column rebuilt to Figma `20:16`: 16px/lh1.5 black text, bold labels, 8px line
  gaps, added Work types and Topics (arrays joined by ` • `), black underlined link. Each line is
  guarded by `filled()`/`list()` so empty columns render nothing; verified on riverkeeper (all
  lines), waba (no link), connected-by-water (no client). Project Scope kept as an extra guarded
  line although the frame omits it.
- Project body Markdown: `marked.parse(text, { breaks: true })`, so one Enter in Supabase renders a
  line break and a blank line renders a spaced paragraph. Added styles for `p`, `a`, `strong`,
  `em`, `ul`/`ol`, `h2`/`h3` under `.project-text :global(...)`. Verified `mjd` now renders its
  three lines (1 `<p>`, 2 `<br>`) instead of one unbroken block.
- Markdown links now open in a new tab (`target="_blank" rel="noreferrer"`), applied by replacing
  `<a href="` in marked output. Verified with inline, titled, bare-URL and angle-bracket links.
  `svelte-check` needed `// @ts-nocheck` on the server file (marked types return
  `string | Promise<string>`). `mjd` has since been edited to blank-line paragraphs and renders 3
  `<p>` with no `<br>`.
- CSS cleanup: moved `.title-content` and `.projects-grid` out of the global sheet into the
  homepage (with their 760px rules, dropping two `!important`s), removed `color` from the global
  `h1, h2, p`, collapsed five repeated `#000`, four `font-family`, four `font-size` and three
  `line-height` declarations, merged the two button resets, changed the filter labels from `<p>` to
  `<span>`, and deleted unused `.visually-hidden` and `.card-slot`. `styles.css` 156 -> 123 lines.
- Simplified the homepage script at the user's request: dropped JSDoc type annotations (kept
  `// @ts-nocheck`), collapsed `rank`/`terms` to one-liners, and deduped a project's terms so a
  label present in both `work_types` and `topics` counts once. Did **not** add lodash — `uniqBy`
  would save three lines and cost a dependency. `svelte-check` still 0 errors.
