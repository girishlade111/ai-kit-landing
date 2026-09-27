# AI Kit Landing

A dark, modern landing page for an AI-powered SEO / marketing toolkit, originally generated with [v0.app](https://v0.app). Bold gradient hero, glassy navigation, and shadcn/ui component styling — ready to fork and adapt for any AI SaaS product launch.

## What it does

- Showcases an AI toolkit product ("Boost your rankings with AI") with a high-impact hero section.
- Responsive landing layout: fixed nav, hero, feature highlights, waitlist CTA.
- Built entirely from reusable UI components — easy to rebrand and extend.

## Features

- **Hero section** with layered gradient/conic background effects and announcement pill.
- **Sticky glass navigation** with Features / Developers / Pricing / Changelog links and a "Join waitlist" CTA.
- **shadcn/ui component set** — Button, plus a full Radix UI library (dialog, dropdown, tabs, toast, accordion, carousel, and more).
- **Dark-first design** with Tailwind CSS, animated utilities, and the Geist font.
- **Theme provider** (next-themes) ready for light/dark toggling.
- **Vercel Analytics** wired in.
- Fully **static-exportable** (`output: "export"` in `next.config.mjs`) — deployable to any static host (Cloudflare Pages, GitHub Pages, Netlify).

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3.4** + `tailwindcss-animate`, `clsx`, `tailwind-merge`, `class-variance-authority`
- **shadcn/ui** + **Radix UI** primitives, Lucide icons
- **next-themes**, **Geist** font, **Vercel Analytics**
- Package manager: pnpm (`pnpm-lock.yaml`)

## Quick start

```bash
# 1. Clone
git clone https://github.com/girishlade111/ai-kit-landing.git
cd ai-kit-landing

# 2. Install dependencies
pnpm install        # or: npm install

# 3. Run the dev server
pnpm dev            # or: npm run dev
```

Open http://localhost:3000 in your browser.

### Build (static export)

```bash
pnpm build          # or: npm run build
```

The static site is emitted to `out/` (via `output: "export"`). Serve it with any static server:

```bash
npx serve out
```

## Project structure

```
ai-kit-landing/
├── app/
│   ├── page.tsx        # Landing page (hero, nav, sections)
│   ├── layout.tsx      # Root layout, fonts, theme provider
│   └── globals.css     # Tailwind + custom styles
├── components/
│   ├── ui/             # shadcn/ui components (button, dialog, tabs, …)
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts        # cn() class-name helper
├── public/             # Static assets
├── components.json     # shadcn/ui config
├── next.config.mjs     # Next.js config (static export enabled)
└── tailwind.config.js  # Tailwind theme config
```

## Environment variables

None required. The app runs without any secrets or API keys. (If you wire up a real waitlist backend later, add your keys in a `.env.local` file — it is already git-ignored.)

## Deployment

This project is statically exportable, so it can be deployed anywhere that serves static files:

- **Cloudflare Pages** — live at https://ai-kit-landing.pages.dev
- Alternatively: GitHub Pages, Netlify Drop, Vercel, or any static host — just upload the `out/` directory after `pnpm build`.

No server, no database, no build-time secrets needed.

## Notes

- Generated with v0.app; the original v0 sync README has been replaced with this documentation.
- ESLint/TypeScript errors are ignored during builds (`next.config.mjs`) for frictionless static export.

---

Built by Girish Lade — https://ladestack.in
