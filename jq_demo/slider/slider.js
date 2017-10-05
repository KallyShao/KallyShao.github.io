// var oDiv = document.getElementById('wrap');
// var oUl = oDiv.getElementsByTagName('ul')[0];
// var timer = null;
// var speed = -1;
// var aA = oDiv.getElementsByTagName('a');
// oUl.innerHTML += oUl.innerHTML;

// timer = setInterval(move, 30);

// function move(){
// 	if(oUl.offsetLeft < -oUl.offsetWidth/2){
// 		oUl.style.left = '0';
// 	}
// 	if(oUl.offsetLeft > 0){
// 		oUl.style.left = -oUl.offsetWidth/2 + 'px';
// 	}
// 	oUl.style.left = oUl.offsetLeft + speed + 'px';
// }

// oDiv.onmouseover = function(){
// 	aA[0].style.display = 'block';
// 	aA[1].style.display = 'block';

// 	clearInterval(timer);
// }

// oDiv.onmouseout = function(){
// 	aA[0].style.display = 'none';
// 	aA[1].style.display = 'none';
// 	timer = setInterval(move, 30);
// }

// aA[0].onclick = function(){
// 	speed = -1;
// }
// aA[1].onclick = function(){
// 	speed = 1;
// }

//jq写法
$(function(){
	var html = $('#list').html();
	$('#list').append(html);
	var speed = -1;
	var timer = null;
	var left = 0;

	function move(){
		if(left < -$('#list').width()/2){
			$('#list').css('left', 0);
		}
		if(left > 0){
			$('#list').css('left', -$('#list').width()/2);
		}
		left = parseInt($('#list').css('left')) + speed;
		$('#list').css('left', left);
	}
	timer = setInterval(move, 30);

	$('#wrap').hover(function(){
		$(this).find('a').css('display', 'block');
		clearInterval(timer);
	}, function(){
		$(this).find('a').css('display', 'none');
		timer = setInterval(move, 30);
	})

	$('#wrap').find('a').eq(0).click(function(){
		speed = -1;
	})
	$('#wrap').find('a').eq(1).click(function(){
		speed = 1;
	})

})