/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
setTimeout(function () {
  $('.page__body').addClass('page__body--visible');
}, 700);

var sliderCheck = function sliderCheck() {
  if ($('.benefits-list-wrapper').length > 0 && $(window).width() <= 480) {
    var benefitsMobileSlider = new Swiper('.benefits-list-wrapper', {
      slidesPerView: 1,
      spaceBetween: 50,
      slideClass: 'benefits-item',
      wrapperClass: 'benefits-list'
    });
  }
};

$(document).ready(function () {
  new WOW().init();
  sliderCheck();
  $(window).resize(function () {
    sliderCheck();
  }); // Hamburger menu

  $('button.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.header-menu').toggleClass('header-menu--open');
  }); // 

  $('.anchor').on('click', function () {
    var href = $(this).attr('href');
    $('.header-menu').removeClass('header-menu--open');
    $('button.hamburger').removeClass('is-active');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, {
      duration: 200 // по умолчанию «400» 

    });
    return false;
  });

  if ($('.home-list').length > 0) {
    var homeList = new Swiper('.home-list', {
      slidesPerView: 1,
      spaceBetween: 100,
      slideClass: 'home-list-slide',
      wrapperClass: 'home-list-slider',
      navigation: {
        nextEl: '.home-list-next',
        prevEl: '.home-list-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      nextButton: '.home-list-next',
      prevButton: '.home-list-prev'
    });
  }

  if ($('.information-slider__wrapper').length > 0) {
    var informationSlider = new Swiper('.information-slider__wrapper', {
      slidesPerView: 1,
      spaceBetween: 100,
      slideClass: 'information-slide',
      wrapperClass: 'information-slider',
      navigation: {
        nextEl: '.information-slider-next',
        prevEl: '.information-slider-prev'
      },
      nextButton: '.information-slider-next',
      prevButton: '.information-slider-prev',
      pagination: {
        el: '.information-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  if ($('.articles__inner').length > 0) {
    var _informationSlider = new Swiper('.articles__inner', {
      slidesPerView: 3,
      spaceBetween: 70,
      slideClass: 'articles-slide',
      wrapperClass: 'articles-slider',
      navigation: {
        nextEl: '.articles-next',
        prevEl: '.articles-prev'
      },
      nextButton: '.articles-next',
      prevButton: '.articles-prev',
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        780: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          spaceBetween: 70
        }
      }
    });
  }

  if ($('.cottege-page .main-screen').length > 0) {
    var _informationSlider2 = new Swiper('.cottege-page .main-screen', {
      pagination: {
        el: '.cottege-pagination',
        type: 'bullets',
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 30,
      slideClass: 'cottege-slide',
      wrapperClass: 'cottege-slider',
      navigation: {
        nextEl: '.cottege-next',
        prevEl: '.cottege-prev'
      },
      nextButton: '.cottege-next',
      prevButton: '.cottege-prev',
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });
  }

  $('[href="#callback"]').on('click', function (e) {
    e.preventDefault();
    $('.popup-callback').toggleClass('popup--show');
  });
  $('[href="#popup-close"]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.popup').removeClass('popup--show');
  });
  $('[href="#phone-menu"]').on('click', function (e) {
    e.preventDefault();
    $('.menu-phones').toggleClass('menu-phones--active');
  });
  $('[href="#phones__menu-close"]').on('click', function (e) {
    e.preventDefault();
    $('.menu-phones').removeClass('menu-phones--active');
  });
  $('[href="#show-more"]').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.descr').children('p').toggleClass('opened');
    $(this).hide(300);
  });
  $('[href="#house-popup"]').on('click', function () {
    $('.popup-house').addClass('popup--show');
  });
  $('.list-type').on('click', function () {
    $('.products-list').toggleClass('products-list--grid-v2');
  });
  $('[href="#view-form"]').on('click', function () {
    $('.popup-view').addClass('popup--show');
  });
  $('.timepicker-list ul li').on('click', function () {
    var time = $(this).text();
    $('.timepicker').val(time);
    $('.timepicker-list').removeClass('timepicker-list--active');
  });
  $('.timepicker').on('click', function () {
    $('.timepicker-list').toggleClass('timepicker-list--active');
  });
  $(function () {
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: new Date($('#hiddendelivdate').val()),
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    });
  });
});
/******/ })()
;
//# sourceMappingURL=main.js.map