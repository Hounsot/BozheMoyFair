$(document).ready(function(){
  $(".loading").css("display", "flex");
});

$(document).ready(function(){
  $(document).delay(3000).queue(function(){
    $(".loading").toggleClass("transition");
    $(this).dequeue();
  });
});
$(document).ready(function(){
  $(document).delay(4000).queue(function(){
    $(".loading").css("display", "none");
    $("#OpeningCont").css("display", "grid");
    $(this).dequeue();
  });
});

$(document).ready(function(qol){
  $(document).delay(8000).queue(function(){
    $("#OpeningText").css("display", "grid");
    $("#OpeningCont").css("display", "none");
  });
});
//
// $(document).ready(function(qol){
//   $(document).delay(4000).queue(function(){
//     $("#OpeningText").css("display", "grid");
//     $("#OpeningCont").css("display", "none");
//   });
// });
