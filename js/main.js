(function($){
	
	'use strict';


//*************Started coades ************



// ****** isotope plugin start*******

// isotope
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-item'
  }
})
$('.portfolio-buttons button').on('click', function(){
	$('.portfolio-buttons button').removeClass('portfolio-active-btn')
	$(this).addClass('portfolio-active-btn');

})
// ****** isotope  plugin  end*******





})(jQuery)