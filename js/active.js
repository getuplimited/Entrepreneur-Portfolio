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

    /*==============================================================================
			CounterUp JS
		================================================================================*/
    $(".counter").counterUp({
      time: 1500,
    });

    /*===============================================================================
			DatePicker JS
		=================================================================================*/
    $(".datetimepicker").datetimepicker({
      timepicker: true,
      datepicker: true,
      format: "y-m-d H:i",
      hours12: false,
      step: 30,
    });

    // Only Date Picker
    $(".date-pick").datetimepicker({
      timepicker: false,
      datepicker: true,
      format: "m-d-y",
      step: 10,
    });

    // Only Time Picker
    $(".time-pick").datetimepicker({
      datepicker: false,
      timepicker: true,
      format: "H:i",
      hours12: false,
      step: 10,
    });

    /*=============================================================================
			 Video Popup JS
	  ===============================================================================*/
    $(".video-popup").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
    });

    /*=============================================================================
			Mobile Menu Sidebar JS
	  ===============================================================================*/
    // var $offcanvasNav = $("#offcanvas-menu a");
    // $offcanvasNav.on("click", function () {
    //   var link = $(this);
    //   var closestUl = link.closest("ul");
    //   var activeLinks = closestUl.find(".active");
    //   var closestLi = link.closest("li");
    //   var linkStatus = closestLi.hasClass("active");
    //   var count = 0;

    //   closestUl.find("ul").slideUp(function () {
    //     if (++count == closestUl.find("ul").length)
    //       activeLinks.removeClass("active");
    //   });
    //   if (!linkStatus) {
    //     closestLi.children("ul").slideDown();
    //     closestLi.addClass("active");
    //   }
    // });

    /*==============================================================================
		  Testimonial Slider
	  ================================================================================*/
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

    /*==============================================================================
		  Blog Card Slider
	  ================================================================================*/
    $(".blog-slider").owlCarousel({
      items: 4,
      autoplay: false,
      loop: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      smartSpeed: 500,
      merge: true,
      nav: false,
      nav: true,
      navText: [
        '<i class="fi-rr-arrow-left aria-hidden="true"></i>',
        '<i class="fi-rr-arrow-right" aria-hidden="true"></i>',
      ],
      dots: false,
      margin: 20,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 4,
        },
        1920: {
          items: 4,
        },
      },
    });
  });
})(jQuery);
