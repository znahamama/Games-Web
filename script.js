document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        const rightArrow = slider.querySelector('.right-arrow');
        let currentIndex = 0;

        rightArrow.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            images[currentIndex].classList.add('previous');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
            setTimeout(() => {
                images.forEach(img => img.classList.remove('previous'));
            }, 500); // duration should match the CSS transition time
        });
    });
});
