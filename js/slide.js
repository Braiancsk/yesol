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

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlide:false,
    autoplay: false,
    breakpoints: {

      1400: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      880: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });  
 
 