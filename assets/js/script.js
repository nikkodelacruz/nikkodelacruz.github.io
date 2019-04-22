(function($){

	document.onreadystatechange = function () {

	}

	$(window).on("scroll", function() {
		
    });

	$(document).ready(function() {

		/* Fullpage config */
		var myFullpage = new fullpage('#fullpage', {
            anchors: ['home', 'aboutMe', 'myProjects', 'contactMe', 'footer'],
            css3:false,
            scrollingSpeed: 500,
			navigation: true,
			navigationTooltips: ['Home', 'About Me', 'My Projects', 'Contact Me'],
            onLeave: function(origin, destination, direction){
                // console.log(destination.index);
                if(destination.index == 0){
                    $('.header-logo').addClass('default');
                    $('.main-section__today').addClass('default');
                }else{
                    $('.header-logo').removeClass('default');                   
                    $('.main-section__today').removeClass('default');
                }
                if(destination.index == 4){
                    $('#section3 .home-section-background__index').animate({opacity:0},"slow");
                    $('#section3 .home-section-background').addClass('opc');
                }else{
                    $('#section3 .home-section-background__index').animate({opacity:1},"slow");
                    $('#section3 .home-section-background').removeClass('opc');
                }
            },
            onSlideLeave: function(section, origin, destination, direction){
            	// page slider
                if(destination.index == 1){
                	$('.my-projects-section .home-section-background__index').addClass('d-none');
                	$('.my-projects-section .slider').addClass('active');
                }else{
                	$('.my-projects-section .home-section-background__index').removeClass('d-none');
                	$('.my-projects-section .slider').removeClass('active');
                }
            },
            afterRender: function(){
            },
            afterResize: function(width, height){
            },
            afterSlideLoad: function(section, origin, destination, direction){
            },
            afterLoad: function(origin, destination, direction){ 
            }
        });

		/* Convert Data-BG */
	    $('.convert-bg').each(function(){
	    	// ORDERS
	    	// background-color
			// background-image
			// background-repeat
			// background-attachment
			// background-position
	    	var row = $(this);
	    	var bg = row.data('bg');
	    	row.css({"background-image":"url("+bg+")"});
	    });

      
		// Logo click
    	$(document).on('click', '.header-logo', function(e){
    		e.preventDefault();
    		$(this).toggleClass('open');
    		$('.global-nav-wrapper').toggleClass('open');
    		$('.framebox').toggleClass('open');
    		// $('#fullpage').toggleClass('open');
		});

		if ($('.fullpage-content').hasClass('hide')) {
			$('.fullpage-content').hide();
		}else{
			$('.fullpage-content').show();
		}

		var win_width = 1366;

		$(window).resize(function(){
			win_width = $(window).width();
		});

		$('.bg-image').mousemove(function(e){
			var movementStrength = 25;

			var height = movementStrength / $(window).height();
			var width = movementStrength / $(window).width();

			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);

			var amountMovedX = width * pageX * -1 - 25;
			var amountMovedY = height * pageY * -1 - 250;

		    // var amountMovedX = (e.pageX * -1 / 25); //->
		    // var amountMovedY = (e.pageY * -1 / 50); 
	    	if(win_width >= 1110){
				$(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
		    }
		});


	});

	$(window).load(function() {
		$(".preloader-container").delay(1000).fadeOut("slow");
	});
         
})(jQuery);
