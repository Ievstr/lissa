/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/clients/clients.js"
/*!***********************************************!*\
  !*** ./src/blocks/modules/clients/clients.js ***!
  \***********************************************/
() {

$(function () {
  if ($('.js-clients-ticker').length) {
    var ticker = $('.js-clients-ticker');
    var tickerContent = $('.clients__ticker-wrapper');
    var tickerItems = tickerContent.find('.clients__ticker-item');
    var tickerCount = tickerItems.length;
    tickerContent.append(tickerItems.clone());
    var tl;
    var mm = gsap.matchMedia();
    var isDesktopCheck = false;
    mm.add({
      isDesktop: '(min-width: 1280px)',
      isTablet: '(min-width: 768px) and (max-width: 1279px)',
      isMobile: '(max-width: 767px)'
    }, function (context) {
      var _context$conditions = context.conditions,
        isDesktop = _context$conditions.isDesktop,
        isTablet = _context$conditions.isTablet,
        isMobile = _context$conditions.isMobile;
      isDesktopCheck = isDesktop;
      var tickerWidth = 0;
      tickerItems.each(function () {
        tickerWidth += $(this).outerWidth(true);
      });
      var currentDuration = tickerCount * 5;
      // if (isTablet) currentDuration = tickerCount * 4;
      // if (isMobile) currentDuration = tickerCount * 3;

      tl = gsap.to(tickerContent, {
        x: -tickerWidth,
        duration: currentDuration,
        ease: 'none',
        repeat: -1
      });
    });
    ticker.hover(function () {
      if (!tl || !isDesktopCheck) return;
      gsap.to(tl, {
        timeScale: 0,
        duration: 0.5,
        ease: 'power1.out'
      });
    }, function () {
      if (!tl || !isDesktopCheck) return;
      gsap.to(tl, {
        timeScale: 1,
        duration: 0.5,
        ease: 'power1.out'
      });
    });
  }
});

/***/ },

/***/ "./src/blocks/modules/faq-item/faq-item.js"
/*!*************************************************!*\
  !*** ./src/blocks/modules/faq-item/faq-item.js ***!
  \*************************************************/
() {

$(function () {
  $('.js-faq-item').click(function () {
    $(this).toggleClass('active').next().slideToggle();
  });
});

/***/ },

/***/ "./src/blocks/modules/file/file.js"
/*!*****************************************!*\
  !*** ./src/blocks/modules/file/file.js ***!
  \*****************************************/
() {

$(function () {
  var filesAll = document.querySelectorAll('.js-file');
  if (filesAll) {
    filesAll.forEach(function (item) {
      var fileInput = item.querySelector('.js-file-input');
      var fileDocument = item.querySelector('.js-file-document');
      var dataTransfer = new DataTransfer();
      function createItemHTML(fileName) {
        return "\n\t\t\t\t\t<div class=\"file__document-item\">\n\t\t\t\t\t\t<div class=\"file__document-item-title\">".concat(fileName, "</div>\n\t\t\t\t\t\t<button type=\"button\" class=\"file__document-item-delete js-file-document-delete\" data-delete=\"").concat(fileName, "\" aria-label=\"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B\">\n\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\">\n\t\t\t\t\t\t\t\t<path d=\"M9.42857 8L13 11.5714L11.5714 13L8 9.42857L4.42857 13L3 11.5714L6.57143 8L3 4.42857L4.42857 3L8 6.57143L11.5714 3L13 4.42857L9.42857 8Z\"/>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t");
      }
      function updateFiles() {
        fileDocument.innerHTML = '';
        Array.from(dataTransfer.files).forEach(function (file) {
          fileDocument.insertAdjacentHTML('beforeend', createItemHTML(file.name));
        });
        fileInput.files = dataTransfer.files;
      }
      fileInput.addEventListener('change', function (e) {
        Array.from(e.target.files).forEach(function (file) {
          var isExist = Array.from(dataTransfer.files).some(function (f) {
            return f.name === file.name && f.size === file.size;
          });
          if (!isExist) {
            dataTransfer.items.add(file);
          }
        });
        updateFiles();
      });
      item.addEventListener('click', function (e) {
        var deleteButton = e.target.closest('.js-file-document-delete');
        if (!deleteButton) return;
        var fileNameToDelete = deleteButton.dataset["delete"];
        var fileIndex = Array.from(dataTransfer.files).findIndex(function (file) {
          return file.name === fileNameToDelete;
        });
        if (fileIndex !== -1) {
          dataTransfer.items.remove(fileIndex);
        }
        updateFiles();
      });
    });
  }
});

/***/ },

