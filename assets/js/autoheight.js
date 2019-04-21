(function($){

$(document).ready(function(){


	var height = $(window).height();   // returns height of browser viewport
	var width = $(window).width();   // returns height of browser viewport
	
	function sectionHeight() {

		$('.autowidth').css( "width", width+"px" );
		$('.autowidth').css( "min-width", width+"px" );

		//$('.autoheight').css( "height", height+"px" );
		//$('.autoheight').css( "min-height", height+"px" );

		var classHeight = $('.autoheight').data("height");
		if(classHeight) {
			var classCheck = $('.autoheight').data("check");
			var heightCheck = $('.'+classCheck).height();
			var finalHeight = (height - heightCheck) - 35;
			$('.autoheight').css( "height", finalHeight+"px" );
			$('.autoheight').css( "min-height", finalHeight+"px" );
		} else {

			$('.autoheight').css( "height", height+"px" );
			$('.autoheight').css( "min-height", height+"px" );
			
		}
	}	

	sectionHeight();

});

$( window ).resize(function() {
	/*
  	var height = $(this).height();   // returns height of browser viewport
	var width = $(this).width();   // returns height of browser viewport
	//console.log(height + " - " +width);

	$('.autowidth').css( "width", width+"px" );
	$('.autowidth').css( "min-width", width+"px" );
	*/

});

})(jQuery);