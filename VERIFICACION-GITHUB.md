# 🔍 Verificación de Problemas en GitHub Pages

## Problema: Se ve sin colores ni animaciones

### ✅ Checklist de Verificación

#### 1. Estructura de Archivos en GitHub
Asegúrate de que en tu repositorio de GitHub tengas EXACTAMENTE esta estructura:

```
tu-repositorio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── photos/
│   │       ├── 1.jpeg
│   │       ├── 2.jpeg
│   │       ├── 3.jpeg
│   │       ... (hasta 15.jpeg)
│   └── audio/
│       └── music.mp3 (opcional)
```

#### 2. Verificar que los Archivos se Subieron Correctamente

1. Ve a tu repositorio en GitHub
2. Verifica que existan estas carpetas:
   - ✅ `css/` con `styles.css` dentro
   - ✅ `js/` con `main.js` dentro
   - ✅ `assets/images/photos/` con las fotos

#### 3. Verificar GitHub Pages está Activo

1. Ve a **Settings** > **Pages**
2. Debe decir: **"Your site is live at..."**
3. Si no está activo:
   - Source: `main` branch
   - Folder: `/ (root)`
   - Click **Save**

#### 4. Limpiar Caché del Navegador

El problema más común es la **caché del navegador**:

**En Chrome/Edge (móvil):**
- Abre tu URL de GitHub Pages
- Mantén presionado el botón de recargar
- Selecciona "Recargar sin caché" o "Hard Reload"

**En Chrome (escritorio):**
- Presiona `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
- O abre en modo incógnito: `Ctrl + Shift + N`

#### 5. Verificar en la Consola del Navegador

1. Abre tu URL de GitHub Pages en el navegador
2. Presiona `F12` (o clic derecho > Inspeccionar)
3. Ve a la pestaña **Console**
4. Busca errores en rojo como:
   - `Failed to load resource: css/styles.css`
   - `404 Not Found`

Si ves errores 404, significa que los archivos no están en GitHub o las rutas están mal.

#### 6. Verificar Rutas de Archivos

Abre `index.html` en GitHub y verifica que las rutas sean:

```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js"></script>
<img src="assets/images/photos/1.jpeg">
```

**NO deben tener `/` al inicio** (a menos que tu repositorio tenga un nombre específico en la URL).

#### 7. Si el Repositorio NO está en la Raíz

Si tu URL es algo como:
```
https://usuario.github.io/nombre-repositorio/
```

Entonces las rutas SÍ necesitan empezar con `/`:

```html
<link rel="stylesheet" href="/nombre-repositorio/css/styles.css">
```

O mejor, usa rutas relativas con `./`:

```html
<link rel="stylesheet" href="./css/styles.css">
```

## 🔧 Solución Rápida

### Paso 1: Verifica que Subiste TODOS los Archivos

Asegúrate de que en GitHub tengas:
- ✅ `index.html` (en la raíz)
- ✅ `css/styles.css`
- ✅ `js/main.js`
- ✅ Todas las fotos en `assets/images/photos/`

### Paso 2: Espera 2-5 Minutos

GitHub Pages puede tardar unos minutos en actualizar.

### Paso 3: Limpia la Caché

Usa modo incógnito o limpia la caché del navegador.

### Paso 4: Verifica la URL

Asegúrate de estar visitando la URL correcta:
- ✅ `https://usuario.github.io/nombre-repositorio/`
- ❌ NO `https://usuario.github.io/nombre-repositorio/index.html`

## 🆘 Si Sigue Sin Funcionar

1. **Abre la consola del navegador** (F12) y mira los errores
2. **Verifica que todos los archivos estén en GitHub**
3. **Prueba en otro navegador** o dispositivo
4. **Espera 10 minutos** y vuelve a intentar (GitHub Pages puede tardar)

## 📝 Nota Importante

Si tu repositorio se llama diferente a la URL, las rutas pueden necesitar ajuste. Por ejemplo:

- Repositorio: `propuesta-matrimonio`
- URL: `https://usuario.github.io/propuesta-matrimonio/`
- Las rutas relativas (`css/styles.css`) deberían funcionar

Pero si tienes problemas, prueba con rutas que incluyan el nombre del repositorio.

