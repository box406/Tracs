app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope, $rootScope, $http, $resource, adminTracService){

  var accuracysList = $resource("http://dev.trac.com/accuracys/");
  $scope.accuracys = accuracysList.get();

  var memberList = $resource("http://dev.trac.com/members/");
  $scope.memberList = memberList.get();

  var tracList = $resource("http://dev.trac.com/tracs/");
  $scope.tracs = tracList.get();

  var sortableEle;

  $scope.projectName = "";
  $scope.tracReports = [];
  $scope.receiveFlag = false;

  $scope.addSelectParsonClick = function(item) {

    new_trac = {
      "trac_id": Math.floor(Math.random() * 1000000),
      "charge_member": $scope.memberList[item],
      "trac_name": $scope.projectName,
      "accuracys": $scope.accuracys,
      "accuracyDefault": "A",
      "member_id": item,
      "client_id": "1",
      "accuracy_id": "1"
    };
    $scope.tracs.show_box.push(new_trac);

    // add database
    adminTracService.registTrac(new_trac);
    // init
    $scope.projectName = "";
  }

  $scope.addTracReportClick = function() {
    $scope.tracReports.push({}); 
  }

  $scope.dragStart = function(e, ui) {
    $scope.start = ui.item.index();
    $scope.startTracArea = $(this).attr("id");
  }

  $scope.dragReceive = function(e, ui) {
    $scope.receiveFlag = true;
  }

  $scope.dragUpdate = function(e, ui) {
    if ($scope.receiveFlag == true) {
      $scope.receiveFlag = false;


      removeItem = $scope.tracs[$scope.startTracArea].splice($scope.start, 1);
      $scope.tracs[$(this).attr("id")].splice(ui.item.index(), 0, removeItem[0]);

      console.log("1:" + "start: " + $scope.startTracArea + ", update: " + $(this).attr("id"));
      console.log($scope.tracs);
    } else {

      removeItem = $scope.tracs[$scope.startTracArea].splice($scope.start, 1);
      $scope.tracs[$scope.startTracArea].splice(ui.item.index(), 0, removeItem[0]);

      console.log("2:" + "start: " + $scope.startTracArea + ", update: " + $(this).attr("id"));
      console.log($scope.tracs);
    }
  }

  var TRAC_AREA_INFO = ["show_box", "non_costomers_box", "sales_box", "order_box", "lost_box"];
  for (trac_area in TRAC_AREA_INFO) {
    sortableEle = $('#' + TRAC_AREA_INFO[trac_area]).sortable({
      connectWith: ".sortable-div", 
      placeholder: "",
      cursor: "move",
      opacity: 0.5,
      revert: true,
      scroll: true,
      receive: $scope.dragReceive,
      start: $scope.dragStart,
      update: $scope.dragUpdate
    });
  }
});
