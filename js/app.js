var app = angular.module('app', [])

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'login.html', 
    controller: 'LoginController'
  });
});

app.controller("LoginController", function($scoope){

});