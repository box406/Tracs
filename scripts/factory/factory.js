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

app.factory("adminTracService", function($http){
  return {
    registTrac: function(tracInfo) {

      $http({method: "POST", url: "http://dev.trac.com/tracs/add-trac/", data: tracInfo}).
        success(function(data, status, headers, config){
          console.log(data + status);
        })
        .error(function(data, status, headers, config){

        });
    },
    deleteTrac: function(tracId) {

    }
  }
});