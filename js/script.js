'use strict';

var menuBtn = document.querySelector('.main-nav__btn-wrapper');
var navList = document.querySelector('.main-nav__list');

// функция открытия/закрытия меню навигации
var menuOpen = function() {
  menuBtn.classList.toggle('close');
  navList.classList.toggle('open');
}

menuBtn.addEventListener('click', function() {
  menuOpen();
});


var template = document.querySelector('#template').content;

var templatePhoto = template.querySelector('.promo__img');
var photoBox = document.querySelector('.promo__photo-wrapper');

var quantity = 7;

// Получаем фрагмент
var fragment = document.createDocumentFragment();

var genArray = function(quantity) {
  var photos = [];

  for (var i = 0; i < quantity; i++) {
    photos[i] = {
      url: 'img/photo-' + (i+1) + '.jpg'
    }
  }
  return photos;
}

var createPhoto = function(object){
  var element = templatePhoto.cloneNode();

  element.src = object.url;
  element.classList.add('promo__img--left');

  return element;
}

var photoBoxClone = function() {
  var element = photoBox.cloneNode(true);
  element.classList.remove('promo__photo-wrapper--left');
  element.classList.add('promo__photo-wrapper--right');

  var imgs = element.querySelectorAll('.promo__img');
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.remove('promo__img--left');
    imgs[i].classList.add('promo__img--right');
  }


  document.querySelector('.promo__photo').appendChild(element);
  return element;
}

var addPhotos = function(array) {
  for (var i = 0; i<quantity; i++) {
    fragment.appendChild(createPhoto(array[i]));
  }
  photoBox.appendChild(fragment);
  photoBoxClone();
}

var photos = genArray(quantity);
addPhotos(photos);


var img = document.querySelectorAll('.promo__img');
var arrowUp = document.querySelector('.aside__arrow--up');
var arrowDown = document.querySelector('.aside__arrow--down');

var countShift = 0;
var countClick = 0;

arrowUp.addEventListener('click',function(){
  if(countClick<6) {
    countClick++;
    countShift+=100;

    for (var i = 0; i < img.length; i++) {
      img[i].style.transform = 'translateX(-' + countShift +'%)';
    };
  } else return;
});

arrowDown.addEventListener('click',function(){
  if(countClick >0) {
    countClick--;
    countShift-=100;

    for (var i = 0; i < img.length; i++) {
      img[i].style.transform = 'translateX(-' + countShift +'%)';
    };
  }else return;
});
