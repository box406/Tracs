angular.module('app')
  .controller("loginController", function($scope, $location){
    $scope.loginInfo = {username: "", password: ""};

    $scope.login = function() {
      $location.path("/trac")
    }
  })
  .controller("tracController", function($scope){

    $scope.project = {name: ""};

    $scope.addSelectParsonClick = function() {

      var project_name = $scope.project.name;
      $scope.project.name = "";

      $scope.showBox = "vvMarquee";

      // 担当者、本来はシステムから取得するが今はダミー
      charge_parson = $(this).text();

      // add-tracをdisabledに戻す
      $("#add-trac").addClass('disabled');

      // dummy
      trac_id = Math.floor(Math.random() * 1000000);

      // init
      add_code = "";

      add_code = ' <div id="trac_' + trac_id + '" title="' + trac_id + '" class="ui_state_default trac">'
      add_code += '  <div class="alert alert-warning">';
      add_code += '    <span class="warning glyphicon glyphicon-warning-sign" style="color:red;"></span>';
      add_code += '    <i class="icon-ticket"></i> ' + trac;
      add_code += '    <div class="pull-right">';
      add_code += '      <small>' + charge_parson + '</small>';
      add_code += '      |';
      add_code += '      <div class="btn-group">';
      add_code += '        <button id="accuracy" type="button" class="btn btn-info btn-xs dropdown-toggle" data-toggle="dropdown">';
      add_code += '          A <span class="caret"></span>';
      add_code += '        </button>';
      add_code += '        <ul class="dropdown-menu" role="menu">';
      add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">S</a></li>';
      add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">A</a></li>';
      add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">B</a></li>';
      add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">C</a></li>';
      add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">D</a></li>';
      add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">E</a></li>';
      add_code += '        </ul>';
      add_code += '      </div>';
      add_code += '      <button type="button" class="trac-detail btn btn-xs btn-warning" data-toggle="modal" href="#myModal">Detail</button>';
      add_code += '      |';
      add_code += '      <input type="checkbox" name="delete" id="trac-delete" />';
      add_code += '    </div>';
      add_code += '  </div>';
      add_code += '</div>';

      $("#show-box").append(add_code);

      sort();

      addTrac();        
    }
  })
  .directive('vvMarquee', function ($parse) {
    return {
      restrict: 'A',
      require: ['?ngModel'],
      replace: true,
      template: '<marquee/>',
      link: function (scope, element, attrs) {
        scope.$watch(attrs.ngModel, function (newVal) {
          var getter = $parse(attrs.ngModel);
          var model = getter(scope);

          element.html(model);
        });
      }
    };
  });
