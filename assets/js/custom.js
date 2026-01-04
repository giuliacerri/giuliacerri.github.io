// Custom JavaScript overrides
$(document).ready(function() {
  // Reinitialize service slider if it exists
  if ($('.service__slider').length) {
    // Destroy existing slick if already initialized
    if ($('.service__slider').hasClass('slick-initialized')) {
      $('.service__slider').slick('unslick');
    }
    
    // Reinitialize with proper settings
    $('.service__slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }
});
