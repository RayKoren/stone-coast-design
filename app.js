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
            .when('/seo', {
                templateUrl: 'templates/seo.html',
                controller: 'homeController'
            })
            .when('/audio', {
                templateUrl: 'templates/audio.html',
                controller: 'homeController'
            })
            .when('/team', {
                templateUrl: 'templates/team.html',
                controller: 'homeController'
            })
            .when('/apps', {
                templateUrl: 'templates/apps.html',
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
            .when('/testimonials', {
                templateUrl: 'templates/testimonials.html',
                controller: 'homeController'
            })
            .when('/web', {
                templateUrl: 'templates/web.html',
                controller: 'homeController'
            });
    });
