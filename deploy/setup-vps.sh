#!/usr/bin/env bash

set -euo pipefail

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run this script as root: sudo bash deploy/setup-vps.sh"
  exit 1
fi

export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get install -y ca-certificates curl gnupg lsb-release nginx certbot python3-certbot-nginx ufw git

install -m 0755 -d /etc/apt/keyrings

if [[ ! -f /etc/apt/keyrings/docker.asc ]]; then
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  chmod a+r /etc/apt/keyrings/docker.asc
fi

ARCH="$(dpkg --print-architecture)"
CODENAME="$(. /etc/os-release && echo "$VERSION_CODENAME")"

cat >/etc/apt/sources.list.d/docker.list <<EOF
deb [arch=${ARCH} signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu ${CODENAME} stable
EOF

apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

systemctl enable --now docker
systemctl enable --now nginx

ufw allow OpenSSH || true
ufw allow 'Nginx Full' || true
ufw --force enable || true

mkdir -p /var/www/fahmi-portfolio

echo "Base VPS packages installed."
echo "Next steps:"
echo "1. Point fahmi.ankcode.com DNS A record to this VPS IP"
echo "2. Copy project into /var/www/fahmi-portfolio"
echo "3. Set up nginx reverse proxy using deploy/nginx/fahmi.ankcode.com.conf"
echo "4. Start Docker compose"
echo "5. Run certbot for SSL"
