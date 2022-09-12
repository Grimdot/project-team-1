const show = document.querySelector(".more-photo__btn-show");
const list = document.querySelector("[data-show-img]");

let indexImg = 0;

// Додає івент на кнопку show
show.addEventListener("click", (Event) => {
    event.preventDefault();

    if (indexImg == 0) {
        list.classList.remove("more-photo__list--show");
        indexImg = 1;
    } else {
        list.classList.add("more-photo__list--show");
        indexImg = 0;
    }

});