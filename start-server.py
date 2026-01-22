#!/usr/bin/env python3
"""
Servidor local simple para probar la experiencia QR desde el móvil.
Ejecuta este script y escanea el código QR con tu móvil (mismo WiFi).
"""

import http.server
import socketserver
import socket
import webbrowser
import qrcode
from io import BytesIO
import base64

PORT = 8000

def get_local_ip():
    """Obtiene la IP local de la máquina"""
    try:
        # Conecta a una dirección externa para obtener la IP local
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "localhost"

def generate_qr(url):
    """Genera un código QR y lo muestra en la consola"""
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=2,
        border=2,
    )
    qr.add_data(url)
    qr.make(fit=True)
    
    # Crear imagen del QR
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Guardar QR como imagen
    img.save("qr-code.png")
    print(f"\n✅ Código QR guardado como 'qr-code.png'")
    
    # Mostrar QR en consola (ASCII art)
    qr.print_ascii(invert=True)
    
    return img

def start_server():
    """Inicia el servidor HTTP local"""
    local_ip = get_local_ip()
    url = f"http://{local_ip}:{PORT}"
    
    Handler = http.server.SimpleHTTPRequestHandler
    
    # Configurar para servir archivos estáticos
    Handler.extensions_map.update({
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.mp3': 'audio/mpeg',
    })
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("\n" + "="*60)
            print("🚀 SERVIDOR LOCAL INICIADO")
            print("="*60)
            print(f"\n📍 URL Local: {url}")
            print(f"\n📱 Para acceder desde tu móvil:")
            print(f"   1. Asegúrate de estar en la misma red WiFi")
            print(f"   2. Abre la cámara de tu móvil")
            print(f"   3. Escanea el código QR que aparece abajo")
            print(f"   4. O escribe esta URL en el navegador: {url}")
            print("\n" + "="*60)
            
            # Generar y mostrar QR
            generate_qr(url)
            
            print("\n" + "="*60)
            print("💡 Presiona Ctrl+C para detener el servidor")
            print("="*60 + "\n")
            
            # Abrir en navegador local
            try:
                webbrowser.open(f"http://localhost:{PORT}")
                print("🌐 Abriendo en navegador local...\n")
            except:
                pass
            
            # Iniciar servidor
            httpd.serve_forever()
            
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"\n❌ Error: El puerto {PORT} ya está en uso.")
            print(f"   Cierra otros servidores o cambia el puerto en el script.\n")
        else:
            print(f"\n❌ Error al iniciar el servidor: {e}\n")
    except KeyboardInterrupt:
        print("\n\n🛑 Servidor detenido. ¡Hasta luego!\n")

if __name__ == "__main__":
    start_server()

