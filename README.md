# Portfolio + Blog

A dark, minimalist personal site with a portfolio homepage and a blog you can keep growing — no build tools, no framework. Just open `index.html`.

## Files

| File | What it is |
|------|------------|
| `index.html` | Portfolio homepage (hero, experience, projects, skills, latest posts, contact) |
| `blog.html` | Full list of blog posts |
| `post.html` | Renders a single post (uses `?id=slug` in the URL) |
| `posts.js` | **Your blog content lives here — this is the only file you edit to add posts** |
| `styles.css` | Shared dark theme for every page |

## Add a new blog post

1. Open `posts.js`.
2. Copy one `{ ... }` block and paste it at the **top** of the array (newest first).
3. Change the fields:
   - `slug` — unique id for the URL (letters, numbers, dashes)
   - `title`, `date` (`"YYYY-MM-DD"`), `summary`, `tags`
   - `body` — the post content as HTML (`<h2>`, `<p>`, `<ul><li>`, `<pre><code>`, `<a href>`, `<img>`, etc.)

That's it. The homepage shows the 3 most recent automatically; `blog.html` lists them all.

## Make it yours

Replace the placeholders throughout `index.html`:
- `YOUR` / `NAME`, `YOURNAME`, role, blurb, location/coords
- Experience rows, project cards, skills
- Contact email and social links (search for `you@email.com` and `href="#"`)

Update the footer year and the `© 2026 YOUR NAME` lines on each page.

## Publish (free, like the reference sites)

GitHub Pages:
1. Create a repo, e.g. `your-username/portfolio`.
2. Add all these files to it and push.
3. Repo **Settings → Pages → Branch: main / root → Save**.
4. Your site goes live at `https://your-username.github.io/portfolio/`.

(Netlify or Vercel work too — just drag the folder in.)
