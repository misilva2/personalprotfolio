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

---

## A Living Project — Coming Back to It Over Time

This portfolio was not built in a single sitting. It has been a recurring project — something returned to at different points in time to add content, fix issues, improve quality, and reflect a more accurate picture of where the work stands. New sections, improved accessibility, a scroll-fade effect, the projects page, and this README were all added in separate passes rather than shipped all at once.

That pattern is deliberate. A portfolio should evolve at the same pace as the person it represents.

---

## Real Challenges Faced

### Debugging JavaScript

JavaScript was one of the harder parts to get right. The scroll-fade behavior — where sections soften as they move out of focus while scrolling — required understanding `IntersectionObserver`, `requestAnimationFrame`, and how CSS custom properties can be updated dynamically at runtime. Early versions had sections fading out too aggressively, making content like the Manifesto unreadable mid-scroll. Tracking down *why* a specific section was getting dimmed while others were not required reading the observer logic carefully, isolating the selector, and testing the threshold math until the behavior felt intentional rather than broken.

The theme toggle also had a subtle bug: the `aria-label` and `aria-pressed` state were not being set on initial load — only after the first click. This meant screen readers announced an incorrect state to users who had a saved theme preference. Finding it required thinking through the full execution path, not just the click handler.

### Git Push and Pull Issues

At one point the local branch and the remote on GitHub diverged. The remote had a `CNAME` commit that was not in the local history, and local had new commits the remote had not seen. Running a plain `git push` was blocked. Running `git pull` without a strategy would have created a messy merge commit. The fix was `git pull --rebase origin main` — replaying local commits on top of the updated remote history — followed by a clean push. Understanding *why* that works (rebasing rewrites the local history so it starts from the current remote tip) was the real lesson, not just running the command.

---

## Using AI as a Learning Tool

Throughout this project, AI (GitHub Copilot) was used not as a shortcut but as a thinking partner. When something broke, the approach was to describe what was happening, read the explanation, and then understand *why* the fix worked before moving on. That distinction matters.

Some specific things AI helped clarify:

- **Why rebasing is cleaner than merging** when a branch diverges from its remote, and what the commit graph actually looks like in each scenario
- **How `IntersectionObserver` thresholds work** and why the fade effect was hitting the wrong sections — the fix required adjusting the focus line calculation, not just changing an opacity value
- **Why `rel="noopener noreferrer"` matters** on external links and what tab-napping is — a security concern that is easy to miss when you are focused on layout
- **How `aria-labelledby` differs from `aria-label`** and when each is the right choice for assistive technology
- **What diverged git history looks like** in a commit graph and how to read `ahead N, behind M` branch state before deciding on a resolution strategy

The goal was never to have AI write the code and ship it blindly. The goal was to use it the way a good mentor works: ask a direct question, get a direct answer, push back if it does not make sense, and walk away understanding the thing rather than just having a fix in place.

That approach — treating every bug and blocker as something to learn from rather than just clear — is the same mindset behind everything else in this portfolio.
