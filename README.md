# Experiencia QR - Propuesta de Matrimonio

Una experiencia web emocional en 3 fases, accesible mediante código QR, diseñada para crear un momento especial y memorable.

## Estructura del Proyecto

```
/
├── index.html              # Página principal con las 3 fases
├── css/
│   └── styles.css          # Estilos y animaciones
├── js/
│   └── main.js             # Lógica de navegación y galería
├── assets/
│   ├── images/
│   │   └── photos/         # Carpeta para las fotos de la pareja
│   └── audio/
│       └── music.mp3       # Música instrumental (opcional)
└── README.md               # Este archivo
```

## Instrucciones para Personalizar

### 1. Reemplazar Texto 1 (Fase 1 - Texto Poético Místico)

Abre `index.html` y busca la sección con el comentario:
```html
<!-- TEXTO 1 DEFINITIVO - Reemplazar este placeholder... -->
```

Reemplaza el contenido dentro de `<p class="poetic-text">` con tu texto definitivo. Mantén los saltos de línea con `<br>` si es necesario.

### 2. Reemplazar Texto 2 (Fase 2 - Texto Íntimo y Revelador)

Abre `index.html` y busca la sección con el comentario:
```html
<!-- TEXTO 2 DEFINITIVO - Reemplazar este placeholder... -->
```

Reemplaza el contenido dentro de `<p class="intimate-text">` con tu texto definitivo.

### 3. Añadir Fotos (Fase 3 - Galería)

1. Coloca tus fotos (10-15 imágenes) en la carpeta `assets/images/photos/`
2. Nombra las fotos como: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Formatos soportados: JPG, PNG, WebP
4. **Importante**: Si tienes menos de 15 fotos, puedes:
   - Eliminar los grupos de fotos sobrantes en `index.html` (busca los `<div class="photo-group">` que no necesites)
   - O dejar las rutas y las imágenes simplemente no se mostrarán

**Ejemplo**: Si tienes 12 fotos, elimina el último grupo (fotos 13-15) del HTML.

### 4. Añadir Música (Opcional - Fase 3)

1. Consigue un archivo de música instrumental suave y romántica
2. Conviértelo a formato MP3
3. Colócalo en `assets/audio/` con el nombre `music.mp3`
4. Si no añades música, la experiencia funcionará igual pero sin audio

**Recomendaciones de música gratuita**:
- [Free Music Archive](https://freemusicarchive.org/) - Busca música instrumental, piano, ambient
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Música libre de derechos
- [Incompetech](https://incompetech.com/music/) - Música de Kevin MacLeod (requiere atribución)

## Cómo Usar

### Desarrollo Local

1. Abre `index.html` en tu navegador
2. O usa un servidor local simple:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   ```

### Publicar en Internet (Gratis)

Para que sea accesible mediante QR desde cualquier lugar:

**Opción 1: GitHub Pages (Recomendado - Gratis)**
1. Crea una cuenta en GitHub
2. Crea un nuevo repositorio
3. Sube todos los archivos del proyecto
4. Ve a Settings > Pages
5. Selecciona la rama `main` y guarda
6. Tu sitio estará en: `https://tu-usuario.github.io/nombre-repositorio/`

**Opción 2: Netlify (Gratis)**
1. Ve a [netlify.com](https://www.netlify.com)
2. Arrastra la carpeta del proyecto
3. Tu sitio estará listo en segundos

**Opción 3: Vercel (Gratis)**
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio o sube la carpeta
3. Despliegue automático

### Generar el Código QR

Una vez que tengas la URL de tu sitio:
1. Usa un generador de QR gratuito como [QR Code Generator](https://www.qr-code-generator.com/)
2. Pega la URL de tu sitio
3. Descarga el QR
4. Imprímelo o muéstralo en pantalla

## Personalización Avanzada (Opcional)

### Cambiar Tipografías

En `index.html`, modifica los enlaces de Google Fonts en el `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400&display=swap" rel="stylesheet">
```

Luego actualiza `css/styles.css` cambiando las referencias a las fuentes.

### Ajustar Colores

En `css/styles.css`, busca y modifica:
- `#000000` o `#0a0a0a` - Fondo Fase 1
- `#1a1a1a` - Fondo Fase 2
- `rgba(147, 51, 234, 0.3)` - Morado suave (decoraciones)
- `rgba(34, 197, 94, 0.2)` - Verde suave (decoraciones Fase 2)

### Cambiar Velocidad de Transiciones

En `js/main.js`, modifica:
- `4500` (milisegundos) - Tiempo entre grupos de fotos
- `1000` (milisegundos) - Tiempo de transición entre fases

En `css/styles.css`, modifica los valores de `transition` y `animation-duration`.

## Notas Importantes

- ✅ El proyecto es completamente estático, no requiere servidor ni base de datos
- ✅ Funciona en cualquier dispositivo móvil moderno
- ✅ Optimizado para carga rápida
- ✅ No requiere conexión a internet después de la primera carga (si usas Service Worker)
- ⚠️ Las fotos deben estar optimizadas (recomendado: máximo 1-2 MB cada una)
- ⚠️ El archivo de música debe ser MP3 y no muy pesado (recomendado: máximo 3-5 MB)

## Soporte

Si tienes problemas:
1. Verifica que todas las rutas de archivos sean correctas
2. Abre la consola del navegador (F12) para ver errores
3. Asegúrate de que las imágenes estén en formato JPG, PNG o WebP
4. Verifica que el archivo de música sea MP3

---

**¡Que sea una experiencia memorable! 💕**

