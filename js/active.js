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
		Available Pop Location Slider 
	================================================================================*/
    $(".a-pop-location-slider").owlCarousel({
      items: 2,
      autoplay: true,
      loop: true,
      margin: 30,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      autoWidth: false,
      smartSpeed: 1000,
      merge: true,
      nav: true,
      navText: [
        '<i class="fi-rr-angle-small-left" aria-hidden="true"></i>',
        '<i class="fi-rr-angle-small-right" aria-hidden="true"></i>',
      ],
      dots: false,

      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1170: {
          items: 2,
        },
      },
    });
  });
})(jQuery);
