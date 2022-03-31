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
var cipik = '<div class="ghostA"><img class="ghostimage" src="images/ghist.png" alt=""><div class="stick"></div></div>'
$(document).ready(function(){
  var viewportwidth = $(document).width();
  var counter = 0;
  var speedinc = 0;
  var hithit = 0;
  var hp = 200;
  var miss = 0;
  let randomHi = Math.random()*400+100;
  $(".button-wrap").click(function(){
  var timer = setInterval(function(){
    var fff = $("#result").css("display");
    // console.log(fff);
    let randomA = Math.random()*200+300;
    counter++;
    if (miss == 1) {
      $("#hpt").css("display", "none");
    }
    if (miss == 2) {
      $("#hps").css("display", "none");
    }
    if (miss == 3) {
      $("#hpf").css("display", "none");
    }
    speedinc = speedinc + 50;
    if (hithit == 20) {
      $("#game").css("display", "none");
      $("#result").css("display", "grid");
      $("#count").text(`Ваш результат
${hithit}/${miss}`);
    } else if (miss == 3) {
      console.log(miss);
      $("#game").css("display", "none");
      $("#result").css("display", "grid");
      $("#count").text(`Ваш результат
${hithit}/${miss}`);
    }
    if (fff === "grid") {
      $("#result").delay(3000).queue(function(){
        if (hithit >= 15) {
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
    $(".mecha").append(cipik);
    $(".ghostA").animate({ top: `${randomHi}`
    }, 1000, "linear", function(){
      this.remove
    })
    $(".ghost").animate({ left: `${viewportwidth}px`,
                          top: `${randomA}px`
}, 3000 - speedinc, "linear", function() {
  var lol = $(".ghost").offset().left;
  // console.log(lol);
  this.remove();
  if (lol === viewportwidth) {
    miss += 1;
    console.log(miss);
    this.remove();
  }
},
  );
    $(".ghost").click(function(){
      hithit++;
      console.log(hithit);
      $("#cunt").text(hithit);
      this.remove();
    })
    $(".ghostA").click(function(){
      hithit++;
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

$(document).ready(function() {
  $(".button-wrap2").click(function() {
    $("#badFinal").css("display", "none");
    $("#OpeningText").css("display", "grid");
     counter = 0;
     speedinc = 0;
     hithit = 0;
     miss = 0;
  })
})
