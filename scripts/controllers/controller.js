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
  var tracArea;  
  var startTracArea;
  var receiveTracArea;

  $scope.projectName = "";
  $scope.tracReports = [];
  $scope.receiveFlag = false;

  $scope.addSelectParsonClick = function(item) {

    new_trac = {
      "trac_id": Math.floor(Math.random() * 1000000),
      "charge_member": $scope.memberList[item],
      "trac_name": $scope.projectName,
      "accuracy": $scope.accuracys,
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
    startTracArea = $(this).attr("id");
  }

  $scope.dragReceive = function(e, ui) {
  
    receiveTracArea = $(this).attr("id");
  }

  $scope.dragStop = function(e, ui) {
    
    // tracsから移動するtracを抜き出す
    removeItem = $scope.tracs[startTracArea].splice($scope.start, 1);
      
    // 移動するtracを対象のtracsに入れる、同じtracに入れる場合と、異なるtracに入れる場合がある
    if (receiveTracArea == undefined) {
      $scope.tracs[startTracArea].splice(ui.item.index(), 0, removeItem[0]);
    } else {
      $scope.tracs[receiveTracArea].splice(ui.item.index(), 0, removeItem[0]);
      receiveTracArea = undefined;
    }

    console.log($scope.tracs);
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
      stop: $scope.dragStop,
      start: $scope.dragStart
    });
  }
});
