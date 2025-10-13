#!/bin/bash

# Script de despliegue manual para servidor Linux
# Este script debe ejecutarse en el servidor de producción
# Uso: ./deploy.sh [tag]

set -e

# Variables de configuración
AWS_REGION="us-east-1"
ECR_REGISTRY="196728492488.dkr.ecr.us-east-1.amazonaws.com"
IMAGE_NAME="portfolio-jhaser"
IMAGE_TAG="${1:-latest}"
CONTAINER_NAME="portfolio-jhaser"
PORT="3000"

echo "=========================================="
echo "Desplegando Portfolio Jhaser"
echo "=========================================="
echo "Imagen: $ECR_REGISTRY/$IMAGE_NAME:$IMAGE_TAG"
echo "Puerto: $PORT"
echo "=========================================="

# 1. Autenticarse en AWS ECR
echo "🔐 Autenticando en AWS ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY

# 2. Detener y eliminar contenedor existente si existe
echo "🛑 Deteniendo contenedor existente (si existe)..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# 3. Descargar la última imagen
echo "⬇️  Descargando imagen desde ECR..."
docker pull $ECR_REGISTRY/$IMAGE_NAME:$IMAGE_TAG

# 4. Ejecutar el nuevo contenedor
echo "🚀 Iniciando nuevo contenedor..."

docker run -d --name $CONTAINER_NAME --network app-network --restart unless-stopped $ECR_REGISTRY/$IMAGE_NAME:$IMAGE_TAG

# 5. Verificar que el contenedor esté corriendo
echo "🔍 Verificando estado del contenedor..."
sleep 3
if docker ps | grep -q $CONTAINER_NAME; then
  echo "=========================================="
  echo "✅ Despliegue exitoso!"
  echo "=========================================="
  echo "Contenedor: $CONTAINER_NAME"
  echo "Puerto: $PORT"
  echo "Estado: Corriendo"
  echo "=========================================="
  echo ""
  echo "Ver logs: docker logs -f $CONTAINER_NAME"
else
  echo "❌ Error: El contenedor no está corriendo"
  echo "Ver logs: docker logs $CONTAINER_NAME"
  exit 1
fi

# 6. Limpiar imágenes antiguas
echo "🧹 Limpiando imágenes antiguas..."
docker image prune -f

echo "=========================================="
echo "Despliegue completado"
echo "=========================================="
