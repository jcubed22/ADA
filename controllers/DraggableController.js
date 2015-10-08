ada.controller('DraggableCtrl', function DraggableCtrl($scope, $interval, $location) {
  $scope.blastOff = function() {
    if (readyForBlastOff) {
      $location.path("/launch");
    }
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
