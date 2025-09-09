$(document).ready(function () {
	'use strict';
	// navbar js start ---
	$(window).on('load scroll', function () {
		var scrolling = $(this).scrollTop();
		if (scrolling > 10) {
			$('.navbar').addClass('nav-fixed')
		} else {
			$('.navbar').removeClass('nav-fixed')
		}
	})

	$(".ham-menu").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".mobile-menu-close-window-btn").click(function (event) {
		event.stopPropagation();
		$(".sidebar-wrapper").toggleClass("active");
		$(".ham-menu").toggleClass("active");
		$(".sidebar-wrapper-inner").toggleClass("active");
		$("body").toggleClass("active");
	});

	// **..mobile-dropdown-accordion js start..**
	$('.sidebar-submenu-open').on('click', function () {
		$(this).parent().find(".megamenu-wrapper").addClass('active');
	});

	$('.sidebar-close-btn').on('click', function () {
		$(this).parent().parent().parent(".megamenu-wrapper").removeClass('active');
	});
	// **..mobile-dropdown-accordion js end..**

	$(".search-bar-open-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-bar-window-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(this).toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".search-close-btn").click(function (event) {
		event.stopPropagation();
		$(".search-bar").toggleClass("active");
		$(".search-bar-window-close-btn").toggleClass("active");
		$("body").toggleClass("active");
	});

	// navbar js end ---

})

// video player js start....
new VenoBox({
	selector: '.video-play-btn',
});
// video player js end....

// btn js ---
// primary btn---
$(function () {
	$('.primary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});

// secondary btn--
$(function () {
	$('.secondary-btn')
		.on('mouseenter', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		})
		.on('mouseout', function (e) {
			var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({
				top: relY,
				left: relX
			})
		});
});
// btn js ---

// product-single-slider js start---
var swiper = new Swiper(".product-single-slider-thumb", {
	direction: "vertical",
	loop: true,
	spaceBetween: 20,
	slidesPerView: 5,
	freeMode: true,
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 12,
			slidesPerView: 4,
			direction: "horizontal",
		},
		// when window width is >= 576px
		576: {
			spaceBetween: 16,
			slidesPerView: 5,
			direction: "horizontal",
		},
		// when window width is >= 768px
		768: {
			spaceBetween: 20,
			slidesPerView: 6,
			direction: "horizontal",
		},
		// when window width is >= 767px
		993: {
			direction: "vertical",
			spaceBetween: 20,
			slidesPerView: 5,
		}
	}
});
var swiper2 = new Swiper(".product-single-slider", {
	loop: true,
	spaceBetween: 10,
	thumbs: {
		swiper: swiper,
	},
});
// product-single-slider js end---

// product slider js start--
var swiper = new Swiper(".product-slider", {
	slidesPerView: 3,
	spaceBetween: 30,
	grabCursor: true,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		1: {
			spaceBetween: 10,
			slidesPerView: 2,
		},
		// when window width is >= 768px
		576: {
			spaceBetween: 15,
			slidesPerView: 2.2,
		},
		// when window width is >= 993px
		993: {
			spaceBetween: 20,
			slidesPerView: 3,
		},
		// when window width is >= 1140x
		1140: {
			spaceBetween: 25,
			slidesPerView: 3.6,
		},
		// when window width is >= 1290px
		1290: {
			spaceBetween: 30,
			slidesPerView: 3,
		}
	}
});
// product slider js end--

// progesss-bar js start--
const progress = document.querySelector('.progress');
progress.addEventListener('input', function () {
	const value = this.value;
	this.style.background = `linear-gradient(to right,rgb(237, 28, 36) 0%,rgb(237, 28, 36) ${value}%,rgb(216, 216, 216) ${value}%)`
})
// progesss-bar js end--