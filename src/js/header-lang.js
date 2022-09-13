// const langBtn = document.querySelector('.lang-button');

// let indexLang = 0;
// console.log({ indexLang });

// langBtn.addEventListener('click', Event => {
//     if (indexLang == 0) {
//         langBtn.innerHTML = "ENG";
//         document.documentElement.lang = 'en';
//         indexLang = indexLang + 1;

//     }else if (indexLang == 1) {
//         langBtn.innerHTML = "RUS";
//         document.documentElement.lang = 'ru';
//         indexLang= indexLang + 1;

//     }else {
//         langBtn.innerHTML = "UKR";
//         document.documentElement.lang = 'uk';
//         indexLang = 0;
//     }
// });

const langInput = Array.from(document.querySelectorAll('.lang__input'));
const langLabel = Array.from(document.querySelectorAll('.lang__label'));

const form = document.querySelector('.lang');

const allLang = ["uk", "ru", "en"];

let indexInput = 0;
let hash = 'uk'
console.log(indexInput);


for (index = 0; index < langInput.length; ++index) {
    langLabel[index].classList.add('visually-hidden');
    
    if (langInput[index].checked == true) {
        console.log(langInput[index].checked);
        langLabel[index].classList.remove('visually-hidden');
        location.href = window.location.pathname + '#' + allLang[index];
        hash = allLang[index];
        document.documentElement.lang = hash;
        indexInput = index;

    }
}

form.addEventListener('click', Event => {
    if (indexInput < 2) {
    langInput[indexInput].checked = false;
    langInput[indexInput + 1].checked = true;
    langLabel[indexInput].classList.add('visually-hidden');
    langLabel[indexInput + 1].classList.remove('visually-hidden');
    indexInput = indexInput + 1;
      
  } else if (indexInput == 2) {
    indexInput = 0;
    langInput[2].checked = false;
    langInput[indexInput].checked = true;
    langLabel[2].classList.add('visually-hidden');
    langLabel[indexInput].classList.remove('visually-hidden');
  }
    location.reload();
});
