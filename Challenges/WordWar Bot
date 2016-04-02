//Wordwar bot
var advance=false;
var wins=0;
var losses=0;
while (!advance) {var length=prompt("Welcome to the WordWar bot! How long would you like to wordwar in minutes?");
var words=Math.round(Math.random()*(length) + length*100/2);
alert("Write for " + length + " minutes.");
var yourWords=prompt("How many words did you write?");
alert("I wrote " + words+" words.");
if (words>yourWords){
	alert("I won. Better luck next time.")
	losses+=1;
} else if (words==yourWords) {
	alert("We tied!")
} else {
	alert("You won!")
	wins+=1;
}
var Tadvance=false;
while(!Tadvance) {
	var stats=prompt("Would you like to see your statistics? YES or NO?").toUpperCase()
		if (stats=="YES"){
			alert("You have won " + wins + " times. \n You have lost " + losses + " times.");
			Tadvance=true;
		} else {
			alert("Alright.")
			Tadvance=true;
		}
}
var temp=prompt("Would you like to go again? YES or NO?").toUpperCase()
if (temp=="YES"){
	//nothing
} else {
	advance=true;
	alert("See you next time!")
}
}
