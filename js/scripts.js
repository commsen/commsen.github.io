// A $( document ).ready() block.
$( document ).ready(function() {

	// DropCap.js
	var dropcaps = document.querySelectorAll(".dropcap");
	window.Dropcap.layout(dropcaps, 2);

	// Round Reading Time
    $(".time").text(function (index, value) {
      return Math.round(parseFloat(value));
    });

		$.cookiesDirective({
			explicitConsent: false,
			cookieScripts: 'Google Analytics',
			position : 'bottom',
			backgroundColor: '#405430',
			fontColor: '#FFFFFF',
			linkColor: '#FFFFFF',
			impliedSubmitText: ' OK ',
			privacyPolicyUri: '',
		});

});
