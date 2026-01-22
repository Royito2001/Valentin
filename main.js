// ============================================
// CONTROL DE NAVEGACIÓN ENTRE FASES
// ============================================

let currentPhase = 1;
let photoGroupIndex = 0;
let photoInterval = null;
let musicStarted = false;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar fase 1 al cargar
    showPhase(1);
    
    // Prevenir scroll no deseado
    preventScroll();
});

// Función para cambiar de fase
function goToPhase(phaseNumber) {
    if (phaseNumber < 1 || phaseNumber > 3) return;
    
    // Fade out de la fase actual
    const currentPhaseElement = document.getElementById(`phase${currentPhase}`);
    currentPhaseElement.classList.remove('active');
    
    // Esperar a que termine la transición antes de cambiar
    setTimeout(() => {
        showPhase(phaseNumber);
        currentPhase = phaseNumber;
        
        // Si es la fase 3, iniciar galería y música
        if (phaseNumber === 3) {
            initPhase3();
        }
    }, 1000); // Tiempo de transición
}

// Función para mostrar una fase
function showPhase(phaseNumber) {
    // Ocultar todas las fases
    const phases = document.querySelectorAll('.phase');
    phases.forEach(phase => {
        phase.classList.remove('active');
    });
    
    // Mostrar la fase solicitada
    const targetPhase = document.getElementById(`phase${phaseNumber}`);
    if (targetPhase) {
        targetPhase.classList.add('active');
    }
}

// ============================================
// FASE 3: GALERÍA Y MÚSICA
// ============================================

function initPhase3() {
    // Iniciar música si existe el archivo
    const music = document.getElementById('background-music');
    if (music) {
        // Intentar cargar y reproducir música
        music.volume = 0.4; // Volumen moderado (40%)
        
        // Esperar a que el audio esté listo
        music.addEventListener('canplaythrough', function() {
            music.play().catch(error => {
                // Si autoplay está bloqueado, intentar con interacción del usuario
                console.log('Autoplay bloqueado, la música se iniciará con la siguiente interacción');
            });
            musicStarted = true;
        }, { once: true });
        
        // Si el archivo no existe, el error se manejará silenciosamente
        music.addEventListener('error', function() {
            console.log('Archivo de música no encontrado o no compatible. La experiencia continuará sin música.');
        }, { once: true });
        
        // Intentar cargar el audio
        music.load();
    }
    
    // Inicializar galería de fotos
    initGallery();
}

function initGallery() {
    const photoGroups = document.querySelectorAll('.photo-group');
    if (photoGroups.length === 0) return;
    
    // Mostrar el primer grupo
    photoGroupIndex = 0;
    showPhotoGroup(0);
    
    // Configurar intervalo para cambiar grupos cada 4.5 segundos
    photoInterval = setInterval(() => {
        photoGroupIndex++;
        
        // Si llegamos al final de los grupos, mostrar mensaje final
        if (photoGroupIndex >= photoGroups.length) {
            showFinalMessage();
            clearInterval(photoInterval);
        } else {
            showPhotoGroup(photoGroupIndex);
        }
    }, 4500); // 4.5 segundos entre grupos
}

function showPhotoGroup(index) {
    const photoGroups = document.querySelectorAll('.photo-group');
    
    // Ocultar todos los grupos
    photoGroups.forEach(group => {
        group.classList.remove('active');
    });
    
    // Mostrar el grupo actual
    if (photoGroups[index]) {
        photoGroups[index].classList.add('active');
    }
}

function showFinalMessage() {
    // Ocultar galería
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        galleryContainer.style.opacity = '0';
        galleryContainer.style.transition = 'opacity 2s ease-in-out';
    }
    
    // Mostrar mensaje final después de un breve delay
    setTimeout(() => {
        const finalMessage = document.getElementById('final-message');
        if (finalMessage) {
            finalMessage.classList.add('visible');
        }
    }, 1000);
    
    // Mantener el mensaje visible durante 5 segundos antes de que termine la experiencia
    // (La música seguirá reproduciéndose en loop)
}

// ============================================
// UTILIDADES
// ============================================

function preventScroll() {
    // Prevenir scroll horizontal
    document.body.style.overflowX = 'hidden';
    
    // Permitir scroll vertical solo si es necesario
    document.body.style.overflowY = 'auto';
}

// Manejar cambios de visibilidad de la página (pestaña en segundo plano)
document.addEventListener('visibilitychange', function() {
    const music = document.getElementById('background-music');
    if (music && musicStarted) {
        if (document.hidden) {
            music.pause();
        } else {
            music.play().catch(error => {
                console.log('No se pudo reanudar la música automáticamente');
            });
        }
    }
});

// Manejar errores de carga de imágenes
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Si una imagen no se carga, ocultarla silenciosamente
        e.target.style.display = 'none';
    }
}, true);

