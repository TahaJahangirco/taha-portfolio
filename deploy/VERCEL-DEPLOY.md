# Deploy Taha Jahangir Portfolio → Vercel + Custom Domain

Total time: ~10 minutes. Free.

---

## Step 1 — Push your code to GitHub

Vercel deploys from GitHub, so your project needs to be in a repo.

1. Go to https://github.com/new
2. Name it `taha-portfolio` (or whatever), set to **Private** or **Public** — your call
3. Don't add a README (you already have files)
4. Click **Create repository**

Then in your project folder on your laptop:

```bash
cd /path/to/taha-portfolio

git init
git add .
git commit -m "Initial commit — portfolio"

# replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/taha-portfolio.git
git branch -M main
git push -u origin main
```

> If you don't have git installed: https://git-scm.com/downloads

---

## Step 2 — Deploy to Vercel

1. Go to https://vercel.com/signup → **Sign up with GitHub** (one click)
2. Once logged in, click **Add New...** → **Project**
3. Click **Import** next to your `taha-portfolio` repo
4. Vercel auto-detects Next.js — **don't change any build settings**, they're already correct:
   - Framework: Next.js
   - Build command: `next build` (Vercel overrides your bun script automatically)
   - Output: handled by Vercel
5. **Before clicking Deploy**, expand **Environment Variables** and add these:

   | Name | Value |
   |------|-------|
   | `EMAIL_USER` | `tahajahangirco@gmail.com` |
   | `EMAIL_PASS` | *(your 16-char Gmail App Password)* |
   | `EMAIL_TO` | `tahajahangirco@gmail.com` |

   > Get the App Password: https://myaccount.google.com/apppasswords (needs 2-Step Verification on)

   Don't add `DATABASE_URL` — you don't use the database.

6. Click **Deploy** ⚡

Wait ~90 seconds. Vercel builds + deploys. When done, you'll get a free URL like:
```
https://taha-portfolio.vercel.app
```

Click it — your site is live. Test the contact form to confirm emails arrive in your Gmail.

---

## Step 3 — Connect your custom domain

### 3a. Add the domain in Vercel

1. In your Vercel project dashboard → **Settings** → **Domains**
2. Type your domain (e.g. `tahajahangir.com`) → click **Add**
3. Vercel asks if you want to add `www` too → **Yes**
4. Vercel shows you DNS records to add. They look like:

   | Type | Name | Value |
   |------|------|-------|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

### 3b. Add those DNS records where you bought your domain

**If you bought the domain on Hostinger:**
- Log into hPanel → **Domains** → your domain → **DNS / Nameservers** → **Manage DNS records**
- Add the A record and CNAME exactly as Vercel showed

**If on Namecheap:**
- Dashboard → **Domain List** → **Manage** → **Advanced DNS** tab
- Add the two records

**If on Cloudflare:**
- DNS tab → add A record (set proxy status to "DNS only" / grey cloud first, can enable later)
- ⚠️ Cloudflare-specific: if SSL errors happen, set SSL mode to "Full" in SSL/TLS tab

**If on GoDaddy / other:**
- Find the DNS management page, add the same two records

### 3c. Wait for DNS to propagate

5 minutes to a few hours. Vercel auto-detects when it's done and issues a free SSL certificate — you'll see a green checkmark next to the domain in the Vercel dashboard.

---

## Step 4 — Visit your live site 🎉

```
https://tahajahangir.com
```

Final checks:
- [ ] Homepage loads with the dark hero + "Taha Jahangir"
- [ ] All sections render (Work, Services, Process, Stack, About, Contact)
- [ ] Fill the contact form → email arrives in `tahajahangirco@gmail.com`
- [ ] Click "Message on WhatsApp" → opens WhatsApp to your number
- [ ] HTTPS padlock shows in the address bar

---

## Updating your site later

Any time you change code:

```bash
git add .
git commit -m "Describe what changed"
git push
```

Vercel auto-detects the push and redeploys in ~90 seconds. Your custom domain updates automatically. No manual steps ever again.

---

## Why Vercel is perfect for this portfolio

- **Free forever** for your traffic levels (100GB bandwidth/mo, plenty)
- **Auto-SSL** — renewed automatically, you never touch it
- **Global CDN** — your site loads fast anywhere in the world
- **Instant deploys** — push to GitHub → live in 90 seconds
- **Zero server management** — no SSH, no Nginx, no PM2, no SSL renewals
- **Made by the Next.js team** — always supports the latest Next.js features

---

## Troubleshooting

**Build fails on Vercel**
→ Check the build logs in Vercel dashboard. Most common cause: missing env vars. Re-check `EMAIL_PASS` is set.

**Contact form returns error / no email**
→ `EMAIL_PASS` is wrong or missing in Vercel env vars. Go to Settings → Environment Variables, fix it, then redeploy.

**Domain shows "Invalid Configuration" in Vercel**
→ DNS records not added or propagated yet. Wait 30 min, then click "Refresh" in Vercel domains page.

**"Too many redirects" on the domain**
→ You're on Cloudflare with SSL mode set to "Flexible". Change it to "Full" or "Full (strict)".

**www doesn't redirect to root (or vice versa)**
→ In Vercel → Settings → Domains, set your preferred version as primary and the other as a redirect.

---

You're live on Vercel with your custom domain. 🚀
