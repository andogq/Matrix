var characters = [0,1,2,3,4,5,6,7,8,9, 'a', 'b', 'c', 'd']

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