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
    $scope.tracs.showBox.push(new_trac);

    // add database
    adminTracService.registTrac(new_trac);
    // init
    $scope.projectName = "";
  }

  $scope.addTracReportClick = function() {
    $scope.tracReports.push({}); 
  }

  $scope.dragStart = function(e, ui) {
    console.log("start : " + ui.item.index());  
    $scope.start = ui.item.index();
    $scope.startTracArea = $(this).attr("id");
  }

  $scope.dragReceive = function(e, ui) {
    console.log("receive");
    //console.log("strat : " + $scope.start);
    //console.log("startTracArea : " + $scope.startTracArea);
    //console.log("receive : " + ui.item.index());
    //removeItem = $scope.tracs.showBox.splice($scope.start, 1);
    //$scope.tracs.salesBox.splice(ui.item.index(), 0, removeItem[0]);
    //console.log($scope.tracs);
  }

  $scope.dragUpdate = function(e, ui) {

    if ($scope.startTracArea == $(this).attr("id")) {
      //console.log("update");
      //console.log($(this).attr("id"));
    }
    console.log("update");

    //console.log("update : " + ui.item.index());
    //console.log("update : " + $(this).attr("id"));
    //console.log("-------");
    //removeItem = $scope.tracs.showBox.splice($scope.start, 1);
    //$scope.tracs.salesBox.splice(ui.item.index(), 0, removeItem[0]);
    //console.log($scope.tracs);
  }

  $scope.dragStop = function(e, ui) {
    //console.log("stop : " + ui.item.index());
    //console.log($(this).attr("id"));
  }


  var TRAC_AREA_INFO = ["show-box", "non-costomers-box", "sales-box", "order-box", "lost-box"];
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
      update: $scope.dragUpdate,
      stop: $scope.dragStop
      //receive: function( event, ui ) {
        //console.log($scope.tracs);
        // move the trac area
        //tracId = ui.item.attr("title");
        //tracAreaId = $(this).attr("id");
        //moveTracService.getMove({"tracArea":tracAreaId, "tracId":tracId});
      //},
      //start: function(event, ui) {
        //console.log($scope.tracs);
        //tracId = ui.item.attr("title");
        //tracAreaId = $(this).attr("id");
      //},
      //update: function(event, ui) {
        //console.log($scope.tracs);
        // sort the trac area
        //trac_area_name = $(this).attr("id")
        //moveTracService.getUpdate($('#' + trac_area_name).sortable("toArray").join());
      //}
    });
  }
});
