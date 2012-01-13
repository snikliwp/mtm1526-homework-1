// JavaScript Document
	var name = prompt("Please enter a letter");
var writeNameMultipleTimes = function() {
	for (var i = 1; i<11; i++) {
		var c = 0;
		while (c != i) {
		document.write(name)
		c++;
		}
		document.write('<br>');
	}
};

writeNameMultipleTimes();




