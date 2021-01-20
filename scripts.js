$(document).ready(function(){
  $(".twitter").hover(function(){
    $(".header-logo").addClass("twitter_border");
  }, function () {
    $(".header-logo").removeClass("twitter_border");
  });
});
