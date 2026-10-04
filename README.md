# Steve: Way of Shinobi Wiki

A zero-build static wiki starter designed for GitHub Pages.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload **all files and folders from this archive to the repository root**.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. GitHub will give you the public site URL.

No npm, Node, framework, database, or build command is required.

## Where to edit things

- `index.html` — homepage and category cards.
- `getting-started.html`, `items.html`, etc. — main wiki sections.
- `templates/` — copyable article templates for clans, jutsu, items, entities and guides.
- `assets/css/style.css` — all visual styling.
- `assets/js/site.js` — mobile navigation, search, FAQ accordions and active table of contents.
- `assets/img/` — wiki art/icons. Current starter uses item art from the mod itself.

## Adding a new page

Copy the closest file from `templates/`, move the copy wherever you want, rename it, and update the links. If it is a major page that should appear in search, add one object to `PAGES` inside `assets/js/site.js`.

## Font

The starter uses **Pixelify Sans** (open source, loaded from Google Fonts) for the Minecraft-like UI look and Inter for readable body text. If you own a licensed Minecraft-style font and want the exact in-game look, replace the font import in `assets/css/style.css` with your own hosted font.

## Images

Minecraft-style art is rendered with `image-rendering: pixelated`, so small game textures stay crisp when enlarged.

## Notes

The text is intentionally a mixture of useful starter copy and `TODO` placeholders. The structure and navigation are ready; fill the exact gameplay values from the current mod build before treating the wiki as authoritative.
