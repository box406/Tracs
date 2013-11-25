app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope, $http, $resource){

  $scope.projectName = "";
  $scope.showBoxTracs = [];
    
  var accuracysList = $resource("getAccuracy.php");
  $scope.accuracys = accuracysList.get();

  var parsonList = $resource("getParsonList.php");
  $scope.parsonList = parsonList.get();

  $scope.addSelectParsonClick = function(item) {

    $scope.showBoxTracs.push({
      "trac_id": Math.floor(Math.random() * 1000000),
      "charge_parson": $scope.parsonList[item],
      "trac_name": $scope.projectName,
      "accuracys": $scope.accuracys,
      "accuracyDefault": "A"
    });

    $scope.projectName = "";
  }
});
