# Portfolio — lekhrazz19.github.io

Static portfolio site deployed with GitHub Pages.

## Structure
- `index.html` — main page
- `style.css` — styles
- `script.js` — small interactivity (mobile nav, year)
- `404.html` — not found page
- `.github/workflows/deploy.yml` — Pages deploy workflow

## Local preview
Use any static server to preview locally.

PowerShell (built-in Python if available):

```pwsh
# Start a local server on http://localhost:8000
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deployment
Push to `main`. GitHub Actions publishes the root folder to GitHub Pages.

If Pages is not enabled yet:
- Go to Settings → Pages
- Source: Deploy from a branch → `gh-pages` (after first successful run) or GitHub Actions depending on your preference

## Customize
- Update content in `index.html` (About, Skills, Projects, Experience, Contact)
- Add your own projects with real links
- Tweak colors in `style.css` under `:root`

---
Built with ❤️ and hosted on GitHub Pages.