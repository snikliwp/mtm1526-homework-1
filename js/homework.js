// JavaScript Document
	
	
var letter
while (!letter){
	letter = prompt("Please enter a letter");
}
	
	
	
var writeLetterMultipleTimes = function() {
	for (var i = 1; i<11; i++) {
		var c = 0;
		while (c != i) {
		document.write(letter)
		c++;
		}
		document.write('<br>');
	}
};

writeLetterMultipleTimes();




