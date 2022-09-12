(() => {
  const menuBtn = document.querySelector('[data-menu-button]');

  const menuRef = document.querySelector('[data-menu]');

  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  let indexMenu = 0;

  menuBtn.addEventListener('click', Event => {
    const open = document.querySelector('.icon-cross');
    const close = document.querySelector('.icon-menu');
    if (indexMenu == 0) {
      indexMenu = 1;
      menuRef.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      main.style.opacity = '0';
      footer.style.opacity = '0';
      open.style.display = 'block';
      close.style.display = 'none';
    } else {
      indexMenu = 0;
      menuRef.classList.remove('is-open');
      document.body.style.overflow = 'visible';
      main.style.opacity = '1';
      footer.style.opacity = '1';
      open.style.display = 'none';
      close.style.display = 'block';
    }
  });
})();
