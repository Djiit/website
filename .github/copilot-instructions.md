# AI Coding Guidelines for Djiit Website

## Project Overview
Julien Tanay's personal portfolio/blog site—a lightweight Next.js 16 + MDX + Tailwind CSS application focused on showcasing blog posts, talks, and professional background.

## Architecture Patterns

### Content Model: File-based Blog
- Blog posts stored as `.mdx` files in `app/blog/posts/` with date-prefixed filenames (e.g., `2020-08-21-Elastic-Cloud-SSO.mdx`)
- Front matter format: YAML-style metadata enclosed in `---` delimiters (title, publishedAt, summary, image)
- Post slugs derived from filenames (without date prefix, via `path.basename()`)
- **Key file**: [app/blog/utils.ts](app/blog/utils.ts) contains `parseFrontmatter()`, `getBlogPosts()`, and `formatDate()` functions—critical for understanding how content is loaded

### Next.js App Router Structure
- Entry point: `app/layout.tsx` (root metadata, font setup with Geist, analytics integration)
- Pages: `app/page.tsx` (home), `app/blog/page.tsx` (blog index), `app/blog/[slug]/page.tsx` (individual posts)
- Static generation: `generateStaticParams()` in `[slug]/page.tsx` pre-renders all blog posts at build time
- Routes: `app/og/route.tsx` (OG image API), `app/rss/route.ts` (RSS generation)

### MDX Rendering
- Uses `next-mdx-remote` for server-side rendering of `.mdx` files
- Custom components defined in [app/components/mdx.tsx](app/components/mdx.tsx): `CustomLink`, `Code`, `Table` with syntax highlighting via `sugar-high`
- `<CustomMDX>` wrapper component handles both internal links (`/...`) and external links intelligently

### Styling & Dark Mode
- Tailwind CSS 4.1 with PostCSS 8
- Dark mode: Custom context in [app/components/theme-provider.tsx](app/components/theme-provider.tsx) persists preference to `localStorage`
- Fonts: Geist Sans (body) and Geist Mono (code) from `geist` package, imported in layout

## Build & Development Commands
```bash
pnpm dev      # Start dev server (localhost:3000)
pnpm build    # Static build (generates .next/)
pnpm start    # Serve production build
```
No custom build scripts; uses Next.js defaults. Package manager: **pnpm** (v10.25.0).

## Key Conventions & Patterns

### Adding Blog Posts
1. Create `.mdx` file in `app/blog/posts/` with naming pattern: `YYYY-MM-DD-Title-With-Hyphens.mdx`
2. Include front matter block at top:
   ```yaml
   ---
   title: "Post Title"
   publishedAt: "2024-01-15"
   summary: "Brief description"
   image: "/og/path-to-image"  # optional
   ---
   ```
3. Post automatically discovered—no manual routing required

### Metadata & SEO
- Metadata defined centrally in `layout.tsx` and extended per-page
- OG images: Custom `og` route or auto-generated via `/og?title=` API
- Twitter cards configured at root level

### Client vs Server Components
- Root layout and MDX rendering: Server-side
- Theme toggle, Konami code (Easter egg): Client components via `"use client"` directive and `dynamic()` for code-splitting
- Dynamic imports used for client-only interactivity: see [app/KonamiWrapper.tsx](app/KonamiWrapper.tsx)

## Critical Integration Points
- **Vercel hosting**: [package.json](package.json) includes `@vercel/analytics` and `@vercel/speed-insights` for monitoring
- **TypeScript**: `strict: false` in [tsconfig.json](tsconfig.json), but `strictNullChecks: true`—be careful with null checks
- **Base URL**: Defined in [app/sitemap.ts](app/sitemap.ts) for dynamic metadata and RSS generation

## Common Workflows

### Modify Homepage
Edit `app/page.tsx`—home section renders with avatar, intro, and links to blog/talks.

### Update Metadata
- Global site config: `app/layout.tsx` (title template, keywords, OpenGraph)
- Per-page overrides: `export const metadata` in individual pages

### Add a New Route
Follow Next.js App Router conventions: create `app/[feature]/page.tsx` or `app/[feature]/route.ts` for API routes.

### Theme Customization
Tailwind config is implicit (Next.js 16 auto-discovery). Override in `tailwind.config.js` (not present—use defaults).

## Testing & Debugging
- No test framework configured
- TypeScript compilation: `tsc --noEmit` implicit during dev/build
- Build issues: Check `.next/` for cached files; `pnpm build` from scratch to verify

## Anti-patterns to Avoid
- Do not modify blog post content outside `app/blog/posts/` directory or change front matter format
- Avoid hardcoding URLs; use `baseUrl` variable from [app/sitemap.ts](app/sitemap.ts)
- Don't modify `getBlogPosts()` return shape—consumers rely on `{metadata, slug, content}` structure
