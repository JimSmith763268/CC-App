$(document).ready( function() {
	$("div[data-image]").each(function() {
		$(this).prepend( $('<img class="fit center"/>').attr("src", $(this).data("image") ) );
	});
	
	$( document ).on( "swiperight", function() {
		nextPage();
	});

	$( document ).on( "swipeleft", function() {
		previousPage();
	});
	
	document.addEventListener("backbutton", previousPage, false);

	function setImageHeights() {
		$("img").each(function() {
			$(this).removeAttr("width");
			$(this).removeAttr("height");
			var windowAR = $(window).width() / $(window).height();
			if( windowAR > 1 ) {
				$(this).attr("height", $(window).height() );
			} else {
				$(this).attr("width", $(window).width() );
			}
		});
	}

	$(window).bind('resize', setImageHeights);
	setImageHeights();

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
		} else {
			navigator.app.exitApp();
		}
	}	
});