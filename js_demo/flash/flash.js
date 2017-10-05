window.onload = function(){
	var oWrap = document.getElementById('wrap');
	var oUl1 = document.getElementById('big-pic');
	var oUl2 = document.getElementById('small-pic');

	var aLi1 = oUl1.getElementsByTagName('li');
	var aLi2 = oUl2.getElementsByTagName('li');

	var oP = document.getElementById('title');
	var aSpan1 = oP.getElementsByTagName('span');

	var aSpan2 = oUl1.getElementsByTagName('span');
	var aH1 = oUl1.getElementsByTagName('h1');
	var oTit = document.getElementById('title');
	var aSpan3 = oTit.getElementsByTagName('span');
	oUl2.style.width = (aLi2[0].offsetWidth + 10)*6 + 'px';
	var title = ["都市魅力", "古香古色", "沉浸舞步的舞者", 
	"名贵跑车",  "聆听天籁的精灵", "绚彩光芒"];
	
	aH1[0].onmouseover = aSpan2[0].onmouseover = function(){ 	//显示左右箭头
		move(aH1[0], 'opacity', 100);
	}
	aH1[0].onmouseout = aSpan2[0].onmouseout = function(){
		move(aH1[0], 'opacity', 0);
	}

	aH1[1].onmouseover = aSpan2[1].onmouseover = function(){ 	//显示左右箭头
		move(aH1[1], 'opacity', 100);
	}
	aH1[1].onmouseout = aSpan2[1].onmouseout = function(){
		move(aH1[1], 'opacity', 0);
	}

	var timer = null;
	var zIndex = 1;
	var iNow = 0;
	play(aLi1[0], iNow, zIndex);
	function play(obj, num, index){
		obj.style.zIndex = index;
		for(var i=0; i<aLi1.length; i++){
			aLi1[i].style.height = 0;
		}
		move(obj, 'height', 320);
		aSpan3[0].innerHTML = title[num];
		aSpan3[1].innerHTML = num + 1 + '/' + title.length;

	}

	function smallPicMove(num){
		for(var i=0; i<aLi2.length; i++){
			aLi2[i].style.opacity = 0.6;
		}
		move(aLi2[num], 'opacity', 100);
		if(num ==2 || num == 3){
			move(oUl2, 'left', -(num-1)*(aLi2[0].offsetWidth + 10));
		}else if(num ==4 || num == 5){
			move(oUl2, 'left', -3*(aLi2[0].offsetWidth + 10));
		}
		else{
			move(oUl2, 'left', 0);
		}
	}

	timer = setInterval(function(){
		autoPlay();			
	}, 2000)


	for(var i=0; i<aLi2.length; i++){
		aLi2[i].index = i;
		aLi2[i].onmouseover = function(){
			move(this, 'opacity', 100);
		}
		aLi2[i].onmouseout = function(){
			if(this.index != iNow){
				move(this, 'opacity', 60);
			}
		}
		aLi2[i].onclick = function(){
			if(iNow == this.index){
				return;
			}else{
				for(var i=0; i<aLi2.length; i++){
					aLi2[i].style.opacity = 0.6;
				}
				iNow = this.index;
				move(aLi2[iNow], 'opacity', 100);
				play(aLi1[iNow], iNow, zIndex);
			}
		}
	}

	oWrap.onmouseover = function(){
		clearInterval(timer);
	}
	oWrap.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(function(){
			autoPlay();		
		}, 2000)
	}

	aH1[1].onclick = function(){
		autoPlay();		
	}
	aH1[0].onclick = function(){
		iNow--;
		if(iNow < 0){
			iNow = 5;
		}
		zIndex++;
		play(aLi1[iNow], iNow, zIndex);
		smallPicMove(iNow);
	}

	function autoPlay(){
		iNow++;
		zIndex++;
		if(iNow > 5){
			iNow = 0;
		}
		play(aLi1[iNow], iNow, zIndex);
		smallPicMove(iNow);
	}
}