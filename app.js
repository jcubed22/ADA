var ada = angular.module('ada', ['ui.router']);

ada.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'body': {
        templateUrl: "partials/home.html",
        controller: "LandingCtrl"
      }
    }
  });

  $stateProvider.state('explosion', {
    url: "/explosion",
    views: {
      'body': {
        templateUrl: "partials/explosion.html",
      }
    }
  });
});
