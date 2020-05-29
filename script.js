$(document).ready(function() {
 

 	$("#stream1_btn").on('click',function() {
 		$(".stream1").show().slideUp(2000).slideDown(2000).fadeTo(1000, 0.2);
        $(".stream2").show();
        $(".stream3").show();
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
