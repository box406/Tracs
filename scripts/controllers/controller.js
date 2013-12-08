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

  var tracList = $resource("getTracList.php");
  $scope.tracs = tracList.get();

  $scope.projectName = "";
  $scope.tracReports = [];

  $scope.addSelectParsonClick = function(item) {
    console.log($scope.showBox);
    $scope.tracs.showBox.push({
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

