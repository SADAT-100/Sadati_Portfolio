# Sadati Fred Mwasongwe · Portfolio

A static, dependency-free portfolio website: plain HTML, CSS and JavaScript. Every section is rendered from one data file, so day-to-day updates never touch the layout code.

## Files

Every file sits in one folder, with no subfolders, so all links in the code use the plain file name (for example `profile-portrait.jpg`, not `assets/images/profile-portrait.jpg`).

- `index.html`, `resume.html`, `404.html`: the pages
- `styles.css`: design and theme
- `data.js`: YOUR CONTENT (profile, roles, skills, projects, documents)
- `main.js`: rendering and interactions (no need to edit)
- Images, PDFs and icons: next to them, referenced by file name
- `Code.gs`: the Google Apps Script for the contact form (not used by the site itself)

When you add a new image or PDF, upload it next to the other files and put just its file name in `data.js`.

## Run it locally

Double-click `index.html` to open it, or for the full experience (file checks, PDF previews) run a tiny local server from this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Common updates

All of these happen in **`data.js`**. Each entry is a block like `{ title: "...", ... }`. Copy an existing block, paste it below, and change the values. Keep the commas between blocks.

### Replace your profile photo
Save a portrait photo (4:5, at least 640×800, JPG) as `profile-portrait.jpg`, or change `profile.portrait` in `data.js`.

### Update your resume
1. Replace `resume.pdf` with the new PDF (keep the same name).
2. Update `resume.size` and `resume.version` in `data.js`.
3. Refresh the preview image (optional but recommended):
   `pdftoppm -jpeg -r 100 -singlefile resume.pdf resume-preview`
   or take a screenshot of page 1 and save it as `resume-preview.jpg`.

The web resume (`resume.html`) is generated from `data.js`, so it stays separate from the PDF; update either one independently.

### Add a document
1. Upload the file next to the other files (e.g. `training-report.pdf`).
2. In `documents`, set the entry’s `file` to that path and add `size` / `version` if you like.

Only entries with a real `file` are shown. When the site is served over http(s), it also checks every listed file exists and hides the Download button if it does not. **Never put private files (transcripts, IDs) in this folder**: anything inside it is public once deployed.

### Add a project
Add a block to `projects`. Fields: `id` (unique, no spaces), `title`, `category` (must match one in `projectCategories`), `status` (`live` or `completed`, with an optional `statusLabel`), `cover` (image path), `overview`, `problem`, `contribution`, `tools`, `gallery` (list of image paths), `links.demo`, `links.repo`, `documents` (list of `{ title, file }`). Empty links and empty sections are simply hidden.

### Add a certificate
Add a block to `certificates` with `title`, `issuer`, `date`, `category`, `description`. Upload a scan next to the other files and set `image` to its file name (JPG/PNG) to show it in the preview. Add `verifyUrl` if the issuer offers online verification.

### Add an activity or a job
Add blocks to `activities` or `experience` the same way. Leave out any field you have no information for; empty fields are hidden.

### Change personal information
`profile` (name, role, location, availability badge), `contact` (email, phone, location) and `social` (LinkedIn, GitHub…). Your phone number is stored but **hidden** (`phone.show: false`); switch it to `true` only if you want it public. The “Open to opportunities” badge is also off (`availability.show: false`).

## Contact form

By default the form opens the visitor's own email app with the message pre-filled (mailto). To have messages emailed straight to you, use the free Google Apps Script in `Code.gs`:

1. Signed in as sadatimalk50@gmail.com, go to https://script.google.com and click **New project**.
2. Delete the sample code, paste in everything from `Code.gs`, and save.
3. Click **Deploy → New deployment**, choose type **Web app**, set *Execute as* **Me** and *Who has access* **Anyone**, then **Deploy**.
4. Allow the permission Google asks for (it needs to send email as you). If it warns the app is unverified, click **Advanced → Go to project**; it is your own script.
5. Copy the **Web app URL** (it ends in `/exec`) and paste it into `contact.formEndpoint` in `data.js`.

Messages arrive with the subject `[Portfolio] …`, and pressing Reply answers the visitor. A hidden field catches spam bots, and the script stops after 20 messages an hour. The URL is not a secret: it can only send email to you. If you edit the script later, use **Deploy → Manage deployments → Edit → New version** so the same URL keeps working.

## Deploy on GitHub Pages

1. Create a repository on GitHub (e.g. `portfolio`, or `SADAT-100.github.io` for a root URL).
2. Upload the **contents** of this folder (so `index.html` sits at the top level) and commit.
3. Repository **Settings → Pages → Build and deployment**: Source “Deploy from a branch”, branch `main`, folder `/ (root)`. Save.
4. After a minute the site is live at `https://SADAT-100.github.io/portfolio/` (or `https://SADAT-100.github.io/` for the special repository name).
5. Once you know the final URL, edit `index.html`: set `og:url` to it and change `og:image` to the full address, e.g. `https://SADAT-100.github.io/portfolioog-image.jpg`, so link previews work on LinkedIn and WhatsApp.

The same folder works unchanged on Netlify (drag-and-drop the folder at app.netlify.com/drop), Vercel or Cloudflare Pages.

## Design

The layout follows the In-House Careers site: a top bar, a left menu (a slide-out drawer on phones) and one page shown at a time, chosen by the address (`#about`, `#websites`, …), so every page has its own shareable link.

- Colours for both themes are CSS variables at the top of `styles.css`: careers-style warm neutrals with blue accents in light mode, deep navy in dark mode.
- Fonts are Marcellus (headings), IBM Plex Sans (body) and IBM Plex Mono (labels), loaded from Google Fonts.
- Menu items live in the `PAGES` list at the top of `main.js`.

### Add a website
Add a block to `websites` in `data.js`: `title`, `kind`, `summary`, `features`, `tech`, `thumb` (screenshot path, or leave empty for a blue title card), `links.site`, `links.code`. Set `access: "internal"` for tools that hold company data: they are listed without a public link, with an "Ask for a walkthrough" button instead.

Note: links to claude.ai artifacts only open for other people after you share each artifact (Share menu → anyone with the link).
