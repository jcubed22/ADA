ada.controller("SideBarCtrl", function SideBarCtrl($scope, InventoryFactory, $interval, $location){
    $scope.InventoryFactory = InventoryFactory;
    $scope.startOxygenCountdown = function() {
      $scope.oxygenCountdown = $interval(function() {
        if (InventoryFactory.oxygenLeft < 1) {
          $interval.cancel(oxygenCountdown);
        }
        InventoryFactory.onMouseOver()
      }, 500);
    }();


});
