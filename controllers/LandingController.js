ada.controller('LandingCtrl', function LandingCtrl($scope, $interval, $location) {

  $scope.counter = 10;
  var alarm = new Audio('../css/alarm.mp3');
  alarm.play();

  $scope.startCountdown = function() {
    $scope.countdown = $interval(function() {
      --$scope.counter;
      if ($scope.counter === -1) {
        $scope.counter = 0;
        alarm.pause();
        alarm.currentTime = 0;
        $location.path('/explosion');
        $interval.cancel($scope.countdown);
      }
      $scope.counter = ($scope.counter < 10) ? "0" + $scope.counter: $scope.counter;
    }, 1000);
  }

  $scope.stopCountdown = function() {
    $interval.cancel($scope.countdown);
    alarm.pause();
    alarm.currentTime = 0;
    alert("You saved us!");
  }

  $scope.message = "";

  $scope.adaSpeak = function(message, index) {
    $scope.count = $interval(function() {
      var letter = message[index];
      $scope.message += letter;
      index++;
      if (index == message.length) {
        $interval.cancel($scope.count);
      }
    }, 100);
  }
});
