# PixelArcade 🕹️

A modern HTML5 game portal with ad monetization, multi-language support and pixel-art style UI.

**18 self-hosted games** (all built in-house, zero external dependencies, work offline):
Pac-Man · Snake · Tetris · Minesweeper · Sokoban · 2048 · Sudoku · Memory · Flappy Bird ·
Doodle Jump · Stack · Pong · Breakout · Space Invaders · Tower Defense · Gomoku · Tic Tac Toe · Hextris

## Structure

```
index.html          # Home: hero, category filter, search, game grid, recently-played
games/<id>/         # Each game: self-contained index.html + thumb.svg
pages/game.html     # Game player page (iframe) with 7 ad slots + rewarded-ad modal
pages/about|privacy|contact.html
admin/              # Static admin mock (client-side gate only — NOT real security)
assets/js/games-data.js  # The game database (add new games here)
assets/js/i18n.js        # 12 languages, auto-detect, RTL support
robots.txt / sitemap.xml / ads.txt / 404.html
```

## Run locally

Any static server works:

```bash
npx serve .        # or: python3 -m http.server 8000
```

> Don't open `index.html` via `file://` — the game iframe and localStorage need an HTTP origin.

## Deployment

GitHub Pages is enabled in branch mode: every push to `main` auto-deploys the
repo root within a minute or two. Live at:

**https://yangyang8305.github.io/PixelArcade/**

`.nojekyll` skips Jekyll processing so the site is served exactly as committed.
To go live with new changes, just merge them into `main`.

## Launch checklist (monetization)

1. ~~Deploy~~ — done, see above.
2. **Custom domain** — AdSense approval is much easier with your own domain than `*.github.io`.
   Add it in Settings → Pages → Custom domain, then update `sitemap.xml` + `robots.txt`.
3. Set a real contact email in `pages/contact.html`.
4. **Apply for Google AdSense** — needs the site live with real content + privacy policy (already included).
5. After approval: put your `pub-XXXX` ID in `ads.txt` (uncomment the line) and replace the
   `.ad-placeholder` divs with your AdSense ad units. Slot inventory:
   - Home: top banner, mid banner
   - Game page: top banner, left skyscraper 160×600, below-player 728×90, 2× sidebar 300×250,
     in-game sticky 320×50 (minimizable), bottom sticky 320×50 (closable)
   - ⚠️ AdSense policy: don't overlay ads on interactive game content; the in-game sticky
     slot is best used with a house/affiliate banner, not AdSense units.
6. Submit `sitemap.xml` in Google Search Console.

## Adding a game

1. Drop a self-contained `index.html` (+ optional `thumb.svg`, 300×200) into `games/<id>/`.
2. Add an entry to `assets/js/games-data.js` (`url: 'games/<id>/index.html'`).
3. Add the URL to `sitemap.xml`.

Optional: a game can trigger the rewarded-ad revive modal by calling
`parent.postMessage('gameover', '*')` and listening for a `'revive'` message back.

## Notes

- The admin panel is a static mock with a **client-side** password gate. Anyone can read the
  source; don't put anything secret there. Real admin needs a backend.
- Game thumbnails are SVG (`thumb.svg`); the card falls back to an emoji if missing.
