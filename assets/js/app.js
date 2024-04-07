function initPhoneMask() {
  const phoneFields = document.querySelectorAll('input[type="tel"]');
  const maskOptions = {
    mask: '+{7} (000) 000 00-00'
  };

  phoneFields.forEach((phoneField) => {
    IMask(phoneField, maskOptions);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const jaw = document.querySelector('.jaw');

  const commentsSliderCheck = document.querySelectorAll('.swiper-comments');
  if (commentsSliderCheck.length > 0) {
    commentsSliderCheck.forEach((slider) => {
      const swiper_comments = new Swiper('.swiper-comments', {
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
        pagination: {
          el: '.comments--pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
          850: {
            slidesPerView: 2,
          }
        }
      });
    });
  }

  const gallerySliderCheck = document.querySelectorAll('.swiper-gallery');
  if (gallerySliderCheck.length > 0) {
    gallerySliderCheck.forEach((slider) => {
      const swiper_gallery = new Swiper('.swiper-gallery', {
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
        pagination: {
          el: '.gallery--pagination',
          clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 24,
        breakpoints: {
          1300: {
            slidesPerView: 3,

          },
          850: {
            slidesPerView: 2,
          }
        },
      });
    });
  }

  const doctorSliderCheck = document.querySelectorAll('.swiper-doctor');
  if (doctorSliderCheck.length > 0) {
    doctorSliderCheck.forEach((slider) => {
      const swiper_doctor = new Swiper('.swiper-doctor', {
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3',
        },
        spaceBetween: 25,
        breakpoints: {
          1300: {
            slidesPerView: 5,
          },
          1000: {
            slidesPerView: 4,
          },
          850: {
            slidesPerView: 3,
          },
          560: {
            slidesPerView: 2.2,
          },
          490: {
            slidesPerView: 1.5,
          },
          395: {
            slidesPerView: 1.3,
          },
        },
      });
    });
  }

  const certificateSliderCheck = document.querySelectorAll('.swiper-certificate');
  if (certificateSliderCheck.length > 0) {
    certificateSliderCheck.forEach((slider) => {
      const swiper_certificate = new Swiper('.swiper-certificate', {
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next4',
          prevEl: '.swiper-button-prev4',
        },
        slidesPerView: 1.35,
        spaceBetween: 10,
        breakpoints: {
          1200: {
            slidesPerView: 6,
            spaceBetween: 24,
          },
          1000: {
            slidesPerView: 5,
          },
          850: {
            slidesPerView: 4,
          },
          560: {
            slidesPerView: 3,
          },
          460: {
            slidesPerView: 2,
          },
        }
      });
    });
  }

  const panelChech = document.querySelectorAll('.panel-title');
  if (panelChech.length > 0) {
    var panelItem = document.querySelectorAll('.panel-title'),
      bodyItem = document.querySelectorAll('.panel-body');
    panelItem.__proto__.forEach = [].__proto__.forEach;

    panelItem.forEach(function (item, i, panelItem) {
      item.addEventListener('click', function (e) {
        this.classList.toggle('panel-active');
        this.nextElementSibling.classList.toggle('active');
      });
    });
  }

  // menu mobile
  const header = document.querySelector('.header');
  const contentBurger = document.querySelector('.header__bottom-content--burger');

  document.querySelector('.burger__menu').addEventListener('click', function () {
    document.querySelector('.burger__menu').classList.toggle("active");
    document.body.classList.toggle("active__burger");
    contentBurger.classList.toggle("active");
  });

  if (window.innerWidth <= 950) {
    contentBurger.style.height = window.screen.height + jaw.scrollHeight - header.clientHeight + 'px';
    contentBurger.style.paddingBottom = jaw.scrollHeight + header.clientHeight + 150 + 'px';
  } else {
    contentBurger.style.height = 'initial';
    contentBurger.style.paddingBottom = 'initial';
  }


  window.addEventListener('resize', () => {
    if (window.innerWidth <= 950) {
      contentBurger.style.height = window.screen.height + jaw.scrollHeight - header.clientHeight + 'px';
      contentBurger.style.paddingBottom = jaw.scrollHeight + header.clientHeight + 150 + 'px';
    } else {
      contentBurger.style.height = 'initial';
      contentBurger.style.paddingBottom = 'initial';
    }
  });

  // const elementShowCheck = document.querySelectorAll('.element-animation');
  // if (elementShowCheck.length > 0) {
  //   function onEntry(e) {
  //     e.forEach(e => {
  //       e.isIntersecting && e.target.classList.add("element-show")
  //     }
  //     )
  //   }
  //   let options = {
  //     threshold: [.5]
  //   }
  //     , observer = new IntersectionObserver(onEntry, options)
  //     , elements = document.querySelectorAll(".element-animation");
  //   for (let e of elements)
  //     observer.observe(e);
  // }

  let header__bottom = document.getElementById('#header__bottom');
  window.addEventListener('scroll', function () {
    if (window.scrollY > jaw.offsetHeight) {
      header__bottom.classList.add("fixed");
    } else {
      header__bottom.classList.remove("fixed");
    }
  });

  let popupBg = document.querySelector('.popup__bg');
  if (popupBg != null) {
    let popup = document.querySelector('.popup');
    let openPopupButtons = document.querySelectorAll('.open-popup');
    let closePopupButton = document.querySelector('.close-popup');
    openPopupButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
      })
    });
    closePopupButton.addEventListener('click', () => {
      popupBg.classList.remove('active');
      popup.classList.remove('active');
    });
    document.addEventListener('click', (e) => {
      if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
      }
    });
  }

  let popupBg_second = document.querySelector('.popup__bg-second');
  if (popupBg_second != null) {
    let popup_second = document.querySelector('.popup-second');
    let openPopupButtons_second = document.querySelectorAll('.open-popup-second');
    let closePopupButton_second = document.querySelector('.close-popup-second');
    openPopupButtons_second.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg_second.classList.add('active');
        popup_second.classList.add('active');
      })
    });
    closePopupButton_second.addEventListener('click', () => {
      popupBg_second.classList.remove('active');
      popup_second.classList.remove('active');
    });
    document.addEventListener('click', (e) => {
      if (e.target === popupBg_second) {
        popupBg_second.classList.remove('active');
        popup_second.classList.remove('active');
      }
    });

  }

  let popupBg_thrid = document.querySelector('.popup__bg-thrid');
  if (popupBg_thrid != null) {
    let popup_thrid = document.querySelector('.popup-thrid');
    let openPopupButtons_thrid = document.querySelectorAll('.open-popup-thrid');
    let closePopupButton_thrid = document.querySelector('.close-popup-thrid');
    let title_popup = document.querySelector('.title-popup');
    openPopupButtons_thrid.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        title_popup.innerHTML = button.id;
        popupBg_thrid.classList.add('active');
        popup_thrid.classList.add('active');
      })
    });
    closePopupButton_thrid.addEventListener('click', () => {
      popupBg_thrid.classList.remove('active');
      popup_thrid.classList.remove('active');
    });
    document.addEventListener('click', (e) => {
      if (e.target === popupBg_thrid) {
        popupBg_thrid.classList.remove('active');
        popup_thrid.classList.remove('active');
      }
    });

  }


  const anchors = document.querySelectorAll('.scroll-to')
  if (anchors != null) {
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
  }

  initPhoneMask();
});