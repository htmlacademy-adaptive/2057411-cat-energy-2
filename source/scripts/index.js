const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', () => {

  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');

});
