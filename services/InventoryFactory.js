ada.factory('InventoryFactory', function InventoryFactory() {
  var factory = {};

  factory.count = 0;
  factory.oxygenLeft = 400;
  factory.myStyle = {'height': 400 + 'px'};
  factory.end = false;

  factory.onClick = function () {
      if (factory.count < 350) {
          factory.count = factory.count + 10;
          factory.myStyle = {'height': (400 - factory.count) + 'px'};
          factory.oxygenLeft = 400 - factory.count;

      } else {
          factory.myStyle = {'height': 0 + 'px'};

          factory.end = true;
      }
  }

  factory.onMouseOver = function () {

      if (factory.count > 399.5) {

          factory.end = true;
      }
      factory.oxygenLeft = 400 - factory.count;
      factory.count = factory.count + .25;
      factory.myStyle = {'height': (400 - factory.count) + 'px'};

  }


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
