ada.controller("SideBarCtrl", function SideBarCtrl($scope, InventoryFactory){
    $scope.InventoryFactory = InventoryFactory;
    $scope.count = 0;
    $scope.oxygenLeft = 400;
    $scope.myStyle = {'height': 400 + 'px'};
    $scope.end = false;

    $scope.onClick = function () {
        if ($scope.count < 350) {
            $scope.count = $scope.count + 10;
            $scope.myStyle = {'height': (400 - $scope.count) + 'px'};
            $scope.oxygenLeft = 400 - $scope.count;

        } else {
            $scope.myStyle = {'height': 0 + 'px'};

            $scope.end = true;
        }
    }

    $scope.onMouseOver = function () {

        if ($scope.count > 399.5) {

            $scope.end = true;
        }
        $scope.oxygenLeft = 400 - $scope.count;
        $scope.count = $scope.count + .25;
        $scope.myStyle = {'height': (400 - $scope.count) + 'px'};

    }
});
