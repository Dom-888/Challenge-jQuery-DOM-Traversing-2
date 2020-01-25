
$(document).ready(function(){

    // When a colored panel is clicked, all panels vanish
    // $('.theButton').click(function(){
    //     $('.theButton').hide();
    // });

    // When a colored panel is clicked, just that panel disappears
    // $('.theButton').click(function(){
    //     $(this).hide();
    // });

    // When a panel is clicked, all siblings fade to 10% opacity
    $('.theButton').click(function(){
        $(this).parent().siblings().fadeTo(1000, .5);
    });

    // When reset is clicked, all panels revert to full opacity
    $('.superButton').click(function(){
        $('.container').fadeTo(1000, 1);
    });

//turns panel background black on mouseenter
$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });

 //returns to original colour on mouseout 
$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });
});