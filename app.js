var ada = angular.module('ada', ['ui.router']);

ada.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: "LandingCtrl"
  });
});
