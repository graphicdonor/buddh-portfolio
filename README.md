# Buddhpriya Gautam — Portfolio

Personal portfolio website for **Buddhpriya Gautam**, Senior Product Designer with 9+ years of experience in SaaS platforms, design systems, and brand experiences.

**Live:** [www.buddh.in](https://www.buddh.in) · **Backup:** [buddh-portfolio.netlify.app](https://buddh-portfolio.netlify.app)  
**Repo:** [github.com/graphicdonor/buddh-portfolio](https://github.com/graphicdonor/buddh-portfolio)

---

## File Structure

Static multi-page site — no build tools, no frameworks. All CSS and JS are embedded per-page.

```
Buddh mmt/
├── index.html              # Homepage (2583 lines)
├── work.html               # Full work / case study listing (1059 lines)
├── about.html              # About page — bio, skills, timeline (855 lines)
├── rdash.html              # R'Dash case study (766 lines)
├── elite60.html            # Elite60 case study
├── brand-work.html         # Brand & visual design work
├── knovelo.html            # Knovelo case study
├── kockpit.html            # Kockpit case study
├── locatr.html             # LocatR case study
├── rankwatch.html          # RankWatch case study
├── websignals.html         # WebSignals case study
├── sw.js                   # Service worker — cache key: buddh-v6
├── manifest.json           # PWA manifest
├── _headers                # Netlify response headers config
├── Rdash_Logo.svg          # R'Dash brand logo
├── Buddhpriya_Gautam_Resume_ATS.docx
├── icons/                  # PWA icons (72 → 512 px + apple-touch-icon)
└── images/
    ├── rdash-hero.svg      # R'Dash dashboard hero (dark-themed SVG, 1440×800)
    ├── elite60/            # Elite60 screenshots (10 × JPEG, ~850 KB)
    └── RDash/              # R'Dash product screenshots (16 × PNG)
```

---

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Homepage — hero, marquee, about, selected work, process, contact |
| `work.html` | `/work.html` | Full case study grid — R'Dash, Elite60, brand work, and other projects |
| `about.html` | `/about.html` | Bio, skills grid, experience timeline, awards |
| `rdash.html` | `/rdash.html` | R'Dash case study — problem, solution, key initiatives, 16 real product screens, XD prototype embed |
| `elite60.html` | `/elite60.html` | Elite60 fitness app case study |
| `brand-work.html` | `/brand-work.html` | Brand & visual design showcase |
| `knovelo.html` | `/knovelo.html` | Knovelo case study |
| `kockpit.html` | `/kockpit.html` | Kockpit case study |
| `locatr.html` | `/locatr.html` | LocatR case study |
| `rankwatch.html` | `/rankwatch.html` | RankWatch case study |
| `websignals.html` | `/websignals.html` | WebSignals case study |

---

## Design System

Tokens are defined in `:root` and override to a light palette when `[data-theme="light"]` is set. Theme choice is persisted in `localStorage`.

### Colour tokens

| Token | Dark value | Light value | Usage |
|-------|-----------|-------------|-------|
| `--bg` | `#07070F` | `#F7F7FF` | Page background |
| `--bg2` | `#0D0D1C` | `#F0F0FA` | Card / section backgrounds |
| `--bg3` | `#131326` | `#E8E8F5` | Elevated surfaces |
| `--accent` | `#7B6CF6` | `#6C5EE8` | Purple — primary accent |
| `--rose` | `#F06292` | `#D81B60` | Rose — secondary accent |
| `--green` | `#4ADE80` | `#16A34A` | Emerald — done states, Elite60 |
| `--amber` | `#FBB024` | `#B45309` | Amber — in-progress, warnings |
| `--text` | `#EEEEF8` | `#0D0D1A` | Primary text |
| `--text2` | `#8888AA` | `#4A4A6A` | Secondary / muted text |
| `--text3` | `#3E3E60` | `#9999BB` | Placeholder / disabled |
| `--border` | `rgba(255,255,255,0.07)` | `rgba(0,0,0,0.08)` | Default border |
| `--border-hi` | `rgba(123,108,246,0.3)` | `rgba(108,94,232,0.35)` | Accent border (hover) |
| `--accent-lo` | `rgba(123,108,246,0.12)` | `rgba(108,94,232,0.10)` | Tinted background fills |

### Typography

- **Plus Jakarta Sans** — UI text (weights 300–800 + italic), loaded from Google Fonts
- **Instrument Serif** — Display italic accent (`.serif` class)

---

## Interactive Features

### Custom Cursor
Two-layer cursor: a 10px dot that tracks the mouse instantly, and a 38px ring that lerps at 11% per frame. Both scale up on hover of any interactive element (`.h` class).

### Scroll Reveal
`IntersectionObserver` on all `.rv` elements — adds `.in` class on entry, triggering `opacity 0→1` + `translateY(28px→0)`. Delay utilities `.d1`–`.d3` stagger children by 0.1s increments.

### Light / Dark Toggle
Theme button in nav reads `data-theme` from `<html>`. Clicking cycles between `dark` and `light`, saves to `localStorage`. Theme is applied before first paint via an inline `<script>` tag to prevent flash.

### Scroll Progress Bar
Fixed 2px bar at viewport top fills proportionally to `scrollY / (scrollHeight - innerHeight)`.

### Animated Grain
SVG `feTurbulence` noise texture on a fixed full-screen pseudo-element, animated with CSS keyframes to shift position. Opacity: 0.028 — subtle film-grain feel.

### 3D Card Tilt
`.pc`, `.pain-c`, `.imp-c` cards apply `perspective(900px) rotateX() rotateY()` based on cursor offset from card centre on `mousemove`.

### Magnetic Buttons
`.btn-p`, `.btn-g`, `.nav-cta` follow the cursor at 22% factor, snap back on `mouseleave`.

---

## R'Dash Case Study (`rdash.html`)

### Hero
Custom dark-themed SVG (`images/rdash-hero.svg`, 1440×800) showing the actual R'Dash dashboard — My Scope donut, Project Progress bar chart, Vendor Wise Progress horizontal bars, Vendor Scope donut, and Project Timeline Gantt. Uses portfolio design system colours with radial purple glow and grid background.

### Product Screens (16 real screenshots)

All images from `images/RDash/`. Displayed in a horizontal scrollable card strip with `object-fit:cover; object-position:top`.

| Screen | Image file |
|--------|-----------|
| My Projects Fleet | `All project table design update – -1.png` |
| Projects Table (Alt) | `All project table design update – 33333.png` |
| Recce Review | `Submitted recce on web External Environment – 2.png` |
| BOQ My Scope | `My scope – 4.png` |
| BOQ Item Detail | `Item Detail page web BOQ updates – 7.png` |
| Purchase Requests | `Purchase request – 8.png` |
| Purchase Request Detail | `Purchase request – 10.png` |
| Vendor Order Approval | `Vendor Order Approval inside Project 4 – 2.png` |
| All Project Invoices | `Project all Invoice – 29.png` |
| Task Manager 2.0 | `Task Manager 2.0.0 2 – 11.png` |
| Task UI Update | `Pure Task ui update – 6.png` |
| Leads Manager | `Leads Manager 1 – 10.png` |
| Leads Empty State | `Leads Manager 1 empty screen.png` |
| Platform Module | `Mask Group 10.png` |
| Platform Detail | `Mask Group 11.png` |
| Platform Dashboard | `Artboard – 5jk.png` |

### Prototype Embed
Adobe XD prototype embedded via `<iframe>` with `src="https://xd.adobe.com/embed/..."`. Fullscreen link opens the view URL.

---

## Service Worker (`sw.js`)

- **Cache key:** `buddh-v6` — bump this string to bust the cache on next deploy
- **Strategy:** Cache-first for pre-listed assets, network-first with runtime caching for everything else. Offline fallback returns `/index.html`.
- **Pre-cached assets:** `/`, `index.html`, `work.html`, `about.html`, `manifest.json`, icons, Elite60 images, Google Fonts stylesheet.

To bust the cache: change `const CACHE = 'buddh-v6'` to `'buddh-v7'` (or any new string) and redeploy.

---

## Deployment

### Netlify
- **Site name:** `buddh-portfolio`
- **Site ID:** `00812031-107f-442b-a53c-d1c02c0c77bd`
- **Custom domain:** `www.buddh.in`
- **Admin:** [app.netlify.com/projects/buddh-portfolio](https://app.netlify.com/projects/buddh-portfolio)

Deploy command:
```bash
cd "Buddh mmt" && git add -A && git commit -m "your message" && git push origin main && npx netlify deploy --prod --dir .
```

Or Netlify-only (no git):
```bash
npx netlify deploy --prod --dir .
```

### DNS (buddh.in)
Nameservers pointing to Netlify DNS:
```
dns1.p06.nsone.net
dns2.p06.nsone.net
dns3.p06.nsone.net
dns4.p06.nsone.net
```

### GitHub
- **Remote:** `https://github.com/graphicdonor/buddh-portfolio.git`
- **Branch:** `main`

---

## Common Tasks

### Add a new case study page
1. Copy `rdash.html` as a template
2. Update the hero section, meta bar, and content sections
3. Add screenshots to `images/<project-name>/`
4. Add a card for it in `work.html`
5. Add route to nav links if needed
6. Deploy

### Update service worker cache
Change `const CACHE = 'buddh-v6'` in `sw.js` to a new version string. Users will get fresh assets on next load.

### Add/resize images
```bash
sips -Z 1200 source.png --out images/RDash/name.png
```

### Change accent colour
Update `--accent` in `:root` in the relevant file. The purple `#7B6CF6` is used across buttons, borders, glows, and hover states.

---

## Social & Contact

| Platform | URL |
|----------|-----|
| Email | buddhpriya93@gmail.com |
| LinkedIn | [linkedin.com/in/buddhpriya-gautam](https://www.linkedin.com/in/buddhpriya-gautam/) |
| Behance | [behance.net/buddhpriyagautam](https://www.behance.net/buddhpriyagautam) |
| Dribbble | [dribbble.com/Buddh](https://dribbble.com/Buddh) |

---

*Last updated April 2026 · Buddhpriya Gautam · buddhpriya93@gmail.com*
