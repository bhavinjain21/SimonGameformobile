var a = $('h1').html();
$("h1").html('');
for(var i = 0;i<a.length;i++){
  var b = a.substr(i,1) ;
  //console.log(b);
  var c = "<h1 class ='box'>"+b+" </h1>";
  // console.log(c);
  $("h1").append(c);
}
