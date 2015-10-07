ada.controller('DraggableCtrl', function DraggableCtrl($scope, $interval) {
  // $scope.blastOff = function() {
  //   .bind("click")
  //   checks for true or false (would check global variable)
  //   if true
  //   location.path(blastoff)
  // }

  $scope.blastOff = function() {
    if (readyForBlastOff) {
      console.log("YAY!");
    }
    console.log("Awh");
  }
});
