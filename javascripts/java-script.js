$(document).ready(function() {
  $(".loading").css("display", "flex");
});
$(document).ready(function(){
  $("#result").css("display", "none");
})
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
  })
})
$(document).ready(function(){
  var timer = setInterval(function(){
    var cloudHran = Math.random()*100 + 80;
    $("#smallerCloudsUp").animate({ marginTop: `${cloudHran}px`}, 3000);
  }, 3000);
})
$(document).ready(function(){
  var timer = setInterval(function(){
    var cloudHran = Math.random()*100 + 80;
    $("#smallerCloudsDown").animate({ marginTop: `${cloudHran}px`}, 3000);
  }, 3000);
})


var pipik = '<div class="ghost"><img class="ghostimage" src="images/ghist.png" alt=""><div class="stick"></div></div>'
$(document).ready(function(){
  var viewportwidth = $(document).width();
  var counter = 0;
  var speedinc = 0;
  var hithit = 0;
  var hp = 200;
  var miss = 0;
  $(".button-wrap").click(function(){
  var timer = setInterval(function(){
    var fff = $("#result").css("display");
    console.log(fff);
    let randomA = Math.random()*200+300;
    counter++;
    speedinc = speedinc + 50;
    if (hithit == 2) {
      $("#game").css("display", "none");
      $("#result").css("display", "grid");
    }
    if (fff === "grid") {
      $("#result").delay(3000).queue(function(){
        if (hithit >= 20) {
          $("#goodFinal").css("display", "grid");
          $("#result").css("display", "none");
        } else {
          $("#badFinal").css("display", "grid");
          $("#result").css("display", "none");

        }
        $(this).dequeue();
      })
    }
    $(".mech").append(pipik);
    $(".ghost").animate({ left: `${viewportwidth}px`,
                          top: `${randomA}px`
}, 1200 - speedinc, "linear", function() {
  var lol = $(".ghost").offset().left;
  console.log(lol);
  this.remove();
  if (lol === viewportwidth) {
    miss += 1;
    console.log("miss");
    this.remove();
  }
},
  );
    $(".ghost").click(function(){
      hithit++;
      $("#count").text(`Ваш результат:
${hithit}/${miss}`);
      console.log(hithit);
      $("#cunt").text(hithit);
      this.remove();
    })
    if(counter>=100){
      clearInterval(timer)
    }
    else if (fff === "grid") {
      clearInterval(timer)
    }
  }, 4000)
})
})
