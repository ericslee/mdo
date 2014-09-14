$(document)
	.ready(function() {
		// Sidebar setup
		$('.ui.sidebar')
			.sidebar('toggle')
		;

		$('#chat_send input')
			.keypress(function(e) {
				if (e.which === 13) {
					// TODO: Send message to other peers
					$(this).val("");
				}
			})
		;
	})
;