'use strict';

var menuBtn = document.querySelector('.main-nav__btn-wrapper');
var navList = document.querySelector('.main-nav__list');


var menuOpen = function() {
  menuBtn.classList.toggle('close');
  navList.classList.toggle('open');
}

menuBtn.addEventListener('click', function() {
  menuOpen();
});
