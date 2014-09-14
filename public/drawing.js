// Notes:
// - 280x440 is ACTUAL SIZE OF CARD

var init = function() {

	// top-left corner of card
	var x = 2;
	var y = 2;
	var width = 280;
	var height = 440;

	var canvas = document.getElementById("testu");
	var context = canvas.getContext("2d");

	var drawCenteredBorder = function(padding, lineWidth, strokeStyle) {
		context.beginPath();
		context.rect(x + padding, y + padding, width - padding * 2, height - padding * 2);
		context.strokeStyle = strokeStyle || "#000000";
		context.lineWidth = (lineWidth >= 0) ? lineWidth : 1;
		context.stroke();
	};

	var drawCircle = function (cX, cY, radius, lineWidth, fillStyle, strokeStyle) {
		context.beginPath();
	    context.arc(cX, cY, radius, 0, 2 * Math.PI, false);
	    if (fillStyle !== null) {
	    	context.fillStyle = fillStyle;
	    	context.fill();
		}
		if (strokeStyle !== null && lineWidth > 0) {
		    context.lineWidth = lineWidth;
		    context.strokeStyle = strokeStyle;
		    context.stroke();
		}
	};

	var drawRectangle = function (topLeftX, topLeftY, rectWidth, rectHeight, lineWidth, fillStyle, strokeStyle) {
		context.beginPath();
		context.rect(topLeftX, topLeftY, rectWidth, rectHeight);
		context.fillStyle = fillStyle || "#FFFFFF";
		context.fill();
		context.strokeStyle = strokeStyle || "#000000";
		context.lineWidth = (lineWidth >= 0) ? lineWidth : 1;
		context.stroke();
	};

	var drawPropertyCard = function() {

		// Card base (white background)
		drawRectangle(x, y, width, height, 4, "#FFFFFF", "#000000");

		// Top bar color
		var topBarWidth = 240;
		var topBarHeight = 100;
		drawRectangle(x + 20, y + 20, topBarWidth, topBarHeight, 3, "#FFEA00", "#000000");

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
	    drawCircle(cX, cY, r, 2, "#FFFFFF", "#000000");

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

	var drawMoneyCard = function() {
		var bgColor = "#EDB98E";
		// Card base (colored background)
		drawRectangle(x, y, width, height, 4, bgColor, "#000000");

		// Borders
		drawCenteredBorder(25, 2, "#000000");
		drawCenteredBorder(45, 2, "#000000");
		drawCenteredBorder(50, 1, "#000000");

		// Small circles for monetary value
		drawCircle(x + 40, y + 40, 28, 1, bgColor, "#000000");
		drawCircle(x + 40, y + 40, 25, 2, bgColor, "#000000");
		drawCircle(x + width - 40, y + height - 40, 28, 1, bgColor, "#000000");
		drawCircle(x + width - 40, y + height - 40, 25, 2, bgColor, "#000000");

		// Circle at center
		drawCircle(width / 2, height / 2, 80, 4, bgColor, "#000000");

	};

	// drawPropertyCard();
	drawMoneyCard();
};

window.addEventListener("load", init, false);