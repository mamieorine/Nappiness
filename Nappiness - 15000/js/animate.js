$(document).ready(function(){
	AOS.init();
	
	/* Neon Effect */
	setInterval(function() {
		setTimeout(function(){ 
			$('.glow').addClass('off'); 
		}, 200); 
		setTimeout(function(){ 
			$('.glow').removeClass('off'); 
		}, 500); 
	}, 5000);


	/* Header scroll */
	$(window).scroll(function(){
		scrollheight = $('body').height();

		if($(document).scrollTop() > 0){
			$("header").addClass('scroll');
		} else {
			$("header").removeClass('scroll');
		}
	});
	jQuery(".scrolldown").click(function() { 
		jQuery("html, body").animate({scrollTop: $(window).scrollTop() }, "slow");
	});


	$(document).on('scroll', function() {
		var num
		var num_up
		$('.focus').each(function(){
			if ($(this).find('.focus-colorful').height() > 600) {
				num = 50;
				num_up = $(this).find('.focus-colorful').height();
			} else {
				num = 400;
				num_up = 400
			}
			if ($(window).scrollTop() >= $(this).position().top - num) {
				$(this).find('.focus-colorful').addClass('focused');
			} 
			if ($(window).scrollTop() < $(this).position().top - num){
				$(this).find('.focus-colorful').removeClass('focused');
			} 
			if ($(window).scrollTop() > $(this).position().top + num_up){
				$(this).find('.focus-colorful').removeClass('focused');
			}
		})	
	}) 

	/* Hamburber */
	$("header .icon").click(function () {
        $(".mobilenav").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
	});
	
	/* Rellax */
	var rellax = new Rellax('.rellax', {
		speed: -2,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	  });

	/* Rellax 2 */
	var rellax = new Rellax('.rellax-2', {
		speed: -1.5,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	  });

	/* Rellax 3 */
	var rellax = new Rellax('.rellax-3', {
		speed: 1,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	  });

	/* Rellax 4 */
	var rellax = new Rellax('.rellax-4', {
		speed: -3,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	  });
})

