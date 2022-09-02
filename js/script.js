$(function(){

$(".item-slider").slick({
    slidesToShow:3,
    prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
    infinite:false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
})


$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() >300){
$(".menu").addClass("nav-scroll")
    }else{
        $(".menu").removeClass("nav-scroll") 
    }



    if($(window).scrollTop() >600){
      $(".top-button") .fadeIn()
          }else{
            $(".top-button") .fadeOut()
          }

})


$(".top-button").click(function(){
    $("html,body").animate({
      scrollTop:0
    },1000)
})


$(".header-slider").slick({
    slidesToShow:6,
    prevArrow:'<i class="fa-solid fa-chevron-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right next"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
})


$(".sponsored-slider").slick({
  slidesToShow:3,
  arrows:false,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

})


jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});

});