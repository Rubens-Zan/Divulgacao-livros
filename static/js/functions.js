$(function(){ 
	$('.mosaico .container .mosaico-wraper').slick({
		centerMode: false,
		slidesToShow:4,
		arrow: false,
		autoplay: true,
  		autoplaySpeed: 2000,
		responsive:[
			 
			{
                breakpoint:1000,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:3
                }
            },
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:2
                }
            },

            {
                breakpoint:580,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:1
                }
            },

		]
	});
        /*Fade in effect -> commas */
	$(window).on("load",function() {               
		$(window).scroll(function() {
			let windowBottom = $(this).scrollTop() + $(this).innerHeight() ;
			$(".aspas").each(function() {
			
			let objectBottom = $(this).offset().top + $(this).outerHeight();
			
			
			if (objectBottom < windowBottom) { 
				if ($(this).css("opacity") == 0) {
					$(this).fadeTo(800, 1);
				}
			} 
			});
		}).scroll(); 
	});
})