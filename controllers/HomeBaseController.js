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
    InventoryFactory.myStyle = {'height': 400 +'px'};
    InventoryFactory.invertStyle = "";
  }

  $scope.messageGenerator = function () {
    if (!InventoryFactory.wentOutside) {
      $scope.adaSpeak('Just kidding! We did crash though. Welcome to U\'tah!\n Go outside and look for the parts we need to fix our ship!', 0);
    } else if (InventoryFactory.oxygenLeft > 0 && (InventoryFactory.parts_found != 3)) {
      $scope.adaSpeak("Get back out there! You can't leave without finding all three missing parts!", 0)
    } else if (InventoryFactory.parts_found === 3) {
      $scope.adaSpeak('You found all of the parts! On to the next challenge!', 0)
    } else if ((InventoryFactory.parts_found != 3) && (InventoryFactory.oxygenLeft < 399.75)) {
      $scope.adaSpeak('You ran out of oxygen! Go back outside and try again!', 0);
    }
  }();

});
