angular.module('stoneCoast', [
      'ui.router',
      'ngRoute',
      'app.directives',
      'app.controllers'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'homeController'
            })
            .when('/audio', {
                templateUrl: 'templates/audio.html',
                controller: 'homeController'
            })
            .when('/video', {
                templateUrl: 'templates/video.html',
                controller: 'homeController'
            })
            .when('/privacy', {
                templateUrl: 'templates/privacy.html',
                controller: 'homeController'
            })
            .when('/terms', {
                templateUrl: 'templates/terms.html',
                controller: 'homeController'
            })
            .when('/images', {
                templateUrl: 'templates/images.html',
                controller: 'homeController'
            });
    });
