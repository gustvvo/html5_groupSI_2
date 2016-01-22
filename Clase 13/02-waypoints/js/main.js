$("section").waypoint({
  handler: function(direccion) {
    $("div").css("width", "50%");
    $("aside").css("left", "-150px");
  }
})

$("div").waypoint(
	{
		handler: function(direccion){
			//$("footer").css("fontSize","50px");
			$("footer").css(
				{
					"fontSize": "50px",
					"color": "red",
					"fontFamily": "Arial"
				}
			);
		}		
	}
)