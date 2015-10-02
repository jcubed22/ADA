var ada = angular.module('ada', ['ui.router', 'ui.bootstrap']);

ada.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "LandingCtrl"
  });

  $stateProvider.state('martian', {
    url: "outside",
    views: {
      '': {
        templateUrl: "partials/martian_buttes.html",
        controller: "InventoryCtrl"
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'InventoryCtrl'
      }
    }
  });
});
