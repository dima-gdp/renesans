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




	function parallax() {
		let scrollPos = 0;
		let offsetScroll = $(document).scrollTop(),
			offsetBlock = $('.art').offset().top;

		if (offsetScroll + $(window).innerHeight() / 2 >= offsetBlock && offsetScroll < offsetBlock + $(window).innerHeight() / 2) {

			let value = offsetScroll - offsetBlock + $(window).innerHeight() / 2;
			let ratio = 1;
			$('.art__image img').css('transform', `scale(${1 + value * 0.0002 * ratio})`)
		}
	}


	if (document.querySelector('.art')) {
		$(window).on('scroll', parallax);
	}


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


	// function getNav() {
	// 	if ($(window).innerWidth() <= 576) {
	// 		return {
	// 			prev: '.catalog--prev-2',
	// 			next: '.catalog--next-2'
	// 		}
	// 	}
	// 	else {
	// 		return {
	// 			prev: '.catalog--prev',
	// 			next: '.catalog--next'
	// 		}
	// 	}
	// }

	// console.log(getNav().prev)

	const slider_pag = new Swiper('.control__slider', {
		slidesPerView: 9,
		spaceBetween: 14,
		loop: false,
		loopedSlides: 1,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.catalog--next',
			prevEl: '.catalog--prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
			375: {
				spaceBetween: 10,
				slidesPerView: 3,
			},
			620: {
				spaceBetween: 10,
				slidesPerView: 4,
			},
			745: {
				spaceBetween: 10,
				slidesPerView: 5,
			},
			891: {
				spaceBetween: 10,
				slidesPerView: 6,
			},
			1061: {
				spaceBetween: 14,
				slidesPerView: 7,
			},
			1620: {
				spaceBetween: 14,
				slidesPerView: 8,
			},
			1751: {
				spaceBetween: 14,
				slidesPerView: 9,
			},
		}
	});

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
		thumbs: {
			swiper: slider_pag,
		},
		breakpoints: {
			320: {
				spaceBetween: 60,
				autoHeight: false,
				speed: 400,
			},
			590: {
				spaceBetween: 100,
				autoHeight: true,
				speed: 900,
			},
			1441: {
				spaceBetween: 100,
				autoHeight: true,
			},
			1733: {
				spaceBetween: 146,
				autoHeight: true,
			},
		}
	});


	const slider_pag_process = new Swiper('.process-pag__slider', {
		slidesPerView: 12,
		spaceBetween: 75,
		loop: false,
		loopedSlides: 1,
		slideToClickedSlide: true,
		navigation: {
			nextEl: '.process-pag--next',
			prevEl: '.process-pag--prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 10,
				slidesPerView: 2,
			},
			375: {
				spaceBetween: 10,
				slidesPerView: 3,
			},
			620: {
				spaceBetween: 10,
				slidesPerView: 4,
			},
			745: {
				spaceBetween: 10,
				slidesPerView: 5,
			},
			891: {
				spaceBetween: 10,
				slidesPerView: 6,
			},
			1061: {
				spaceBetween: 14,
				slidesPerView: 7,
			},
			1620: {
				spaceBetween: 75,
				slidesPerView: 8,
			},
			1751: {
				spaceBetween: 75,
				slidesPerView: 9,
			},
		}
	});


	const slider_process = new Swiper('.process__slider', {
		slidesPerView: 1,
		speed: 900,
		// autoHeight: true,
		allowTouchMove: false,
		spaceBetween: 40,
		loop: false,
		loopedSlides: 2,
		observeParents: true,
		observeSlideChildren: true,
		observer: true,
		thumbs: {
			swiper: slider_pag_process,
		},
		// breakpoints: {
		// 	320: {
		// 		spaceBetween: 60,
		// 		autoHeight: false,
		// 		speed: 400,
		// 	},
		// 	590: {
		// 		spaceBetween: 100,
		// 		autoHeight: true,
		// 		speed: 900,
		// 	},
		// 	1441: {
		// 		spaceBetween: 100,
		// 		autoHeight: false,
		// 	},
		// 	1733: {
		// 		spaceBetween: 146,
		// 	},
		// }
	});

	$('.swiper-slide.month').each(function (i, el) {
		const sel = el.querySelector('.month__slider')
		// const sel = $(el).find('.month__slider')
		const btns = $(el).find('.month__btn')

		const slider_process_item = new Swiper(sel, {
			slidesPerView: 3,
			initialSlide: 1,
			speed: 900,
			on: {
				afterInit: function () {

					setTimeout(function () {
						$('.process').addClass('transit')
					}, 2000);
					console.log($('.process__slider').innerHeight());
					$('.month').css('min-height', $('.process__slider').innerHeight())


				},
			},
			// autoHeight: true,
			spaceBetween: 47,
			loop: true,
			centeredSlides: true,
			loopedSlides: 2,
			observeParents: true,
			observeSlideChildren: true,
			observer: true,
			navigation: {
				nextEl: btns[1],
				prevEl: btns[0],
			},


			// breakpoints: {
			// 	320: {
			// 		spaceBetween: 60,
			// 		autoHeight: false,
			// 		speed: 400,
			// 	},
			// 	590: {
			// 		spaceBetween: 100,
			// 		autoHeight: true,
			// 		speed: 900,
			// 	},
			// 	1441: {
			// 		spaceBetween: 100,
			// 		autoHeight: true,
			// 	},
			// 	1733: {
			// 		spaceBetween: 50,
			// 		autoHeight: false,
			// 	},
			// }
		});

	})

	// slider_process.on('afterInit', function () {
	// 	console.log($('.process__wrapper').innerHeight());
	// });




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
	$('[data-src="#modal-price"]').fancybox({
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
	$('.header__burger').click(function () {
		$('.mob-menu').addClass('active')
	})

	$('.mob-menu__close').click(function () {
		$('.mob-menu').removeClass('active')
	})

	$(document).click(function (ev) {
		if (!ev.target.closest('.header__burger')) {
			$('.mob-menu').removeClass('active')
		}
	})

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
