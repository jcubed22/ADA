var ada = angular.module('ada', ['ui.router', 'ui.bootstrap']);

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
        controller: "DraggableCtrl"
      }
    }
  });

  $stateProvider.state('launch', {
    url: "/launch",
    views: {
      'body': {
        templateUrl: "partials/launch.html",
      }
    }
  });

  $stateProvider.state('martian', {
    url: "outside",
    views: {
      'body': {
        templateUrl: "partials/martian_buttes.html",
        controller: "InventoryCtrl",
      },
      'sideBar': {
        templateUrl: "partials/sideBar.html",
        controller: "SideBarCtrl"
      },
      'dialog': {
        templateUrl: 'partials/dialog.html',
        controller: 'InventoryCtrl'
      }
    }
  });

});
