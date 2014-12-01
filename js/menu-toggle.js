
var ww = document.body.clientWidth;

jQuery(document).ready(function() {

jQuery('.nav-primary').prepend('<a class="toggleMenu" href="#">Menu<span></span></a>');

	jQuery(".menu-primary li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		};
	})
	
	jQuery(".toggleMenu").click(function(e) {
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".menu-primary").toggle();
	});
	adjustMenu();
})

jQuery(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 600) {
		jQuery(".toggleMenu").css("display", "inline-block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery(".menu-primary").hide();
		} else {
			jQuery(".menu-primary").show();
		}
		jQuery(".menu-primary li").unbind('mouseenter mouseleave');
		jQuery(".menu-primary li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			jQuery(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 600) {
		jQuery(".toggleMenu").css("display", "none");
		jQuery(".menu-primary").show();
		jQuery(".menu-primary li").removeClass("hover");
		jQuery(".menu-primary li a").unbind('click');
		jQuery(".menu-primary li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	jQuery(this).toggleClass('hover');
		});
	}
}

