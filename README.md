# Sheraz Nadeem Portfolio Demo

This project recreates a premium AI expert portfolio landing page with a branded loader, hero section, stats, services, process, products, testimonials, and contact CTA.

## Structure

- `index.html` – main page markup
- `css/styles.css` – styling and responsive layout
- `js/main.js` – loader animation and small script behavior
- `assets/profile-sheraz.svg` – placeholder profile image

## Run locally

```bash
python3 -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Notes

- The loader displays `SHERAZ NADEEM`.
- Replace `assets/profile-sheraz.svg` with your own photo, or update the image `src` in `index.html`.
- Product cards are demo content and can be edited directly in `index.html`.
- A trailing custom cursor appears on mouse/trackpad devices; touch devices use their native cursor behavior.
- Sections reveal as you scroll, and the bottom-right button tracks page progress and scrolls back to the top.
- Animations respect the operating system's reduced-motion preference.
