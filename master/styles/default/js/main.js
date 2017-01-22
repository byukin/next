$(document).ready(function() {
	$("[data-custom-scroll]").mCustomScrollbar({
		live:true,
		theme:"rounded"
	});
	appSite.bindSlickSlider();
});


var appSite = {
	init: function() {
		appSite.bindCustomScrollBars();
	},
	bindCustomScrollBars: function () {
  		$(".news-block-article__text").customScrollbar();
	},
	bindSlickSlider: function () {
		$('.potfolio-sites-list').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
			  	adaptiveHeight: true,
			  	prevArrow: '.potfolio-sites-previous',
			  	nextArrow: '.potfolio-sites-next',
			  	responsive: [
				    {
				      breakpoint: 1140,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1
				      }
				    },
				  ]
			});
	},
};
