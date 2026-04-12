# Purdue Karate Club Website

The official website for the Purdue Karate Club. It is a single-page site built with plain HTML, CSS, and JavaScript — no special framework required. The page includes sections for news, the practice schedule, club information, FAQs, a photo gallery, and contact links.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Running the Site Locally](#running-the-site-locally)
- [How the Site Is Built](#how-the-site-is-built)
- [Updating Content](#updating-content)
  - [News](#news)
  - [Practice Schedule](#practice-schedule)
  - [About / Leadership](#about--leadership)
  - [FAQs](#faqs)
  - [Gallery](#gallery)
  - [Contact Information](#contact-information)
- [Changing the Look and Feel](#changing-the-look-and-feel)
- [Replacing Images](#replacing-images)
- [Deploying Changes](#deploying-changes)

---

## Project Structure

```
purdue-karate-club-website/
├── index.html          ← The entire website lives in this one file
├── css/
│   └── mycss.css       ← All custom styles (colors, layout, fonts, etc.)
├── js/
│   └── myjs.js         ← All custom interactivity (accordion, gallery lightbox, etc.)
├── fonts/
│   └── icomoon/        ← Custom icon font with karate-themed icons
├── img/
│   ├── header.JPG      ← Hero/banner background image
│   ├── about/          ← Photos of leadership team members
│   ├── ads/            ← Promotional images
│   └── gallery/        ← Gallery photos organized by year (e.g. 2024/, 2023/, ...)
├── KarateClubClear.png ← Club logo (used in navbar and footer)
├── GOJUFist.jpg        ← Image used when sharing the site on social media
└── favicon.ico         ← The small icon shown in the browser tab
```

The most important file is **`index.html`**. Almost every content change you will ever need to make happens inside that one file. The CSS file controls appearance and the JS file controls interactivity — you usually only need to touch those if you want to change the visual design or behavior.

---

## Running the Site Locally

Because this is a plain HTML site, you do not need to install anything to view it. Just open `index.html` in any web browser (Chrome, Firefox, Edge, etc.) by double-clicking the file.

For a better development experience with live-reloading (the browser automatically refreshes when you save a file), you can use the Gulp dev server:

1. Make sure [Node.js](https://nodejs.org/) is installed on your computer.
2. Open a terminal in the project folder.
3. Install dependencies (only needed once):
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   gulp dev
   ```

This opens the site in your browser and watches for file changes. You can also just open `index.html` directly — live-reloading is optional.

---

## How the Site Is Built

The site is a **single-page application**, meaning the entire website is one HTML file (`index.html`). Instead of navigating to different pages, clicking the nav links smoothly scrolls you to different sections on the same page.

Each section of the page has an `id` attribute that the nav links point to. For example:

```html
<!-- Navigation link -->
<a href="#schedule">Schedule</a>

<!-- The section it scrolls to -->
<section id="schedule">
  ...
</section>
```

The interactive elements (accordions that expand/collapse, the photo lightbox, the hamburger menu on mobile) are powered by the JavaScript in `js/myjs.js`. The layout and visual styling come from `css/mycss.css`.

---

## Updating Content

All content changes are made inside `index.html`. Open it in a text editor (VS Code is recommended). Each section is clearly labeled with an HTML comment like `<!-- NEWS -->` or `<!-- SCHEDULE -->` to help you find your place.

### News

The news section is near the top of the page under the `id="news"` section. It contains a `<ul>` (unordered list) of announcements.

To **add a new announcement**, copy an existing `<li>` item and change the text:

```html
<ul>
  <li>Your new announcement here.</li>
  <li>Another announcement. <a href="https://example.com">Link text</a></li>
</ul>
```

To **remove an item**, delete the entire `<li>...</li>` line.

To **change the season/year** in the heading (e.g., "Summer 2025 Announcements"), find the `<h2>` tag inside the news section and update the text.

---

### Practice Schedule

The schedule section has the `id="schedule"`. It contains three cards, one for each practice day. Each card looks like this:

```html
<div class="schedule-card">
  <span class="icon-karate-fighter"></span>   <!-- icon -->
  <h3>Tuesday</h3>
  <p>8:00 PM - 10:00 PM</p>
  <p>Lambert Fieldhouse, 2nd Floor</p>
</div>
```

To update a day, time, or location — just change the text inside the `<h3>` and `<p>` tags.

The three available icons are:
- `icon-karate-fighter`
- `icon-karate-high-kick`
- `icon-karate-master`

Change the class on the `<span>` to switch which icon is displayed.

---

### About / Leadership

The about section (`id="about"`) uses **accordion panels** — click a heading to expand or collapse it. Each panel is structured like this:

```html
<button class="accordion-btn">Panel Title</button>
<div class="accordion-panel">
  <p>Content goes here.</p>
</div>
```

To **add a new panel**, copy an existing button/panel pair and paste it before the closing `</div>` of the about section, then update the title and content.

To **add a new leadership member photo**, place their photo in `img/about/` and reference it inside a panel:

```html
<img src="img/about/yourfile.jpg" alt="Person's Name">
```

---

### FAQs

The FAQ section (`id="faqs"`) uses the same accordion structure as the About section. Each question is a button, and the answer is in the panel below it.

To **add a new FAQ**:

```html
<button class="accordion-btn">Your Question Here?</button>
<div class="accordion-panel">
  <p>Your answer here.</p>
</div>
```

To **edit an existing question or answer**, find the button or panel with the matching text and change it directly.

---

### Gallery

The gallery section (`id="gallery"`) is organized by year. Each year is its own accordion that expands to show a grid of photos. Clicking a photo opens a full-screen lightbox viewer with prev/next navigation.

Each year group looks like this:

```html
<button class="accordion-btn pictures-accordion-btn">2024</button>
<div class="accordion-panel pictures-accordion-panel">
  <div class="gallery-grid">
    <img src="img/gallery/2024/photo1.jpg" title="Caption for photo 1">
    <img src="img/gallery/2024/photo2.jpg" title="Caption for photo 2">
  </div>
</div>
```

**To add photos to an existing year:**
1. Place the image files in the corresponding folder (e.g., `img/gallery/2024/`).
2. Add a new `<img>` tag inside that year's `<div class="gallery-grid">` block.
3. Set the `title` attribute to a short description — this appears as the caption in the lightbox.

**To add a new year:**
1. Create a new folder: `img/gallery/2025/`
2. Copy an existing year's accordion block in `index.html` and update the year number and image paths.
3. Add it near the top of the gallery section so the newest year appears first.

**Tip:** Keep image files reasonably sized (under 2 MB each) to avoid slow page loads. A good target is around 800–1200px wide.

---

### Contact Information

The contact section (`id="contact"`) has cards for email and social media. Each card looks like this:

```html
<div class="contact-card">
  <a href="mailto:karate@purdue.edu">
    <i class="fa fa-envelope"></i>
    <p>karate@purdue.edu</p>
  </a>
</div>
```

To update an email address, change both the `href="mailto:..."` value and the visible text in `<p>`.

To update a social media handle or link, find the card with the matching icon (e.g., `fa-instagram`) and update the `href` and the `<p>` text.

---

## Changing the Look and Feel

Visual styling is controlled by `css/mycss.css`. The color scheme is defined at the top of the file using **CSS variables** — changing one variable updates every place that color is used:

```css
:root {
  --gold:  #C28E0E;  /* Main brand/accent color */
  --dark:  #212529;  /* Dark backgrounds and text */
  --light: #f8f9fa;  /* Light backgrounds */
  --white: #ffffff;
}
```

For example, to change the gold color to a brighter shade, update `--gold` and every button, heading, and accent will update automatically.

The fonts (Open Sans and Merriweather) are loaded from Google Fonts at the top of `index.html`. To change the font, replace the Google Fonts link and update the `font-family` values in `mycss.css`.

---

## Replacing Images

| Image | Location | Purpose |
|---|---|---|
| Hero background | `img/header.JPG` | The large banner image at the very top |
| Club logo | `KarateClubClear.png` | Navbar and footer logo |
| Social media preview | `GOJUFist.jpg` | Shown when sharing the site link online |
| Browser tab icon | `favicon.ico` | Small icon in the browser tab |
| Leadership photos | `img/about/` | Photos in the About section |
| Gallery photos | `img/gallery/<year>/` | Year-by-year gallery |

To replace an image, put the new file in the same location with the same filename (or update the `src` attribute in `index.html` to point to the new file name).

---

## Deploying Changes

The site is static HTML — deploying it means uploading the project files to a web host.

**If hosted on GitHub Pages:**
1. Commit your changes with Git:
   ```bash
   git add .
   git commit -m "Update schedule for fall 2025"
   git push
   ```
2. GitHub Pages automatically serves the updated files once the push is complete.

**If hosted elsewhere (FTP, shared hosting, etc.):**
- Upload the changed files to the same directory on the server. The most commonly changed files are `index.html`, `css/mycss.css`, `js/myjs.js`, and any new images in the `img/` folder.

---

## License

This project is based on the [Start Bootstrap Creative](https://startbootstrap.com/template-overviews/creative/) template, released under the [MIT License](LICENSE).
