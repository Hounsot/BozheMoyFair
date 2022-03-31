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
  })
})
$(document).ready(function(){
  var timer = setInterval(function(){
    var cloudHran = Math.random()*100 + 80;
    $("#smallerCloudsUp").animate({ marginTop: `${cloudHran}px`}, 3000);
  }, 3000);
})


// $(document).ready(function(){
//   $(".button-wrap").click(function(){
//     var = intervalId = window.setInterval(function(z){
//       $("#gameField").append('<img class="fire" src="images/Hellfire.svg" alt="">') 5000;
//     })
//   })
// })
// $(document).ready(function(){
//   vpw =
//   if () {
//
//   }
// })

// var counter = 0;
// var viewportwidth = $(document).width();
//   $(".button-wrap").click(function() {
//     console.log(viewportwidth);
//     var timer = setInterval(function() {
//         counter++;
//         $(".mech").append('<img class="fire" src="images/Hellfire.svg" alt="">');
//         $(".fire").animate({ left: `${viewportwidth}px`}, 4000);
//         // update(url, baseName(data));
//         if(counter>=10){
//             clearInterval(timer)
//         }
//     }, 1000);
//   });

// $(".button-wrap").click(function(){
//   var counter = 0;
//   var timer = setInterval(function () {
//       counter++;
//       console.log(counter);
//       if(counter>=10){
//           clearInterval(timer)
//       }
//   }, 1000);
// })

// $(document).ready(function(){
//   var viewportwidth = $(document).width();
//   $(".button-wrap").click(function(){
//     $(".mech").append('<div class="ghost"><img src="images/ghostface.svg" alt=""><div class="stick"></div></div>');
//   });
//   var counter = 0;
//   var timer = setInterval(function(){
//     counter++
//     $(".ghost").animate({ left: `${viewportwidth}px`}, 20000);
//     if(counter>=100){
//       clearInterval(timer)
//     }
//   }, 1000);
// })
var pipik = '<div class="ghost"><img class="ghostimage" src="images/ghist.png" alt=""><div class="stick"></div></div>'
$(document).ready(function(){
  var viewportwidth = $(document).width();
  // var lol = $(".ghost").offset().left;
  var counter = 0;
  var speedinc = 0;
  var hithit = 0;
  var hp = 200;
  var miss = 0;
  $(".button-wrap").click(function(){
  var timer = setInterval(function(){
    let randomA = Math.random()*200+300;
    counter++;
    speedinc = speedinc + 50;
    // console.log($(".ghost").offset())
    // console.log(viewportwidth);
    // console.log(randomA);
    // console.log(counter);
    // console.log(speedinc);
    if (hithit == 15) {
      $("#game").css("display", "none");
      $("#result").css("display", "grid");
      $("#result").delay(3000).queue(function(){
        if (hithit > 20) {
          $("#result").css("display", "none");
          $("#goodFinal").css("display", "grid");
        }
        else {
          $("#result").css("display", "none");
          $("#badFinal").css("display", "grid");
        }
      });
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
    // console.log(lol);
    console.log("miss");
    this.remove();
  }
},
// function(){
//     console.log("lol");
//       this.remove();
//     }
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
  }, 2000)
})
})

// $(document).ready(function(){
//   $("").delay(3000).queue(function(){
//     if (hithit > 20) {
//       $("#result").css("display", "none");
//       $("#goodFinal").css("display", "grid");
//     }
//     else {
//       $("#result").css("display", "none");
//       $("#badFinal").css("display", "grid");
//     }
//   })
// })

// $(document).ready(function(){
// var hit = 0
// $(".ghost").click(function(){
//   hit++;
//   console.log(hit);
//   $(".ghost").animate({opacity: 0}, 100, function(){
//     this.remove();
//   });
// })
// });
// $(document).ready(function(){
//   $(function () {
//     let count = 0;
//     $(".ghost").click(function () {
//       count += 1;
//       console.log(count);
//       if (count == 1) {
//         $(".ghost").css("opacity", "0");
//       }
//     });
//   });
// })

// $(document).ready(function(){
//   console.log("hello");
//   $(".ghost").click(function(){
//     console.log("privet");
//   })
// })

//задаем функции условие

// += присваивание
// <div class="ghost">
//   <img src="ghostface.svg" alt="">
//   <div class="stick">
//   </div>
// </div>
//
// $(document).ready(function(){
//   $('.button-wrap').click(function(){
//     var intervalId = window.setInterval(function(){
//       var vpw = $(document).width();
//       var leq = $('.fire').css('margin-left');
//       console.log(vpw);
//       console.log(leq);
//       $('.fire').animate({ marginLeft: `${vpw}px`}, 3000);
//       $(".hellFire").append('<img class="fire" src="images/Hellfire.svg" alt="">');
//     }, 3000);
//   })
// })
// $(document).ready(){
//   $(this
// }
// $(document).ready(function() {
//   if (leq > vpw) {
//     $(".hellFire").append('<img class="fire" src="images/Hellfire.svg" alt="">');
//   }
// })
