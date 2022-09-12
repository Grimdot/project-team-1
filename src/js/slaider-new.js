const cards = Array.from(document.querySelectorAll('.more-photo__item'));

const item = Array.from(document.querySelectorAll('.slider__item'));

const img = Array.from(document.querySelectorAll('.slider__img'));

const slider = document.querySelector('[data-slider]');
const sliderImg = document.querySelector('.slider__list');
const sliderBox = document.querySelector('[data-container]').clientWidth;

const sliderBtnLeft = document.querySelector('[data-slider-left]');
const sliderBtnRight = document.querySelector('[data-slider-right]');

const sliderBtnClose = document.querySelector('[data-slider-close]');

let cardIndex = -1;

let indexto;

console.log(item);
//Додає класи слайдеру та зображенню в слайдері
for (const card of cards) {
  card.addEventListener('click', Event => {
    event.preventDefault();
    document.body.style.overflow = 'hidden';
    slider.classList.add('slider--open');
    cardIndex = cards.indexOf(card);
    // indexto = slider,
    indexto = sliderBox * cardIndex;
    sliderImg.style.left = -indexto + 'px';
    sliderImg.style.height = (img[cardIndex].clientHeight * sliderBox / img[cardIndex].clientWidth) + 'px';

    item[cardIndex].style.opacity = '1';

    // item[cardIndex].classList.add('slider__item--opacity')
  });
}

// Додає івент на кнопки слайдеру
sliderBtnRight.addEventListener('click', Event => {
  event.preventDefault();
  changePicture('right');
});

sliderBtnLeft.addEventListener('click', Event => {
  event.preventDefault();
  changePicture('left');
});

// Додає перебіл зображень
function changePicture(dir) {
  if (dir == 'left') {
    indexto = indexto - sliderBox;
    item[cardIndex].style.opacity = '0';
    cardIndex--;
    if (indexto < 0) {
      item[0].style.opacity = '0';
      indexto = sliderImg.clientWidth - sliderBox;
      cardIndex = cards.length - 1;
    }
  } else if (dir == 'right') {
    item[cardIndex].style.opacity = '0';
    indexto = indexto + sliderBox;
    cardIndex++;

    if (indexto > sliderImg.clientWidth - sliderBox) {
      item[cards.length - 1].style.opacity = '0';
      indexto = 0;
      cardIndex = 0;
    }
  }
  console.log(cardIndex);
  sliderImg.style.left = -indexto + 'px';
  sliderImg.style.height = (img[cardIndex].clientHeight * sliderBox / img[cardIndex].clientWidth) + 'px';
  // item[cardIndex-1].style.opacity = '0';
  item[cardIndex].style.opacity = '1';
}

// Додає івент на кнопку закриття слайдеру
sliderBtnClose.addEventListener('click', Event => {
  event.preventDefault();
  document.body.style.overflow = 'visible';
  slider.classList.remove('slider--open');
});