/***/ "./src/blocks/modules/form/form.js"
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
() {

$(function () {
  var $phone = $('input[type="tel"]');
  var regex = '\\+7 \\([0-6,9]{1}[0-9]{2}\\) [0-9]{3}–[0-9]{2}–[0-9]{2}';
  $phone.inputmask({
    regex: regex
  });
});

/***/ },

/***/ "./src/blocks/modules/gallery/gallery.js"
/*!***********************************************!*\
  !*** ./src/blocks/modules/gallery/gallery.js ***!
  \***********************************************/
() {

$(function () {
  if ($(window).width() > 1279) {
    $('.gallery__thumbs-item, .gallery__pagination-bullet').hover(function () {
      var index = $(this).index();
      // $(this).closest('.gallery').find('.gallery__item').removeClass('active').eq(index).addClass('active');
      $(this).closest('.gallery').find('.gallery__item').eq(index).addClass('active');
    }, function () {
      $(this).closest('.gallery').find('.gallery__item').removeClass('active');
    });
  }
});

/***/ },

/***/ "./src/blocks/modules/header/header.js"
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
() {

$(function () {
  var scrollWidth = window.innerWidth - $('body')[0].offsetWidth + 'px';
  var header = $('.js-header');
  var lastScroll;
  function showScroll() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      $('body').css('padding-right', '');
      // header.css('padding-right', '');
      header.css('right', '');
    }
    $('body').removeClass('o-hidden');
    window.lenis.start();
  }
  function hideScroll() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      $('body').css('padding-right', scrollWidth);
      // header.css('padding-right', scrollWidth);
      header.css('right', scrollWidth);
    }
    $('body').addClass('o-hidden');
    window.lenis.stop();
  }
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    lastScroll > currentScroll ? header.addClass('header_scroll_up') : header.removeClass('header_scroll_up');
    currentScroll > 0 ? header.addClass('header_scroll') : header.removeClass('header_scroll header_scroll_up');
    lastScroll = currentScroll;
  });
  $('.js-search-button').click(function () {
    header.addClass('header_overlay');
    $(this).next().slideDown();
    $('.js-burger').removeClass('burger_active');
    $('.header__content').removeClass('header__content_active');
    // $('body').addClass('o-hidden');
    hideScroll();
  });
  $('.js-search-close').click(function () {
    header.removeClass('header_overlay');
    $(this).closest('.header__search-content').slideUp();
    // $('body').removeClass('o-hidden');
    showScroll();
  });
  $(document).mousedown(function (e) {
    var targetBlock = $('.header_overlay');
    var search = $('.header__search-content');
    if (header.hasClass('header_overlay') && search.is(':visible') && targetBlock.has(e.target).length === 0) {
      header.removeClass('header_overlay');
      search.slideUp();
      showScroll();
    }
  });
  $('.js-burger').click(function () {
    $(this).toggleClass('burger_active');
    $('.header__content').toggleClass('header__content_active');
    if ($(this).hasClass('burger_active')) {
      header.addClass('header_overlay');
      hideScroll();
    } else {
      header.removeClass('header_overlay');
      showScroll();
    }
  });
});

/***/ },

/***/ "./src/blocks/modules/hero/hero.js"
/*!*****************************************!*\
  !*** ./src/blocks/modules/hero/hero.js ***!
  \*****************************************/
