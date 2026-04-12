# Purdue Karate Club Website

The official website for the Purdue Karate Club. It is a single-page site built with plain HTML, CSS, and JavaScript — no special framework required. The page includes sections for news, the practice schedule, club information, FAQs, a photo gallery, and contact links.

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

## Updating Information

All updates to the website are made directly through GitHub's website — no software installation required. You just need a GitHub account with access to this repository.

However, if you're familiar with programming then you probably know better ways of doing this :)

---

### Updating Text

Text content (announcements, schedule, FAQs, leadership names, etc.) all lives inside `index.html`.

1. Go to the repository on GitHub and click on `index.html` to open it.
2. Click the **pencil icon** (Edit this file) in the top-right corner of the file view.
3. Use **Ctrl+F** (or **Cmd+F** on Mac) to search for the text you want to change. For example, search for a name, a time, or a phrase from the section you want to edit.
4. Make your changes directly in the editor.
5. When done, scroll to the bottom of the page. Under **Commit changes**, write a short description of what you changed (e.g., `Update fall schedule times`).
6. Click **Commit changes**. The website will update automatically within a minute or two.

**Tips for finding the right spot:**
- Each section of the page has a comment label like `<!-- NEWS -->`, `<!-- SCHEDULE -->`, `<!-- FAQS -->`, etc. Search for these to jump to the right section.
- To update the **practice schedule**, search for the day name (e.g., `Tuesday`).
- To update **news announcements**, search for `id="news"`.
- To update **leadership names**, search for `Who runs the Karate Club`.

---

### Uploading New Photos

Photos cannot be edited through the file editor — they must be uploaded through GitHub's file upload interface.

#### Adding photos to the gallery

1. Go to the repository on GitHub and navigate to the folder where you want to add photos. For example: `img/` → `gallery/` → `2026/`.
2. Click **Add file** → **Upload files**.
3. Drag and drop your photos onto the upload area, or click **choose your files** to browse.
4. Scroll down, write a short commit message (e.g., `Add spring 2026 photos`), and click **Commit changes**.

The photos are now in the repository, but they won't appear on the website until you add them to `index.html`. For each photo you uploaded, add a line like the one below inside the correct year's gallery block in `index.html` (follow the steps in [Updating Text](#updating-text) to edit the file):

```html
<a href="img/gallery/2026/YourPhoto.jpg" class="hoverZoomLink" title="Your caption here"><img src="img/gallery/2026/YourPhoto.jpg" alt="Your caption here"></a>
```

#### Replacing an existing image (e.g. the header or logo)

1. Navigate to the file you want to replace (e.g., `img/header.JPG` or `KarateClubClear.png`).
2. Click **Add file** → **Upload files** from the parent folder.
3. Upload the new file **using the exact same filename** as the old one.
4. Commit the change. The new image will replace the old one on the website.

> **Note:** If you use a different filename, you will also need to update `index.html` to point to the new name.

---

## License

This project is based on the [Start Bootstrap Creative](https://startbootstrap.com/template-overviews/creative/) template, released under the [MIT License](LICENSE).
