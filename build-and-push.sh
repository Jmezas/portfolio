#!/bin/bash

# Script optimizado para construir y subir imagen Docker a AWS ECR
# Uso: ./build-and-push.sh [tag] [platform]
# Ejemplo: ./build-and-push.sh v1.0.0 linux/amd64

set -e

# Variables de configuración
AWS_REGION="us-east-1"
ECR_REGISTRY="196728492488.dkr.ecr.us-east-1.amazonaws.com"
IMAGE_NAME="portfolio-jhaser"
IMAGE_TAG="${1:-latest}"
PLATFORM="${2:-linux/amd64}"

echo "=========================================="
echo "Building and Pushing to AWS ECR"
echo "=========================================="
echo "Registry: $ECR_REGISTRY"
echo "Image: $IMAGE_NAME"
echo "Tag: $IMAGE_TAG"
echo "Platform: $PLATFORM"
echo "=========================================="

# 1. Autenticarse en AWS ECR
echo "🔐 Autenticando en AWS ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_REGISTRY

# 2. Construir la imagen Docker optimizada
echo "🏗️  Construyendo imagen Docker optimizada..."
docker build \
  --platform=$PLATFORM \
  --build-arg NODE_ENV=production \
  --compress \
  -t $IMAGE_NAME:$IMAGE_TAG \
  .

# 3. Mostrar tamaño de la imagen
echo "📦 Tamaño de la imagen:"
docker images $IMAGE_NAME:$IMAGE_TAG --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# 4. Etiquetar la imagen para ECR
echo "🏷️  Etiquetando imagen para ECR..."
docker tag $IMAGE_NAME:$IMAGE_TAG $ECR_REGISTRY/$IMAGE_NAME:$IMAGE_TAG

# 5. Subir la imagen a ECR
echo "⬆️  Subiendo imagen a ECR..."
docker push $ECR_REGISTRY/$IMAGE_NAME:$IMAGE_TAG

# 6. Limpiar imágenes antiguas locales
echo "🧹 Limpiando imágenes sin usar..."
docker image prune -f

echo "=========================================="
echo "✅ Imagen subida exitosamente!"
echo "=========================================="
echo "Imagen: $ECR_REGISTRY/$IMAGE_NAME:$IMAGE_TAG"
echo "Platform: $PLATFORM"
echo "=========================================="
echo ""
echo "Para desplegar en el servidor, ejecuta:"
echo "  scp deploy.sh usuario@servidor:/home/usuario/"
echo "  ssh usuario@servidor './deploy.sh $IMAGE_TAG'"