() {

$(function () {
  if ($('.hero').length) {
    var changeSlide = function changeSlide(index) {
      if (isAnimating || index === prevIndex) return;
      isAnimating = true;
      resetAutoplay();
      startAutoplay(index);
      var prevText = textItem.eq(prevIndex);
      var prevTitle = prevText.find('.hero__title');
      var prevDescription = prevText.find('.hero__description');
      var text = textItem.eq(index);
      var title = text.find('.hero__title');
      var description = text.find('.hero__description');
      var prevGalleryItem = gallery.filter("[data-gallery='".concat(prevIndex, "']"));
      var galleryItem = gallery.filter("[data-gallery='".concat(index, "']"));
      var prevGalleryThumbsItem = galleryThumbs.filter("[data-gallery='".concat(prevIndex, "']"));
      var galleryThumbsItem = galleryThumbs.filter("[data-gallery='".concat(index, "']"));
      var targetSvg = svgTargets.eq(index).attr('d');
      tabItem.removeClass('active').eq(index).addClass('active');
      var tl = gsap.timeline({
        onComplete: function onComplete() {
          prevIndex = index;
          isAnimating = false;

          // prevSplit.revert();
          if (isDesktop && prevSplit) {
            prevSplit.revert();
          }
        }
      });
      var prevSplit = null;
      var split = null;
      if (isDesktop) {
        prevSplit = SplitText.create(prevTitle[0], {
          type: 'chars'
        });
      }
      tl.fromTo(prevTitle[0], {
        duration: .5,
        y: '0%'
      }, {
        y: '-100%'
      });
      // tl.to(prevTitle[0], {
      //   duration: .5,
      //   y: '-100%',
      // })
      if (isDesktop) {
        tl.to(prevSplit.chars, {
          duration: .5,
          y: '-25%',
          stagger: {
            each: 0.05,
            from: 'end'
          }
        }, 0);
      }
      tl.to(prevDescription, {
        duration: .25,
        autoAlpha: 0
      }, '<').add(function () {
        prevText.removeClass('active');
      }, .5);
      text.addClass('active');
      if (isDesktop) {
        split = SplitText.create(title[0], {
          type: 'chars'
        });
      }
      tl.fromTo(title[0], {
        duration: .5,
        y: '100%'
      }, {
        y: '0%'
      }, 0);
      // tl.from(title[0], {
      //   duration: .5,
      //   y: '100%',
      // }, 0)
      if (isDesktop) {
        tl.from(split.chars, {
          duration: .5,
          y: '25%',
          stagger: 0.05
        }, 0);
      }
      tl.fromTo(description, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        duration: .25
      }, '>-.5');
      tl.set([prevGalleryItem, prevGalleryThumbsItem], {
        display: 'none'
      }, 0).set([galleryItem, galleryThumbsItem], {
        display: 'block'
      }, 0);
      tl.to(svgItem, {
        morphSVG: targetSvg,
        duration: tl.duration()
      }, 0);
      var tabs = $('.hero__tabs');
      var activeTab = tabItem.eq(index);
      if (activeTab.length) {
        var tabsWidth = tabs.width();
        var tabWidth = activeTab.outerWidth();
        var tabLeft = activeTab.position().left + tabs.scrollLeft();
        var scrollToX = tabLeft - tabsWidth / 2 + tabWidth / 2;
        tabs.stop().animate({
          scrollLeft: scrollToX
        }, 0);
      }
    };
    var startAutoplay = function startAutoplay(i) {
      if (autoplayAnimation) return;
      var targetIndex = i !== undefined ? i : prevIndex;
      var activeProgress = tabItem.eq(targetIndex).find('.hero__tab-progress');
      autoplayAnimation = gsap.to(activeProgress, {
        width: '100%',
        duration: autoplayDelay,
        ease: 'none',
        onComplete: function onComplete() {
          var nextIndex = prevIndex + 1;
          if (nextIndex >= tabItem.length) {
            nextIndex = 0;
          }
          changeSlide(nextIndex);
        }
      });
    };
    var resetAutoplay = function resetAutoplay() {
      if (autoplayAnimation) {
        autoplayAnimation.kill();
        autoplayAnimation = null;
      }
      gsap.set('.hero__tab-progress', {
        width: '0%'
      });
    };
    // gsap.registerPlugin(SplitText, MorphSVGPlugin);

    var prevIndex = 0;
    var isAnimating = false;
    var autoplayAnimation = null;
    var autoplayDelay = 7;
    var tabItem = $('.hero__tab');
    var textItem = $('.hero__text');
    var gallery = $('.hero').find('.gallery__item');
    var galleryThumbs = $('.hero').find('.gallery__thumbs-item');
    var svgItem = $('.hero__decor-svg');
    var svgTargets = $('.hero__decor-target');
    var mm = gsap.matchMedia();
    var isDesktop = true;
    mm.add({
      isDesktop: '(min-width: 768px)',
      isMobile: '(max-width: 767px)'
    }, function (context) {
      isDesktop = context.conditions.isDesktop;
      var currentIndex = $('.hero__tab.active').index();
      if (currentIndex !== -1) {
        prevIndex = currentIndex;
      }
      isAnimating = false;
      textItem.removeClass('active');
      textItem.eq(prevIndex).addClass('active');
      gsap.set('.hero__title', {
        clearProps: 'all'
      });
      galleryThumbs.css('display', 'none');
      galleryThumbs.filter("[data-gallery='".concat(prevIndex, "']")).css('display', 'block');
      var targetSvg = svgTargets.eq(prevIndex).attr('d');
      gsap.set(svgItem, {
        morphSVG: targetSvg
      });
      resetAutoplay();
      startAutoplay(prevIndex);
    });
    tabItem.click(function () {
      changeSlide($(this).index());
    });
    startAutoplay();
  }
});

