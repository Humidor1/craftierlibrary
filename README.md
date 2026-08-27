# The Cabinet — standalone deploy

This is the same perfume ledger app, wired up to sync across every device via a
free Netlify Function + Netlify Blobs store (no external database needed).

## Deploy (recommended — GitHub + Netlify, ~5 min)

1. Create a new GitHub repo and push this whole folder to it.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Build settings: leave build command empty, publish directory `public`
   (already set in `netlify.toml`, so Netlify should pick this up automatically).
4. Deploy. Netlify will run `npm install` automatically (installing
   `@netlify/blobs` for the function) and publish the site.
5. Open the live URL — the app loads with your current Dubai/Italy collection
   already seeded in, and every rating or bottle you add saves to Netlify Blobs,
   visible from any device that opens the same URL.

## Deploy via Netlify CLI instead

If you'd rather not use GitHub:

```
npm install
npx netlify-cli deploy --prod
```

Run this from inside the project folder. The CLI bundles the function
(including `@netlify/blobs`) and publishes `public/` directly.

## Notes

- No environment variables or account setup needed — Netlify Blobs works
  automatically on any Netlify site.
- The collection is stored under one shared key, so anyone with the URL sees
  and edits the same cabinet — same as before, just synced across devices too.
- If you ever want this to be private to only you, that would need a login
  step added on top; ask me if you want that.
