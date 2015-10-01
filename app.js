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

    $stateProvider.state('homebase', {
      url: "/homebase",
      views: {
        'body': {
          templateUrl: "partials/homebase.html",
        }
      }
  });

  $stateProvider.state('draggable', {
    url: "/draggable",
    views: {
      'body': {
        templateUrl: "partials/draggable.html",
      }
    }
  });
});
