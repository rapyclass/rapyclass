// Selecciona el contenedor del carrusel
const track = document.querySelector('.cursitos-track');
// Contiene todos los cursos mediante un array
const items = Array.from(track.children);
// Siguiente y atras
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
// Calcula la dimension del primer contenedor para que continue al siguiente correctamente
const itemWidth = items[0].getBoundingClientRect().width;

// Inicia con el curso 0 del array
let currentIndex = 0;

// Sirve para hacer calculo de los pixeles para que pueda pasar al siguiente curso correctamente
function updateCarousel() {
    const amountToMove = currentIndex * itemWidth;
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
}

// Maneja el carrusel para la derecha
nextButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario
    currentIndex = (currentIndex + 1) % items.length; // Mover al siguiente
    updateCarousel();
});

// Maneja el carrusel para la izquierda
prevButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Mover al anterior
    updateCarousel();
});
