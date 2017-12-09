$(".first-class-pro-list-img").mouseover(function(){
	$(this).siblings(".environment-info").show();
})
$(".environment-info").children().mouseover(function(){
	$(this).parent().show();
})
$(".environment-info").children().mouseout(function(){
	return false;
})
$(".environment-info").mouseout(function(){
    $(this).hide(); 
})