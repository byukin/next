$(document).ready(function() {
	$("[data-custom-scroll]").mCustomScrollbar({
					live:true,
					theme:"rounded"
				});
});


var appSite = {
	init: function() {
		appSite.bindCustomScrollBars();
	},
	bindCustomScrollBars: function () {
  		$(".news-block-article__text").customScrollbar();
	},
};