/***/ },

/***/ "./src/blocks/modules/history/history.js"
/*!***********************************************!*\
  !*** ./src/blocks/modules/history/history.js ***!
  \***********************************************/
() {

$(function () {
  if ($('.js-history').length) {
    // gsap.registerPlugin(ScrollTrigger);

    var section = $('.js-history');
    var title = $('.js-history-title');
    var cards = $('.js-history-item');
    var mediaItem = $('.js-history-media-item');
    var mm = gsap.matchMedia();
    mm.add('(min-width: 1280px)', function () {
      gsap.set(cards, {
        y: '100vh'
      });
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: function end() {
            return "+=".concat(cards.length * 100, "%");
          },
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
      tl.from(title, {
        opacity: 1,
        color: '#EB432F',
        duration: .5
      });
      cards.each(function (index, card) {
        tl.to(card, {
          y: 0,
          duration: 1
        }, index === 0 ? '<-.5' : null);
        if (index > 0) {
          tl.to(cards.slice(0, index), {
            y: function y(i) {
              return (index - i) * -4;
            },
            scaleX: function scaleX(i) {
              return 1 - (index - i) * 0.025;
            },
            backgroundColor: '#CED0DB',
            duration: .5
          }, '>-.5');
        }
      });
      tl.from(mediaItem, {
        autoAlpha: 0,
        duration: .5,
        stagger: .15
      });
    });
  }
});

/***/ },

/***/ "./src/blocks/modules/marquee/marquee.js"
/*!***********************************************!*\
  !*** ./src/blocks/modules/marquee/marquee.js ***!
  \***********************************************/
() {

$(function () {
  if ($('.js-marquee').length) {
    $('.js-marquee').each(function () {
      var title = $(this);
      var titleText = title.text().trim();
      var mm = gsap.matchMedia();
      mm.add('(max-width: 767px)', function () {
        title.addClass('marquee');
        var titleTextRepeated = '';
        for (var i = 0; i < 5; i++) {
          titleTextRepeated += "<span aria-hidden=\"true\">".concat(titleText, "</span>");
        }
        title.attr('aria-label', titleText).html(titleTextRepeated);
        var spans = title.find('span');
        var stepWidth = spans.eq(0).outerWidth(true);
        gsap.to(spans, {
          x: -stepWidth,
          duration: 5,
          ease: 'none',
          repeat: -1
        });
        return function () {
          title.removeClass('marquee').removeAttr('aria-label').html(titleText);
        };
      });
    });
  }
});

/***/ },

