ada.controller('ExplosionCtrl', function ExplosionCtrl($scope, $timeout, $location) {

  $timeout(function() {
    $location.path("/homebase");
  }, 9000);

});
