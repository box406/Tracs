app.directive("showBoxTrac", function(moveTracService){
  return {
    restict: 'A',
    link: function(scope, element, attributes) {

      var TRAC_AREA_INFO = ["show-box", "non-costomers-box", "sales-box", "order-box", "lost-box"];

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
            tracId = ui.item.attr("title");
            tracAreaId = $(this).attr("id");
            moveTracService.getMove({"tracArea":tracAreaId, "tracId":tracId});
          },
          update: function(event, ui) {
            // sort the trac area
            trac_area_name = $(this).attr("id")
            moveTracService.getUpdate($('#' + trac_area_name).sortable("toArray").join());
          }
        });
      }
    }
  }
});

app.directive("showCalender", function(){
  return {
    restict: 'A',
    link: function(scope, element, attributes) {
      $("#regist_date").datepicker({
        dateFormat: "yy/mm/dd",
      });
      $("#start_date").datepicker({
        dateFormat: "yy/mm/dd"
      });
      $("#visit_date").datepicker({
        dateFormat: "yy/mm/dd"
      });
    }
  }
});



