$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    pauseOnFocus:false,
    arrows:true,
    prevArrow:".left",
    nextArrow:".right"
  });
$('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    arrows:true,
    prevArrow:".service-left",
    nextArrow:".service-right",
    rows:0,
    vertical:true,
    centerMode:true,
    centerPadding: "0px",
    responsive: [
      {
          breakpoint: 999,
          settings: "slick"
      },
      {
          breakpoint: 576,
           settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  autoplay:false,
                  dots: true
              }
      }
  ]
  });
 
$('.team-image-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical:true,
  centerMode:true,
  centerPadding: "0px",
  pauseOnHover:false,
  pauseOnFocus:false,
  arrows:true,
  prevArrow:".team-left",
  nextArrow:".team-right",
  asNavFor: '.team-text-slider'
});
$('.team-text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical:true,
  centerMode:true,
  centerPadding: "0px",
  pauseOnHover:false,
  pauseOnFocus:false,
  arrows:false,
  asNavFor: '.team-image-slider'
});
$('.counter').counterUp(
  {
      delay: 10,
      time: 3000
  }
);
$(' .brand-wrapper ').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover:false,
  pauseOnFocus:false,
  centerPadding: "0px",
  arrows:false,
  centerMode:true,
});
// $('.menu').on('click' ,function(){
//   $('.sidebar').css('left','0px')
// })
 
// $('.cross').on('click' ,function(){
//   $('.sidebar').css('left','-100%')
// })
 