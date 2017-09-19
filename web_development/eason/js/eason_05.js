
window.onload = function(){
	var oBanner = document.getElementsByClassName('banner')[0];
	var oBannerImg = document.getElementById('banner-img');
	var src = ['banner.jpg', 'banner_01.jpg', 'banner_02.jpg'];
	var num = 0;
	
	var oDot = document.getElementById('dot');
	var aSpan = oDot.getElementsByTagName('span');
	
	function changeBanner(){
		num++;
		if(num == src.length){
			num = 0;
		}
		oBannerImg.src = 'imgs/index/' + src[num];
		for(var i=0; i<src.length; i++){
			aSpan[i].className = '';
		}
		aSpan[num].className = 'white';
	}
	var timer1 = setInterval(changeBanner, 1000);
	oBanner.onmouseover = function (){
		clearInterval(timer1);
	}
	oBanner.onmouseout = function (){
		timer1 = setInterval(changeBanner, 1000);
	}
	for(var i=0; i<aSpan.length; i++){
		aSpan[i].index = i;
		aSpan[i].onclick = function(){
			clearInterval(timer1);
			oBannerImg.src = 'imgs/index/' + src[this.index];
			for(var i=0; i<aSpan.length; i++){
				aSpan[i].className = 'none';
			}
			this.className = 'white';
		}
	}
	
	
	
	
//	var odiv = document.getElementById('div1');
//	var oul = odiv.getElementsByTagName('ul')[0];
//	var ali = oul.getElementsByTagName('li');
////	oul.innerHTML=oul.innerHTML+oul.innerHTML;
//	oul.style.width=ali[0].offsetWidth*ali.length+'px';
//	function move(){
//		if(oul.offsetLeft<-oul.offsetWidth/2){
//			oul.style.left='0';
//		}
//		if(oul.offsetLeft>0){
//			oul.style.left=-oul.offsetWidth/2+'px'
//		}
////		oul.style.left=oul.offsetLeft+spa+'px';
//	}
//	var timer = setInterval(move,30)
//	
//	odiv.onmousemove=function(){clearInterval(timer);}
//	odiv.onmouseout=function(){timer = setInterval(move,30)};
		
	
	
	
	
}

/*
	var oProImg = document.getElementById('pro-img');
	var aLi = oProImg.getElementsByTagName('li');
	for(var i=0; i<aLi.length; i++){
		aLi[i].style.left = 260 * i + 'px';
	}
//	alert(aLi.length);
	var leftArrow = document.getElementById('arrow-left');
	var rightArrow = document.getElementById('arrow-right');
	
	var timer = setInterval(proMove, 2000);
	
	leftArrow.onclick = function(){
		clearInterval(timer);
		proMove();
		timer = setInterval(proMove, 2000);
	}

	
	function proMove(){
//		for(var i=0; i<aLi.length; i++){
////			aLi[i].style.left = 260 * (i-1) + 'px';
//			aLi[i].style.WebkitAnimation = 'mynewmove 1s infinite';
//		}

		aLi[0].style.WebkitAnimation = 'mynewmove 2s';		
		aLi[1].style.WebkitAnimation = 'mynewmove1 2s';		
		aLi[2].style.WebkitAnimation = 'mynewmove2 2s';		
		aLi[3].style.WebkitAnimation = 'mynewmove3 2s';		
		aLi[4].style.WebkitAnimation = 'mynewmove4 2s';		


		aLi[aLi.length-1].style.display = 'block';
		oProImg.appendChild(aLi[0]);
	}

	oProImg.onmouseover = function(){
		clearInterval(timer);
	}
	oProImg.onmouseout = function(){
		timer = setInterval(proMove, 2000);
	}
}
*/























