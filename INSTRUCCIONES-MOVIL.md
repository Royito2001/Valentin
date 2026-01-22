# 📱 Cómo Probar desde el Móvil

## Opción 1: Servidor Local (Más Rápido - Mismo WiFi)

### Con Python (Recomendado)

1. **Instala Python** (si no lo tienes):
   - Descarga desde: https://www.python.org/downloads/
   - Durante la instalación, marca "Add Python to PATH"

2. **Instala la librería QR**:
   ```bash
   pip install qrcode[pil]
   ```

3. **Ejecuta el servidor**:
   - **Windows**: Doble clic en `start-server.bat`
   - **Mac/Linux**: Ejecuta `python3 start-server.py`

4. **Escanea el QR** que aparece en la pantalla con tu móvil
   - Asegúrate de que tu móvil esté en la **misma red WiFi**

### Con Node.js (Alternativa)

1. **Instala Node.js** (si no lo tienes):
   - Descarga desde: https://nodejs.org/

2. **Ejecuta el servidor**:
   - **Windows**: Doble clic en `start-server-node.bat`
   - **Mac/Linux**: Ejecuta `node start-server-node.js`

3. **Escanea el QR** que aparece en la consola

---

## Opción 2: Publicar en Internet (Funciona desde Cualquier Lugar)

### GitHub Pages (Gratis y Permanente)

1. **Crea una cuenta en GitHub**: https://github.com

2. **Crea un nuevo repositorio**:
   - Nombre: `propuesta-matrimonio` (o el que quieras)
   - Público (para que sea gratis)

3. **Sube los archivos**:
   - Arrastra todos los archivos del proyecto al repositorio
   - Haz commit y push

4. **Activa GitHub Pages**:
   - Ve a Settings > Pages
   - Source: `main` branch
   - Save

5. **Tu URL será**: `https://tu-usuario.github.io/propuesta-matrimonio/`

6. **Genera el QR**:
   - Ve a: https://www.qr-code-generator.com/
   - Pega tu URL de GitHub Pages
   - Descarga el QR

### Netlify Drop (Súper Fácil - 2 minutos)

1. Ve a: https://app.netlify.com/drop

2. Arrastra toda la carpeta del proyecto

3. ¡Listo! Te dará una URL como: `https://random-name-123.netlify.app`

4. Genera el QR con esa URL

### Vercel (También Fácil)

1. Ve a: https://vercel.com

2. Crea cuenta (puedes usar GitHub)

3. Arrastra la carpeta del proyecto

4. ¡Listo! URL automática

---

## Generar QR Manualmente

Si ya tienes la URL (de GitHub Pages, Netlify, etc.):

1. Ve a: https://www.qr-code-generator.com/
2. Pega tu URL
3. Descarga el QR
4. Imprímelo o muéstralo en pantalla

---

## Solución de Problemas

### "No puedo acceder desde el móvil"
- ✅ Asegúrate de estar en la misma red WiFi
- ✅ Verifica que el firewall no bloquee el puerto 8000
- ✅ Prueba escribir la URL manualmente en el navegador del móvil

### "El QR no funciona"
- ✅ Verifica que la URL sea correcta
- ✅ Prueba generar un nuevo QR
- ✅ Asegúrate de que el sitio esté accesible

### "Python/Node no funciona"
- ✅ Usa la opción de publicar en Internet (GitHub Pages/Netlify)
- ✅ Es más fácil y funciona desde cualquier lugar

---

## Recomendación Final

**Para probar rápido**: Usa el servidor local (Opción 1)  
**Para uso real**: Publica en GitHub Pages o Netlify (Opción 2) - es gratis y permanente

