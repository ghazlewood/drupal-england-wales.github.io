// Vanilla JS Isotope
//var iso = new Isotope('.l-gallery', { itemSelector: '.gallery-item'});
//iso.layout();
//iso.shuffle();

// jQuery version of Isotope
var $=jQuery.noConflict();
$(document).ready(function(){
	// init Isotope
	var $grid = $('.l-gallery').isotope({
	  itemSelector: '.gallery-item'
	});
	// layout Isotope after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.isotope('layout');
	});
	$grid.isotope('shuffle');
});