/*
$(function(){

    // 
    // const
    // 
    var TRAC_AREA_INFO = ["show-box", "non-costomers-box", "sales-box", "order-box", "lost-box"];


    //
    // add sales reports
    //

    $("#add_sales_reports").click(function(){

        // make sales report id
        sales_report_id = Math.floor(Math.random() * 1000000);

        // get time & shape year 
        time_obj = new Date();
        year = time_obj.getYear();
        if(year < 2000) { 
            year += 1900; 
        }

        // init
        add_code = "";

        add_code += '<div class="panel-group" id="accordion" style="padding-top: 10px">';
        add_code += '  <div class="panel panel-warning">';
        add_code += '    <div class="panel-heading">';
        add_code += '      <h4 class="panel-title">';
        add_code += '        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse' + sales_report_id + '">';
        add_code += '          Sales Reports [' + year + '/' + (time_obj.getMonth() + 1) + '/' + time_obj.getDate() + '] - Visit before -';
        add_code += '        </a>';
        add_code += '      </h4>';
        add_code += '    </div>';
        add_code += '    <div id="collapse' + sales_report_id + '" class="panel-collapse collapse in">';
        add_code += '      <div class="panel-body">';
        add_code += '         <form role="form" class="form-horizontal">';
        add_code += '           <div class="row">';
        add_code += '             <div class="col-lg-12">';                                
        add_code += '               <div class="radio">';
        add_code += '                 <label>';
        add_code += '                   <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>';
        add_code += '                   Visit before';
        add_code += '                 </label>';
        add_code += '               </div>';
        add_code += '               <div class="radio">';
        add_code += '                 <label>';
        add_code += '                   <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">';
        add_code += '                   After the visit';
        add_code += '                 </label>';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '           </div>';
        add_code += '           <hr />';
        add_code += '           <div class="row">';
        add_code += '             <div class="col-lg-6">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname"><span class="ui-datepicker-trigger glyphicon glyphicon-calendar"></span> Visit Date</label>';
        add_code += '                 <input type="text" class="form-control input-sm" id="visit_date" placeholder="Enter VisitData">';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '             <div class="col-lg-6">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname">Department Visit</label>';
        add_code += '                 <input type="text" class="form-control input-sm" id="InputTracname" placeholder="Enter DepartmentVisit">';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '           </div>';
        add_code += '           <div class="row">';
        add_code += '             <div class="col-lg-6">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname">Department Parsonnel</label>';
        add_code += '                 <input type="text" class="form-control input-sm" id="InputTracname" placeholder="Enter DepartmentParsonnel">';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '             <div class="col-lg-6">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname">Department Address</label>';
        add_code += '                 <input type="text" class="form-control input-sm" id="InputTracname" placeholder="Enter DepartmentAddress">';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '           </div>';
        add_code += '           <div class="row">';
        add_code += '             <div class="col-lg-6">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname">Client Attended</label>';
        add_code += '                 <input type="text" class="form-control input-sm" id="InputTracname" placeholder="Enter ClientAttended">';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '             <div class="col-lg-6">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname">Our Company Attended</label>';
        add_code += '                 <input type="text" class="form-control input-sm" id="InputTracname" placeholder="Enter Our CompanyAttended">';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '           </div>';
        add_code += '           <div class="row">';
        add_code += '             <div class="col-lg-12">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname">Sales Content</label>';
        add_code += '                 <textarea class="form-control" rows="5"></textarea>';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '           </div>';
        add_code += '           <div class="row">';
        add_code += '             <div class="col-lg-12">';
        add_code += '               <div class="form-group">';
        add_code += '                 <label for="InputTracname">Task</label>';
        add_code += '                 <textarea class="form-control" rows="5"></textarea>';
        add_code += '               </div>';
        add_code += '             </div>';
        add_code += '           </div>';
        add_code += '         </form>';
        add_code += '      </div>';
        add_code += '    </div>';
        add_code += '  </div>';
        add_code += '</div>';

        $("#sales-reports-area").hide().prepend(add_code).fadeIn();

    });


    //
    // add trac
    //

    // add trac buttonの操作、入力があればdisabledを解除する
    $("#input-trac-area").keypress(function(event) {
        //Act on the event
        $("#add-trac").removeClass('disabled');        
    });

    $("#input-trac-area").keydown(function(event) {
        // Act on the event
        $("#add-trac").removeClass('disabled');        
    });

    // click add-sales button
//    $(".add-trac").click(function(){
//
//        // add trac area に入力された値の受取
//        trac = $("#input-trac-area").val();
//        $("#input-trac-area").val("");
//
//        // 担当者、本来はシステムから取得するが今はダミー
//        charge_parson = $(this).text();
//
//        // add-tracをdisabledに戻す
//        $("#add-trac").addClass('disabled');
//
//        // dummy
//        trac_id = Math.floor(Math.random() * 1000000);
//
//        // init
//        add_code = "";
//
//        add_code = ' <div id="trac_' + trac_id + '" title="' + trac_id + '" class="ui_state_default trac">'
//        add_code += '  <div class="alert alert-warning">';
//        add_code += '    <span class="warning glyphicon glyphicon-warning-sign" style="color:red;"></span>';
//        add_code += '    <i class="icon-ticket"></i> ' + trac;
//        add_code += '    <div class="pull-right">';
//        add_code += '      <small>' + charge_parson + '</small>';
//        add_code += '      |';
//        add_code += '      <div class="btn-group">';
//        add_code += '        <button id="accuracy" type="button" class="btn btn-info btn-xs dropdown-toggle" data-toggle="dropdown">';
//        add_code += '          A <span class="caret"></span>';
//        add_code += '        </button>';
//        add_code += '        <ul class="dropdown-menu" role="menu">';
//        add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">S</a></li>';
//        add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">A</a></li>';
//        add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">B</a></li>';
//        add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">C</a></li>';
//        add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">D</a></li>';
//        add_code += '          <li><a class="trac-accuracy" href="#trac-accuracy">E</a></li>';
//        add_code += '        </ul>';
//        add_code += '      </div>';
//        add_code += '      <button type="button" class="trac-detail btn btn-xs btn-warning" data-toggle="modal" href="#myModal">Detail</button>';
//        add_code += '      |';
//        add_code += '      <input type="checkbox" name="delete" id="trac-delete" />';
//        add_code += '    </div>';
//        add_code += '  </div>';
//        add_code += '</div>';
//
//        $("#show-box").append(add_code);
//
//        sort();
//
//        addTrac();
//    });

    // 
    // sortable
    //

    function sort() {

        for (trac_area in TRAC_AREA_INFO) {

            // move&sort trac area
            $('#' + TRAC_AREA_INFO[trac_area]).sortable({
                connectWith: ".sortable-div", 
                placeholder: "",
                cursor: "move",
                opacity: 0.5,
                revert: true,
                scroll: true,
                receive: function( event, ui ) {

                    // move the trac area
                    chengeArea(this, ui.item.attr("title"), $(this).attr("id"));
                },
                update: function(event, ui) {

                    // sort the trac area
                    trac_area_name = $(this).attr("id")
                    console.log($('#' + trac_area_name).sortable("toArray").join());
                }
            });

        }
    }

    // 
    // ajax
    //
    function sendAjax(type, url, option) {
        // post to server
        $.ajax({
            type: 'post',
            url: "dummy.php",
            timeout : 5000,
            data: {
                'trac_id': trac_id,
                'place': trac_area
            },
            success: function(data, dataType) {
                console.log(data);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }


    //
    // move trac function
    //

    function addTrac() {
        console.log("addTrac");
    }

    function chengeArea(obj, trac_id, trac_area) {
        switch (trac_area) {
            case "show-box":
                showBox(obj, trac_id, trac_area);
                break;
            case "non-costomers-box":
                nonCustomersBox(obj, trac_id, trac_area);
                break;
            case "sales-box":
                salesBox(obj, trac_id, trac_area);
                break;
            case "order-box":
                orderBox(obj, trac_id, trac_area);
                break;
            case "lost-box":
                lostBox(obj, trac_id, trac_area);
                break;
        }
    }
    
    function showBox(obj, trac_id, trac_area) {
        console.log("showBox:" + ", trac_id:" + trac_id + ", trac_area:" + trac_area);
    }

    function salesBox(obj, trac_id, trac_area) {
        console.log("salesTrac:" + ", trac_id:" + trac_id + ", trac_area:" + trac_area);
    }

    function orderBox(obj, trac_id, trac_area) {
        console.log("orderBox:" + ", trac_id:" + trac_id + ", trac_area:" + trac_area);
    }

    function lostBox(obj, trac_id, trac_area) {
        console.log("lostBox:" + ", trac_id:" + trac_id + ", trac_area:" + trac_area);
    }

    function nonCustomersBox(obj, trac_id, trac_area) {
        console.log("nonCustomersBox:" + ", trac_id:" + trac_id + ", trac_area:" + trac_area);
    }

    function accuracy() {
        console.log("test");
    }

    //
    // trac button 
    //

    $(document).on("click", ".trac-accuracy", function(){

        chenge_accuracy = $(this).text() + ' <span class="caret"></span>';
        $(this).parent().parent().parent().find("button").html(chenge_accuracy);

        // ajax
    });

    $(document).on("click", ".trac-status", function(){

        console.log("trac-status");
    });

    $(document).on("click", ".trac-detail", function(){

        console.log($(this).parent());
    });

    //
    // trac detail tab setting
    //

    $('#infoTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })


    // 
    // trac info
    // 

    $(".collapse").collapse({
        parent: true
    });

    // 
    // datepicker
    //
    $("#regist_date").datepicker({
        dateFormat: "yy/mm/dd",
    });
    $("#start_date").datepicker({
        dateFormat: "yy/mm/dd"
    });
    $("#visit_date").datepicker({
        dateFormat: "yy/mm/dd"
    });

    //
    // add project
    //
    $("#add_project").click(function(){

        var project_name = $("#project_name").val();

        if (project_name) {

            var code = null;

            code += '<tr>';
            code += '  <td><button type="button" class="btn btn-warning btn-sm"><span class="glyphicon glyphicon-edit"></span> edit</button> </td>';
            code += '  <td>' + project_name + '</td>';
            code += '  <td>';
            code += '  </td>';
            code += '  <td>';
            code += '      <button type="button" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-remove"></span> delete</button>';
            code += '  </td>';
            code += '</tr>';

            $("#project_list tbody").hide().append(code).fadeIn();
            $("#project_name").val("");
            $("#add_project").addClass('disabled');
        }
    });

    // add trac buttonの操作、入力があればdisabledを解除する
    $("#project_name").keypress(function(event) {
        // Act on the event
        $("#add_project").removeClass('disabled');        
    });

    $("#project_name").keydown(function(event) {
        // Act on the event
        $("#add_project").removeClass('disabled');        
    });

});

*/

