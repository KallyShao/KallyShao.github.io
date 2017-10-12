$('.font_text').each(function() {
	var len = $(this).html().length;
	//console.log(len);
	var arr = ['one1','two1','three1','four1','five1','seven1','eight1'];
	var end = Math.ceil(len / arr.length);
	for(var i = 0; i<arr.length; i++) {
		var div = $('<div></div>');
		div.addClass(arr[i]);
		// '/<br>/'.$(this).text()
		div.html($(this).html().substr(i*end , end));
		$(this).parent().append(div);
	}
		$(this).html('');
});
function add() {
var str = '';
str += "<style>.boxbasic:hover .one1, .basic1{-webkit-transform:translate(0,0) rotate(0);-moz-transform:translate(0,0) rotate(0);-o-transform:translate(0,0) rotate(0);-ms-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}.boxbasic:hover .two1 , .basic2{-webkit-transform:translate(0,0) rotateX(0) rotate(0);-moz-transform:translate(0,0) rotateX(0) rotate(0);-o-transform:translate(0,0) rotateX(0) rotate(0);-ms-transform:translate(0,0) rotateX(0) rotate(0);transform:translate(0,0) rotateX(0) rotate(0)}.boxbasic:hover .three1 {-webkit-transform:translate(0,0) rotate(0);-moz-transform:translate(0,0) rotate(0);-o-transform:translate(0,0) rotate(0);-ms-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}.boxbasic:hover .four1 , .basic4{-webkit-transform:translate(0,0) rotate(0);-moz-transform:translate(0,0) rotate(0);-o-transform:translate(0,0) rotate(0);-ms-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}.boxbasic:hover .five1 , .basic3{-webkit-transform:translate(0,0) rotate(0);-moz-transform:translate(0,0) rotate(0);-o-transform:translate(0,0) rotate(0);-ms-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}.boxbasic:hover .seven1{-webkit-transform:translate(0,0) rotate(0);-moz-transform:translate(0,0) rotate(0);-o-transform:translate(0,0) rotate(0);-ms-transform:translate(0,0) rotate(0);transform:translate(0,0) rotate(0)}.boxbasic:hover .eight1{-webkit-transform:translate(0,0) rotateY(0) rotate(0);-moz-transform:translate(0,0) rotateY(0) rotate(0);-o-transform:translate(0,0) rotateY(0) rotate(0);-ms-transform:translate(0,0) rotateY(0) rotate(0);transform:translate(0,0) rotateY(0) rotate(0)}</style>";
font_joint.innerHTML = str;
}
function random(min,max){

return Math.floor(min+Math.random()*(max-min));

}

