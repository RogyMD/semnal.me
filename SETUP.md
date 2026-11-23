# Putting semnal.me live

Steps for the owner, from the publishing plan (T115,
`ai-garden-blog/docs/superpowers/specs/2026-11-18-semnal-me-publishing-design.md`).
Nothing here has been done yet: no repository, no push, no DNS change.

Privacy and terms come first: App Store Connect already links to `https://semnal.me/privacy`
and `https://semnal.me/terms`, so they must be live before the build goes to App Review.

## Before you start

- Read the "Must confirm before publishing" lists in
  `ai-garden-blog/pages/semnal/privacy-policy/NOTE.md` and `pages/semnal/terms/NOTE.md`.
  `privacy.md` and `terms.md` here started from those texts and have since been brought in line
  with the app on its main branch; they are the texts to publish.
- Compare the four A-record addresses below with GitHub's page "Managing a custom domain for
  your GitHub Pages site". They were written from memory, not read from GitHub today.
- If `semnal.me` has CAA records at the registrar, they must allow `letsencrypt.org`, or the
  HTTPS certificate fails.

## 1. The repository

1. On GitHub, create a **public** repository named `semnal.me` under the account you choose
   (a free plan needs it public for Pages).
2. Push this site to its `main` branch.
3. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, branch `main`,
   folder `/ (root)`. Save. GitHub runs Jekyll itself; there is no Actions workflow.

## 2. The domain on GitHub

1. **Settings → Pages → Custom domain**: enter `semnal.me`, save. (The repository already has the
   `CNAME` file with `semnal.me`.)
2. Recommended: **account Settings → Pages → Add a domain**, enter `semnal.me`. GitHub shows one
   TXT record. It stops anyone else claiming the domain on GitHub Pages.

## 3. DNS at the registrar

1. Open the DNS records for `semnal.me`. Remove any parking or forwarding records for `@` and
   `www` that the registrar created.
2. Add:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `<account>.github.io` |
   | TXT | as GitHub shows in step 2.2 | as GitHub shows in step 2.2 |

   `<account>` is the GitHub account that owns the repository. Some registrars write `@` as an
   empty name or as `semnal.me`. No AAAA (IPv6) records at launch. The mail records come in
   step 5.

## 4. HTTPS

1. Wait for DNS to spread (minutes to a few hours). GitHub then issues the certificate by itself.
2. Tick **Enforce HTTPS** in **Settings → Pages** once the box becomes available.

## 5. Mail for contact@semnal.me

1. Choose where mail for `contact@semnal.me` goes: a mailbox, or a forward to an inbox you
   already read. Create the address there.
2. At the registrar, add the MX records that provider gives, and its SPF TXT record. Add DKIM and
   DMARC records if the provider offers them. Leave GitHub's A, CNAME and TXT records as they are.
3. Send a test mail to `contact@semnal.me` from another address and check it arrives. Reply from
   it and check the reply is delivered.
4. **Do not launch** (do not tell App Store Connect or anyone the site is live) until step 3
   works: the footer, the privacy policy and the terms all point people to this address.

## 6. Check

Open each address; each must load without a 404:

- `https://semnal.me`
- `https://www.semnal.me` (must land on `https://semnal.me`)
- `https://semnal.me/privacy` (no `.html`)
- `https://semnal.me/terms` (no `.html`)
- `https://semnal.me/feed.xml` (valid and empty until the first post)
- `https://semnal.me/.well-known/apple-app-site-association` (the small JSON file; the browser may
  download it instead of showing it, which is fine. GitHub Pages serves it without the
  `application/json` type; check that Apple accepts it before the invite-link work relies on it)

Then:

- On `https://semnal.me`, tap the ring through every slide; with Reduce Motion on, the story is a
  list.
- A mail to `contact@semnal.me` arrives.

## Publishing a post

Add `_posts/YYYY-MM-DD-title.md`:

```markdown
---
title: The title of the post
---

The text, in Markdown.
```

Commit and push to `main`. The site and the feed update within a minute or two. The post
appears at `https://semnal.me/news/YYYY/MM/title` and in a "News" list on the home page.

## What is in this repository

| File | What it is |
|---|---|
| `_config.yml` | Site settings: `url: https://semnal.me`, the `jekyll-feed` plugin, post addresses, and `include: [.well-known]` |
| `CNAME` | `semnal.me` |
| `index.html` | The home page (ring story) |
| `assets/css/home.css` | The home page's own styles (the ring story), scoped to the home page |
| `assets/js/ring.js` | The home page's script: scroll progress, tap the ring to go on, Reduce Motion list |
| `privacy.md`, `terms.md` | Served at `/privacy` and `/terms` |
| `_layouts/` | `default` (head with the feed link, footer with `contact@semnal.me`, Privacy, Terms and RSS), `page`, `post` |
| `_posts/` | News posts; empty for now |
| `assets/` | CSS and the ring icon |
| `.well-known/apple-app-site-association` | Empty `applinks` for now; the invite-link work fills it |
| `Gemfile` | Only for a local preview; GitHub ignores it |

## Local preview (optional)

Needs Ruby. From this folder:

```sh
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.
