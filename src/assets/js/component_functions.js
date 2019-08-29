import $ from 'jquery'

$(function() {
	$( ".toggle-popover" ).click( OpenPopover ); // open popovers
});

// function for popover show hide 
function OpenPopover( event ) {
  var target = $( event.target );
  var checkelement = $(this).data("target");
  $('#' + checkelement).fadeToggle();
  $('.popover--shapeless_close').click(function(){
	  $(this).parents('.popover').hide();
  });
  target = '';
}



