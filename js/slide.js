const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });  
 