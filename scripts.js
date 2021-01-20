$(document).ready(function(){
  $(".img").hover(function(){
    $(".bodyP").addClass("adamfade");
  }, function () {
    $(".bodyP").removeClass("adamfade");
  });
});
