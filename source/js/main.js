'use strict';

(function () {
  var header = document.querySelector('header');
  var main = document.querySelector('main');
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
    menuNav.classList.replace('menu__nav--opened', 'menu__nav--closed');
    document.body.style = '';
    menuNav.removeEventListener('click', removeMenu);
  };

  var changeProductClass = function () {
    product.classList.replace('product--opened', 'product--closed');
    if (window.matchMedia('(max-width: 1599px)').matches) {
      document.body.style = '';
    } else {
      header.classList.remove('blur');
      main.classList.remove('blur');
    }
    productClose.removeEventListener('click', changeProductClass);
  }

  var dishItemClickHandler = function (element) {
    element.addEventListener('click', function () {
      product.classList.replace('product--closed', 'product--opened');
      if (window.matchMedia('(max-width: 1599px)').matches) {
        document.body.style.overflow = 'hidden';
      } else {
        header.classList.add('blur');
        main.classList.add('blur');
      }
      productClose.addEventListener('click', changeProductClass);
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
    menuNav.classList.replace('menu__nav--closed', 'menu__nav--opened');
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

  var marginLeft = 0;
  menuNav.addEventListener('wheel', function (evt) {
    if (!window.matchMedia('(max-width: 1599px)').matches) {
      evt.preventDefault();
      if (evt.deltaY > 0 && marginLeft > -250){
        marginLeft -= 50;
      } else if (evt.deltaY < 0 && marginLeft < 0) {
        marginLeft += 50;
      }
      menuList.style.marginLeft = marginLeft + 'px';
    }
  });
  menuNav.addEventListener('mousedown', function (evt) {
    if (evt.which === 2) {
      evt.preventDefault();
    }
  });
  menuNav.addEventListener('selectstart', function (evt) {
    evt.preventDefault();
  });

  menuNav.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 37 || evt.keyCode === 39) {
      evt.preventDefault();
    }
  })
})();
