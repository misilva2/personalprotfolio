# Micka Silva | Personal Portfolio

**Live site:** [misilva2.github.io/personalprotfolio](https://misilva2.github.io/personalprotfolio)

A hand-coded personal portfolio and digital field journal for **Micka Silva**, also known as **Money Meeks** — web developer, marketer, hospitality operator, and recording artist from South Eastern Arizona.

---

## What This Is

This portfolio is not a template. Every line of HTML, CSS, and JavaScript was written from scratch to reflect a specific point of view: dirt-bag chic meets dark academia, desert atmosphere, and systems thinking. It functions as a case study, a manifesto, and a direct signal to collaborators about the kind of work Micka builds.

The site spans two pages:

- **`index.html`** — The main portfolio: hero introduction, about section, work highlights across three lanes (marketing, hospitality, music), a manifesto, field notes, social links, and contact.
- **`projects.html`** — A dedicated case study page covering web design, business, and music projects in detail.

---

## How It Was Built

### Structure
- Pure semantic **HTML5** — no frameworks, no generators
- Landmark regions (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) with `aria-labelledby` on every section so screen readers can navigate by region
- JSON-LD structured data (`schema.org/Person`) for SEO and rich results
- Open Graph and Twitter Card meta tags for social sharing
- Skip-to-content link, `aria-current` page indicators, and `aria-pressed` toggle state

### Styling
- Handwritten **CSS** using custom properties (CSS variables) for a full day/night theming system
- Typography stack: `Cormorant Garamond` (headings) + `IBM Plex Mono` (labels, UI) + `IBM Plex Sans` (body) — loaded via Google Fonts with `preconnect` hints
- Layered `radial-gradient` + `repeating-linear-gradient` background for ambient depth without images
- `clamp()` fluid typography on headings and lead text — scales smoothly across all viewport widths
- CSS Grid for hero layout, card grids, timeline rows, and social links — collapses gracefully at 960 px, 720 px, and 480 px breakpoints
- `prefers-reduced-motion` media query disables all transitions and animations for users who need it
- `prefers-contrast: more` media query increases border weight and link contrast
- `.sr-only` utility class for screen-reader-only content that does not affect visual layout

### Behavior
- Vanilla **JavaScript** — no libraries or build tools
- `IntersectionObserver` powers a staggered scroll-reveal animation (fade + rise) on every `.reveal` element
- Scroll-driven section fade: sections soften in opacity as they move out of the viewport focus zone, giving the page a cinematic depth-of-field feel
- `requestAnimationFrame`-throttled scroll handler keeps scroll effects at display refresh rate
- Page scroll progress bar at the top of the viewport
- Day/Night theme toggle persisted to `localStorage`
- `prefers-reduced-motion` respected at runtime — scroll fade effects are disabled when the user requests reduced motion

### Performance and SEO
- Zero JavaScript dependencies
- Zero CSS frameworks — stylesheet is purpose-written, under 35 KB
- `rel="noopener noreferrer"` on all external links
- Canonical URLs on both pages
- Fully responsive from 320 px to 1440 px+

---

## Skills Demonstrated

These are the same skills offered through [Southern Arizona Marketing Systems](https://SouthernArizonaMarketingSystems.com) and present across all three lanes of work on the portfolio:

| Skill | Where it shows up on this site |
|---|---|
| **HTML / Semantic Markup** | Full page structure, landmark regions, ARIA attributes, JSON-LD |
| **CSS / Layout** | Custom properties, Grid, fluid type, dark mode, motion, contrast media queries |
| **Vanilla JavaScript** | IntersectionObserver, scroll effects, theme persistence, rAF throttling |
| **Accessibility (WCAG AA)** | Skip links, aria labels, focus rings, reduced-motion support, contrast-mode support |
| **SEO** | Meta descriptions, Open Graph, Twitter Card, structured data, canonical links |
| **Brand & Design Systems** | Cohesive visual language: color palette, type scale, spacing rhythm, dark/light modes |
| **Responsive Design** | Mobile-first breakpoints, fluid grid collapse, 44 px tap targets on mobile |
| **Hospitality Operations** | Featured in the Hospitality Leadership card — 5% owner and manager at The Arctic Circle in Bisbee, AZ; sold out two consecutive weekends and grossed $10K in three weeks |
| **Marketing Strategy** | Featured via Southern Arizona Marketing Systems — brand strategy, lead generation, performance campaigns |
| **Music Production & Artist Branding** | Featured as Money Meeks — original rap, production, YouTube/Instagram growth |

---

## File Structure

```
/
├── index.html          Main portfolio page
├── projects.html       Case study and project detail page
├── styles.css          All styles — theming, layout, animation, responsive
├── script.js           All behavior — reveal, scroll fade, theme toggle, progress bar
├── robots.txt          Search engine crawl directives
└── README.md           This file
```

---

## About Micka Silva

Micka is a biomedical science student at Arizona State University on a path toward becoming a physician assistant. Outside of academics, she is a co-founder of **Southern Arizona Marketing Systems**, a 5% owner and manager of **The Arctic Circle** hospitality venue, and a recording artist under the name **Money Meeks**.

She approaches every project — a website, a campaign, a record — as a system with atmosphere: clear architecture underneath, story and edge on top.

**Connect:**
- [LinkedIn](https://www.linkedin.com/in/michaela-silva-436a8a24b)
- [Instagram @moneymeeks777](https://www.instagram.com/moneymeeks777/)
- [YouTube @moneymeeks2375](https://youtube.com/@moneymeeks2375)
- [SouthernArizonaMarketingSystems.com](https://SouthernArizonaMarketingSystems.com)
