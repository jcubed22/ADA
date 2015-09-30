ada.controller('LandingCtrl', function LandingCtrl($scope, $interval) {

  $scope.counter = 10;

  $scope.startCountdown = function() {
    $scope.countdown = $interval(function() {
      --$scope.counter;
      if ($scope.counter === -1) {
        $scope.counter = 0;
        alert("explosion!");
        $interval.cancel($scope.countdown);
      }
      $scope.counter = ($scope.counter < 10) ? "0" + $scope.counter: $scope.counter;
    }, 1000);
  }

  $scope.stopCountdown = function() {
    $interval.cancel($scope.countdown);
    alert("You saved us!");
  }

  $scope.adaSpeak = function(message, index, interval) {
    if (index < message.length) {
      console.log(message[index++]);
      setTimeout(function () {
        $scope.adaSpeak(message, index, interval);
      }, interval);
    }
  }

});
