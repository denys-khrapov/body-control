
$(document).ready(function () {
	// Mobile menu
	const headerBurger = $('.header__burger');
	const headerMenu = $('.header__menu');
	const body = $('body');

	headerBurger.on('click', function () {
		headerBurger.toggleClass('active');
		headerMenu.toggleClass('active');
		body.toggleClass('lock');
	});

	// при клике на ссылку с классом "scroll-to"
	$('a.scroll-to').click(function () {
		// проверяем наличие класса .lock у body
		if ($('body').hasClass('lock')) {
			// если есть, убираем его
			$('body').removeClass('lock');
		}
		// проверяем наличие класса .active у .header__burger
		if (headerBurger.hasClass('active')) {
			headerBurger.removeClass('active');
		}
		// проверяем наличие класса .active у .header__menu
		if (headerMenu.hasClass('active')) {
			headerMenu.removeClass('active');
		}
		// получаем значение атрибута href ссылки
		var sectionName = $(this).attr('href');
		// плавно скроллим до секции с помощью метода animate()
		$('html, body').animate({
			scrollTop: $(sectionName).offset().top
		}, 1000);
		// отменяем действие по умолчанию для ссылки
		return false;
	});
});
if (window.location.href.indexOf('index.html') !== -1) {
	// Код для работы с Swiper на главной странице
	// Reviews slider
	new Swiper('.swiper', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true
		},
		loop: true
	});

}

