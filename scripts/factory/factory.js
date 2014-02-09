app.factory("moveTracService", function($http){
  return {
    getMove: function(tracInfo) {
      
      console.log(tracInfo.tracArea + " : " + tracInfo.tracId);
    },
    getUpdate: function(tracIdList) {

      console.log(tracIdList);
    }
  }
});

app.factory("adminTracService", function($http, $rootScope){
  return {
    registTrac: function(tracInfo) {
      headerInfo = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      };

      $http({method: "POST", 
          url: "http://dev.trac.com/tracs/add-trac/", 
          //data: $.param(tracInfo),
          data: tracInfo,
          headers: headerInfo})
        .success(function(data, status, headers, config){
          //console.log(data + status);
        })
        .error(function(data, status, headers, config){

        });
    },
    deleteTrac: function(tracId) {

    }
  }
});
