document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll('section, .caja');

    elementos.forEach(elemento => {
        elemento.style.opacity = 0; // Oculta los elementos inicialmente
        elemento.style.transform = 'translateY(20px)'; // Desplazamiento inicial

        // Añade un retraso para cada elemento
        setTimeout(() => {
            elemento.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            elemento.style.opacity = 1; // Aparece el elemento
            elemento.style.transform = 'translateY(0)'; // Regresa a su posición original
        }, 300); // Ajusta el tiempo de retardo según lo necesites
    });
});


// Opcional: Puedes ajustar la velocidad de desplazamiento si lo deseas
// Actualmente, la velocidad está controlada por la duración de la animación CSS (30s)

// Si deseas controlar el desplazamiento con JavaScript, puedes implementar algo así:


const timeline = document.querySelector('.timeline');
let scrollAmount = 0;
const speed = 1; // Ajusta la velocidad

function autoScroll() {
    scrollAmount += speed;
    timeline.style.transform = `translateX(-${scrollAmount}px)`;
    if (scrollAmount >= timeline.scrollWidth / 2) {
        scrollAmount = 0;
    }
    requestAnimationFrame(autoScroll);
}

autoScroll();

// Pausar al pasar el cursor
const container = document.querySelector('.timeline-container');
container.addEventListener('mouseenter', () => {
    cancelAnimationFrame(autoScroll);
});
container.addEventListener('mouseleave', () => {
    autoScroll();
});
