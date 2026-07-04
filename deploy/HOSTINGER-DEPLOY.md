# Deploy Taha Jahangir Portfolio → Hostinger VPS

Complete step-by-step. Follow in order.

---

## What you need

- A **Hostinger VPS** plan (KVM 1 is enough — 1 vCPU / 4GB RAM / 50GB NVMe, ~$4.5/mo).
  - Buy: https://www.hostinger.com/vps-hosting
  - ⚠️ Do NOT buy the cheap "Web Hosting" shared plan — it can't run Node.js.
- Your **custom domain** (e.g. `tahajahangir.com`). Can be registered via Hostinger or any registrar (Namecheap, Cloudflare, etc.).
- Your **Gmail App Password** (for the contact form to send emails — see `.env.example`).

---

## Step 1 — Spin up the VPS

1. Log into hPanel → **VPS** → create a new VPS.
2. **OS:** Ubuntu 22.04 LTS (recommended, easiest).
3. **Data center:** pick the one closest to your visitors (for Pakistan → Singapore or India).
4. Wait ~2 min for provisioning. You'll get:
   - Server IP (e.g. `82.xxx.xxx.xxx`)
   - Root password

---

## Step 2 — Point your domain to the VPS

In your domain registrar's DNS panel (Hostinger hPanel → Domains → DNS, or wherever you bought the domain):

| Type   | Name         | Value              | TTL  |
|--------|--------------|--------------------|------|
| A      | `@`          | `YOUR_VPS_IP`      | 3600 |
| A      | `www`        | `YOUR_VPS_IP`      | 3600 |
| CNAME  | (optional)   | —                  | —    |

Wait 5–30 min for DNS to propagate. Check with:
```bash
dig +short tahajahangir.com
# should print your VPS IP
```

---

## Step 3 — SSH into the server & install prerequisites

```bash
# from your laptop, SSH in as root
ssh root@YOUR_VPS_IP
```

Then on the server, run this one block (installs Node 20, Bun, Nginx, PM2, Certbot, Git, UFW firewall):

```bash
# Update system
apt update && apt upgrade -y

# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Bun (fast JS runtime — needed because build script uses bun)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Nginx (reverse proxy), PM2 (process manager), Certbot (SSL), Git, UFW
npm install -g pm2
apt install -y nginx certbot python3-certbot-nginx git ufw

# Firewall: allow SSH, HTTP, HTTPS
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
```

Verify:
```bash
node -v   # v20.x.x
bun -v    # 1.x.x
nginx -v  # nginx version: ...
pm2 -v    # 5.x.x
```

---

## Step 4 — Get the code onto the server

### Option A — From GitHub (recommended)
1. Push this project to a GitHub repo (private is fine).
2. On the server:
   ```bash
   mkdir -p /var/www && cd /var/www
   git clone https://github.com/YOUR_USERNAME/taha-portfolio.git
   cd taha-portfolio
   ```

### Option B — Upload via SCP from your laptop
```bash
# from your laptop, in the project folder
scp -r . root@YOUR_VPS_IP:/var/www/taha-portfolio
```

---

## Step 5 — Configure environment

On the server, in `/var/www/taha-portfolio`:

```bash
cd /var/www/taha-portfolio

# Copy the example env file and edit it
cp .env.example .env
nano .env
```

Fill in your real Gmail App Password:
```
EMAIL_USER=tahajahangirco@gmail.com
EMAIL_PASS=your_16_char_app_password
EMAIL_TO=tahajahangirco@gmail.com
```

Save with `Ctrl+O`, `Enter`, then `Ctrl+X`.

---

## Step 6 — Install dependencies & build

```bash
cd /var/www/taha-portfolio

# Install deps
bun install

# Generate Prisma client (if you use the DB)
bun run db:generate

# Production build — produces .next/standalone/server.js
bun run build
```

The build takes ~1–2 min. When done you'll see `✓ Compiled successfully`.

