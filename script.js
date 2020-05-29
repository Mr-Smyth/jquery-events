$(document).ready(function() {
 

 	$("#stream1_btn").click(function() {
 		$(".stream1").hide(2000);
		$(".stream2").hide(2000);
		$(".stream3").hide(2000);
	  	
	});
	$("#stream2_btn").click(function() {
		$(".stream1").toggle(2000);
		$(".stream2").toggle(2000);
		$(".stream3").toggle(2000);
	  	
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
