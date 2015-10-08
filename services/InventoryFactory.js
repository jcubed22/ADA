ada.factory('InventoryFactory', function InventoryFactory($location) {
  var factory = {};

  factory.count = 0;
  factory.oxygenLeft = 400;
  factory.myStyle = {'height': 400 + 'px'};
  factory.end = true;
  factory.invertStyle;
  factory.parts_found = 0;
  factory.wentOutside = false;

  factory.onClick = function () {
    if (factory.count > 300) {
        factory.invertStyle = {'-webkit-filter': 'invert(75%) hue-rotate(180deg)'};
    }
    if (factory.count < 390) {
        factory.count = factory.count + 10;
        factory.myStyle = {'height': (400 - factory.count) + 'px'};
        factory.oxygenLeft = 400 - factory.count;

    } else {
        factory.myStyle = {'height': 0 + 'px'};

        $location.path("/homebase");
    }
  }

  factory.onMouseOver = function () {
    if (factory.count > 300) {
        factory.invertStyle = {'-webkit-filter': 'invert(75%) hue-rotate(180deg)'};
    }

    if (factory.count > 399.75) {

        $location.path("/homebase");
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
    factory.parts_found++;

  };

  factory.find_whangdoodle = function () {
    factory.whangdoodle = 1;
    factory.parts_found++;

  };

  factory.find_distributor = function () {
    factory.proton_redistributor = 1;
    factory.parts_found++;

  };

  return factory;
});