function rm () {
	var a1=random(-331 , 0)+'px',
		a2=random(-45 , 0)+ 'px',
		b1=random(300 , 0)+ 'px',			
		b2=random(-200 , 0)+ 'px',
		c1=random(300 , 0)+ 'px',
		c2=random(200 , 0)+ 'px',
		d1=random(220 , 0)+ 'px',
		d2=random(70 , 0)+ 'px',
		e1=random(-200 , 0)+ 'px',
		e2=random(0 , 100)+ 'px',
		f1=random(-200 , 0)+ 'px',
		f2=random(80 , 0)+ 'px',
		g1=random(150 , 0)+ 'px',
		g2=random(-50 , 0)+ 'px',

		a3=random(-80 , 0) + 'deg',
		b3=random(-180 , 0) + 'deg',
		b4=random(10 , 0) + 'deg',
		c3=random(135 , 0) + 'deg',
		d3=random(45 , 0) + 'deg',
		e3=random(0, -90) + 'deg',
		f3=random(-135 , 0) + 'deg',
		g3=random(180 , 0) + 'deg',
		g4=random(20 , 0) + 'deg';

	var str = '';
	str += '<style>.one1 {-webkit-transform:translate('+a1+','+a2+') rotate('+a3+');-moz-transform:translate('+a1+','+a2+') rotate('+a3+');-o-transform:translate('+a1+','+a2+') rotate('+a3+');-ms-transform:translate('+a1+','+a2+') rotate('+a3+');transform:translate('+a1+','+a2+') rotate('+a3+')}.basic1{-webkit-transform:translate(-231px,-45px) rotate(-40deg);-moz-transform:translate(-231px,-45px) rotate(-40deg);-o-transform:translate(-231px,-45px) rotate(-40deg);-ms-transform:translate(-231px,-45px) rotate(-40deg);transform:translate(-231px,-45px) rotate(-40deg);}.two1 {-webkit-transform:translate('+b1+','+b2+') rotateX('+b3+') rotate('+b4+');-moz-transform:translate('+b1+','+b2+') rotateX('+b3+') rotate('+b4+');-o-transform:translate('+b1+','+b2+') rotateX('+b3+') rotate('+b4+');-ms-transform:translate('+b1+','+b2+') rotateX('+b3+') rotate('+b4+');transform:translate('+b1+','+b2+') rotateX('+b3+') rotate('+b4+')} .basic2{-webkit-transform:translate(200px,-100px) rotate(10deg);-moz-transform:translate(200px,-100px) rotate(10deg);-o-transform:translate(200px,-100px) rotate(10deg);-ms-transform:translate(200px,-100px) rotate(10deg);transform:translate(200px,-100px) rotate(10deg)}.three1 {-webkit-transform:translate('+c1+','+c2+') rotate('+c3+');-moz-transform:translate('+c1+','+c2+') rotate('+c3+');-o-transform:translate('+c1+','+c2+') rotate('+c3+');-ms-transform:translate('+c1+','+c2+') rotate('+c3+');transform:translate('+c1+','+c2+') rotate('+c3+')}.four1{-webkit-transform:translate('+d1+','+d2+') rotate('+d3+');-moz-transform:translate('+d1+','+d2+') rotate('+d3+');-o-transform:translate('+d1+','+d2+') rotate('+d3+');-ms-transform:translate('+d1+','+d2+') rotate('+d3+');transform:translate('+d1+','+d2+') rotate('+d3+')}.basic4{-webkit-transform:translate(220px,70px) rotate(10deg);-moz-transform:translate(220px,70px) rotate(10deg);-o-transform:translate(220px,70px) rotate(10deg);-ms-transform:translate(220px,70px) rotate(10deg);transform:translate(220px,70px) rotate(10deg)}.five1{-webkit-transform:translate('+e1+','+e2+') rotate('+e3+');-moz-transform:translate('+e1+','+e2+') rotate('+e3+');-o-transform:translate('+e1+','+e2+') rotate('+e3+');-ms-transform:translate('+e1+','+e2+') rotate('+e3+');transform:translate('+e1+','+e2+') rotate('+e3+')}.basic3{-webkit-transform:translate(-50px,50px) rotate(-10deg);-moz-transform:translate(-50px,50px) rotate(-10deg);-o-transform:translate(-50px,50px) rotate(-10deg);-ms-transform:translate(-50px,50px) rotate(-10deg);transform:translate(-50px,50px) rotate(-10deg)}.seven1{-webkit-transform:translate('+f1+','+f2+') rotate('+f3+');-moz-transform:translate('+f1+','+f2+') rotate('+f3+');-o-transform:translate('+f1+','+f2+') rotate('+f3+');-ms-transform:translate('+f1+','+f2+') rotate('+f3+');transform:translate('+f1+','+f2+') rotate('+f3+')}.eight1 {-webkit-transform:translate('+g1+','+g2+') rotateY('+g3+') rotate('+g4+');-moz-transform:translate('+g1+','+g2+') rotateY('+g3+') rotate('+g4+');-o-transform:translate('+g1+','+g2+') rotateY('+g3+') rotate('+g4+');-ms-transform:translate('+g1+','+g2+') rotateY('+g3+') rotate('+g4+');transform:translate('+g1+','+g2+') rotateY('+g3+') rotate('+g4+')}</style>';
	font_joint.innerHTML = str;
}
$(document).ready(function(){



$('.boxbasic').mouseover(function() {
	add();
})
rm();

});
function effect1 () {
	rm();
	setTimeout(add, 2000);
}