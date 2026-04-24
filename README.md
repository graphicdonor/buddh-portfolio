# Buddhpriya Gautam — Portfolio

Personal portfolio website for **Buddhpriya Gautam**, Senior Product Designer with 9+ years of experience in SaaS platforms, design systems, and brand experiences.

**Live:** [www.buddh.in](https://www.buddh.in) · **Backup:** [buddh-portfolio.netlify.app](https://buddh-portfolio.netlify.app)  
**Repo:** [github.com/graphicdonor/buddh-portfolio](https://github.com/graphicdonor/buddh-portfolio)

---

## Overview

Single-file HTML portfolio with no frameworks or build tools. All CSS and JavaScript are embedded directly in `index.html`. The entire site ships as one HTML file plus a folder of optimised images.

```
Buddh mmt/
├── index.html          # Complete site — HTML + CSS + JS (2269 lines)
└── images/
    └── elite60/        # Elite60 app screenshots (10 × JPEG, ~850 KB total)
        ├── logo-screen.jpg
        ├── splash.jpg
        ├── home.jpg
        ├── workout.jpg
        ├── progress-standard.jpg
        ├── progress-goals.jpg
        ├── progress-athletics.jpg
        ├── plans.jpg
        ├── gps-goal.jpg
        └── gps-live.jpg
```

---

## Sections

| Section | ID | Description |
|---------|----|-------------|
| Hero | `#home` | Full-screen headline with animated grid, CTAs |
| Marquee | — | Scrolling skill tags strip |
| About | `#about` | Bio, animated stat counters, skills grid |
| Case Study 1 | `#work` | **R'Dash** — SaaS analytics platform (primary case study) |
| Case Study 2 | — | **Elite60** — fitness app (full-stack, with screenshot gallery) |
| Other Projects | — | RankWatch, WebSignals, Knovelo, LocatR, Kockpit |
| Process | `#process` | 4-step design process breakdown |
| Contact | `#contact` | Email CTA + social links |

---

## Design System

### Colour tokens (`index.html:14–30`)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#07070F` | Page background |
| `--bg2` | `#0D0D1C` | Card / section backgrounds |
| `--bg3` | `#131326` | Elevated surfaces |
| `--accent` | `#7B6CF6` | Purple — primary accent (R'Dash) |
| `--rose` | `#F06292` | Rose — secondary accent |
| `--green` | `#4ADE80` | Emerald — Elite60 accent |
| `--amber` | `#FBB024` | Amber — warnings / highlights |
| `--text` | `#EEEEF8` | Primary text |
| `--text2` | `#8888AA` | Secondary / muted text |

### Typography

- **Plus Jakarta Sans** — UI text (weights 300–800, italic)
- **Instrument Serif** — Display / italic accent (`.serif` class)

Both loaded from Google Fonts with `display=swap`.

---

## Interactive Features

### Custom Cursor (`index.html:2138`)
Two-layer cursor: a sharp dot that follows the mouse instantly, and a larger ring that lerps behind it at 11% per frame via `requestAnimationFrame`.

```js
fx += (mx - fx) * 0.11;   // lag follower easing
```

Scales up (`.h` class) when hovering any interactive element.

### Scroll Reveal (`index.html:2180`)
`IntersectionObserver` watches all `.rv` elements. On entry, adds `.in` class which transitions `opacity: 0 → 1` and `translateY(28px → 0)`.

Delay utilities: `.d1` through `.d5` add `0.1s` increments to stagger children.

### Animated Counters (`index.html:2186`)
Second `IntersectionObserver` targets `.cnt[data-t]` elements. On entry, counts from 0 to `data-t` over ~45 steps at 35 ms intervals.

### 3D Card Tilt (`index.html:2202`)
`mousemove` on `.pc`, `.pain-c`, `.imp-c` cards calculates cursor offset from card centre and applies:
```js
`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
```

### Magnetic Buttons (`index.html:2214`)
`.btn-p`, `.btn-g`, `.nav-cta` buttons follow the cursor slightly (22% factor) on `mousemove`, snap back on `mouseleave`.

### Animated Grain (`index.html:1267`)
SVG `feTurbulence` filter rendered into a full-screen pseudo-element, animated with a CSS keyframe that shifts the `baseFrequency` to create film-grain noise texture.

### Hero Parallax Grid (`index.html:2174`)
Background dot-grid moves at `scrollY × 0.28` on scroll for a subtle depth effect.

### Scroll Progress Bar (`index.html:2168`)
Fixed 2px bar at the very top of the viewport fills as the user scrolls.

### Page Loader (`index.html:2122`)
Full-screen loader with a progress bar that randomly increments to 100%, then fades out.

---

## Elite60 Screenshot Gallery (`index.html:1700`)

Horizontal scroll gallery with 10 app screens.

**Layout rules:**
- Default: `nth-child(even)` items have `margin-top: 36px` for a staggered height effect
- `.center` class override: `margin-top: 0 !important` — applied to the Logo Screen and Splash Screen items so they sit at the visual midpoint

**Interactions:**
- **Drag to scroll** — mouse drag with 1.2× multiplier
- **Dot indicators** — active dot updates on scroll via `IntersectionObserver`-style distance check
- **Dot click** — `scrollIntoView({ inline: 'start' })` to jump to item

**Image specs:** All 10 images resized to max 630px wide, saved as JPEG ~80% quality via macOS `sips`. Total gallery weight ~850 KB.

---

## Deployment

### Netlify
- **Site name:** `buddh-portfolio`
- **Site ID:** `00812031-107f-442b-a53c-d1c02c0c77bd`
- **Custom domain:** `www.buddh.in`
- **Admin:** [app.netlify.com/projects/buddh-portfolio](https://app.netlify.com/projects/buddh-portfolio)

To redeploy manually:
```bash
~/.npm-global/bin/netlify deploy --prod --dir .
```

### DNS (buddh.in)
Point your domain registrar's nameservers to Netlify DNS:

```
dns1.p06.nsone.net
dns2.p06.nsone.net
dns3.p06.nsone.net
dns4.p06.nsone.net
```

### GitHub
```bash
git add index.html
git commit -m "your message"
git push origin main
```

---

## Social & Contact

| Platform | URL |
|----------|-----|
| Email | buddhpriya93@gmail.com |
| LinkedIn | [linkedin.com/in/buddhpriya-gautam](https://www.linkedin.com/in/buddhpriya-gautam/) |
| Behance | [behance.net/buddhpriyagautam](https://www.behance.net/buddhpriyagautam) |
| Dribbble | [dribbble.com/Buddh](https://dribbble.com/Buddh) |

---

## Making Changes

### Update text content
Open `index.html` and search for the section by its HTML comment (e.g. `<!-- HERO -->`, `<!-- ELITE60 CASE STUDY -->`). All content is plain HTML.

### Add a new case study
1. Copy an existing `<section>` block as a template
2. Add a `.cs-divider` between the new and previous case study
3. Add app images to `images/<project-name>/`
4. Redeploy

### Change accent colour
Update `--accent` in `:root` (`index.html:20`). The purple `#7B6CF6` is used across buttons, borders, glows, and hover states.

### Add/update images
Resize source images with `sips` before adding:
```bash
sips -Z 630 source.png --out images/elite60/name.jpg
```

---

*Built April 2026 · Buddhpriya Gautam · buddhpriya93@gmail.com*