/***/ "./src/blocks/modules/modal/modal.js"
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
() {

$(function () {
  var header = $('.js-header');
  var scrollWidth = window.innerWidth - $('body')[0].offsetWidth + 'px';
  function showScroll() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      $('body').css('padding-right', '');
      header.css('right', '');
    }
    $('body').removeClass('o-hidden');
    window.lenis.start();
  }
  function hideScroll() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      $('body').css('padding-right', scrollWidth);
      header.css('right', scrollWidth);
    }
    $('body').addClass('o-hidden');
    window.lenis.stop();
  }
  function closeModal() {
    // $('.popup').removeClass('popup_active').find('.popup__content').removeAttr('style');
    $('.popup').removeClass('popup_active').find('.popup__content').css({
      top: '',
      left: '',
      width: '',
      alignSelf: ''
    }).find('.popup__inner').css({
      maxHeight: ''
    });
    showScroll();
    if ($('.js-burger').hasClass('burger_active')) {
      hideScroll();
    }
  }
  $('.js-popup-up').click(function (e) {
    e.preventDefault();
    var modal = $(this).data('target');
    $(modal).addClass('popup_active');
    hideScroll();
  });
  $('.js-popup-close').click(function (e) {
    e.preventDefault();
    closeModal();
  });
  $('.js-popup-tab-item').click(function () {
    $('.js-popup-tab-item').removeClass('popup__tab-item_active');
    $(this).addClass('popup__tab-item_active');
    var data = $(this).data('tab');
    $('.js-popup-tab-block').removeClass('popup__tab-block_active');
    var activeBlock = $(".js-popup-tab-block[data-tab='".concat(data, "']"));
    activeBlock.addClass('popup__tab-block_active');
    var targetForm = activeBlock.find('form').attr('id');
    $('.js-popup-form-bind').attr('form', targetForm);
  });
  $(document).mousedown(function (e) {
    var popupActive = $('.popup_active');
    if (popupActive.length === 0) return;
    var targetBlock = popupActive.find('.popup__wrap');
    if (targetBlock.has(e.target).length === 0) {
      closeModal();
    }
  });
  $(document).keydown(function (e) {
    if ($('.popup').hasClass('popup_active') && e.code === 'Escape') {
      closeModal();
    }
  });
  var buttonChek = null;
  $('.header .js-popup-up').click(function () {
    if (window.innerWidth > 1279) {
      buttonChek = $(this);
      var target = $(this).data('target');
      var rect = this.getBoundingClientRect();
      var top = Math.round(rect.top);
      var left = Math.round(rect.left);
      var width = rect.width;
      $(target).find('.popup__content').css({
        top: top + 'px',
        left: left + 'px',
        width: width + 'px',
        alignSelf: 'flex-start'
      }).find('.popup__inner').css({
        maxHeight: "calc(100vh - ".concat(top * 2, "px)")
      });
    }
  });
  var resizeTimeout;
  $(window).on('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      if (buttonChek && window.innerWidth < 1280) {
        $(buttonChek.data('target')).find('.popup__content').css({
          top: '',
          left: '',
          width: '',
          alignSelf: ''
        }).find('.popup__inner').css({
          maxHeight: ''
        });
        buttonChek = null;
      }
    }, 100);
  });
});

/***/ },

/***/ "./src/blocks/modules/select2/select2.js"
/*!***********************************************!*\
  !*** ./src/blocks/modules/select2/select2.js ***!
  \***********************************************/
() {

$(function () {
  var $select2 = $('.js-select2');
  $select2.select2({
    allowClear: true,
    width: '100%'
  });
  $select2.on('select2:selecting', function (e) {
    $(this).parent().addClass('select2-block_active');
  });
});

/***/ },

/***/ "./src/blocks/modules/services/services.js"
/*!*************************************************!*\
  !*** ./src/blocks/modules/services/services.js ***!
  \*************************************************/
