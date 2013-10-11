/**
 * Created with JetBrains PhpStorm.
 * User: box406
 * Date: 2013/08/08
 * Time: 6:23
 * To change this template use File | Settings | File Templates.
 */
$(function(){

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
        add_code += '        <form role="form" class="form-horizontal">';
        add_code += '          <div class="form-group">';
        add_code += '            <div class="radio">';
        add_code += '              <label>';
        add_code += '                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>';
        add_code += '                Visit before';
        add_code += '              </label>';
        add_code += '            </div>';
        add_code += '            <div class="radio">';
        add_code += '              <label>';
        add_code += '                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">';
        add_code += '                After the visit';
        add_code += '              </label>';
        add_code += '            </div>';
        add_code += '            <hr />';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Visit Date</label>';
        add_code += '              <input type="text" class="form-control" id="InputTracname" placeholder="Enter VisitData">';
        add_code += '            </div>';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Department Visit</label>';
        add_code += '              <input type="text" class="form-control" id="InputTracname" placeholder="Enter DepartmentVisit">';
        add_code += '            </div>';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Department Parsonnel</label>';
        add_code += '              <input type="text" class="form-control" id="InputTracname" placeholder="Enter DepartmentParsonnel">';
        add_code += '            </div>';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Department Address</label>';
        add_code += '              <input type="text" class="form-control" id="InputTracname" placeholder="Enter DepartmentAddress">';
        add_code += '            </div>';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Client Attended</label>';
        add_code += '              <input type="text" class="form-control" id="InputTracname" placeholder="Enter ClientAttended">';
        add_code += '            </div>';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Our Company Attended</label>';
        add_code += '              <input type="text" class="form-control" id="InputTracname" placeholder="Enter Our CompanyAttended">';
        add_code += '            </div>';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Sales Content</label>';
        add_code += '              <textarea class="form-control" rows="3"></textarea>';
        add_code += '            </div>';
        add_code += '            <div class="form-group">';
        add_code += '              <label for="InputTracname">Task</label>';
        add_code += '              <textarea class="form-control" rows="3"></textarea>';
        add_code += '            </div>';
        add_code += '          </div>';
        add_code += '        </form>';
        add_code += '      </div>';
        add_code += '    </div>';
        add_code += '  </div>';
        add_code += '</div>';

        $("#sales-reports-area").append(add_code);

    });


    //
    // add trac
    //

    // add trac buttonの操作、入力があればdisabledを解除する
    $("#input-trac-area").keypress(function(event) {
        /* Act on the event */
        $("#add-trac").removeClass('disabled');        
    });

    $("#input-trac-area").keydown(function(event) {
        /* Act on the event */
        $("#add-trac").removeClass('disabled');        
    });

    // click add-sales button
    $(".add-trac").click(function(){

        // add trac area に入力された値の受取
        trac = $("#input-trac-area").val();
        $("#input-trac-area").val("");

        // 担当者、本来はシステムから取得するが今はダミー
        charge_parson = $(this).text();

        // add-tracをdisabledに戻す
        $("#add-trac").addClass('disabled');

        // dummy
        trac_id = Math.floor(Math.random() * 1000000);

        // init
        add_code = "";

        add_code = ' <div title="' + trac_id + '" class="ui_state_default trac">'
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
    });

    // 
    // sortable
    //

    function sort() {
        $('#show-box').sortable({
            connectWith: ".sortable-div", 
            placeholder: "",
            cursor: "move",
            opacity: 0.5,
            receive: function( event, ui ) {
                trac_id = $(this).find(".trac").attr("title");
                trac_area = $(this).attr("id");
                showBox(this, trac_id, trac_area);
            }
        });
        $('#non-costomers-box').sortable({
            connectWith: ".sortable-div", 
            placeholder: "",
            cursor: "move",
            opacity: 0.5,
            receive: function( event, ui ) {
                trac_id = $(this).find(".trac").attr("title");
                trac_area = $(this).attr("id");
                nonCustomersBox(this, trac_id, trac_area);
            }
        });
        $('#sales-box').sortable({
            connectWith: ".sortable-div", 
            placeholder: "",
            cursor: "move",
            opacity: 0.5,
            receive: function( event, ui ) {
                trac_id = $(this).find(".trac").attr("title");
                trac_area = $(this).attr("id");
                salesBox(this, trac_id, trac_area);
            }
        });
        $('#order-box').sortable({
            connectWith: ".sortable-div", 
            placeholder: "",
            cursor: "move",
            opacity: 0.5,
            receive: function( event, ui ) {
                trac_id = $(this).find(".trac").attr("title");
                trac_area = $(this).attr("id");
                orderBox(this, trac_id, trac_area);
            }
        });
        $('#lost-box').sortable({
            connectWith: ".sortable-div", 
            placeholder: "",
            cursor: "move",
            opacity: 0.5,
            receive: function( event, ui ) {
                trac_id = $(this).find(".trac").attr("title");
                trac_area = $(this).attr("id");
                lostBox(this, trac_id, trac_area);
            }
        });
    }

    // 
    // ajax
    //
    function sendAjax(trac_id, trac_area) {
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
});
