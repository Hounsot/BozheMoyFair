$(document).ready(function() {
  $(".loading").css("display", "flex");
});

$(document).ready(function() {
  $(document).delay(2500).queue(function() {
    $(".loading").toggleClass("transition");
    $(this).dequeue();
  });
});
$(document).ready(function() {
  $(document).delay(3000).queue(function() {
    $(".loading").css("display", "none");
    $("#OpeningCont").css("display", "grid");
    $(this).dequeue();
  });
});

$(document).ready(function() {
  $(document).delay(6000).queue(function() {
    $("#OpeningText").css("display", "grid");
    $("#OpeningCont").css("display", "none");
    $(this).dequeue();
  });
});

$(document).ready(function() {
  $(".button-wrap").click(function() {
    $("#OpeningText").css("display", "none");
    $("#game").css("display", "grid");
    // var vpw = $(document).width();
    // var leq = $('.fire').css('margin-left');
    // console.log(vpw);
    // console.log(leq);
    // $('.fire').animate({ marginLeft: `${vpw}px`}, 500);
  })
})

var intervalId = window.setInterval(function(){
  var vpw = $(document).width();
  var leq = $('.fire').css('margin-left');
  console.log(vpw);
  console.log(leq);
  $("#game").css("display", "grid");
  $('.fire').animate({ marginLeft: `${vpw}px`}, 500);
}, 5000);
// $(document).ready(){
//   $(this
// }
// $(document).ready(function() {
//   if (leq > vpw) {
//     $(".hellFire").append('<img class="fire" src="images/Hellfire.svg" alt="">');
//   }
// })
