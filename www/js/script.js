$(document).ready( function() {
	$("div[data-image]").each(function() {
		$(this).css( "background-image", "url(" + $(this).data("image") + ")" );
	});
	
	$( document ).on( "swiperight", function() {
		nextPage();
	});

	$( document ).on( "swipeleft", function() {
		previousPage();
	});
	
	document.addEventListener("backbutton", previousPage, false);
	
	function nextPage() {
		var nextPage = $( ":mobile-pagecontainer" ).pagecontainer("getActivePage").next("div[data-role='page']")
		if( nextPage.length > 0 ) {
			$( ":mobile-pagecontainer" ).pagecontainer( "change", nextPage, { transition: "none" } );
		}
	}

	function previousPage() {
		var previousPage = $( ":mobile-pagecontainer" ).pagecontainer("getActivePage").prev("div[data-role='page']")
		if( previousPage.length > 0 ) {
			$( ":mobile-pagecontainer" ).pagecontainer( "change", previousPage, { transition: "none" } );
		}
	}	
});