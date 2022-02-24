let x;
$(window).on('scroll', function() {
	x = $(window).scrollTop();
	$('.test').css('background-size', 100 + parseInt(x / 10) + '% ');
}); // при скролле будет приближение, изменение размера
// $(window) - внутри вьюпорта
let y;
$(window).on('scroll', function() {
  y = $(window).scrollTop();
	$('.kubik').css('left', 0 + parseInt(y / 10) + '% ');
}); // при скролле будет приближение, изменение размера
// $(window) - внутри вьюпорта
