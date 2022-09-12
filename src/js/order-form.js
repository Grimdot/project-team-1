// Polyfill for method forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Dropdown

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownItem = dropDownList.querySelectorAll('.dropdown__item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input');
  const keyCode = {
    Up: 38,
    Down: 40,
  };

  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list_visible');
    this.classList.toggle('dropdown__button_active');
  });

  dropDownItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (event) {
      event.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list_visible');
    });
  });

  dropDownList.addEventListener('keydown', onKeyDown);

  function onKeyDown(event) {
    switch (event.keyCode) {
      case keyCode.Down:
        event.preventDefault();
        focusNextItem();
        break;
      case keyCode.Up:
        event.preventDefault();
        focusPreviousItem();
        break;
    }
  }

  function focusNextItem() {
    const item = document.activeElement;
    if (item.nextElementSibling) {
      activate(item.nextElementSibling);
    }
  }

  function focusPreviousItem() {
    const item = document.activeElement;
    if (item.previousElementSibling) {
      activate(item.previousElementSibling);
    }
  }

  function activate(item) {
    dropDownItem.forEach(btn => (btn.tabIndex = -1));
    item.tabIndex = 0;
    item.focus();
  }

  dropDownItem.forEach(function (listItem) {
    listItem.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list_visible');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (event.target !== dropDownBtn) {
      dropDownList.classList.remove('dropdown__list_visible');
      dropDownBtn.classList.remove('dropdown__button_active');
    }
  });

  dropDownBtn.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      dropDownItem.forEach(function (item) {
        item.focus();
      });
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.key === 'Tab') {
      dropDownList.classList.remove('dropdown__list_visible');
      dropDownBtn.classList.remove('dropdown__button_active');
    }
  });
});

// Add file

document.querySelector('.add-file__input').addEventListener('change', function (event) {
  const addFileTitle = document.querySelector('.add-file__title');
  const evenTarget = event.target.files;
  const oneFile = addFileTitle.innerText =
    'Додані файли: ' + evenTarget[0].name;
  const secondFile = addFileTitle.innerText =
      oneFile + '; ' + evenTarget[1].name;

  if (evenTarget.length === 0) {
    return
  }
  if (evenTarget.length === 1) {
    oneFile 
  }

  if (evenTarget.length === 2) {
    secondFile
  }
  
  if (evenTarget.length === 3) {
    addFileTitle.innerText =
      secondFile + '; ' + evenTarget[2].name;
  }

  if (evenTarget.length > 3) {
    addFileTitle.innerText = 'Нам достатньо трьох файлів :)';
  }

  });

