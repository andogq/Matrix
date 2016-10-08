var characters = [0,1,2,3,4,5,6,7,8,9]

function init() {
	// Gets column number from window width
	var columns = Math.floor(window.innerWidth / 10);

	// Add enough columns to take up full width of window
	for (i = 0; i < columns; i++) {
		$("#container").append('<div id="col' + i + '" class="column"></div>');
	}
	// For test purposes. Will need to be automated so that it will automatically pick column ect.
	addCell(pickColumn());
}

function randomCharacter() {
	// Returns a random character from the array that holds all of the characters used in the matrix
	return characters[Math.floor(Math.random() * (characters.length - 0)) + 0];
}

function addCell(columnNum) {
	// Adds a cell to the provided column with a random character inside
	$("#col" + columnNum).append('<p class="cell">' + randomCharacter() + '</p>')
}

function pickColumn() {
	return Math.floor(Math.random() * ((Math.floor(window.innerWidth / 10) - 0)) +0);
}

$(document).ready(function() {
	init();
});