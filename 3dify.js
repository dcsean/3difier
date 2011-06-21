(function( $ ) {
	$.fn.threedeeify = function(display_objects, width_arg, height_arg) {
		canvas_element = undefined;
		if(this.is("canvas")) {
			canvas_element = this;
		} else {
			width = 900;
			height = 400;
			if(width_arg != undefined) {
				width = width_arg
			}
			if(height_arg != undefined) {
				height = height_arg
			}
			this.append('<canvas id="threedeeified_canvas" width="' + width + '" height="' + height + '"></canvas>');
			canvas_element = $("#threedeeified_canvas");
		}
		
		
	};
})( jQuery );