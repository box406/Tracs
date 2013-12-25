app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope, $http, $resource, adminTracService){

  var accuracysList = $resource("http://dev.trac.com/accuracys/");
  $scope.accuracys = accuracysList.get();

  var memberList = $resource("http://dev.trac.com/members/");
  $scope.memberList = memberList.get();

  var tracList = $resource("http://dev.trac.com/tracs/");
  $scope.tracs = tracList.get();

  $scope.projectName = "";
  $scope.tracReports = [];

  $scope.addSelectParsonClick = function(item) {
    
    trac_id = Math.floor(Math.random() * 1000000);

    console.log($scope.memberList[item]);

    $scope.tracs.showBox.push({
      "trac_id": trac_id,
      "charge_member": $scope.memberList[item],
      "trac_name": $scope.projectName,
      "accuracys": $scope.accuracys,
      "accuracyDefault": "A"
    });

    // add database
    adminTracService.registTrac({
      "trac_id": trac_id,
      "trac_name": $scope.projectName,
      "member_id": item,
      "accuracy_id": "1",
      "client_id": "1"
    });
    $scope.projectName = "";
  }

  $scope.addTracReportClick = function() {
    $scope.tracReports.push({}); 
  }
});

