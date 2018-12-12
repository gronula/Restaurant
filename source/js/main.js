'use strict';

(function () {
  var siteNav = document.querySelector('.site-nav');
  var siteNavToggle = siteNav.querySelector('.site-nav__toggle');
  var siteNavList = siteNav.querySelector('.site-nav__list');
  var menuToggle = document.querySelector('.menu__toogle');
  var menuNav = document.querySelector('.menu__nav');
  var menuList = menuNav.querySelector('.menu__list');
  var dishImage = document.querySelectorAll('.dish__image');
  var dishMore = document.querySelectorAll('.dish__more');
  var product = document.querySelector('.product');
  var productClose = product.querySelector('.product__close');

  var removeMenu = function (evt) {
    menuNav.classList.add('menu__nav--hidden');
    document.body.style = '';
    menuNav.removeEventListener('click', removeMenu);
  };

  var changeClass = function () {
    product.classList.replace('product--opened', 'product--closed');
    productClose.removeEventListener('click', changeClass);
  }

  var dishItemClickHandler = function (element) {
    element.addEventListener('click', function () {
      product.classList.replace('product--closed', 'product--opened');
      productClose.addEventListener('click', changeClass);
    })
  };

  siteNavToggle.addEventListener('click', function () {
    if (siteNavToggle.classList.contains('site-nav__toggle--closed')) {
      siteNavList.classList.replace('site-nav__list--closed', 'site-nav__list--opened');
      siteNavToggle.classList.replace('site-nav__toggle--closed', 'site-nav__toggle--opened');
    } else {
      siteNavList.classList.replace('site-nav__list--opened', 'site-nav__list--closed');
      siteNavToggle.classList.replace('site-nav__toggle--opened', 'site-nav__toggle--closed');
    }
  })

  menuToggle.addEventListener('click', function(evt) {
    menuNav.classList.remove('menu__nav--hidden');
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.position = 'fixed';
    document.body.style.overflowY = 'hidden';
    menuNav.addEventListener('click', removeMenu);
  });

  for (var i = 0; i < dishImage.length; i++) {
    dishItemClickHandler(dishImage[i]);
    dishItemClickHandler(dishMore[i]);
  }
})();
