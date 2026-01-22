# 🔧 Solución: CSS y JS no se cargan en GitHub Pages

## Problema Identificado

Cuando abres `index.html` localmente funciona perfecto, pero en GitHub Pages se ve sin estilos (fondo blanco, texto negro).

## Causa Más Común

**Los archivos `css/styles.css` y `js/main.js` NO están subidos a GitHub** o están en la ubicación incorrecta.

## ✅ Solución Paso a Paso

### Paso 1: Verifica la Estructura en GitHub

Ve a tu repositorio en GitHub y asegúrate de tener EXACTAMENTE esta estructura:

```
tu-repositorio/
├── index.html          ← Debe estar en la RAIZ
├── css/
│   └── styles.css     ← Debe existir esta carpeta y archivo
├── js/
│   └── main.js        ← Debe existir esta carpeta y archivo
└── assets/
    └── images/
        └── photos/
            ├── 1.jpeg
            ├── 2.jpeg
            ... (todas las fotos)
```

### Paso 2: Sube los Archivos que Faltan

**Si NO ves las carpetas `css/` y `js/` en GitHub:**

1. Ve a tu repositorio en GitHub
2. Haz clic en "Add file" > "Upload files"
3. Arrastra la carpeta `css` completa (con `styles.css` dentro)
4. Haz clic en "Commit changes"
5. Repite con la carpeta `js` (con `main.js` dentro)

**O sube los archivos individualmente:**

1. Crea la carpeta `css` en GitHub:
   - Click en "Add file" > "Create new file"
   - Escribe: `css/styles.css`
   - Copia TODO el contenido de tu `css/styles.css` local
   - Click "Commit new file"

2. Crea la carpeta `js` en GitHub:
   - Click en "Add file" > "Create new file"
   - Escribe: `js/main.js`
   - Copia TODO el contenido de tu `js/main.js` local
   - Click "Commit new file"

### Paso 3: Verifica que los Archivos Estén

1. En GitHub, haz clic en la carpeta `css`
2. Debes ver el archivo `styles.css`
3. Haz clic en `styles.css` y verifica que tenga contenido (no esté vacío)
4. Repite con `js/main.js`

### Paso 4: Usa la Página de Verificación

1. Sube también el archivo `verificar-archivos.html` a GitHub
2. Visita: `https://tu-usuario.github.io/tu-repositorio/verificar-archivos.html`
3. Te dirá qué archivos están cargando y cuáles no

### Paso 5: Limpia la Caché

Después de subir los archivos:

1. Espera 2-5 minutos (GitHub Pages tarda en actualizar)
2. Abre tu URL en modo incógnito: `Ctrl + Shift + N`
3. O limpia la caché: `Ctrl + Shift + R`

## 🔍 Verificación Rápida

Abre la consola del navegador (F12) en tu sitio de GitHub Pages y busca errores:

- ❌ `Failed to load resource: css/styles.css` → El archivo no está en GitHub
- ❌ `Failed to load resource: js/main.js` → El archivo no está en GitHub
- ✅ Si no ves errores, pero sigue sin funcionar → Problema de caché

## 📝 Checklist Final

Antes de reportar que sigue sin funcionar, verifica:

- [ ] La carpeta `css/` existe en GitHub
- [ ] El archivo `css/styles.css` existe y tiene contenido
- [ ] La carpeta `js/` existe en GitHub
- [ ] El archivo `js/main.js` existe y tiene contenido
- [ ] Esperaste 5 minutos después de subir
- [ ] Limpiaste la caché del navegador
- [ ] Probaste en modo incógnito
- [ ] Revisaste la consola del navegador (F12)

## 🆘 Si Sigue Sin Funcionar

1. **Comparte una captura de pantalla** de la estructura de tu repositorio en GitHub
2. **Abre la consola** (F12) y comparte los errores que aparecen
3. **Verifica la URL** - debe ser: `https://usuario.github.io/nombre-repositorio/`
   - NO debe terminar en `/index.html`

## 💡 Nota Importante

GitHub Pages es **case-sensitive** (distingue mayúsculas y minúsculas):
- ✅ `css/styles.css` (correcto)
- ❌ `CSS/styles.css` (incorrecto)
- ❌ `Css/styles.css` (incorrecto)

Asegúrate de que los nombres de carpetas y archivos coincidan EXACTAMENTE.

