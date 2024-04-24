$(window).on('load',function() {

	// $(".loader").delay(2000).fadeOut("fast");
	$(".loader-wrapper").delay(2000).fadeOut("fast");

    
});
$(window).scroll(function(){

    if ($(this).scrollTop() > 600){

        $('header').addClass("fixed-header");

    }else{
        
        $('header').removeClass("fixed-header");

    }


    if ($(this).scrollTop() > 400){

        $('.back-to-top').addClass("top");

    }else{
        
        $('.back-to-top').removeClass("top");

    }


    
})
