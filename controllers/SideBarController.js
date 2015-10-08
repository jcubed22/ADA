ada.controller("SideBarCtrl", function SideBarCtrl($scope, InventoryFactory, $interval, $location){
  $scope.InventoryFactory = InventoryFactory;
  $scope.message = "";
  $scope.startOxygenCountdown = function() {
    $scope.oxygenCountdown = $interval(function() {
      if (InventoryFactory.oxygenLeft < 1) {
        $interval.cancel(oxygenCountdown);
      }
      InventoryFactory.onMouseOver()
    }, 500);
  }();

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

  $scope.messageGenerator = function() {
    $scope.adaSpeak("Use your mouse to find the parts you need. Keep an eye on your oxygen level. Head back to the ship to refill your oxygen!", 0);
  }();

});
