// Notes:
// - 280x440 is ACTUAL SIZE OF CARD

var init = function() {

	var drawCard = function() {
		var canvas = document.getElementById("testu");
		var context = canvas.getContext("2d");

		// top-left corner of card
		var x = 200;
		var y = 100;
		var width = 280;
		var height = 440;

		// Background (temp)
		//context.fillRect(0, 0, 800, 600);

		// Card backing
		context.beginPath();
		context.rect(x, y, width, height);
		context.strokeStyle = "#000000";
		context.lineWidth = 4;
		context.stroke();
		context.fillStyle = "#FFFFFF";
		context.fill();

		// Top bar color
		var topBarWidth = 240;
		var topBarHeight = 100;
		context.beginPath();
		context.rect(x + 20, y + 20, topBarWidth, topBarHeight);
		context.strokeStyle = "#000000";
		context.lineWidth = 3;
		context.stroke();
		context.fillStyle = "#FFEA00";
		context.fill();

		// Top bar text
		context.beginPath();
		context.font = "bold 18px sans-serif";
		context.textAlign = "center";
		context.fillStyle = "#000000";
		var textX = x + (width/2);
		var textY = y + 20 + (topBarHeight/2);
		context.fillText("Fujiyoshi", textX, textY);

		// Top-left circle
		var cX = x + 30;
		var cY = y + 30;
		var r = 22;
		context.beginPath();
	    context.arc(cX, cY, r, 0, 2 * Math.PI, false);
	    context.fillStyle = "#FFFFFF";
	    context.fill();
	    context.lineWidth = 2;
	    context.strokeStyle = "#000000";
	    context.stroke();

	};

	drawCard();
};

window.addEventListener("load", init, false);