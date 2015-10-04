ada.factory('InventoryFactory', function InventoryFactory() {
  var factory = {};

  //Ship Parts
  factory.kaniflin_pin = 0;
  factory.whangdoodle = 0;
  factory.proton_distributor = 0;

  //Find parts
  factory.find_pin = function () {
    factory.kaniflin_pin = 1;
    alert("You found the Kaniflin Pin!");
  };

  factory.find_whangdoodle = function () {
    factory.whangdoodle = 1;
    alert("You found the Dragonball!");
  };

  factory.find_distributor = function () {
    factory.proton_distributor = 1;
    alert("You found the Proton Distributor!");
  };

  return factory;
});
