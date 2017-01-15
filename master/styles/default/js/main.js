$(document).ready(function() {
 	appSite.init();
});


var appSite = {
	init: function() {
		appSite.bindFullPageScrolling();
	},
	bindFullPageScrolling: function () {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
		   var st = $(this).scrollTop();
		   if (st > lastScrollTop){
			   $('[data-page-scroll]').has('.active').removeClass('active');
		   } else {
			  // upscroll code
		   }
		   lastScrollTop = st;
		});
	},
};
