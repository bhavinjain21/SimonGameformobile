$("h1").addClass("box");
window.addEventListener("DOMContentLoaded", event => {
  const audio = new Audio("bgn.mp3");
  audio.volume = 0.7;
  audio.play();
});

$(".start").click(function (){
  var b = new Audio("start.mp3");
  b.play();
});
