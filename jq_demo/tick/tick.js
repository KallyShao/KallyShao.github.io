// window.onload = function(){

// 	function getStr(){	//将当前时间存入一个字符串中
// 		var oDate = new Date();
// 		var y = oDate.getFullYear();
// 		var m = oDate.getMonth() + 1;
// 		var date = oDate.getDate();
// 		var h = oDate.getHours();
// 		var min = oDate.getMinutes();
// 		var sec = oDate.getSeconds();
// 		var week = oDate.getDay();

// 		var str = y + add0(m) + add0(date) + add0(h) + add0(min) + add0(sec) + week;
// 		return str;
// 	}

// 	function add0(n) {	//给一位数字补0，且转换字符串
// 		if(n<10){
// 			return '0' + n;
// 		}else{
// 			return '' + n;
// 		}

// 	}
	
// 	function refresh(){
// 		var aImg = document.getElementsByClassName('num');
// 		var oWeek = document.getElementsByClassName('num2')[0];
// 		var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
// 		var str = getStr();
// 		var len = str.length;
// 		var num = parseInt(str[len-1]);
// 		var timer = null;
// 		for(var i=0; i<len-1; i++){
// 			aImg[i].src = "images/" + str[i] + ".png";
// 		}
// 		oWeek.src = "images/" + arr[num-1] + ".png";
// 	}
// 	timer = setInterval(refresh, 1000);
// 	refresh();
// }

$(function(){
		function getStr(){	//将当前时间存入一个字符串中
			var oDate = new Date();
			var y = oDate.getFullYear();
			var m = oDate.getMonth() + 1;
			var date = oDate.getDate();
			var h = oDate.getHours();
			var min = oDate.getMinutes();
			var sec = oDate.getSeconds();
			var week = oDate.getDay();

			var str = y + add0(m) + add0(date) + add0(h) + add0(min) + add0(sec) + week;
			return str;
		}

		function add0(n) {	//给一位数字补0，且转换字符串
			if(n<10){
				return '0' + n;
			}else{
				return '' + n;
			}
		}
		var timer = null;

		function refresh(){
			var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
			var str = getStr();
			var len = str.length;
			var num = parseInt(str[len-1]);

			$('.num').each(function(){
				$(this).attr('src', 'images/' + str[$(this).index('.num')] + '.png');			
			});
			$('.num2').attr('src', 'images/' + arr[num-1] + '.png');
		}
		timer = setInterval(refresh, 1000);
		refresh();
})