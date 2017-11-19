$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();

	$("#portfolio-work .cell:not(.main)").click(function(){
		var item = $(this);
		if($("header .navbar-default .navbar-toggle").css("display") == "none"){
			item.off("click");
			item.animate({
			    width: $(".cell.main").width()
			  }, 200, function() {
			  		item.removeAttr("style");
					item.addClass("main");
			  });
			$('html, body').animate({
	            scrollTop: item.offset().top + 'px'
	        }, 'fast');
		}
	});



	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 10000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