() {

$(function () {
  if ($('.js-services').length) {
    // gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

    var isMobile = function isMobile() {
      return window.innerWidth < 1280;
    };
    var svgItem = $('.services__decor-svg');
    var svgTargets = $('.services__decor-target');
    var gallery = $('.services__media-item');
    var scrollItems = $('.js-services-item');
    scrollItems.each(function (index, element) {
      var targetSvg = svgTargets.eq(index).attr('d');
      var targetGallery = gallery.eq(index);
      ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onToggle: function onToggle(self) {
          if (isMobile()) return;
          if (self.isActive) {
            gsap.to(svgItem, {
              morphSVG: targetSvg,
              duration: 1,
              overwrite: 'auto'
            });
          }
        }
      });
      $(element).hover(function () {
        if (isMobile()) return;
        gsap.to(targetGallery, {
          autoAlpha: 1,
          duration: .3,
          overwrite: 'auto'
        });
      }, function () {
        if (isMobile()) return;
        gsap.to(targetGallery, {
          autoAlpha: 0,
          duration: .3,
          overwrite: 'auto'
        });
      });
    });
    var mm = gsap.matchMedia();
    mm.add({
      isSmallDesktop: '(min-width: 1280px) and (max-width: 1599px)',
      isLargeDesktop: '(min-width: 1600px)'
    }, function (context) {
      var isSmallDesktop = context.conditions.isSmallDesktop;
      var maskXPosition = isSmallDesktop ? '80px' : '115px';
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.services',
          start: 'bottom bottom',
          end: function end() {
            return "+=".concat(window.innerHeight * 2);
          },
          pin: true,
          pinSpacing: false,
          scrub: 1
        }
      });

      // tl.to(svgItem, {
      //   morphSVG: svgTargets.eq(0).attr('d'),
      //   duration: .1,
      //   // overwrite: 'auto'
      // })

      tl.to('.services__decor', {
        autoAlpha: 0,
        duration: .25
      }).from('.services__shape', {
        autoAlpha: 0,
        duration: .25
      }, '>').fromTo('.services__shape', {
        maskSize: '98px',
        maskPosition: "".concat(maskXPosition, " calc(100% - 38px)"),
        duration: 1
      }, {
        maskSize: '100vw',
        maskPosition: '0px calc(100% - 0px)',
        duration: 1
      }).to('.services__shape', {
        maskSize: '400vw',
        maskPosition: '0px 33%',
        duration: .25
      })
      // tl.to({}, { duration: 1.5 });
      .from('.about__img', {
        autoAlpha: 0,
        duration: .1
      }, '<+.1').to('.services', {
        autoAlpha: 0,
        duration: .1
      }).from('.about__inner', {
        autoAlpha: 0,
        duration: .5
      }, '<-.1');
    });
  }
});

/***/ },

/***/ "./src/blocks/modules/slider/slider.js"
/*!*********************************************!*\
  !*** ./src/blocks/modules/slider/slider.js ***!
  \*********************************************/
