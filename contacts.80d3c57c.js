var langInput=Array.from(document.querySelectorAll(".lang__input")),langLabel=Array.from(document.querySelectorAll(".lang__label")),form=document.querySelector(".lang"),allLang=["uk","ru","en"],indexInput=0,hash=window.location.hash;for(hash=hash.substr(1),index=0;index<allLang.length;++index)hash==allLang[index]?(langInput[index].checked="true",window.location.hash="#"+hash):window.location.hash="#ua";for(index=0;index<langInput.length;++index)langLabel[index].classList.add("visually-hidden"),1==langInput[index].checked?(langLabel[index].classList.remove("visually-hidden"),hash=allLang[index],location.href=window.location.pathname+"#"+hash,document.documentElement.lang=hash,indexInput=index):langLabel[index].classList.add("visually-hidden");form.addEventListener("click",(function(n){indexInput<2?(langInput[indexInput].checked=!1,langInput[indexInput+1].checked=!0,langLabel[indexInput].classList.add("visually-hidden"),langLabel[indexInput+1].classList.remove("visually-hidden"),hash=allLang[indexInput+=1]):2==indexInput&&(indexInput=0,langInput[2].checked=!1,langInput[indexInput].checked=!0,langLabel[2].classList.add("visually-hidden"),langLabel[indexInput].classList.remove("visually-hidden"),hash=allLang[0]),window.location.hash="#"+hash,location.reload()}));
//# sourceMappingURL=contacts.80d3c57c.js.map