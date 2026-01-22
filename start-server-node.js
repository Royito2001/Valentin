/**
 * Servidor local simple con Node.js para probar la experiencia QR desde el móvil.
 * Ejecuta: node start-server-node.js
 * O usa: npm install -g http-server qrcode-terminal
 *       http-server -p 8000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { networkInterfaces } = require('os');
const qrcode = require('qrcode-terminal');

const PORT = 8000;

// Obtener IP local
function getLocalIP() {
    const nets = networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'localhost';
}

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.mp3': 'audio/mpeg',
    '.json': 'application/json',
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Archivo no encontrado</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Error del servidor: ${error.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const localIP = getLocalIP();
const url = `http://${localIP}:${PORT}`;

server.listen(PORT, () => {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 SERVIDOR LOCAL INICIADO');
    console.log('='.repeat(60));
    console.log(`\n📍 URL Local: ${url}`);
    console.log(`\n📱 Para acceder desde tu móvil:`);
    console.log(`   1. Asegúrate de estar en la misma red WiFi`);
    console.log(`   2. Abre la cámara de tu móvil`);
    console.log(`   3. Escanea el código QR que aparece abajo`);
    console.log(`   4. O escribe esta URL en el navegador: ${url}`);
    console.log('\n' + '='.repeat(60));
    
    // Generar QR en consola
    console.log('\n📱 CÓDIGO QR:\n');
    qrcode.generate(url, { small: true });
    
    console.log('\n' + '='.repeat(60));
    console.log('💡 Presiona Ctrl+C para detener el servidor');
    console.log('='.repeat(60) + '\n');
});

