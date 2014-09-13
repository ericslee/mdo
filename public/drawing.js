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

		// Card base (white background)
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
		// TODO: test linebreak w/ 38 Miley Luxury Resort and Spa
		context.beginPath();
		context.font = "bold 19px sans-serif";
		context.textAlign = "center";
		context.fillStyle = "#000000";
		var textX = x + (width/2);
		var textY = y + 25 + (topBarHeight/2);
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

	    // Monetary value (in top-left circle)
	    var moneyValue = 9;
	    context.beginPath();
	    context.textAlign = "center";
	    context.fillStyle = "#000000";
		context.font = "bold 16px sans-serif";
	    context.fillText("$" + moneyValue + "M", cX, cY + 5);

	    // RENT label
	    var rentX = x + width - 35;
	    var rentY = y + 200;
	    context.beginPath();
	    context.textAlign = "right";
	    context.fillStyle = "#000000";
		context.font = "bold 22px sans-serif";
	    context.fillText("RENT", rentX, rentY);

	    // Rent info per line
	    var rentSpacing = 50;
	    var numCardsInSet = 3;
	    for (var i = 0; i < numCardsInSet; i++) {

	    	// Set number (left column)
	    	var rentNumX = x + 55;
		    var rentNumY = y + 250 + (rentSpacing * i);
		    context.beginPath();
		    context.textAlign = "right";
		    context.fillStyle = "#000000";
			context.font = "bold 22px sans-serif";
		    context.fillText(i+1, rentNumX, rentNumY);

		    var longEllipses = ". . . . . . . . . . . . . . .";
		    context.beginPath();
			context.font = "bold 16px sans-serif";
		    context.textAlign = "left";
		    context.fillText(longEllipses, rentNumX + 7, rentNumY);

		    // Rent money value
	    	var rentValX = x + width - 35;
		    var rentValY = rentNumY;
		    context.beginPath();
		    context.textAlign = "right";
			context.font = "bold 22px sans-serif";
		    context.fillText("$" + 2*(i+1) + "M", rentValX, rentValY);
	    }
	};

	drawCard();
};

window.addEventListener("load", init, false);