() {

$(function () {
  var servicesSlider = new Swiper('.js-services-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    breakpoints: {
      1280: {
        enabled: false
      }
    }
  });
  var infoThumbs = new Swiper('.js-info-thumbs', {
    slidesPerView: 'auto',
    watchSlidesProgress: true
  });
  var infoSlider = new Swiper('.js-info-slider', {
    speed: 1200,
    thumbs: {
      swiper: infoThumbs
    }
  });
  var popupInfoThumbs = new Swiper('.js-popup-info-thumbs', {
    slidesPerView: 'auto',
    watchSlidesProgress: true
  });
  var popupInfoSlider = new Swiper('.js-popup-info-slider', {
    speed: 1200,
    thumbs: {
      swiper: popupInfoThumbs
    }
  });
  var tariffsThumbs = new Swiper('.js-tariffs-thumbs', {
    slidesPerView: 'auto',
    watchSlidesProgress: true
  });
  var tariffsSlider = new Swiper('.js-tariffs-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: false
    },
    thumbs: {
      swiper: tariffsThumbs
    }
  });
  var similarSlider = new Swiper('.js-similar-slider', {
    slidesPerView: 'auto',
    speed: 1200,
    breakpoints: {
      1024: {
        slidesPerView: 3
      }
    }
  });
  var journalSlider = new Swiper('.js-journal-slider', {
    speed: 1200,
    loop: true,
    loopedSlides: 3,
    direction: 'vertical',
    effect: 'cards',
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: false
    },
    on: {
      setTranslate: function setTranslate(swiper) {
        swiper.slides.forEach(function (slide) {
          var currentTransform = slide.style.transform;
          currentTransform = currentTransform.replace(/rotateZ\([^)]+\)/g, '').replace(/rotate\([^)]+\)/g, '');
          currentTransform = currentTransform.replace(/translate3d\(([^,]+),\s*([^,]+),\s*([^)]+)\)/g, 'translate3d(0px, $2, $3)');
          slide.style.transform = currentTransform;
        });
      }
    },
    pagination: {
      el: '.journal__slider-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return "\n\t\t\t\t\t<span class=\"".concat(className, "\">\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\">\n\t\t\t\t\t\t\t<path d=\"M7.5 0.5H0.5V14.5H14.5V0.5H7.50178\" stroke=\"#EB432F\"/>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>\n\t\t\t\t");
      }
    }
  });
  $('.js-project-slider').each(function () {
    var slidesCount = $(this).find('.swiper-slide').length;
    if (slidesCount < 3) {
      $(this).addClass('js-project-slider-small project__slider_small');
    }
  });
  var projectSlider = new Swiper('.js-project-slider:not(.js-project-slider-small)', {
    slidesPerView: 1.09,
    spaceBetween: 10,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1601: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
  });
  var projectSliderSmall = new Swiper('.js-project-slider-small', {
    slidesPerView: 1.09,
    spaceBetween: 10,
    speed: 1200,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1280: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 0
      },
      1601: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 0
      }
    }
  });
  var historySlider = new Swiper('.js-history-slider', {
    slidesPerView: 1.07,
    spaceBetween: 10,
    speed: 1200,
    breakpoints: {
      768: {
        enabled: true,
        slidesPerView: 1.66,
        spaceBetween: 20
      },
      1280: {
        enabled: false,
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });
});

/***/ },

/***/ "./src/js/general.js"
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
() {

gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin);
var lenis = new Lenis({
  allowNestedScroll: true
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add(function (time) {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
window.lenis = lenis;

/***/ },

/***/ "./src/js/import/modules.js"
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/hero/hero */ "./src/blocks/modules/hero/hero.js");
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_hero_hero__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slider/slider */ "./src/blocks/modules/slider/slider.js");
/* harmony import */ var _modules_slider_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slider_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/clients/clients */ "./src/blocks/modules/clients/clients.js");
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_clients_clients__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/gallery/gallery */ "./src/blocks/modules/gallery/gallery.js");
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_select2_select2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/select2/select2 */ "./src/blocks/modules/select2/select2.js");
/* harmony import */ var _modules_select2_select2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_select2_select2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_file_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/file/file */ "./src/blocks/modules/file/file.js");
/* harmony import */ var _modules_file_file__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_file_file__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/services/services */ "./src/blocks/modules/services/services.js");
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_services_services__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_marquee_marquee__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/marquee/marquee */ "./src/blocks/modules/marquee/marquee.js");
/* harmony import */ var _modules_marquee_marquee__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_marquee_marquee__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_faq_item_faq_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/faq-item/faq-item */ "./src/blocks/modules/faq-item/faq-item.js");
/* harmony import */ var _modules_faq_item_faq_item__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_item_faq_item__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_history_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/history/history */ "./src/blocks/modules/history/history.js");
/* harmony import */ var _modules_history_history__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_history_history__WEBPACK_IMPORTED_MODULE_12__);














/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.js */ "./src/js/general.js");
/* harmony import */ var _general_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_general_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map