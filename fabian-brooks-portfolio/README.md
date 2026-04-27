# Fabian Brooks — Portfolio

Personal portfolio site. Vite + React. No template, no Tailwind, hand-built CSS.

## Quick start (local)

```bash
npm install
npm run dev
```

Site runs at `http://localhost:5173`. Edit `src/App.jsx` to update content; everything is in clearly labeled constants at the top of the file.

## Edit before you ship

Open `src/App.jsx`. The top of the file has a `PROFILE` object — replace the placeholders:

```js
const PROFILE = {
  name: 'Fabian Brooks',
  location: 'Federal Way, Washington',
  email: 'hello@example.com',           // ← your real email
  linkedin: 'https://www.linkedin.com/in/your-handle',  // ← your LinkedIn URL
  github: 'https://github.com/your-handle',             // ← your GitHub URL
  itchio: 'https://aieseattle.itch.io',                 // ← your itch.io profile if you have one
}
```

Other content lives in the `GAMES`, `INTERVERSE_PRODUCTS`, `TIMELINE`, and `SKILLS` arrays right below `PROFILE`. All editable as plain JavaScript objects.

## Deploy to Vercel (free, ~3 minutes)

1. Push this folder to a new GitHub repo (`fabian-portfolio` or similar).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, pick the repo, click **Deploy**.
4. Vercel auto-detects Vite and gives you a URL like `fabian-portfolio.vercel.app`.

That's the URL you paste into Handshake AI's portfolio field.

### Deploy to Netlify (alternative)

Same idea: push to GitHub, sign in to [netlify.com](https://netlify.com), import the repo. Auto-detects Vite. Done.

### Deploy with no GitHub

```bash
npm run build
```

This produces a `dist/` folder. Drag and drop that folder onto vercel.com or netlify.com — instant deploy, no GitHub required.

## Custom domain

Once deployed on Vercel/Netlify, you can add a custom domain (e.g. `fabianbrooks.dev`) in their dashboard. Domain registration is ~$12/year on Namecheap, Cloudflare, or Porkbun. Strongly recommend grabbing one before you submit applications.

## Tech notes

- **No Tailwind** — all CSS is in `src/styles.css` with CSS variables for theming. Easier to keep distinctive.
- **No images** — design is fully typographic + color. Loads instantly. Add screenshots later if you want by dropping them in `public/` and referencing `/your-image.png` from JSX.
- **Fonts**: Fraunces (display serif), Geist (body), Geist Mono — all from Google Fonts, already loaded in `index.html`.
- **Accessibility**: respects `prefers-reduced-motion`, semantic landmarks, keyboard-friendly nav.

## Updating later

- New game shipped? Add an entry to the `GAMES` array.
- New Interverse product? Add to `INTERVERSE_PRODUCTS`.
- New job/credential? Add to `TIMELINE` (top of array = most recent).

Push to GitHub, Vercel auto-redeploys.
