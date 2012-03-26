jQuery(document).ready(function() {
	jQuery('div.wpsc_email_address input').on('blur', function() {
	    jQuery(this).mailcheck({
	      suggested: function(element, suggestion) {
	      	if ( jQuery ( '#wpcm-suggest' ).length < 1 ) {
	      		jQuery( 'p.wpsc_email_address_p' ).append('<span id="wpcm-suggest"></span>');
	      	}
	      	jQuery ( '#wpcm-suggest' ).html ( "Did you mean "+suggestion.full+"?");
	      },
	    });
	  });
});