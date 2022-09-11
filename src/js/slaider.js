const cards = Array.from(document.querySelectorAll(".more-photo__item"));
const slider = document.querySelector("[data-slider]");
const picture = Array.from(document.querySelectorAll(".more-photo__img"));
const sliderContainer = document.querySelector("[data-container]");
const sliderBtnLeft = document.querySelector("[data-slider-left]");
const sliderBtnRight = document.querySelector("[data-slider-right]");
const sliderBtnClose = document.querySelector("[data-slider-close]");

let cardIndex = -1;
let pictureFull;



//Додає класи слайдеру та зображенню в слайдері
for (const card of cards) {
    card.addEventListener("click", (Event) => {
        event.preventDefault();
        document.body.style.overflow = 'hidden';
        cardIndex = cards.indexOf(card);
        pictureFull = picture[cardIndex].cloneNode();
        pictureFull.style.objectFit = "contain";
        pictureFull.style.cursor = "auto";
        // pictureFull.setAttribute("sizes", "(min-width: 320px) 2880px");     
        sliderContainer.append(pictureFull);
        slider.classList.add("more-photo__slider--open");

    });
}
// Додає івент на кнопки слайдеру
sliderBtnRight.addEventListener("click", (Event) => {
    event.preventDefault();
    changePicture("right");
});

sliderBtnLeft.addEventListener("click", (Event) => {
    event.preventDefault();
    changePicture("left");
});


// Додає перебіл зображень
function changePicture(dir) {
    if (dir == "left") {

        if (cardIndex > 0) {
            cardIndex--;
        } else {
            cardIndex = cards.length - 1;
        }
    } else if (dir == "right") {
        
        if (cardIndex < cards.length - 1) {
            cardIndex++;
        } else {
            cardIndex = 0;
        }
    }
    
    let newPictureFull = picture[cardIndex].cloneNode();
    newPictureFull.style.objectFit = "contain";
    pictureFull.replaceWith(newPictureFull);
    pictureFull = newPictureFull;

}

// Додає івент на кнопку закриття слайдеру
sliderBtnClose.addEventListener("click", (Event) => {
    event.preventDefault();
    document.body.style.overflow = 'visible';
    slider.classList.remove("more-photo__slider--open");
    pictureFull.remove();
    // newPictureFull.remove();
});