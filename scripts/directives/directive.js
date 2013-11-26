app.directive("showBoxTrac", function(){
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
            //chengeArea(this, ui.item.attr("title"), $(this).attr("id"));
            console.log($(this).attr("id"));
          },
          update: function(event, ui) {
            // sort the trac area
            trac_area_name = $(this).attr("id")
            console.log($('#' + trac_area_name).sortable("toArray").join());
          }
        });
      }
    }
  }
});

