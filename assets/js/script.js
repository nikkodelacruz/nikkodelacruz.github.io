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
                console.log(destination);

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

                if(destination.index != 4){
                	$('.my-projects-section .slider').removeClass('active');
                }
            },
            onSlideLeave: function(section, origin, destination, direction){
            	// page slider
                if(destination.index >= 1){
                	$('.my-projects-section .home-section-background__index').addClass('d-none');
                	$('.fp-controlArrow').removeClass('active');
                }else{
                	$('.my-projects-section .home-section-background__index').removeClass('d-none');
                	$('.fp-controlArrow').addClass('active');
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

		$('.fp-controlArrow').addClass('active');

		$('#contact-form').submit(function(event) {
			event.preventDefault();

			var name = $('input[name="name"]').val();
			var email = $('input[name="email"]').val();
			var message = $('textarea[name="message"]').val();

			var check1 = $('input[name="check1"]').val();
			var check2 = $('input[name="check2"]').val();

			if (!check1 && !check2) {
				$.ajax({
					url: "https://usebasin.com/f/7319a84f68f2.json",
					method: "POST",
					dataType: "json",
					data: {
						name: name,
						email: email,
						message: message 
					},
					beforeSend: function(){

					},
					success: function(response){
						console.log(response);
					},
					error: function(response){
						console.log(response);
						alert("Something went wrong, Please try again");
					}
				});
			}


			
		});


	});

	$(window).load(function() {
		$('body').removeClass('d-none');
		$(".preloader-container").delay(1000).fadeOut("slow");
	});
         
})(jQuery);
