const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

setInterval(nextSlide, 2000); // Troca de slide a cada 2 segundos (2000 milissegundos)
