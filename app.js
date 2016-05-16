var app= angular.module('angularSeed',['ngRoute']);

// var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'homeController'
        })
        .when('/view1', {
            templateUrl : 'partials/view1.html',
            controller  : 'controller1'
        })
        .when('/view2', {
            templateUrl : 'partials/view2.html',
            controller  : 'controller2'
        })
        .otherwise({
            redirectTo: '/'
        });
});