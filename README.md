# akhilsingh.dev

Personal site. Next.js (App Router) built as a static export and hosted on Cloudflare Pages.

The site is reachable by link but kept out of search engines: every page sends a
`noindex, nofollow` robots meta tag (`src/app/layout.tsx`) and an `X-Robots-Tag`
header (`public/_headers`).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
npx serve out    # preview the exact files that get deployed
```

Content lives at the top of `src/app/page.tsx`.

## Deploy (Cloudflare Pages)

One-time setup in the Cloudflare dashboard:

1. Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npx next build`
   - Build output directory: `out`
3. Save and deploy. Node version comes from `.node-version`.
4. Project → Custom domains → add `akhilsingh.dev`.

After that, every push to `main` deploys to production and every PR gets a preview URL.

## Static export limits

No API routes that read the request, Server Actions, middleware/proxy, ISR, or default
`next/image` optimization. For a contact form, use a hosted form service or a Pages Function.
