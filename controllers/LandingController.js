ada.controller('LandingCtrl', function LandingCtrl($scope) {
  var counter = 10;
  var countdown = setInterval(function() {
    console.log(counter);
    counter--
    if (counter === 0) {
      console.log("explosion!");
      clearInterval(countdown);
    }
  }, 1000);

  $scope.stopCountdown = function() {
    clearInterval(countdown);
    console.log(counter);
  }
});
