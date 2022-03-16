$(document).ready(function(lol){
  $("#OpeningCont").css("display", "grid")
});
$(document).ready(function(qol){
  $(document).delay(4000).queue(function(){
    $("#OpeningText").css("display", "grid");
    $("#OpeningCont").css("display", "none");
  });
});
