app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope, $http){

  $scope.projectName = "";
  $scope.showBoxTracs = [];
  $http.post("getAccuracy.php","")
    .success(function(data){
      $scope.accuracys = data;
      console.log(data);
    })
    .error(function(){
      $scope.accuracys = [];
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

  $scope.changeAccuracyClick = function(item) {
    console.log(item);
    console.log($scope.showBoxTracs);
  }
});
