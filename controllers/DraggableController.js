ada.controller('DraggableCtrl', function DraggableCtrl($scope, $location) {
  $scope.blastOff = function() {
    if (readyForBlastOff) {
      $location.path("/blastOff");
    }
  }
});
