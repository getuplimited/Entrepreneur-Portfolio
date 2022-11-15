(function ($) {
	"use strict";
	$(document).on('ready', function () {

		/*==================================================
			Header Sticky JS
		====================================================*/
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

		/*==================================================
			Nice Select JS
		====================================================*/
		$('select').niceSelect();

		/*====================================================
			Checkbox JS
		======================================================*/
		$('input[type="checkbox"]').change(function () {
			if ($(this).is(':checked')) {
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});

		/*==================================================
			Mobile Menu Sidebar JS
		====================================================*/
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

		/*==================================================
			Review Card Slider 
		====================================================*/
		$('.review-card-slider').owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			margin: 30,
			autoplayTimeout: 4000,
			autoplayHoverPause: false,
			autoWidth: false,
			smartSpeed: 1000,
			merge: true,
			nav: false,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots: true,
		});

		/*==================================================
			Available Pop Location Slider 
		====================================================*/
		$('.a-pop-location-slider').owlCarousel({
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
			navText: ['<i class="fi-rr-angle-small-left" aria-hidden="true"></i>', '<i class="fi-rr-angle-small-right" aria-hidden="true"></i>'],
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
			}
		});


		/*==================================================
			Testimonial Slider JS
		====================================================*/
		$(".testimonial-slider").owlCarousel({
			autoplay: false,
			autoplayTimeout: 3000,
			autoplayHoverPause: false,
			autoWidth: true,
			items: 1,
			center: true,
			nav: false,
			margin: 0,
			dots: true,
			loop: true,
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				575: { items: 1 },
				768: { items: 2 },
				991: { items: 3 },
				1200: { items: 3 }
			}
		});

		/*==================================================
			Password Show Hidden JS
		====================================================*/
		$(".toggle-password").click(function () {

			$(this).toggleClass("fi-sr-eye fi-sr-eye-crossed");
			var input = $($(this).attr("toggle"));
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});

		/*==================================================
			Verify OTP JS
		====================================================*/
		$('.digit-group').find('input').each(function () {
			$(this).attr('maxlength', 1);
			$(this).on('keyup', function (e) {
				var parent = $($(this).parent());

				if (e.keyCode === 8 || e.keyCode === 37) {
					var prev = parent.find('input#' + $(this).data('previous'));

					if (prev.length) {
						$(prev).select();
					}
				} else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
					var next = parent.find('input#' + $(this).data('next'));

					if (next.length) {
						$(next).select();
					} else {
						if (parent.data('autosubmit')) {
							parent.submit();
						}
					}
				}
			});
		});

		/*==================================================
			Scroll To Top JS
		====================================================*/
		var lastScrollTop = '';
		var scrollToTopBtn = '.scrollToTop'

		function stickyMenu($targetMenu, $toggleClass) {
			var st = $(window).scrollTop();
			if ($(window).scrollTop() > 600) {
				if (st > lastScrollTop) {
					$targetMenu.removeClass($toggleClass);

				} else {
					$targetMenu.addClass($toggleClass);
				};
			} else {
				$targetMenu.removeClass($toggleClass);
			};
			lastScrollTop = st;
		};
		$(window).on("scroll", function () {
			stickyMenu($('.sticky-header'), "active");
			if ($(this).scrollTop() > 400) {
				$(scrollToTopBtn).addClass('show');
			} else {
				$(scrollToTopBtn).removeClass('show');
			}
		});

		$(scrollToTopBtn).on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 300);
			return false;
		});

	});

	/*========================================================
		Cookie Notice JS
	==========================================================*/

	(function () {
		"use strict";

		var cookieAlert = document.querySelector(".cookie-alert");
		var acceptCookies = document.querySelector(".accept-cookies");

		cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

		if (!getCookie("acceptCookies")) {
			cookieAlert.classList.add("show");
		}

		acceptCookies.addEventListener("click", function () {
			setCookie("acceptCookies", true, 60);
			cookieAlert.classList.remove("show");
		});
	})();

	// Cookie functions stolen
	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) === " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	/*==================================================
		Preloader JS
	====================================================*/
	$(window).on('load', function (event) {
		$('#preloader').delay(800).fadeOut(500);
	})


})(jQuery);
