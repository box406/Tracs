var app = angular.module('app', [])

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/login.html', 
    controller: 'loginController'
  });

  $routeProvider.when('/trac', {
    templateUrl: 'view/trac.html', 
    controller: 'tracController'
  });

});

