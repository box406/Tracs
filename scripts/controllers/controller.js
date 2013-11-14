
app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope){

  $scope.projectName = "";

  $scope.addSelectParsonClick = function(item) {

    $scope.showBoxTracs = [];
    $scope.showBoxTracs.push({
      "trac_id": Math.floor(Math.random() * 1000000),
      "charge_parson": item,
      "trac_name": $scope.projectName
    });

    $scope.projectName = "";
  }
});
