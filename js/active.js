(function ($) {
  "use strict";
  $(document).on("ready", function () {
    /*==============================================================================
		Header Sticky JS
	===============================================================================*/
    var activeSticky = $("#active-sticky"),
      winDow = $(window);
    winDow.on("scroll", function () {
      var scroll = $(window).scrollTop(),
        isSticky = activeSticky;
      if (scroll < 50) {
        isSticky.removeClass("is-sticky");
      } else {
        isSticky.addClass("is-sticky");
      }
    });

    /*=============================================================================
			Nice Select JS
	===============================================================================*/
    $("select").niceSelect();

    /*=============================================================================
			Mobile Menu Sidebar JS
	===============================================================================*/
    var $offcanvasNav = $("#offcanvas-menu a");
    $offcanvasNav.on("click", function () {
      var link = $(this);
      var closestUl = link.closest("ul");
      var activeLinks = closestUl.find(".active");
      var closestLi = link.closest("li");
      var linkStatus = closestLi.hasClass("active");
      var count = 0;

      closestUl.find("ul").slideUp(function () {
        if (++count == closestUl.find("ul").length)
          activeLinks.removeClass("active");
      });
      if (!linkStatus) {
        closestLi.children("ul").slideDown();
        closestLi.addClass("active");
      }
    });

    /*==============================================================================
		  Testimonial Slider
	  ================================================================================*/
    /*====================================
			Hero Slider JS
		======================================*/
    $(".testimonial-slider-inner").slick({
      autoplay: true,
      speed: 800,
      autoplaySpeed: 3500,
      slidesToShow: 1,
      pauseOnHover: true,
      centerMode: true,
      cssEase: "linear",
      infinite: true,
      centerPadding: "0px",
      dots: true,
      arrows: false,
      cssEase: "ease",
      speed: 700,
      fade: true,
      draggable: true,
      prevArrow:
        '<button class="Prev"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
      nextArrow:
        '<button class="Next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 350,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    });
  });
})(jQuery);
