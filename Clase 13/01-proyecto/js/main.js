$("document").ready(function(){

$('#js--superior').waypoint(
	{
  		handler: function(direccion) {
  			if(direccion=="down") {
  				$("header").addClass("fijo");
   			} else {
  				$("header").removeClass("fijo");
  			}
    	}
	})
});