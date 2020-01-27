var navMain = document.querySelector('.page-header__manager');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__manager--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__manager--closed')) {
    navMain.classList.remove('page-header__manager--closed');
    navMain.classList.add('page-header__manager--opened');
  } else {
    navMain.classList.add('page-header__manager--closed');
    navMain.classList.remove('page-header__manager--opened');
  }
});