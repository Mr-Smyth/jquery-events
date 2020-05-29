$(document).ready(function() {
 

 	$("#stream1_btn").on('click',function() {
 		$(".stream1").show();
        $(".stream2").show();
        $(".stream3").show();
	  	$(".stream1").hide(10000);
        $(".stream2").hide(10000);
        $(".stream3").hide(10000);
        $(".stream1").toggle(1000);
        $(".stream2").toggle(1000);
        $(".stream3").toggle(1000);
        $(".stream1").slideDown(2000);
        $(".stream2").slideDown(2000);
        $(".stream3").slideDown(2000);
        $(".stream1").show();
        $(".stream2").show();
        $(".stream3").show();
        $(".stream1").slideUp(5000);
        $(".stream2").slideUp(5000);
        $(".stream3").slideUp(5000);
        $(".stream1").slideToggle(1000);
        $(".stream2").slideToggle(1000);
        $(".stream3").slideToggle(1000);
        $(".stream1").fadeOut(2000);
        $(".stream2").fadeOut(2000);
        $(".stream3").fadeOut(2000);
        $(".stream1").fadeIn(4000);
        $(".stream2").fadeIn(4000);
        $(".stream3").fadeIn(4000);
        $(".stream1").fadeTo(3000, 0.5);
        $(".stream2").fadeTo(3000, 0.5);
        $(".stream3").fadeTo(3000, 0.5);
	});
	/* $("#stream2_btn").click(function() {
		$(".stream1").toggle(2000);
		$(".stream2").toggle(2000);
		$(".stream3").toggle(2000);
	  	
	}); */
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
