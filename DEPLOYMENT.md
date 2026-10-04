# Deployment: GitHub Pages + Name.com

## 1. Add the profile image

Save the supplied portrait as:

`public/pfp.jpeg`

The image is now present in the workspace at `public/pfp.jpeg` and is used by the home hero.

## 2. Create or choose the GitHub repository

1. Sign in to GitHub.
2. Create a repository under `muhammadahmed41`.
3. Use the repository `MUHAMMADAHMED41/portfolio-webiste`.
4. Keep it public if you want GitHub Pages on the free plan.

From this project folder, run:

```powershell
git add .
git commit -m "Build Muhammad Ahmed portfolio"
git branch -M main
git remote add origin https://github.com/MUHAMMADAHMED41/portfolio-webiste.git
git push -u origin main
```

If a remote already exists, use `git remote set-url origin https://github.com/MUHAMMADAHMED41/portfolio-webiste.git` instead.

## 3. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` or manually run **Deploy portfolio to GitHub Pages** from the **Actions** tab.
5. Wait for the workflow to finish. GitHub will show the temporary Pages URL.

The workflow is in `.github/workflows/deploy.yml` and builds the static `out` folder.

## 4. Connect Name.com

For `muhammadahmedme.live`, add these Name.com DNS records:

| Type | Host | Answer |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `muhammadahmed41.github.io` |

Remove conflicting `A`, `AAAA`, or URL-forwarding records for `@` and `www`. Keep email-related MX records unchanged.

## 5. Add the custom domain in GitHub

1. In **Settings -> Pages**, enter the domain in **Custom domain**.
2. Save it and wait for DNS verification.
3. Enable **Enforce HTTPS** after the certificate becomes available.

The project already contains `public/CNAME` with exactly:

```text
muhammadahmedme.live
```

Then commit and push it. Do not add `public/CNAME` until the real domain is known.

DNS changes can take from a few minutes to 48 hours to propagate.

## 6. Configure the remaining services

- Pageclip: set `NEXT_PUBLIC_PAGECLIP_URL` to the real Pageclip form endpoint before building.
- Calendly: `NEXT_PUBLIC_CALENDLY_URL` may override the current default appointment URL.
- SimpleAnalytics: replace the script setup with the site-specific tracking configuration if their dashboard requires one.

GitHub Pages cannot run a server-side API route. Pageclip is appropriate for the static contact form.

## 7. Verify the live site

Check:

- `/`
- `/experience`
- `/projects`
- `/credentials`
- `/certificates`
- `/contact`
- certificate PDF links
- WhatsApp button
- Calendly button
- contact form
- GitHub, LinkedIn, and Google Developer links
- HTTPS and the custom domain
