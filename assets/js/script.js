(function($){

	document.onreadystatechange = function () {

	}

	$(window).on("scroll", function() {
		
    });

	$(document).ready(function() {

		let vantaNetLoaded = false;
		

		/* Fullpage config */
		var myFullpage = new fullpage('#fullpage', {
            anchors: ['home', 'aboutMe', 'myProjects', 'contactMe', 'footer'],
            css3:false,
            scrollingSpeed: 500,
			navigation: true,
		    responsiveWidth: 530,
			navigationTooltips: ['Home', 'About Me', 'My Projects', 'Contact Me'],
            onLeave: function(origin, destination, direction){
            	console.log(vantaNetLoaded);
                // console.log(direction);
                if(destination.index == 0){
                    $('.header-logo').addClass('default');
                    $('.main-section__today').addClass('default');
                    $('.scroll-down-animate').removeClass('disaled');
                }else{
                    $('.header-logo').removeClass('default');                   
                    $('.main-section__today').removeClass('default');
                    $('.scroll-down-animate').addClass('disaled');


                }

                if(destination.index == 4){
                    $('#section3 .home-section-background__index').animate({opacity:0},"slow");
                    $('#section3 .home-section-background').addClass('opc');
                }else{
                    $('#section3 .home-section-background__index').animate({opacity:1},"slow");
                    $('#section3 .home-section-background').removeClass('opc');
                }

                if(destination.index != 4){
                	$('.section-slider .slider').removeClass('active');
                }

                // if(destination.index == 2){
                // 	vantaNetLoaded = true;
                	
                // }



            },
            onSlideLeave: function(section, origin, destination, direction){
            	// page slider
            	// alert(destination.index)
                if(destination.index >= 1){
                	$('.section-slider .home-section-background__index').addClass('d-none');
                	// $('.my-projects-section .fp-controlArrow').removeClass('active');
                }else{
                	$('.section-slider .home-section-background__index').removeClass('d-none');
                	// $('.my-projects-section .fp-controlArrow').addClass('active');
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
    		// $('.framebox').toggleClass('open');
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

		// $('.fp-controlArrow').addClass('active');

		$('#contact-form').submit(function(event) {
			event.preventDefault();

			var name = $('input[name="name"]').val();
			var email = $('input[name="email"]').val();
			var message = $('textarea[name="message"]').val();

			var check1 = $('input[name="check1"]').val();
			var check2 = $('input[name="check2"]').val();

			if (!check1 && !check2) {

				if (!name) {
					alert('Please enter your name');
				}else if(!email){
					alert('Please enter your email address');
				}else if(!message){
					alert('Please enter your message');
				}else{
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
							$('input[type="submit"]').val('Please wait...');
							$('input[type="submit"]').attr('disabled', true);
						},
						success: function(response){
							console.log(response);
							$('input[type="submit"]').val('SUBMIT');
							$('input[type="submit"]').attr('disabled', false);
							$('input[name="name"]').val('');
							$('input[name="email"]').val('');
							$('textarea[name="message"]').val('');
							if(response.success){
								alert('Your message has been sent successfully');
							}else{
								alert('Something went wrong, Please reload the page and try agains');
							}
						},
						error: function(response){
							console.log(response);
							alert("Something went wrong, Please try again");
						}
					});

				}
			}
			
		});

		// Magic mouse
		const options = {
		    "cursorOuter": "circle-basic",
		    "hoverEffect": "circle-move",
		    "hoverItemMove": false,
		    "defaultCursor": false,
		    "outerWidth": 30,
		    "outerHeight": 30
	    };
	    magicMouse(options);

	    // Typeit JS
	    new TypeIt('#name', {
        	speed: 50
      	})
  		.pause(3000)
  		.type("I'm Nikko Dela Cruz")
  		.go();


		//Vanta js
  		setTimeout(() => {
			VANTA.BIRDS({
			  el: "#vantaBirds",
			  mouseControls: true,
			  touchControls: true,
			  gyroControls: false,
			  minHeight: 1000.00,
			  minWidth: 2000.00,
			  scale: 1.00,
			  scaleMobile: 1.00
			})
  		}, 1000);

  		setTimeout(() => {
			VANTA.NET({
				el: "#vantaNet",
				color: 0xff2e63,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 1000.00,
				minWidth: 2000.00,
				scale: 1.00,
				scaleMobile: 1.00
			})
  		}, 2000);
  		

	});

	$(window).load(function() {
		$('body').removeClass('d-none');
		$(".preloader-container").delay(1000).fadeOut("slow");
	});
         
})(jQuery);
