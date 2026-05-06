# Justine Nebres Portfolio

This is a one-page personal portfolio built with static `HTML`, `CSS`, and `JavaScript`, styled with `Tailwind CSS` via CDN.

It is designed to work well with free `GitHub Pages` hosting.

## Project Structure

```text
Portfolio/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── docs/
    │   ├── Justine-Nebres-Resume.pdf
    │   ├── OCNA Wireless_Justine John Nebres.pdf
    │   └── TPNA Enterprise Wireless_Justine John Nebres.pdf
    ├── images/
    │   └── profile.jpg
    └── js/
        └── script.js
```

## Sections Included

- Hero
- About
- Experience
- Selected Projects
- Skills
- Certifications
- Contact

## Features

- Light-first modern UI
- Dark mode toggle
- Animated futuristic background
- Resume download button
- Click-to-view certificate section
- Responsive layout for desktop and mobile
- Static deployment ready for GitHub Pages

## How To Edit

### Update content

- Edit text and sections in `index.html`
- Update styles in `assets/css/styles.css`
- Update interactions in `assets/js/script.js`

### Update profile picture

- Replace `assets/images/profile.jpg`

### Update resume

- Replace `assets/docs/Justine-Nebres-Resume.pdf`

### Update certificates

- Replace the PDF files inside `assets/docs/`
- If filenames change, update the matching paths in `index.html`

## Run Locally

You can open `index.html` directly in your browser.

For a better local preview, you can also run a simple local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy To GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this `Portfolio` folder.
3. Push to the `main` branch.
4. In GitHub, go to `Settings > Pages`.
5. Under `Build and deployment`, choose:
   `Deploy from a branch`
6. Select:
   `main` branch and `/root`
7. Save and wait for GitHub Pages to publish the site.

Your site will usually be available at:

```text
https://your-username.github.io/repository-name/
```

## Notes

- This portfolio uses `Tailwind CSS` through the CDN, so there is no build step required.
- Keep asset paths relative so the site continues to work on GitHub Pages.
