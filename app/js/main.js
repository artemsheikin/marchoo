$(function () {
	$('.blog-page__slider').slick({
		prevArrow:
			'<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="11px" height="18px" viewBox="0 0 7 11" version="1.1"><g><path d="M 0.90625 5.015625 C 0.632812 5.28125 0.632812 5.71875 0.90625 5.988281 L 4.40625 9.425781 C 4.679688 9.695312 5.125 9.695312 5.398438 9.425781 C 5.671875 9.15625 5.671875 8.71875 5.398438 8.453125 L 2.390625 5.5 L 5.394531 2.546875 C 5.667969 2.28125 5.667969 1.84375 5.394531 1.574219 C 5.121094 1.304688 4.675781 1.304688 4.402344 1.574219 L 0.902344 5.011719 Z M 0.90625 5.015625 "/></g></svg></button>',
		nextArrow:
			'<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="11px" height="18px" viewBox="0 0 7 11" version="1.1"><g><path d="M 6.09375 5.015625 C 6.367188 5.28125 6.367188 5.71875 6.09375 5.988281 L 2.59375 9.425781 C 2.320312 9.695312 1.875 9.695312 1.601562 9.425781 C 1.328125 9.15625 1.328125 8.71875 1.601562 8.453125 L 4.609375 5.5 L 1.605469 2.546875 C 1.332031 2.28125 1.332031 1.84375 1.605469 1.574219 C 1.878906 1.304688 2.324219 1.304688 2.597656 1.574219 L 6.097656 5.011719 Z M 6.09375 5.015625 "/></g></svg></button>',
		infinite: false,
	})

	$('.product-tabs__top-item').on('click', function (e) {
		e.preventDefault()
		$('.product-tabs__top-item').removeClass('product-tabs__top-item--active')
		$(this).addClass('product-tabs__top-item--active')

		$('.product-tabs__content-item').removeClass(
			'product-tabs__content-item--active'
		)
		$($(this).attr('href')).addClass('product-tabs__content-item--active')
	})

	// Маленький слайдер (thumb)
	$('.product-slide__thumb').slick({
		asNavFor: '.product-slide__big', // Связь с большим слайдером
		focusOnSelect: true, // Выбор слайда при клике
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
		arrows: true, // Добавить стрелки, если нужно
	})

	// Большой слайдер (big)
	$('.product-slide__big').slick({
		asNavFor: '.product-slide__thumb', // Связь с маленьким слайдером
		draggable: false,
		arrows: false,
		fade: true,
	})

	$('.shop-content__filter-btn').on('click', function () {
		$('.shop-content__filter-btn').removeClass(
			'shop-content__filter-btn--active'
		)
		$(this).addClass('shop-content__filter-btn--active')
	})

	$('.button-list').on('click', function () {
		$('.product-item').addClass('product-item--list')
	})
	$('.button-grid').on('click', function () {
		$('.product-item').removeClass('product-item--list')
	})

	$('.select-style,.product-one__item-num').styler()

	$('.filter-price__input').ionRangeSlider({
		type: 'double',
		prefix: '$',
		onStart: function (data) {
			$('.filter-price__from').text(data.from)
			$('.filter-price__to').text(data.to)
		},
		onChange: function (data) {
			$('.filter-price__from').text(data.from)
			$('.filter-price__to').text(data.to)
		},
	})

	$('.top-slider__inner').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
	})
	$('.star').rateYo({
		starWidth: '17px',
		normalFill: '#ccccce',
		ratedFill: '#ffc35b',
		readOnly: true,
		starSvg:
			' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px"height="16px" viewBox="0 0 16 14" version="1.1"><g id="surface1"><path d="M 8.804688 0.492188 C 8.65625 0.191406 8.34375 0 8.003906 0 C 7.660156 0 7.351562 0.191406 7.203125 0.492188 L 5.417969 4.109375 L 1.429688 4.6875 C 1.09375 4.738281 0.816406 4.96875 0.714844 5.28125 C 0.609375 5.597656 0.695312 5.945312 0.933594 6.175781 L 3.828125 8.996094 L 3.144531 12.980469 C 3.089844 13.308594 3.226562 13.640625 3.503906 13.835938 C 3.777344 14.03125 4.140625 14.054688 4.441406 13.898438 L 8.003906 12.027344 L 11.570312 13.898438 C 11.871094 14.054688 12.234375 14.03125 12.507812 13.835938 C 12.785156 13.640625 12.921875 13.308594 12.867188 12.980469 L 12.179688 8.996094 L 15.074219 6.175781 C 15.3125 5.945312 15.398438 5.597656 15.292969 5.28125 C 15.1875 4.96875 14.914062 4.738281 14.582031 4.6875 L 10.589844 4.109375 Z M 8.804688 0.492188 " /></g></svg>',
	})

	function getTimeRemaining(endtime) {
		const total = Date.parse(endtime) - Date.parse(new Date())
		const seconds = Math.floor((total / 1000) % 60)
		const minutes = Math.floor((total / 1000 / 60) % 60)
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
		const days = Math.floor(total / (1000 * 60 * 60 * 24))

		return {
			total,
			days,
			hours,
			minutes,
			seconds,
		}
	}

	function initializeClock(id, endtime) {
		const clock = document.querySelector('.promo__clock')
		const daysSpan = clock.querySelector('.promo__days')
		const hoursSpan = clock.querySelector('.promo__hours')
		const minutesSpan = clock.querySelector('.promo__minutes')
		const secondsSpan = clock.querySelector('.promo__seconds')

		function updateClock() {
			const t = getTimeRemaining(endtime)

			daysSpan.innerHTML = t.days
			hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
			minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
			secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

			if (t.total <= 0) {
				clearInterval(timeinterval)
			}
		}

		updateClock()
		const timeinterval = setInterval(updateClock, 1000)
	}

	const deadline = $('.promo__clock').attr('data-time')
	initializeClock('promo__clock', deadline)

	let map

	async function initMap() {
		const { Map } = await google.maps.importLibrary('maps')

		map = new Map(document.getElementById('map'), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		})
	}

	initMap()
})
