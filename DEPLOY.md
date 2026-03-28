# Selixor Systems — Guía de Deployment en GitHub Pages

## Archivos que necesitas subir al repositorio

```
selixor-systems/
├── index.html          ← Página principal
├── styles.css          ← Estilos
├── main.js             ← JavaScript
├── hero-video.mp4      ← Video del hero (sin audio)
└── foto-fundador.jpg   ← Foto para modal "Sobre nosotros"
```

## Pasos para reemplazar tu sitio actual

### 1. Eliminar archivos viejos
- Ve a tu repositorio: `github.com/misaelb-chavarria/selixor-systems`
- Elimina `index.html` actual (click en archivo → botón de basura → commit)
- Elimina `verdantia_dashboard.html` (ya no se necesita)

### 2. Subir archivos nuevos
- Click en **"Add file"** → **"Upload files"**
- Arrastra los 5 archivos (index.html, styles.css, main.js, hero-video.mp4, foto-fundador.jpg)
- **IMPORTANTE**: todos deben quedar en la raíz del repositorio, NO dentro de una carpeta
- Escribe un commit message: "v2.0 — Nuevo sitio Selixor"
- Click **"Commit changes"**

### 3. Verificar GitHub Pages
- Ve a **Settings** → **Pages**
- Source debe ser: **Deploy from a branch**
- Branch: **main** / **root**
- Tu sitio estará en: `https://misaelb-chavarria.github.io/selixor-systems/`

### 4. Conectar dominio personalizado (selixor.cloud)
- En **Settings** → **Pages** → **Custom domain**
- Escribe: `selixor.cloud`
- En tu proveedor DNS, agrega estos registros:

```
Tipo    Nombre    Valor
A       @         185.199.108.153
A       @         185.199.109.153
A       @         185.199.110.153
A       @         185.199.111.153
CNAME   www       misaelb-chavarria.github.io
```

- Marca **"Enforce HTTPS"** en GitHub Pages

## Verificación post-deploy

- [ ] El sitio carga con fondo oscuro y video
- [ ] El navbar se oscurece al hacer scroll
- [ ] El menú mobile abre y cierra
- [ ] "Sobre nosotros" abre el modal con tu foto
- [ ] El formulario envía (prueba con tu correo)
- [ ] Los links de Instagram y Facebook funcionan
- [ ] El carrusel de logos se mueve
