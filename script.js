:root {
  --bg: #0b0b0d;
  --panel: #131317;
  --panel-2: #18181d;
  --text: #f5f1ea;
  --muted: #b7b0a7;
  --line: rgba(255, 255, 255, 0.08);
  --accent: #e8dcc8;
  --accent-dark: #121212;
  --max-width: 1200px;
  --radius: 18px;
  --shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Inter", sans-serif;
  line-height: 1.6;
}

img,
video {
  display: block;
  width: 100%;
}

img {
  object-fit: cover;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(calc(100% - 2rem), var(--max-width));
  margin: 0 auto;
}

.section {
  padding: 5rem 0;
}

.eyebrow {
  margin: 0 0 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading-inline {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: end;
  flex-wrap: wrap;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  line-height: 1;
  letter-spacing: -0.02em;
}

h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2.3rem, 5vw, 3.8rem);
}

h3 {
  font-size: 1.7rem;
}

p {
  margin-top: 0;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(18px);
  background: rgba(11, 11, 13, 0.72);
  border-bottom: 1px solid var(--line);
}

.nav {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.6rem;
  letter-spacing: 0.04em;
}

.site-nav {
  display: flex;
  gap: 1.5rem;
}

.site-nav a {
  color: var(--muted);
  transition: color 0.2s ease;
}

.site-nav a:hover {
  color: var(--text);
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 0;
  padding: 0;
  width: 44px;
  height: 44px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--text);
  margin: 6px auto;
}

.hero {
  padding-top: 7rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2rem;
  align-items: center;
}

.hero-text,
.about-text,
.contact-copy {
  max-width: 62ch;
  color: var(--muted);
  font-size: 1.04rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.2rem;
  border-radius: 999px;
  border: 1px solid var(--line);
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--accent);
  color: var(--accent-dark);
  border-color: transparent;
}

.btn-secondary {
  background: transparent;
  color: var(--text);
}

.hero-image-card,
.project-tile,
.featured-reel,
.film-card,
.photo-card,
.contact-form,
.quote-grid blockquote {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.hero-image-card img {
  aspect-ratio: 4 / 5;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.project-tile img {
  aspect-ratio: 4 / 5;
}

.project-meta {
  padding: 1rem;
}

.project-year {
  color: var(--muted);
  margin: 0.2rem 0;
}

.featured-reel {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  margin-bottom: 1.5rem;
}

.video-frame video {
  aspect-ratio: 16 / 9;
  background: #000;
}

.reel-copy {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.scroll-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(240px, 1fr));
  gap: 1rem;
}

.film-card img {
  aspect-ratio: 16 / 10;
}

.film-card-copy {
  padding: 1rem;
}

.filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.6rem 1rem;
  cursor: pointer;
}

.filter-btn.active {
  background: var(--accent);
  color: var(--accent-dark);
  border-color: transparent;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.photo-card img {
  aspect-ratio: 4 / 5;
}

.about-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 2rem;
}

.about-lists {
  display: grid;
  gap: 1rem;
}

.about-lists h3 {
  margin-bottom: 0.6rem;
}

.about-lists ul {
  margin: 0;
  padding-left: 1rem;
  color: var(--muted);
}

.trust-strip {
  padding-top: 0;
}

.quote-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.quote-grid blockquote {
  margin: 0;
  padding: 1.4rem;
  color: var(--muted);
  font-size: 1rem;
}

.response-time {
  color: var(--muted);
}

.contact-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1.5rem;
}

.social-link {
  color: var(--muted);
}

.contact-form {
  padding: 1.4rem;
}

.contact-form label {
  display: block;
  margin-bottom: 0.45rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-bottom: 1rem;
  background: var(--panel-2);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.9rem 1rem;
}

.contact-form textarea {
  resize: vertical;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 1.2rem 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  color: var(--muted);
}

.hidden {
  display: none !important;
}

@media (max-width: 980px) {
  .hero-grid,
  .featured-reel,
  .about-grid,
  .contact-grid,
  .project-grid,
  .photo-grid,
  .quote-grid,
  .scroll-row {
    grid-template-columns: 1fr 1fr;
  }

  .featured-reel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 760px) {
  .menu-toggle {
    display: block;
  }

  .site-nav {
    position: absolute;
    top: 76px;
    left: 0;
    right: 0;
    background: rgba(11, 11, 13, 0.98);
    border-bottom: 1px solid var(--line);
    display: none;
    flex-direction: column;
    padding: 1rem;
  }

  .site-nav.open {
    display: flex;
  }

  .hero-grid,
  .project-grid,
  .photo-grid,
  .quote-grid,
  .about-grid,
  .contact-grid,
  .scroll-row {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 4rem 0;
  }

  h1 {
    font-size: 3rem;
  }
}
