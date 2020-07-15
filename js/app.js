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
    slides[index - 1].style.display = "grid";
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            changeSlide(-1);
            break;
        case 38:
            changeSlide(-1);
            break;
        case 39:
            changeSlide(1);
            break;
        case 40:
            changeSlide(1);
            break;
    }
};
