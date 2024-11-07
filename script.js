let index = 0;

function showSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showSlide, 3000);
