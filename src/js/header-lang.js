const langBtn = document.querySelector('.lang-button');

let indexLang = 0;
console.log({indexLang});

langBtn.addEventListener('click', Event => {
    if (indexLang == 0) {
        langBtn.innerHTML = "ENG";
        document.documentElement.lang = 'en';
        indexLang = indexLang + 1;
        

    }else if (indexLang == 1) {
        langBtn.innerHTML = "RUS";
        document.documentElement.lang = 'ru';
        indexLang= indexLang + 1;

    }else {
        langBtn.innerHTML = "UKR";
        document.documentElement.lang = 'uk';
        indexLang = 0;
    }
});
