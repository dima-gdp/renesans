$(document).ready(function () {
	objectFitImages();
	AOS.init();

	// Табы
	// function tabs(buttonsList, wrapper, tabBlock) {
	// 	$(buttonsList).on('click', 'li:not(.active)', function () {
	// 		$(this).addClass('active').siblings().removeClass('active')
	// 			.closest(wrapper).find(tabBlock).removeClass('active').eq($(this).index()).addClass('active');
	// 	})
	// }

	function toggleTabs(top, bottom, topActive) {
		$(top).on('click', function (ev) {
			let text = $(this).next(bottom);

			if ($(this).hasClass(topActive)) {
				text.stop().slideUp();
				$(this).removeClass(topActive)
			}
			else {
				$(this).addClass(topActive)
				text.stop().slideDown();
			}
		})
	}

	toggleTabs('.toggle__top', '.toggle__bot', 'toggle__top--active')


	// Swiper
	const slider_hero = new Swiper('.hero__slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 3000,
		},
		speed: 700,
		loop: false,
		pagination: {
			el: '.hero-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '">' + '<span>' + (index + 1) + '</span></div>';
			}
		},
		// loopedSlides: 1,
		// slideToClickedSlide: true,
		// breakpoints: {
		// 	993: {

		// 	},
		// }
	});


	const slider_partners = new Swiper('.partners__slider', {
		slidesPerView: 5,
		spaceBetween: 40,
		loop: false,
		navigation: {
			nextEl: '.nav-slider--next',
			prevEl: '.nav-slider--prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			993: {
				slidesPerView: 5,
				spaceBetween: 40,
			},
		}
	});

	function mobileSlider() {
		if ($(window).innerWidth() <= 1100) {
			slider_product_main = new Swiper('.new__slider', {
				slidesPerView: 2,
				spaceBetween: 40,
				navigation: {
					nextEl: '.new-slider--prev',
					prevEl: '.new-slider--next',
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 45,
					},
					376: {
						slidesPerView: 1,
						spaceBetween: 45,
					},
					630: {
						slidesPerView: 2,
						spaceBetween: 45,
					},
				}
			});
		}

		else {
			if ($('.new__slider').hasClass('swiper-container-initialized')) {
				slider_catalog.destroy();
			}
		}
	}

	const slider_news = new Swiper('.catalog__slider', {
		slidesPerView: 1,
		speed: 900,
		autoHeight: true,
		spaceBetween: 146,
		loop: false,
		loopedSlides: 2,
		observeParents: true,
		observeSlideChildren: true,
		observer: true,
		// centeredSlides: true,
		pagination: {
			el: '.catalog__pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '">' + addZero(index + 1) + '</div>';
			}
		},
		navigation: {
			nextEl: '.catalog--next',
			prevEl: '.catalog--prev',
		},
		// loopedSlides: 1,
		// slideToClickedSlide: true,
		breakpoints: {
			320: {
				spaceBetween: 146,
			},
			1440: {
				spaceBetween: 146,
			},
			1733: {
				spaceBetween: 146,
			},
		}
	});

	function addZero(number) {

		if (number < 10) {

			return '0' + number;

		} else {

			return number;

		}

	}

	const slider_gal = new Swiper('.gallery__slider', {
		slidesPerView: 4,
		spaceBetween: 40,
		loop: false,
		loopedSlides: 2,
		observeParents: true,
		observeSlideChildren: true,
		observer: true,
		// centeredSlides: true,
		pagination: {
			el: '.gallery__pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return '<span class="gallery__current">' + addZero(current) + '</span>' +
					'<span class="gallery__sepor"></span>' +
					'<span class="gallery__total">' + addZero(total) + '</span>';
			}
		},
		navigation: {
			nextEl: '.gallery--next',
			prevEl: '.gallery--prev',
		},
		loopedSlides: 1,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			520: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			686: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			686: {
				slidesPerView: 4,
				spaceBetween: 40,
			},

		}
	});

	const slider_modal = new Swiper('.modal-home__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		loopedSlides: 2,
		observeParents: true,
		observeSlideChildren: true,
		observer: true,
		navigation: {
			nextEl: '.modal-home--next',
			prevEl: '.modal-home--prev',
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 	},
		// 	420: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 20,
		// 	},
		// 	520: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 40,
		// 	},
		// 	686: {
		// 		slidesPerView: 3,
		// 		spaceBetween: 40,
		// 	},
		// 	686: {
		// 		slidesPerView: 4,
		// 		spaceBetween: 40,
		// 	},

		// }
	});

	mobileSlider()



	// Fancy-box

	$('[data-src="#modal-call"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
		afterShow: function (instance, current) {
			console.info(instance);
			$(current.src).find('.modal-call__decor').addClass('active')
		},
		beforeClose: function (instance, current) {
			$(current.src).find('.modal-call__decor').removeClass('active')
		}
	});

	$('[data-src="#modal-polit"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
	});

	$('[data-src="#home-modal"]').fancybox({
		touch: 'false',
		smallBtn: false,
		buttons: '',
	});

	$('[data-fancybox="gal"]').fancybox({
		backFocus: false,
		// autoFocus: false,
		// hash: false,
	});

	// Input-mask
	// $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });


	// Menu-burger
	// burger.click(function () {
	// 	mobMenu.addClass('active')
	// })

	// $('.mob-menu__close').click(function () {
	// 	mobMenu.removeClass('active')
	// })

	// $(document).click(function (ev) {
	// 	if (!ev.target.closest('.header__burger') && !ev.target.closest('h1')) {
	// 		mobMenu.removeClass('active')
	// 	}
	// })

	// Яндекс карта
	if (document.getElementById('map')) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
				center: [59.21453736676941, 39.89706232681222],
				zoom: 16
			});

			var myPlacemark = new ymaps.Placemark([59.21453736676941, 39.89706232681222], {
				hintContent: 'Козленская улица, 43Ак2',
				balloonContent: 'Козленская улица, 43Ак2'
			},
				{
					preset: 'islands#redIcon',
					iconLayout: 'default#image',
					iconImageHref: '../img/map.svg',
					iconImageSize: [24, 35],
					// iconImageOffset: [-19, -52]
				});

			myMap.geoObjects.add(myPlacemark);
		});
	}


	// Alertify
	// alertify.set('notifier', 'position', 'bottom-right');
	// alertify.set('notifier', 'delay', 10);

	// document.addEventListener('wpcf7mailsent', function (event) {
	// 	alertify.success(event.detail.apiResponse.message)
	// }, false);

	// document.addEventListener('wpcf7invalid', function (event) {
	// 	alertify.warning(event.detail.apiResponse.message);
	// }, false);

	// document.addEventListener('wpcf7mailfailed', function (event) {
	// 	alertify.error(event.detail.apiResponse.message);
	// }, false);

	// $(document).on('click', '.wpcf7-submit', function (e) {
	// 	if ($('.ajax-loader').hasClass('is-active')) {
	// 		e.preventDefault();
	// 		return false;
	// 	}
	// });





});