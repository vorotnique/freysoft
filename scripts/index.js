jQuery(function() {
	const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	if (vw < 1200) {
		$('.perks__list').slick({
			dots: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows: false
		});
	} else {
		$('.perks__list').slick('unslick');
	}

	$('.header__menu').on('click',function() {
		$('.header__nav').show();
	});
	$('.header__nav-close').on('click',function() {
		$('.header__nav').hide();
	});
});