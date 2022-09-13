    for (let key in langArr) {
      document.querySelector(key).innerHTML =
            langArr[key][hash];
    }