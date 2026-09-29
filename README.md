# Sofia Gritti — Portfolio

Static portfolio site (HTML/CSS/JS, no build step) in three languages: English (UK), Svenska, Italiano.

## Publish on GitHub Pages
1. Create a new repository on GitHub, e.g. `sofia-gritti.github.io` (replace with your GitHub username) or any name such as `portfolio`.
2. Upload every file in this folder to the repository (Add file → Upload files), keeping the folder structure.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<username>.github.io/` (or `https://<username>.github.io/portfolio/`).

## Where to edit
| What | File |
|---|---|
| Case studies, graphic projects, experience, email/CV/LinkedIn links | `assets/js/content.js` |
| All interface texts (hero, sections, buttons) in EN/SV/IT | `assets/js/i18n.js` |
| Colours, fonts, spacing | `assets/css/style.css` (tokens at the top) |

### Add a new case study
Copy one project block in `content.js`, give it a new `id`, fill in the texts for `en`, `sv` and `it`, and set the cover image. Projects appear on the home page in the order they are listed. The `recent-4c` block is a placeholder: set `placeholder: false` and fill in the fields when the case study is ready.

### Images
Images currently load from your old Wix site. Before closing Wix, download them into `assets/img/` and replace the URLs in `content.js` (e.g. `cover: "assets/img/vallotti.png"`).

### Languages
The language is chosen from `?lang=en|sv|it`, then from the visitor's last choice, then from the browser language. Link directly to a version with e.g. `https://<username>.github.io/?lang=sv`.
