var characters = [0,1,2,3,4,5,6,7,8,9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '\'', '"', ';', ':', ',', '<', '>', '.', '/', '?', '[', ']', '{', '}', '\\', '|', '-', '_', '=', '+', '`', '~']

function randomCharacter() {
	// Returns a random character from the array that holds all of the characters used in the matrix
	return characters[Math.floor(Math.random() * (characters.length - 0)) + 0];
}

function addCell(columnNum) {
	// Adds a cell to the provided column with a random character inside
	$("#col" + columnNum).prepend('<p class="cell">' + randomCharacter() + '</p><br/>')
}

function pickColumnNumber() {
	// Returns a random column number
	return Math.floor(Math.random() * ((Math.floor(window.innerWidth / 10) - 0))) + 0;
}

function startMatrix() {
	setInterval(function(){addCell(pickColumnNumber());}, 1);
	setInterval(function(){addCell(pickColumnNumber());}, 1);
}

function init() {
	// Gets column number from window width
	var columns1 = Math.floor(window.innerWidth / 10);
	var columns = Math.floor(columns1 - (columns1 / 6))

	// Add enough columns to take up full width of window
	for (i = 0; i < columns; i++) {
		$("#container").prepend('<div id="col' + i + '" class="column"></div>');
	}
	startMatrix();
}

$(document).ready(function() {
	init();

});