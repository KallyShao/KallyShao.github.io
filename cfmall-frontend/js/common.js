$(".nav").find(".dropdown").parent("li").mouseover(function(){
	$(this).find(".dropdown").show();
})
$(".nav").find(".dropdown").parent("li").mouseout(function(){
	$(this).find(".dropdown").hide();
})

