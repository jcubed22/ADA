ada.controller('LandingCtrl', function LandingCtrl($scope, $interval) {

  $scope.counter = 10;

  $scope.startCountdown = function() {
    $scope.countdown = $interval(function() {
      $scope.counter--
      if ($scope.counter === 0) {
        $scope.counter = "explosion!";
        $interval.cancel($scope.countdown);
      }
    }, 1000);
  }

  $scope.stopCountdown = function() {
    $interval.cancel($scope.countdown);
    alert("You saved us!");
  }
});
