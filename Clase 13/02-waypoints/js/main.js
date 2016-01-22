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

			$("aside").css("left", "0");

		}		
	}
)

$("footer").waypoint(
	{
		handler: function(dir){
			if(dir=="down") {
				$("article#nuevoArticle").css("backgroundColor", "magenta");
			} else {
				$("article#nuevoArticle").css("backgroundColor", "brown");
			}
			
		}
	}
)