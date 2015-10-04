ada.controller('InventoryCtrl', function InventoryCtrl($scope, InventoryFactory) {
  $scope.InventoryFactory = InventoryFactory;
  $scope.kaniflin_pin = InventoryFactory.kaniflin_pin;
  $scope.whangdoodle = InventoryFactory.whangdoodle;
  $scope.proton_distributor = InventoryFactory.proton_distributor;

  $scope.find_pin = function() {
    InventoryFactory.find_pin();
  };

  $scope.find_whangdoodle = function() {
    InventoryFactory.find_whangdoodle();
  };

  $scope.find_distributor = function() {
    InventoryFactory.find_distributor();
  };
});
