$("section").waypoint(
	{
		handler: function(direccion){
			if(direccion=="down") {
				$("aside").css("left", "0");
			} else {
				$("aside").css("left", "-400px");
			}
			
		}
	}
);