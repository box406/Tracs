app.factory("moveTracService", function(){
  return {
    getMove: function(tracInfo) {

      console.log(tracInfo.tracArea + " : " + tracInfo.tracId); 
    },
    getUpdate: function(tracIdList) {

      console.log(tracIdList);
    }
  }
});
