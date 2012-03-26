jQuery(document).ready(function() {
	jQuery('input#billing_email').on('blur', function() {
	    jQuery(this).mailcheck({
	      suggested: function(element, suggestion) {
	      	if ( jQuery ( '#wpcm-suggest' ).length < 1 ) {
	      		jQuery( 'div.col-1' ).append('<div id="wpcm-suggest"></div>');
	      	}
	      	jQuery ( '#wpcm-suggest' ).html ( "Did you mean "+suggestion.full+"?");
	      },
	    });
	  });
});