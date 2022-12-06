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

    /*==============================================================================
		    Header Full Menu JS
	  ===============================================================================*/
    $(".header").on("click", ".menu-btn", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).addClass("no-touch");
        $("body").removeClass("no-scroll");
        $(".menu-full-overlay").removeClass("is-open");
        $(".menu-full-overlay").removeClass("has-scroll");
        $(".menu-full-overlay").removeClass("animate-active");
        setTimeout(function () {
          $(".menu-full-overlay").removeClass("visible");
          $(".menu-btn").removeClass("no-touch");
        }, 1000);
      } else {
        $(this).addClass("active no-touch");
        var height = $(window).height();
        $(".menu-full-overlay").css({ height: height });
        $("body").addClass("no-scroll");
        $(".menu-full-overlay").addClass("is-open visible");
        setTimeout(function () {
          $(".menu-full-overlay").addClass("has-scroll animate-active");
          $(".menu-btn").removeClass("no-touch");
        }, 1000);
      }
      return false;
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

    /*==============================================================================
		  Wow JS
	  ================================================================================*/
    var window_width = $(window).width();
    if (window_width > 767) {
      new WOW().init();
    }

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

  /*==============================================================================
		  Preloader JS
	================================================================================*/
  function loader() {
    $(window).on("load", function () {
      $("#ctn-preloader").addClass("loaded");
      $("#loading").fadeOut(500);
      // Una vez haya terminado el preloader aparezca el scroll

      if ($("#ctn-preloader").hasClass("loaded")) {
        // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
        $("#preloader")
          .delay(900)
          .queue(function () {
            $(this).remove();
          });
      }
    });
  }
  loader();
})(jQuery);
