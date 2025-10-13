# Guía de Despliegue - Portfolio Jhaser

## 1. Construir y Subir a ECR (Desde tu máquina local)

### Dar permisos de ejecución a los scripts:
```bash
chmod +x build-and-push.sh deploy.sh
```

### Construir y subir la imagen:
```bash
# Con tag 'latest'
./build-and-push.sh

# Con un tag específico (ej: v1.0.0)
./build-and-push.sh v1.0.0
```

### Comandos manuales alternativos:
```bash
# 1. Autenticarse en ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 196728492488.dkr.ecr.us-east-1.amazonaws.com

# 2. Construir la imagen 
docker build --platform linux/amd64 -t portfolio-jhaser:latest .

# 3. Etiquetar para ECR
docker tag portfolio-jhaser:latest 196728492488.dkr.ecr.us-east-1.amazonaws.com/portfolio-jhaser:latest

# 4. Subir a ECR
docker push 196728492488.dkr.ecr.us-east-1.amazonaws.com/portfolio-jhaser:latest
```

## 2. Desplegar en Servidor Linux (Comandos Manuales)

### Opción A: Usando el script de despliegue

Copia el script al servidor y ejecútalo:
```bash
# Copiar el script al servidor
scp deploy.sh usuario@161.132.41.56:/home/usuario/

# Conectarse al servidor
ssh usuario@161.132.41.56

# Dar permisos de ejecución
chmod +x deploy.sh

# Ejecutar el despliegue
./deploy.sh

# O con un tag específico
./deploy.sh v1.0.0
```

### Opción B: Comandos manuales paso a paso

Conéctate al servidor y ejecuta:

```bash
# 1. Autenticarse en ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 196728492488.dkr.ecr.us-east-1.amazonaws.com

# 2. Detener y eliminar contenedor existente (si existe)
docker stop portfolio-jhaser 2>/dev/null || true
docker rm portfolio-jhaser 2>/dev/null || true

# 3. Descargar la imagen desde ECR
docker pull 196728492488.dkr.ecr.us-east-1.amazonaws.com/portfolio-jhaser:latest

# 4. Ejecutar el contenedor
docker run -d --name portfolio-jhaser --network app-network --restart unless-stopped 196728492488.dkr.ecr.us-east-1.amazonaws.com/portfolio-jhaser:latest

# 5. Verificar que está corriendo
docker ps | grep portfolio-jhaser

# 6. Ver logs
docker logs -f portfolio-jhaser
```

## 5. Comandos Útiles

### Ver logs del contenedor:
```bash
docker logs portfolio-jhaser
docker logs -f portfolio-jhaser  # Seguir logs en tiempo real
docker logs --tail 100 portfolio-jhaser  # Últimas 100 líneas
```

### Reiniciar el contenedor:
```bash
docker restart portfolio-jhaser
```

### Detener el contenedor:
```bash
docker stop portfolio-jhaser
```

### Eliminar el contenedor:
```bash
docker rm portfolio-jhaser
```

### Inspeccionar el contenedor:
```bash
docker inspect portfolio-jhaser
```

### Entrar al contenedor (debugging):
```bash
docker exec -it portfolio-jhaser sh
```

### Limpiar imágenes antiguas:
```bash
docker image prune -f
```

### Ver uso de recursos:
```bash
docker stats portfolio-jhaser
```

## 6. Actualizar a una Nueva Versión

```bash
# 1. Construir y subir nueva versión
./build-and-push.sh v1.1.0

# 2. En el servidor, descargar nueva versión
docker pull 196728492488.dkr.ecr.us-east-1.amazonaws.com/portfolio-jhaser:v1.1.0

# 3. Detener contenedor actual
docker stop portfolio-jhaser
docker rm portfolio-jhaser

# 4. Iniciar con la nueva versión
docker run -d --name portfolio-jhaser --restart unless-stopped -p 3000:3000 196728492488.dkr.ecr.us-east-1.amazonaws.com/portfolio-jhaser:v1.1.0
```

## 7. Rollback a Versión Anterior

```bash
# Detener contenedor actual
docker stop portfolio-jhaser
docker rm portfolio-jhaser

# Volver a la versión anterior
docker run -d \
  --name portfolio-jhaser \
  --restart unless-stopped \
  -p 3000:3000 \
  196728492488.dkr.ecr.us-east-1.amazonaws.com/portfolio-jhaser:v1.0.0
```

## Troubleshooting

### El contenedor no arranca:
```bash
docker logs portfolio-jhaser
```

### Puerto ya en uso:
```bash
# Ver qué está usando el puerto 3000
sudo lsof -i :3000
# o
sudo netstat -tlnp | grep 3000

# Cambiar a otro puerto
docker run -d --name portfolio-jhaser -p 8080:3000 ...
```

### Problemas de autenticación ECR:
```bash
# Verificar credenciales AWS
aws sts get-caller-identity

# Re-autenticarse
aws ecr get-login-password --region us-east-1 | \
  docker login --username AWS --password-stdin 196728492488.dkr.ecr.us-east-1.amazonaws.com
```

### Contenedor se detiene inmediatamente:
```bash
# Ver por qué se detuvo
docker logs portfolio-jhaser
docker inspect portfolio-jhaser
```
