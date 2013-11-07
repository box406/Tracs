
app.controller("loginController", function($scope, $location){

  $scope.loginInfo = {username: "", password: ""};

  $scope.login = function() {
    $location.path("/trac")
  }
});

app.controller("tracController", function($scope){

  $scope.project = {name: ""};

  $scope.addSelectParsonClick = function() {

    var trac = $scope.project.name;
    $scope.project.name = "";

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
    $scope.showBox = add_code;
    sort();

    addTrac();        
  }
});
