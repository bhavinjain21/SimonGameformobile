var colors = ["red","blue","green","yellow"];
var gp = [];
var ucp = [];
var score = 0;
var started = false;
if(score===5){
   $("body").addClass("bgc");
    }
$(".restart").click(function() {
  if (!started) {
    $("h1").text("...");
    $("h2").text("Score - 0");
    nextSeq();
    started = true;
    $(".restart").animate({opacity:0});
  }
});
$(".btn").click(function(){
  var c = $(this).attr("id");
  ucp.push(c);
  ps(c);
  animatePress(c);
  
  check(ucp.length-1);
});
function check(level){
  
  if(gp[level]===ucp[level]){
    
    
    if(ucp.length===gp.length){
      $("h2").text("Score - "+score);
    setTimeout(function(){
      nextSeq();
    },1000);
    }
  }else{
    ps("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over😖😖 Click to restart");
    
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      setTimeout(function () {
        $("h1").text("Play Again");
      }, 1000);
      $(".restart").text("Restart");
      $(".restart").animate({opacity:1});
      $(".restart").click(function(){
        location.reload();
      });
      
  }  
}

function nextSeq(){
  ucp=[];
  score++;
  
  var a = Math.floor(Math.random()*4);
  var ranCol = colors[a];
  gp.push(ranCol);
  $("#"+ranCol).fadeIn(100).fadeOut(100).fadeIn(100);
   ps(ranCol);
   }
function ps(name){
  var audio = new Audio(name+".mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
function startOver() {
  score = 0;
  gamePattern = [];
  started = false;
       }
