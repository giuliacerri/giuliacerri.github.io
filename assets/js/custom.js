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

  // Support cards accordion behavior
  $('.support-card').on('click', function() {
    // Remove active class from all cards
    $('.support-card').removeClass('active');
    // Add active class to clicked card
    $(this).addClass('active');
  });

  // Also handle when collapse events trigger
  $('.support-collapse').on('show.bs.collapse', function() {
    var targetId = $(this).attr('id');
    $('.support-card[data-target="#' + targetId + '"]').addClass('active');
  });

  $('.support-collapse').on('hide.bs.collapse', function() {
    var targetId = $(this).attr('id');
    $('.support-card[data-target="#' + targetId + '"]').removeClass('active');
  });
});
