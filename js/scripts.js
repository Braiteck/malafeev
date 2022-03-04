$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Главная страница - БЛИЖАЙШИЙ КОНЦЕРТ
	$('.next_concert .btn').click((e) => {
		e.preventDefault()

		$('.next_concert').addClass('show')
	})


	// Галерея - модалка
	$('.photo_gallery .item').click(function (e) {
		e.preventDefault()

		let startSlide = $(this).data('slide-index')

		Fancybox.show(
			[{
				src: '#gallery_modal',
				type: 'inline'
			}],
			{
				on: {
					done: (fancybox, slide) => {
						new Swiper('.fancybox__container .swiper-container', {
							loop: true,
							speed: 500,
							initialSlide: startSlide || 0,
							watchSlidesVisibility: true,
							slideActiveClass: 'active',
							slideVisibleClass: 'visible',
							spaceBetween: 40,
							slidesPerView: 1,
							navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev'
							}
						})
					}
				}
			})
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn, .overlay').click((e) => {
		e.preventDefault()

		if (!$('.mob_header .mob_menu_btn').hasClass('active')) {
			$('.mob_header .mob_menu_btn').addClass('active')
			$('body').addClass('menu_open')
			$('header, .overlay').fadeIn(300)
		} else {
			$('.mob_header .mob_menu_btn').removeClass('active')
			$('body').removeClass('menu_open')
			$('header, .overlay').fadeOut(200)
		}
	})
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!fiestResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 375) $('meta[name=viewport]').attr('content', 'width=375, user-scalable=no')

			fiestResize = true
		} else {
			fiestResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}
})