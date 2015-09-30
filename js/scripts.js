var counter = 10;
var testCountdown = setInterval(function() {
  console.log(counter);
  counter--
  if (counter === 0) {
    console.log("you lose!");
    clearInterval(testCountdown);
  }
}, 1000);
