//Race Bot
var advance=false; 
var increases=0;
var decreases=0;
var same=0;
alert("Welcome to the Racebot, the bot designed to help you improve your word count!");
var wpm=prompt("What's your words per minute?");
while(!advance){var decreaseTest=wpm*10;
var write=Math.round(Math.random()*(wpm) + wpm*10+100);
alert("Try to get " + write + " words in ten minutes.");
var wordsGained= prompt("How many words did you get?")
if (wordsGained>=write) { //checks to see if they've increased
	alert("You have increased your wpm!")
increases+=1;
} else {
	alert("You have not increased your wpm.");
}
if (decreaseTest>wordsGained) { //Checks to see if their wpm has decreased.
	decreases+=1;
} 
if (wordsGained===decreaseTest){
	same+=1;
}
TrAdvance=false;
while(!TrAdvance) {
	var temp=prompt("Would you like to see your stats? YES or NO").toUpperCase()
	if (temp=="YES") { 
		alert("You have decreased in WPM " + decreases + " times.\n You have increased" + increases + " times. You have stayed the same " + same + " times.") 
		TrAdvance=true;
	} else if (temp=="NO") {
		alert ("Alright.")
		TrAdvance=true;
	} else {
		alert("Answer not recognized. Try again?")
	}
	Tadvance=false;
	while (!Tadvance) {
		var temp=prompt("Would you like to go again? YES or NO").toUpperCase()
		if (temp=="YES") {
			alert("Alright.")
			Tadvance=true;
		} else if(temp=="NO") {
			alert("Alright.")
			Tadvance=true;
			advance=true;
		} else {
			alert("Try again, answer not recognized.")
		}
	}
}
}
