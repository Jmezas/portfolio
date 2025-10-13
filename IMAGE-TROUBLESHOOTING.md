# Troubleshooting - Imágenes en Producción

## Problema: La imagen del perfil no se visualiza en producción

### Causas posibles:

1. **Permisos incorrectos en el contenedor**
2. **Ruta incorrecta en modo standalone**
3. **Imagen no copiada correctamente en el Dockerfile**

### Solución implementada:

El Dockerfile ahora:
- ✅ Copia la carpeta `public` con los permisos correctos (`--chown=nextjs:nodejs`)
- ✅ La carpeta `public` se copia a la raíz del proyecto en el contenedor
- ✅ Next.js en modo `standalone` puede acceder a las imágenes públicas

### Verificar que la imagen existe en el contenedor:

```bash
# Conectarse al contenedor en ejecución
docker exec -it portfolio-jhaser sh

# Verificar que existe la carpeta public
ls -la /app/public

# Verificar que existe la imagen de perfil
ls -la /app/public/perfil.jpg

# Verificar permisos (debe ser nextjs:nodejs)
ls -l /app/public/perfil.jpg

# Salir del contenedor
exit
```

### Verificar logs del contenedor:

```bash
# Ver logs en tiempo real
docker logs -f portfolio-jhaser

# Ver últimas 100 líneas
docker logs --tail 100 portfolio-jhaser
```

### Verificar acceso a la imagen desde el navegador:

```bash
# Si tu app corre en el puerto 3000
curl http://localhost:3000/perfil.jpg

# Desde fuera del servidor (reemplaza con tu IP/dominio)
curl http://tu-servidor:3000/perfil.jpg
```

### Si la imagen sigue sin aparecer:

1. **Rebuild la imagen completamente:**
```bash
# Limpiar todo
docker system prune -a

# Rebuild sin cache
docker build --no-cache --platform linux/amd64 -t portfolio-jhaser:latest .

# O usando el script
./build-and-push.sh
```

2. **Verificar la configuración de Next.js Image:**

El componente `Image` de Next.js debe tener:
```tsx
<Image
  src="/perfil.jpg"
  alt="Jhaser Meza"
  fill
  style={{ objectFit: 'cover' }}
/>
```

3. **Verificar next.config.ts:**

```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  // Si usas un dominio externo para imágenes, añádelo aquí:
  // images: {
  //   domains: ['tu-dominio.com'],
  // },
};
```

4. **Verificar permisos del archivo original:**

```bash
# En tu máquina local
ls -la public/perfil.jpg

# Si tiene permisos restrictivos, cambiarlos
chmod 644 public/perfil.jpg
```

## Estructura esperada en el contenedor:

```
/app
├── node_modules/
├── .next/
│   └── static/
├── public/
│   ├── perfil.jpg    ← La imagen debe estar aquí
│   ├── cv/
│   └── otros archivos...
├── server.js
└── package.json
```

## Comandos útiles de debugging:

```bash
# Ver estructura de archivos en el contenedor
docker exec portfolio-jhaser find /app -name "perfil.jpg"

# Ver tamaño de la imagen
docker exec portfolio-jhaser du -h /app/public/perfil.jpg

# Verificar tipo MIME
docker exec portfolio-jhaser file /app/public/perfil.jpg

# Test de acceso HTTP interno
docker exec portfolio-jhaser wget -O- http://localhost:3000/perfil.jpg > /dev/null
```

## Notas importantes:

- Las imágenes en `public/` se sirven desde la raíz: `/perfil.jpg` (no `/public/perfil.jpg`)
- En modo `standalone`, Next.js maneja el serving de archivos estáticos internamente
- Los permisos deben ser `644` para archivos y el owner debe ser `nextjs:nodejs`
- Si usas un reverse proxy (nginx), asegúrate de que no esté bloqueando las imágenes

## Si nada funciona:

Revisa los logs completos del contenedor:
```bash
docker logs portfolio-jhaser --since 10m
```

Y verifica que el servidor Next.js esté respondiendo:
```bash
docker exec portfolio-jhaser ps aux
```
