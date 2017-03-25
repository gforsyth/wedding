(function($) {
	"use strict";

	$(document).ready(function() {
		
		// ====================================================================

		// Navbar position

		$(window).scroll(function(){
			if ($(this).scrollTop() > $(window).height()) {
				$('.navbar').addClass('fixed');
				$('body').css('padding-top', '97px');
			} else {
				$('.navbar').removeClass('fixed');
				$('body').css('padding-top', '0');
			}
		});
		
		// ====================================================================

		// Smooth Scroll on Menu Click

		$('.navbar a[href^=#]').on("click",function(){
			var t= $(this.hash);
			var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
			if(t.length){
				var tOffset=(t.offset().top - 90);
				$('html,body').animate({scrollTop:tOffset},'slow');
				return false;
			}
		});

		// ====================================================================

		// Superslides

		$('#slides').superslides({
			play: 5000,
			animation_speed: 2000,
			animation: 'fade',
			pagination: false
		});

		// ====================================================================

		// Countdown
		
		//var weddingDate = new Date();
		//var weddingDate = new Date(weddingDate.getFullYear() + 1, 1 - 1, 1);
		var weddingDate = new Date("October 7, 2017 15:00:00")
		$(".countdown").countdown({
			until: weddingDate,
			format: 'ODHMS'
		});

		// ====================================================================

		// Owl Carousel

		$("#registry .owl-carousel").owlCarousel({
			items: 6,
			itemsDesktop: [1199,5],
			itemsDesktopSmall: [991,4],
			itemsTablet: [767,3],
			slideSpeed: 800
		});

		// ====================================================================

		// Parallax

		$('.parallax').scrolly({bgParallax: true});

		// ====================================================================

		// Fun Facts Counter

		var flag = 0;

	    $(window).scroll(function() {
	        if (flag == 1){
	           return false;
	        }
	        else{
	           var bh = $(window).height();
	           var st = $(window).scrollTop();
	           var el = $('.timer');
	           var eh = el.height();
	           if ( st >= (100 + eh) - bh ) {
	               el.countTo({
	                   speed: 2000,
	                   refreshInterval: 20
	               });
	           }
	           flag = 1;
	        }
	    });

		// ====================================================================

		// Fancybox

		$('.fancybox').fancybox({
			openEffect: 'none'
		});

		// ====================================================================

		// Scroll Reveal

		if ($(window).width() > 767) {

			// The starting defaults.
			var config = {
				after: '0s',
				enter: 'top',
				move: '50px',
				over: '0.66s',
				easing: 'ease-in-out',
				viewportFactor: 0.33,
				reset: false,
				init: true
			};

			window.scrollReveal = new scrollReveal({reset: true});
		}

	})

})(jQuery);
// Accordian Action
var action = 'click';
var speed = "500";


$(document).ready(function(){

// Question handler
  $('li.q').on(action, function(){

    // gets next element
    // opens .a of selected question
    $(this).next().slideToggle(speed)

    // selects all other answers and slides up any open answer
    .siblings('li.a').slideUp();

    // Grab img from clicked question
    var img = $(this).children('img');

    // remove Rotate class from all images except the active
    $('img').not(img).removeClass('rotate');

    // toggle rotate class
    img.toggleClass('rotate');

  });

});

