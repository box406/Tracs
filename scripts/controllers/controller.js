app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope, $http, $resource){

  var accuracysList = $resource("getAccuracy.php");
  $scope.accuracys = accuracysList.get();

  var parsonList = $resource("getParsonList.php");
  $scope.parsonList = parsonList.get();
 
  $scope.projectName = "";
  $scope.showBoxTracs = [];
  $scope.nonCostomersBoxTracs = [{
    "trac_id": Math.floor(Math.random() * 1000000),
    "charge_parson": $scope.parsonList[1],
    "trac_name": "test",
    "accuracys": $scope.accuracys,
    "accuracyDefault": "A"
  }];
  $scope.salesBoxTracs = [{
    "trac_id": Math.floor(Math.random() * 1000000),
    "charge_parson": $scope.parsonList[1],
    "trac_name": "test",
    "accuracys": $scope.accuracys,
    "accuracyDefault": "A"
  }];
  $scope.orderBoxTracs = [{
    "trac_id": Math.floor(Math.random() * 1000000),
    "charge_parson": $scope.parsonList[1],
    "trac_name": "test",
    "accuracys": $scope.accuracys,
    "accuracyDefault": "A"
  }];
  $scope.lostBoxTracs = [{
    "trac_id": Math.floor(Math.random() * 1000000),
    "charge_parson": $scope.parsonList[1],
    "trac_name": "test",
    "accuracys": $scope.accuracys,
    "accuracyDefault": "A"
  }];
  $scope.tracReports = [];

  

 
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

  $scope.addTracReportClick = function() {
    $scope.tracReports.push({}); 
  }
});

