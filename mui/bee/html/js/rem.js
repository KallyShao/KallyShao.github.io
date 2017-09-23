(function(){
  var html = document.getElementsByTagName("html")[0];
  var hwidth = html.getBoundingClientRect().width;
  html.style.fontSize = hwidth / 15 + "px";
})()