Quick smoke test before wiring up Nginx:
```bash
PORT=3000 HOSTNAME=127.0.0.1 node .next/standalone/server.js &
curl http://127.0.0.1:3000  # should print HTML
# kill the test
kill %1
```

---

## Step 7 — Run the app with PM2 (keeps it alive 24/7)

```bash
cd /var/www/taha-portfolio

# Make log dir
mkdir -p /var/log/taha-portfolio

# Start with PM2
pm2 start ecosystem.config.cjs

# Save process list so it auto-starts on reboot
pm2 save
pm2 startup
# (PM2 will print a command — copy-paste and run it)
```

Verify the app is running:
```bash
pm2 status              # should show "taha-portfolio" as "online"
curl http://127.0.0.1:3000  # should return HTML
pm2 logs taha-portfolio --lines 20   # check for errors
```

---

## Step 8 — Configure Nginx (reverse proxy + SSL)

```bash
# Copy the provided Nginx config
cp /var/www/taha-portfolio/deploy/nginx.conf /etc/nginx/sites-available/taha-portfolio

# Edit it — replace portfolio.yourdomain.com with your real domain
nano /etc/nginx/sites-available/taha-portfolio
# (find & replace "portfolio.yourdomain.com" with "tahajahangir.com" etc.)

# Enable the site
ln -s /etc/nginx/sites-available/taha-portfolio /etc/nginx/sites-enabled/

# Remove default site (so it doesn't conflict)
rm -f /etc/nginx/sites-enabled/default

# Test config
nginx -t
# must say: syntax is ok / test is successful

# Reload Nginx
systemctl reload nginx
```

---

## Step 9 — Free SSL certificate (Let's Encrypt)

```bash
# Issue the cert (replace with your real domain)
certbot --nginx -d tahajahangir.com -d www.tahajahangir.com

# Choose option 2 when prompted (auto-redirect HTTP → HTTPS)
```

Certbot auto-renews. Test renewal:
```bash
certbot renew --dry-run
```

---

## Step 10 — Visit your site 🎉

Open `https://tahajahangir.com` in your browser.

### Final checks
- ✅ Homepage loads with the dark obsidian hero + "Taha Jahangir"
- ✅ Scroll through Work / Services / Process / Stack / About / Contact
- ✅ Fill the contact form → email lands in `tahajahangirco@gmail.com`
- ✅ Click "Message on WhatsApp" → opens WhatsApp to +92 339 532 6090
- ✅ HTTPS padlock icon shows in the browser address bar

---

## Useful commands (cheat sheet)

| Task | Command |
|------|---------|
| View app logs | `pm2 logs taha-portfolio` |
| Restart app | `pm2 restart taha-portfolio` |
| Stop app | `pm2 stop taha-portfolio` |
| View Nginx logs | `tail -f /var/log/nginx/error.log` |
| Reload Nginx (after config change) | `nginx -t && systemctl reload nginx` |
| Check SSL cert expiry | `certbot certificates` |
| Update the site (after pushing new code) | see below |

---

## Updating the site later

When you change code and push to GitHub:

```bash
cd /var/www/taha-portfolio
git pull
bun install        # if deps changed
bun run build
pm2 restart taha-portfolio
```

That's it. Takes ~1 min.

---

## Troubleshooting

**Site shows "502 Bad Gateway"**
→ App isn't running. Check `pm2 status` and `pm2 logs taha-portfolio`.

**Contact form returns error / no email arrives**
→ `EMAIL_PASS` not set or wrong in `.env`. Re-check the App Password. Then `pm2 restart taha-portfolio`.

**Images broken (404)**
→ The `public/images/` folder didn't get copied into `.next/standalone/`. Re-run `bun run build` (the build script does this copy automatically).

**CSS / styles missing**
→ Same as above — the `/_next/static/` folder needs the copy step. `bun run build` handles it.

**HTTPS not working**
→ DNS hasn't propagated, or port 443 is blocked by UFW. Check `ufw status` and `dig +short yourdomain.com`.

---

You're live. 🚀
