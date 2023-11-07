const carousel = document.querySelector('.carousel');
const imageSlides = document.querySelectorAll('.image-slide');

let scrollValue = 0;

imageSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
        const slideRect = slide.getBoundingClientRect();
        const containerRect = carousel.getBoundingClientRect();
        const scrollAmount = slideRect.left - containerRect.left - containerRect.width / 2 + slideRect.width / 2;

        scrollValue += scrollAmount;
        carousel.scroll({
            left: scrollValue,
            behavior: 'smooth',
        });
    });
});