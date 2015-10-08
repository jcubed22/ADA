ada.controller('HomeBaseCtrl', function HomeBaseCtrl($scope, $interval, InventoryFactory) {

  $scope.InventoryFactory = InventoryFactory;
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

  $scope.wentOutside = function () {
    InventoryFactory.wentOutside = true;
    $scope.message = "";
  }

  $scope.refillOxygen = function () {
    InventoryFactory.count = 0;
    InventoryFactory.oxygenLeft = 400;
    InventoryFactory.invertStyle = '';
  }

  $scope.test = function () {
    if (!InventoryFactory.wentOutside) {
      $scope.adaSpeak('Just kidding! We did crash though. Welcome to U\'tah!', 0);
    } else {
      $scope.adaSpeak('You ran out of oxygen! Go back outside and try again!', 0);
    }
  }();

});
