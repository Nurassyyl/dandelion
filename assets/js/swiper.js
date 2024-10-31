let swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    20: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  },
});

let infoSwiper = new Swiper(".infoSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-info",
    prevEl: ".swiper-button-prev-info",
  },
});

let certificateSwiper = new Swiper(".certificateSwiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-certificate",
    prevEl: ".swiper-button-prev-certificate",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 12
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
  },
});

let column_swiper = document.querySelectorAll('.swiper.certificateSwiper .swiper-slide')
column_swiper[2].id = 'opacity';

document.addEventListener("click", (event) => {

  for (let i = 0; i < column_swiper.length; i++) {
    column_swiper[i].id = '';
  }

  for (let i = 0; i < column_swiper.length; i++) {
    for (let value in column_swiper[i].classList) {
      if (column_swiper[i].classList[value] == 'swiper-slide-next') {

        if (i == 9) {
          column_swiper[0].id = 'opacity';
        } else {
          column_swiper[i + 1].id = 'opacity';
        }
      }
    }
  }

});