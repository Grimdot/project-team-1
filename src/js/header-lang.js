
const langInput = Array.from(document.querySelectorAll('.lang__input'));
const langLabel = Array.from(document.querySelectorAll('.lang__label'));

const form = document.querySelector('.lang');

const allLang = ['uk', 'ru', 'en'];

let indexInput = 0;
let hash = window.location.hash;
hash = hash.substr(1);


// відслідковує яка мова в посиланні
for (index = 0; index < allLang.length; ++index){
  if (hash == allLang[index]){
    langInput[index].checked = 'true';
    window.location.hash = '#' + hash;
  } else {
    window.location.hash = '#ua';
}
}

//Перевірка вибраної мови
for (index = 0; index < langInput.length; ++index) {
  langLabel[index].classList.add('visually-hidden');

  if (langInput[index].checked == true) {
      langLabel[index].classList.remove('visually-hidden');
      hash = allLang[index];
    location.href = window.location.pathname + '#' + hash;
    document.documentElement.lang = hash;
      indexInput = index;
  } else {
      langLabel[index].classList.add('visually-hidden');
    }
    
}

// Вибір мови користувачем
form.addEventListener('click', Event => {
  if (indexInput < 2) {
    langInput[indexInput].checked = false;
    langInput[indexInput + 1].checked = true;
    langLabel[indexInput].classList.add('visually-hidden');
    langLabel[indexInput + 1].classList.remove('visually-hidden');
      indexInput = indexInput + 1;
      hash = allLang[indexInput];
  } else if (indexInput == 2) {
    indexInput = 0;
    langInput[2].checked = false;
    langInput[indexInput].checked = true;
    langLabel[2].classList.add('visually-hidden');
      langLabel[indexInput].classList.remove('visually-hidden');
      hash = allLang[0];
    }
    window.location.hash =  '#' + hash;
    location.reload();
});
