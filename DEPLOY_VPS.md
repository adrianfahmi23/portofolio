# Deploy To VPS With Docker

This guide assumes:

- VPS OS: Ubuntu 22.04 or 24.04
- Domain: `ankcode.com`
- App subdomain: `fahmi.ankcode.com`
- Repo path on server: `/var/www/fahmi-portfolio`

## What To Install

You need these on the VPS:

- Docker Engine
- Docker Compose plugin
- Nginx
- Certbot
- Git

This repo already includes a bootstrap script for that:

- `deploy/setup-vps.sh`

## 1. Point DNS

In your domain/DNS provider for `ankcode.com`, create this record:

- Type: `A`
- Name: `fahmi`
- Value: `<YOUR_VPS_PUBLIC_IP>`

After that, wait until this resolves correctly:

```bash
dig +short fahmi.ankcode.com
```

## 2. Connect To VPS

```bash
ssh root@YOUR_VPS_IP
```

## 3. Install Base Packages On VPS

Clone the repo anywhere temporary first, or copy just the script, then run:

```bash
sudo bash deploy/setup-vps.sh
```

If the repo is not on the VPS yet, you can also do:

```bash
apt update && apt install -y git
git clone git@github.com:adrianfahmi23/portofolio.git /var/www/fahmi-portfolio
cd /var/www/fahmi-portfolio
sudo bash deploy/setup-vps.sh
```

## 4. Clone The Project To The VPS

```bash
git clone git@github.com:adrianfahmi23/portofolio.git /var/www/fahmi-portfolio
cd /var/www/fahmi-portfolio
```

If the folder already exists:

```bash
cd /var/www/fahmi-portfolio
git pull origin main
```

## 5. Start The App With Docker

Build and run the container:

```bash
docker compose up -d --build
```

Check status:

```bash
docker compose ps
docker logs fahmi-portfolio
```

The app will be available locally on the VPS at:

- `http://127.0.0.1:8080`

## 7. Configure Nginx For `fahmi.ankcode.com`

Copy the provided nginx config:

```bash
cp deploy/nginx/fahmi.ankcode.com.conf /etc/nginx/sites-available/fahmi.ankcode.com
ln -sf /etc/nginx/sites-available/fahmi.ankcode.com /etc/nginx/sites-enabled/fahmi.ankcode.com
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

Now the domain should proxy to the Docker container over HTTP.

## 8. Enable HTTPS With Certbot

Once DNS is pointing correctly and nginx is active:

```bash
certbot --nginx -d fahmi.ankcode.com
```

Certbot will:

- issue the SSL certificate
- update the nginx config
- enable HTTPS redirect

Test renewal:

```bash
certbot renew --dry-run
```

## 9. Update The App Later

Whenever you push a new version:

```bash
cd /var/www/fahmi-portfolio
git pull origin main
docker compose up -d --build
```

## Useful Commands

### View running containers

```bash
docker ps
```

### View app logs

```bash
docker logs -f fahmi-portfolio
```

### Restart app

```bash
docker compose restart
```

### Stop app

```bash
docker compose down
```

## Deployment Flow Summary

1. Create DNS record for `fahmi.ankcode.com`
2. Install Docker, Nginx, Certbot, Git on the VPS
3. Clone this repo to `/var/www/fahmi-portfolio`
4. Run `docker compose up -d --build`
5. Install nginx site config
6. Run `certbot --nginx -d fahmi.ankcode.com`

## Notes

- The Docker container serves the built Vite app through nginx inside the container.
- Host nginx handles the public domain and SSL.
- The app container only binds to `127.0.0.1:8080`, so it is not exposed directly to the public internet.
- The contact form uses formsubmit.co - no env vars needed.
- No signup required - formsubmit.co sends submissions to your email inbox.
