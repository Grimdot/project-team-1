const cards = Array.from(document.querySelectorAll(".more-photo__item"));
const slider = document.querySelector("[data-slider]");
const picture = Array.from(document.querySelectorAll(".more-photo__img"));
const sliderContainer = document.querySelector("[data-container]");
const sliderBtnLeft = document.querySelector("[data-slider-left]");
const sliderBtnRight = document.querySelector("[data-slider-right]");
const sliderBtnClose = document.querySelector("[data-slider-close]");

let cardIndex = -1;
let pictureFull;


for (const card of cards) {
    card.addEventListener("click", (Event) => {
        event.preventDefault();
        cardIndex = cards.indexOf(card);
        pictureFull = picture[cardIndex].cloneNode();
        pictureFull.style.objectFit = "contain";
        pictureFull.setAttribute("sizes", "(min-width: 320px) 2880px");
        sliderContainer.append(pictureFull);
        slider.classList.add("more-photo__slider--open");

    });
}

sliderBtnRight.addEventListener("click", (Event) => {
    event.preventDefault();
    changePicture("right")
});

sliderBtnLeft.addEventListener("click", (Event) => {
    event.preventDefault();
    changePicture("left")
});

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

sliderBtnClose.addEventListener("click", (Event) => {
    event.preventDefault();
    slider.classList.remove("more-photo__slider--open");
    pictureFull.remove();
    // newPictureFull.remove();
});