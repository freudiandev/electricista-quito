# Leo Electricista - Instrucciones de Configuración

## 📋 Archivos Pendientes

Necesitas agregar la siguiente imagen a la carpeta `public/`:

### opengraph.jpg
- **Ubicación:** `public/opengraph.jpg`
- **Dimensiones recomendadas:** 1200 x 630 pixels
- **Formato:** JPG o PNG
- **Descripción:** Esta imagen se mostrará cuando compartas el sitio en:
  - WhatsApp
  - Facebook
  - Twitter
  - LinkedIn
  - Otras redes sociales
  
**Sugerencias para la imagen:**
- Debe incluir el nombre "Leodan Cueva"
- Debe incluir "Electricista Profesional"
- Debe incluir el número de teléfono o WhatsApp
- Usa los colores del sitio: azul (#1a4d8f, #2196f3) y dorado (#ffd700)
- Fondo profesional y minimalista
- Incluye algún elemento relacionado con electricidad (rayos, cables, herramientas)

### Iconos PWA (Opcional pero recomendado)
- `public/icon-192.png` - Icono 192x192 pixels
- `public/icon-512.png` - Icono 512x512 pixels
- `public/favicon.ico` - Favicon del sitio

## 🚀 Pasos para Ejecutar el Proyecto

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Ejecutar en Modo Desarrollo
```bash
npm run dev
```

El sitio estará disponible en: http://localhost:3000

### 3. Compilar para Producción
```bash
npm run build
```

### 4. Ejecutar en Producción
```bash
npm start
```

## 🎨 Personalización

### Cambiar Información de Contacto
Si necesitas cambiar el número de teléfono o WhatsApp:

1. Busca y reemplaza `593995860168` en todos los archivos
2. Actualiza los enlaces de WhatsApp con el nuevo número

### Modificar Colores
Los colores principales se definen en `app/globals.scss`:

```scss
$primary-color: #1a4d8f;      // Azul principal
$secondary-color: #2196f3;     // Azul secundario
$accent-color: #ffd700;        // Dorado
$dark-bg: #0a1628;             // Fondo oscuro
$light-bg: #f5f7fa;            // Fondo claro
```

### Modificar Servicios
Edita el array `services` en `components/ServicesSection.tsx`

### Modificar SEO Keywords
Edita las keywords en `app/layout.tsx` en el array `metadata.keywords`

## 📱 Pruebas de Responsividad

El sitio está optimizado para:
- ⌚ Smart watches (240px - 280px)
- 📱 Móviles (281px - 480px)
- 📱 Móviles grandes (481px - 768px)
- 💻 Tablets (769px - 1024px)
- 🖥️ Laptops (1025px - 1440px)
- 📺 Pantallas grandes y TVs (1441px+)

## 🔍 SEO

### Verificar SEO
1. Abre las herramientas de desarrollo (F12)
2. Ve a la pestaña "Lighthouse"
3. Ejecuta un audit de SEO

### Google Search Console
1. Regístrate en [Google Search Console](https://search.google.com/search-console)
2. Añade tu sitio web
3. Actualiza el código de verificación en `app/layout.tsx` (línea con `google-site-verification-code`)

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)
1. Ve a [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. El despliegue es automático

### Opción 2: Azure Static Web Apps
1. Instala Azure CLI
2. Ejecuta `az login`
3. Sigue la documentación de Azure Static Web Apps

### Opción 3: Netlify
1. Ve a [Netlify](https://netlify.com)
2. Conecta tu repositorio
3. Configura el build command: `npm run build`
4. Configura el publish directory: `.next`

## 📊 Analytics (Opcional)

### Google Analytics
1. Crea una propiedad en [Google Analytics](https://analytics.google.com)
2. Obtén tu ID de medición (G-XXXXXXXXXX)
3. Añade el script en `app/layout.tsx`

## 🛠️ Soporte

Si tienes problemas:
1. Verifica que Node.js esté instalado: `node --version`
2. Verifica que npm esté instalado: `npm --version`
3. Borra `node_modules` y reinstala: `rm -rf node_modules && npm install`
4. Borra `.next` y recompila: `rm -rf .next && npm run build`

## 📞 Contacto del Desarrollador

**freudianDev**
- Instagram: [@freudiandev](https://www.instagram.com/freudiandev/)

---

¡Buena suerte con tu sitio web! 🚀
