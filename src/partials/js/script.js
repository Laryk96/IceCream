$(document).ready(function () {
  $('.slider-gallery').slick({
    arrows: false,
    autoplay: true,
    autoplayspeed: 9000,
    adaptivHeight: true,
    centermode: true,
    variableWidth: false,
    rows: 1,
    fade: true,
  });
});

$(document).ready(function () {
  $('.custmer-review__list').slick({
    arrows: false,
    dots: true,
  });
});
