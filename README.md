# AKID / EDITS — video editing portfolio

Next.js 16 (App Router) + TypeScript. No UI framework: the styling is hand-written CSS Modules.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Make it yours

| What | Where |
|---|---|
| Name, email, socials, availability, tools | `src/data/site.ts` |
| Projects (title, style, summary, "what I did", palette) | `src/data/works.ts` |
| Videos | `public/media/<slug>.mp4` (full), `public/media/preview/<slug>.mp4` (7 s muted hover loop), `public/media/poster/<slug>.jpg` |
| Colours & fonts | `src/app/globals.css` (`--accent`, `--bg` …), fonts in `src/app/layout.tsx` |

### Adding a new video
1. Export a web version (720×1280, H.264, about 2–5 MB):
   `ffmpeg -i final.mp4 -vf scale=720:-2 -c:v libx264 -crf 27 -c:a aac -b:a 128k -movflags +faststart public/media/my-clip.mp4`
2. Make a hover preview:
   `ffmpeg -ss 3 -t 7 -i final.mp4 -an -vf "scale=360:-2,fps=24" -c:v libx264 -crf 30 -movflags +faststart public/media/preview/my-clip.mp4`
3. Make a poster image:
   `ffmpeg -ss 5 -i final.mp4 -frames:v 1 -vf scale=540:-2 -q:v 4 public/media/poster/my-clip.jpg`
4. Add an entry with `slug: "my-clip"` to `src/data/works.ts`.

## Deploy
Push this folder to GitHub and import it on Vercel, which detects Next.js automatically. Then set `NEXT_PUBLIC_SITE_URL` to your domain so link previews work.
For many large videos, host them on a CDN or on Cloudinary/Mux and point `media()` in `works.ts` at those URLs.

## Sections
Hero (fanned phone previews) → style marquee → Selected cuts (filterable grid, hover preview, modal player with ←/→/Esc) → Motion lab (hover-reveal list showing each brand's palette and fonts) → Services → Process (animated NLE timeline) → Contact.
Includes a scroll timecode with a playhead in the nav, film grain, reduced-motion support, and a mobile layout.
