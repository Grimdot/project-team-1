window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),document.querySelectorAll(".dropdown").forEach((function(e){const t=e.querySelector(".dropdown__button"),n=e.querySelector(".dropdown__list"),o=n.querySelectorAll(".dropdown__item"),i=e.querySelector(".dropdown__input"),s=38,r=40;function c(e){o.forEach((e=>e.tabIndex=-1)),e.tabIndex=0,e.focus()}t.addEventListener("click",(function(){n.classList.toggle("dropdown__list_visible"),this.classList.toggle("dropdown__button_active")})),o.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),t.innerText=this.innerText,t.focus(),i.value=this.dataset.value,n.classList.remove("dropdown__list_visible")}))})),n.addEventListener("keydown",(function(e){switch(e.keyCode){case r:e.preventDefault(),function(){const e=document.activeElement;e.nextElementSibling&&c(e.nextElementSibling)}();break;case s:e.preventDefault(),function(){const e=document.activeElement;e.previousElementSibling&&c(e.previousElementSibling)}()}})),o.forEach((function(e){e.addEventListener("keydown",(function(e){"Enter"===e.key&&(t.innerText=this.innerText,i.value=this.dataset.value,n.classList.remove("dropdown__list_visible"))}))})),document.addEventListener("click",(function(e){e.target!==t&&(n.classList.remove("dropdown__list_visible"),t.classList.remove("dropdown__button_active"))})),t.addEventListener("keydown",(function(e){"Enter"===e.key&&o.forEach((function(e){e.focus()}))})),document.addEventListener("keydown",(function(e){"Escape"!==e.key&&"Tab"!==e.key||(n.classList.remove("dropdown__list_visible"),t.classList.remove("dropdown__button_active"))}))})),document.querySelector(".add-file__input").addEventListener("change",(function(e){const t=document.querySelector(".add-file__title"),n=e.target.files,o=t.innerText="Додані файли: "+n[0].name,i=t.innerText=o+"; "+n[1].name;0!==n.length&&(n.length,n.length,3===n.length&&(t.innerText=i+"; "+n[2].name),n.length>3&&(t.innerText="Нам достатньо трьох файлів :)"))}));
//# sourceMappingURL=contacts.07592f6b.js.map
