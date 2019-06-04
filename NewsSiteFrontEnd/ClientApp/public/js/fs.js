jQuery(document).ready(function(){
	
$('.carousel').carousel({
    interval: 3000
    })
	
	$(".pic-portfolio").bind("mouseenter", function(){
        $(this).children(".img-hover").css("display","inline-block");
	    });
		$(".pic-portfolio").bind("mouseleave", function(){
         $(this).children(".img-hover").css("display","none");
	    });
	
});
	   


		
