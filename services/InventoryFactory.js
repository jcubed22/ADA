ada.factory('InventoryFactory', function InventoryFactory() {
  var factory = {};


  //Ship Parts
  factory.kaniflin_pin = 0;
  factory.whangdoodle = 0;
  factory.proton_redistributor = 0;

  //Find parts
  factory.find_pin = function () {
    factory.kaniflin_pin = 1;
  };

  factory.find_whangdoodle = function () {
    factory.whangdoodle = 1;
  };

  factory.find_distributor = function () {
    factory.proton_redistributor = 1;
  };

  factory.find_part = function () {
    factory.parts_found = factory.kaniflin_pin + factory.whangdoodle + factory.proton_redistributor;
    return factory.parts_found;
  };

  return factory;
});
