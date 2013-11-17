app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope, $http){

  $scope.projectName = "";
  $scope.showBoxTracs = [];
  $http.get("getAccuracy.php","")
    .success(function(data){
      $scope.accuracys = data;
    })
    .error(function(){
      $scope.accuracys = [];
    });
  $http.get("getParson.php", "")
    .success(function(data){
      $scope.parsonList = data;
    })
    .error(function(){
      $scope.parsonList = [];
    });

  $scope.addSelectParsonClick = function(item) {
    
    $scope.showBoxTracs.push({
      "trac_id": Math.floor(Math.random() * 1000000),
      "charge_parson": item,
      "trac_name": $scope.projectName,
      "accuracys": $scope.accuracys,
      "accuracyDefault": "A"
    });

    $scope.projectName = "";
  }
});
