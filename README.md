# Selixor — site drop-in

Static HTML of the current Selixor site. No build step. GitHub Pages ready.

## How to update your repo

Replace the existing site with these files at the **root** of the repository (or the folder GitHub Pages serves):

```
index.html
favicon.svg
og.jpg
.nojekyll
team/
  misael-de-paz.jpeg
  marcos-aramburu.jpeg
  ximena-poblano.jpeg
  vanesa-sokoloff.jpeg
cinematic/
  laptop.jpg
  console.jpg
  operator.jpg
  architecture.jpg
```

Then commit and push. If Pages is already on, it will publish on the next deploy.

## Photos

Keep the `team/` filenames. Swap the JPEGs for the real portraits whenever you want — the HTML tags stay the same.

If you already have founder photos in the repo (`mi_foto.jpeg`, `2.jpeg`, …), copy them over the files in `team/` with the names above.

## Notes

- Single `index.html`. CSS and JS are inlined.
- About Us and the 16 technical documents open as overlays (hash: `#about`, `#doc/partners`, etc.).
- Access form still posts to Formspree (`xjgjwoez`).
- `.nojekyll` stops GitHub Pages from running Jekyll on the folder.
