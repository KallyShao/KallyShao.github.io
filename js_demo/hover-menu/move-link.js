	function getStyle(obj){
		if(obj.currentStyle){
			return obj.currentStyle
		}else{
			return getComputedStyle(obj);
		}
	}

	function move(obj, attr, iTarget, fn){
		var speed = 0;
		var alpha = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var cur = 0;
			if(attr == 'opacity'){
				cur = (getStyle(obj)[attr])*100;
			}else{
				cur = parseInt(getStyle(obj)[attr]);
			}
			var speed = (iTarget - cur) / 6;
			speed = cur > iTarget ? Math.floor(speed) : Math.ceil(speed); 

			if(cur == iTarget){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}else{
				if(attr == 'opacity'){
					alpha += speed;
					obj.style.opacity = alpha/100;
					obj.style.filter = 'alpha(opacity:' + alpha + ')';
				}else{
					obj.style[attr] = cur + speed + 'px';
				}
			}
		}, 30)
	}