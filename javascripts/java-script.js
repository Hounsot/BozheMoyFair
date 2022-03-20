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
$(document).ready(function(){
  var viewportwidth = $(document).width();
  var counter = 0;
  var speedinc = 0;
  var pipik = '<div class="ghost"><img src="images/ghostface.svg" alt=""><div class="stick"></div></div>'
  $(".button-wrap").click(function(){
  var timer = setInterval(function(){
    let randomA = Math.random()*200+300;
    // let randomB = Math.random()*100;
    // let randomC = Math.random()*100+400;
    // $.keyframes.define([{
    //   name: 'sereza',
    //   '0%': {top:`${randomA}px`},
    //   '50%': {top:`${randomB}px`},
    //   '100%': {top: `${randomC}px`}
    // }]);
    counter++;
    speedinc = speedinc + 100;
    console.log(viewportwidth);
    console.log(randomA);
    console.log(counter);
    console.log(speedinc);

    // console.log(randomB);
    // console.log(randomC);
    $(".mech").append(pipik);
    // $(".ghost").playKeyframe({
    //   name: 'sereza',
    //   duration: 4000
    // });
    $(".ghost").animate({ left: `${viewportwidth}px`,
                          top: `${randomA}px`
}, 4000 - speedinc, "linear", function(){
      this.remove();
    });
    // if (offsetik == viewportwidth) {
    //   pipik.remove();
    // }
    if(counter>=100){
      clearInterval(timer)
    }
  }, 2000)
})
})
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
