const cards = Array.from(document.querySelectorAll(".more-photo__item"));
const slider = document.querySelector("[data-slider]");
const picture = Array.from(document.querySelectorAll(".more-photo__img"));
const sliderContainer = document.querySelector("[data-container]");

let cardIndex = -1;
let pictureFull;


for (const card of cards) {
    card.addEventListener("click", (Event) => {
        cardIndex = cards.indexOf(card);
        pictureFull = picture[cardIndex].cloneNode();
        pictureFull.style.objectFit = "contain";
        sliderContainer.append(pictureFull);
        slider.classList.add("more-photo__slider--open");

    })
}

console.log(cards);