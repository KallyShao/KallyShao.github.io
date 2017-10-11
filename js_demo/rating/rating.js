var oUl = document.getElementById('list');
var aLi = oUl.getElementsByTagName('li');
var num = 2;	//默认点亮的星星数量
for (var i = 0; i < aLi.length; i++){
	aLi[i].index = i;
	aLi[i].onmouseover = function(){
		lightOn(this.index+1);
	}
	aLi[i].onmouseout = function(){
		lightOn(num);
	}
	aLi[i].onclick = function(){
		num = this.index + 1;
		oUl.onmouseout = function(){
			lightOn(num);
		}
	}
}

function lightOn(num){	
	for(var i=0; i<aLi.length; i++){
		if(i < num){
			if(num <= 2){
				aLi[i].style.cssText = "background: url(fav.png) no-repeat 0 0/50px;";
			}else{
				aLi[i].style.cssText = "background: url(star-full.png) no-repeat 0 0/50px;";
			}
		}else{
			aLi[i].style.cssText = "background: url(star-empty.png) no-repeat 0 0/50px;";
		}
	}
}

lightOn(num);