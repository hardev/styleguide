import $ from 'jquery'

$(function() {

	function OpenPopover( event ) {
	  var target = $( event.target );
	  var checkelement = $(this).data("toggle");
	    $('#' + checkelement).toggle();
	    //alert('#' + checkelement);
	}
	$( ".filterpill" ).click( OpenPopover );

});