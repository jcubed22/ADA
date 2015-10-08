// var readyForBlastOff = false;
//
// $(document).ready(function() {
//
//   function collision($div1, $div2) {
//     // gives us coordinates of first div
//     // relative to left and top of page
//     var x1 = $div1.offset().left;
//     var y1 = $div1.offset().top;
//
//     // gives us the height and width of the first div
//     // (true) means it will include margin
//     var h1 = $div1.outerHeight();
//     var w1 = $div1.outerWidth();
//
//     // adds the value of the top coordinate to the element's height
//     var b1 = y1 + h1;
//
//     // adds the value of the left coordinate to the element's width
//     var r1 = x1 + w1;
//
//     // do the same for the second div
//     var x2 = $div2.offset().left;
//     var y2 = $div2.offset().top;
//     var h2 = $div2.outerHeight();
//     var w2 = $div2.outerWidth();
//     var b2 = y2 + h2;
//     var r2 = x2 + w2;
//
//     // checks for cases where divs would not be colliding
//     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
//       return false;
//     }
//     return true;
//   }
//
//   // checks to detect for div collision every millisecond
//   window.setInterval(function() {
//     if ((collision($('#scope-goal'), $("#scope-drag")))) {
//       $("#check1").show();
//       $("#x1").hide();
//     } else {
//       $("#check1").hide();
//       $("#x1").show();
//     }
//   }, 100);
//
//   window.setInterval(function() {
//     if ((collision($('#function-goal'), $("#function-drag")))) {
//       $("#check2").show();
//       $("#x2").hide();
//     } else {
//       $("#check2").hide();
//       $("#x2").show();
//     }
//   }, 100);
//
//   window.setInterval(function() {
//     if ((collision($('#if-goal'), $("#if-drag")))) {
//       $("#check3").show();
//       $("#x3").hide();
//     } else {
//       $("#check3").hide();
//       $("#x3").show();
//     }
//   }, 100);
//
//   window.setInterval(function() {
//     if ((collision($('#launch-goal'), $("#launch-drag")))) {
//       $("#check4").show();
//       $("#x4").hide();
//     } else {
//       $("#check4").hide();
//       $("#x4").show();
//     }
//   }, 100);
//
//   //checks to see if all divs are in proper place
//   window.setInterval(function() {
//     if ((collision($('#launch-goal'), $("#launch-drag")))
//       &&(collision($('#if-goal'), $("#if-drag")))
//       &&(collision($('#function-goal'), $("#function-drag")))
//       &&(collision($('#scope-goal'), $("#scope-drag")))
//       ) {
//         readyForBlastOff = true;
//     }
//   }, 100);
// });
