ada.controller("SideBarCtrl", function SideBarCtrl($scope, InventoryFactory, $interval){
    $scope.InventoryFactory = InventoryFactory;
    $scope.startOxygenCountdown = function() {
      $scope.oxygenCountdown = $interval(function() {
        if (InventoryFactory.count > 400){
          $interval.cancel(oxygenCountdown);
        }
        InventoryFactory.onMouseOver()
      }, 500);
    }();


});
