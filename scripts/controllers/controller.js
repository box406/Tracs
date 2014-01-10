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

    console.log($scope.tracs);

    trac_id = Math.floor(Math.random() * 1000000);

    new_trac = {
        "trac_id": trac_id,
        "charge_member": $scope.memberList[item],
        "trac_name": $scope.projectName,
        "accuracys": $scope.accuracys,
        "accuracyDefault": "A",
        "member_id": item,
        "client_id": "1",
        "accuracy_id": "1"
    };
    console.log(new_trac);
    //$scope.tracs.showBox.push(new_trac);
    $scope.tracs.showBox[trac_id] =  new_trac;

    // add database
    adminTracService.registTrac(new_trac);
    // init
    $scope.projectName = "";
  }

  $scope.addTracReportClick = function() {
    $scope.tracReports.push({}); 
  }
});

