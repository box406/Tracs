var app = angular.module('app', [
  'ngResource',
  'ngRoute'
]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

  $routeProvider.when('/', {
    templateUrl: 'view/login.html', 
    controller: 'loginController'
  });

  $routeProvider.when('/trac', {
    templateUrl: 'view/trac.html', 
    controller: 'tracController'
  });
});

