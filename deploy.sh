#!/bin/bash
set -euo pipefail

# --- VARIABLES VPS ---
SERVER_IP="161.132.41.56"
SERVER_USER="root"
IMAGE_NAME="portfolio-jhaser"
CONTAINER_NAME="portfolio-jhaser"
NETWORK="erp-network"
REMOTE="$SERVER_USER@$SERVER_IP"

# Colores
YELLOW='\033[1;33m'
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# 1. COMPILACION
echo -e "${YELLOW}1. [LOCAL] Construyendo imagen para Linux/AMD64...${NC}"
docker build --platform linux/amd64 -t "$IMAGE_NAME:latest" .

# 2. TRANSFERENCIA (antes de tocar el contenedor actual: sigue sirviendo mientras sube)
echo -e "${YELLOW}2. [RED] Enviando al VPS (Gzip pipe)...${NC}"
docker save "$IMAGE_NAME:latest" | gzip | ssh "$REMOTE" 'gunzip | docker load'

# 3. REEMPLAZO DEL CONTENEDOR
echo -e "${RED}3. [VPS] Reemplazando contenedor...${NC}"
ssh "$REMOTE" bash -s <<EOF
    set -e
    echo "   -> Borrando contenedor $CONTAINER_NAME..."
    docker rm -f "$CONTAINER_NAME" 2>/dev/null || true

    echo "   -> Iniciando nuevo contenedor..."
    docker run -d \
      --name "$CONTAINER_NAME" \
      --network "$NETWORK" \
      -e TZ=America/Lima \
      --restart unless-stopped \
      "$IMAGE_NAME:latest"
EOF

# 4. VERIFICACION
echo -e "${GREEN}4. [VPS] Verificando estado...${NC}"
ssh "$REMOTE" bash -s <<EOF
    sleep 3
    if [ "\$(docker inspect -f '{{.State.Running}}' "$CONTAINER_NAME" 2>/dev/null)" != "true" ]; then
      echo "   -> ERROR: el contenedor no esta corriendo. Ultimos logs:"
      docker logs --tail 50 "$CONTAINER_NAME" || true
      exit 1
    fi
    echo "   -> Contenedor corriendo."

    echo "   -> Refrescando Nginx Proxy..."
    docker restart nginx-ssl || echo "Nginx no se reinicio (existe el contenedor?)"
EOF

# 5. LIMPIEZA DE IMAGENES DANGLING
echo -e "${YELLOW}5. [VPS] Limpiando imágenes antiguas...${NC}"
ssh "$REMOTE" 'docker image prune -f'

echo -e "${GREEN}DESPLIEGUE DE FRONTEND COMPLETADO.${NC}"
