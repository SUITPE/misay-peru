# 🚀 Instrucciones de Despliegue - MisayPeru

## 📦 Archivos de Producción

El archivo **`misay-peru-production.tar.gz`** contiene todo el sitio optimizado y listo para producción.

---

## 🌐 Opción 1: Servidor Web Tradicional (Apache/Nginx)

### Paso 1: Extraer archivos
```bash
tar -xzf misay-peru-production.tar.gz
```

### Paso 2: Subir a tu servidor
Sube el contenido de la carpeta `dist/` a tu servidor web:

**Apache:**
```bash
# Copiar archivos al directorio público
cp -r dist/* /var/www/html/
```

**Nginx:**
```bash
# Copiar archivos al directorio público
cp -r dist/* /usr/share/nginx/html/
```

### Paso 3: Configurar el servidor

**Apache (.htaccess):**
Crea un archivo `.htaccess` en el directorio raíz con:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**
Añade esto a tu configuración de Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## ☁️ Opción 2: Netlify (Recomendado - Gratis)

### Método A: Arrastrar y soltar
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta `dist/` a la página
3. ¡Listo! Tu sitio estará en línea en segundos

### Método B: Netlify CLI
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desplegar
cd dist/
netlify deploy --prod
```

---

## 🔥 Opción 3: Vercel (Gratis)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
cd dist/
vercel --prod
```

---

## 📁 Opción 4: GitHub Pages

1. Sube el contenido de `dist/` a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama y carpeta
4. Guarda y tu sitio estará en línea

---

## 🔧 Configuración Post-Despliegue

### SSL/HTTPS
Asegúrate de que tu servidor tenga un certificado SSL configurado:
- **Netlify/Vercel**: SSL automático incluido
- **cPanel/Plesk**: Let's Encrypt gratuito
- **Apache/Nginx**: Usa Certbot

### Dominio Personalizado
Si tienes un dominio como `www.misayperu.com`:

1. Apunta los DNS a tu servidor:
   - **A Record**: IP de tu servidor
   - **CNAME**: www → tu-sitio.netlify.app (si usas Netlify)

2. Actualiza el dominio en tu plataforma de hosting

---

## 📊 Estructura de Archivos en Producción

```
dist/
├── index.html                 # Página principal
├── assets/
│   ├── images/               # Todas las imágenes optimizadas
│   │   ├── logo.png
│   │   ├── griferias.jpg
│   │   ├── sanitarios.jpg
│   │   ├── pisos.jpg
│   │   ├── revestimientos.jpg
│   │   ├── equipamiento-cocina.jpg
│   │   └── servicio-microhormigon.jpg
│   ├── index-[hash].css      # Estilos minificados
│   ├── index-[hash].js       # JavaScript principal
│   ├── react-vendor-[hash].js     # React, React DOM, Router
│   └── animation-vendor-[hash].js # Framer Motion
```

---

## ✅ Checklist Post-Despliegue

- [ ] Verificar que todas las páginas cargan correctamente
- [ ] Probar navegación entre secciones
- [ ] Verificar que las imágenes se ven
- [ ] Probar el botón de WhatsApp
- [ ] Verificar enlaces de redes sociales (Facebook, LinkedIn)
- [ ] Probar el formulario de contacto
- [ ] Verificar que el enlace a ABP Studio funciona
- [ ] Probar en móvil
- [ ] Verificar SSL/HTTPS
- [ ] Configurar Google Analytics (opcional)

---

## 🔍 Solución de Problemas

### Las rutas no funcionan (Error 404)
- Asegúrate de configurar el servidor para SPA (ver configuraciones arriba)

### Las imágenes no cargan
- Verifica que la carpeta `assets/images/` se subió correctamente
- Revisa los permisos de archivos (644 para archivos, 755 para carpetas)

### El sitio se ve sin estilos
- Limpia la caché del navegador (Ctrl+Shift+R / Cmd+Shift+R)
- Verifica que los archivos CSS están en `assets/`

---

## 📈 Performance

El sitio está optimizado con:
- ✅ Code splitting (separación de vendors)
- ✅ Lazy loading de imágenes
- ✅ Minificación de CSS/JS
- ✅ Gzip compression (habilitar en servidor)
- ✅ Total: ~350KB comprimido

### Habilitar Gzip (recomendado)

**Apache:**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**Nginx:**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

---

## 📞 Soporte

**Desarrollado por:** ABP Studio
**Web:** https://studio.abp.pe/
**Contacto:** Para soporte técnico, contacta a ABP Studio

---

## 🎉 ¡Listo!

Tu sitio MisayPeru está listo para desplegarse. Elige la opción que mejor se adapte a tus necesidades y sigue las instrucciones correspondientes.

**URL de ejemplo:**
- Netlify: `https://misay-peru.netlify.app`
- Vercel: `https://misay-peru.vercel.app`
- Tu dominio: `https://www.misayperu.com`
