# One-Page Business Site Template 🌿

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

A clean, single-page website template built with plain HTML, CSS and JavaScript — no frameworks, no build step. Designed as a starting point for small businesses, local activities or personal projects that need a simple, professional landing page.

## 🚀 Features

- Sticky header with logo + navigation menu
- Scroll-spy navigation (the active section is highlighted automatically while scrolling)
- Hero section with title, description and framed banner image
- "Document style" section where text wraps around an image, like in Word
- Fully responsive layout (mobile, tablet, desktop)
- Single color palette controlled via CSS variables — change one value, the whole site updates
- Zero dependencies: just open `index.html` in a browser

## 📁 Project structure

```
template-site/
├── index.html        # markup and content
├── style.css          # all styling, including the color palette
├── script.js           # scroll-spy navigation logic
├── assets/              # put your own images here (logo, banner, etc.)
└── README.md
```

## 🎨 Customization

1. **Colors** — edit the CSS variables at the top of `style.css`:
   ```css
   :root {
       --accent: #2e7d32;
       --accent-dark: #1b5e20;
       --accent-light: #66bb6a;
       --bg: #f5f7fa;
       --text: #1f2937;
       --muted: #6b7280;
   }
   ```
2. **Text and content** — everything is in `index.html`, with Italian comments marking what to change (title, tagline, section text, contact info).
3. **Logo** — by default the header shows a "+" placeholder mark. To use your own logo, replace the `<span>+</span>` in `index.html` with `<img src="assets/logo.png" alt="Logo">`.
4. **Images** — the hero section has a dashed placeholder frame ready for an image: drop your file into `assets/` and update the `src` of `hero-banner.jpg`.
5. **Sections** — add or remove `<section>` blocks in `index.html`; just make sure each menu link's `href="#id"` matches a section `id`. A reusable "text wraps around image" layout (`.document-layout` / `.document-image` in `style.css`) is available if you want to add an image inside any section, Word-style.

## ▶️ Usage

No build tools required. Clone the repo and open `index.html` directly in a browser, or serve it with any static file server:

```bash
python -m http.server 8000
```

## ⚠️ Disclaimer

This is a template intended as a starting point for personal or small-business websites. It's not tied to any specific business — replace all placeholder text and images before publishing.

## 👨‍💻 Author

Francesco Falone — personal project / template for reuse in future web projects.

## 📄 License

This project is licensed under the MIT License — see [LICENSE](LICENSE).
