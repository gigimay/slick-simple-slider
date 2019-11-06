$(document).on('ready', function() {

  $(".vertical-center").slick({
    dots: true,
    vertical: true,
    centerMode: true,
  });

  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true
  });
});
