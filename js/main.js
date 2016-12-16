$(document).ready(function() {
	$('.menu-trigger').click(function() {
		$('.menu ul').slideToggle(700);
		$(window).resize(function() {
			if ($(window).width() > 770 ){
				$('.menu ul ').removeAttr('style');
			}
		});
	});
	$(".menu-trigger").click(function(){
		$(this).toggleClass("active");
	});


});