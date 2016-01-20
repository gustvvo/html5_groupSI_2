$("document").ready(function(){

	var waypoint = new Waypoint({
	  element: document.getElementById('js--inferior'),
	  handler: function(direction) {
	  	if(direction=="down"){
	  		$("header").addClass("fijo");
	  	} else {
	  		$("header").removeClass("fijo");
	  	}
	  },
	  offset: "150px"
	})

});