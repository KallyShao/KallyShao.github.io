


$('#banner > li').hide();
$('#banner > li').eq(0).show();
function check_lb () {
	
	$('.hd >li').each(function(i){
		if($(this).hasClass('on')) {
			if (i >= $('.hd >li').length ){i=0;}
			$('#menu > nav > li').eq(i).click();
			$('nav > a').eq(i).mouseenter();
		
			effect1();
		}
	});
}

$('nav > a').click(function() {
	$('nav > a').css('color' , 'black');
	$(this).css('color' , 'white');

	var i = Math.ceil($(this).index() / 2);
	if(!$('.hd >li').eq(i).hasClass('on')) {
		if(!$('.lb>li').is(':animated')){
			$('.hd >li').eq(i).mouseenter();
			effect1();
		}
	}else if($('nav > div').eq(i).css('display') == 'none') {
		var three = $('nav > div').eq(i);
		three.height($('#menu').height());
		three.css({
			background : '#202020',
			position : 'absolute',
			top : 0,
			right : -5/6*$('#menu').innerWidth(),
			width : 5/6*$('#menu').innerWidth(),
			height: $('#wrapper').height()
		});

		$("nav div ul").mCustomScrollbar();
		//demo fn
		$("nav ol>li>a").click(function(e){
			e.preventDefault();
			$(this).parent().siblings().children('ul').slideUp();
			$(this).parent().children('ul').slideDown("slow",function(){
				//console.log(111);
				var customScrollbar=$(this).parent().children('ul').find(".mCSB_scrollTools");
				customScrollbar.css({"opacity":0});
				$(this).parent().children('ul').mCustomScrollbar("update");
				customScrollbar.animate({opacity:1},"slow");
			});
		});


		three.find('ol>li>a').click(function(e) {
			$(this).css({color : 'white'});
			$(this).parent().siblings().children('a').css({color : '#4a4a4a'});
		})

		three.find('ul>li>a').click(function(){
			$(this).css({color : 'white'});
			$(this).parent().siblings().children('a').css({color : '#4a4a4a'});
		})

		$('.other_content').clone(true,true).appendTo(three);
		// glyphicon glyphicon-align-justify
		var more = $('<span class="glyphicon glyphicon-align-justify more_nav" ></span>');
		more.css({
			position : 'absolute',
			top : parseInt($('.logo2').css('marginTop')) + 12 + 'px',
			left : '0.005rem',
			cursor : 'pointer',
			color : 'white',
			fontSize : '0.02rem'
		});
		three.animate({right : 0 }, 250 , function () {
			$('#menu').append(more);
			$('.more_nav').click(function () {
				if(!$('nav > div').is(':animated')) {
					var _this = $('.more_nav');
					$('nav > div').animate({
						right : -5/6*$('#menu').innerWidth()
					}, 250 , function () {
						$('nav > div').hide();
						_this.remove();
						three.find('.other_content').remove();
					});
				}
			})
		});
		three.show();
	
	}
});

