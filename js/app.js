const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prevSlide');
const next = document.querySelector('.nextSlide');

let index = 1;


function changeSlide(n) {
    displaySlides(index += n);
}


function displaySlides(n){

    if (n > slides.length) {
        index = 1;
    }

    if (n < 1) {
        index = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       
    }
    slides[index - 1].style.display = "block";
}
