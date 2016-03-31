var advance = false;    //used for running while loops, so that the sequence repeats if the user doesn't enter a valid input.
var words = 0;          //keeps track of words a user is supposed to have written, and/or claims to have written.
 
//call after each and every prompt, to see if the user wants to get out.
function exit(text) {
    if (text == "ESCAPE" || text == "EXIT") {
        throw new Error("Program killed mid-run");
        throw '';
    }
}
 
alert("Welcome to the death crawl, JS version. Type escape or exit at any prompt to exit, and have fun.");
alert("When you wake up in the morning, and look around, you realize that your trusty weapon is broken. You don’t know how it broke, but none the less… it is. With a sigh, you get out of bed.");
alert("Sprint 200 words as you get dressed.");
words += 200;
alert("After you get dressed, write 500 words as you go down to the market.");
words += 500;
 
alert("There, a man sells weaponry. You’ve bought from him before, so you know that his weapons are good. He smiles as you approach. “What would you like?” He points to his assorted wares. There’s a BOW, a SWORD, and a FISHING POLE.");
while(!advance) {
    var alive = true;
    var weapon = prompt("Which weapon would you like to take?").toUpperCase(); //Always call toUpperCase() so that we can ignore case in general.
    exit(weapon);
 
    //If the user picked the bow, run this loop.
    if (weapon == "BOW") {
        alert("To claim the bow, write 500 words");
        words += 500;
        alert("After that, you get note that something’s going on down at the lake. You head down.");
        while (!advance) {
            var temp = prompt("you realize that there are enemy soldiers. Do you STAY on the hill, or HEAD DOWN?").toUpperCase();
            exit(temp); //Checks fthe words that will close the programming- calling exit the function.
 
            if (temp == "STAY") {
                alert("You stay on the hill, write 500 words as you pick off the soldiers.");
                words += 500;
                advance = true;
            } else if (temp == "HEAD DOWN") {
                alert("You go down, write 1000 words as you attempt to keep them off of you.");
                words += 1000;
                advance = true;
            } else {
                alert("Unknown choice. Try again?")
            }
        }
    } else if (weapon == "SWORD") { //If the user picked a Sword, run this loop.
        alert("To claim the sword, write 700 words");
        words += 700;
        alert("After that, you get note that something’s going on down at the lake. You head down.");
        alert("you realize there are enemy soldiers. You head down and start slashing them up. Participate in a 10 minute word war.");
        var temp = prompt("Did you win?", "TRUE or FALSE").toUpperCase();
        exit(temp);
        while (!advance) {
            if (temp == "TRUE") {
                var temp = prompt("You survive with a gash. How many words did you write?")
                exit(temp);
                words += temp;
                advance = true;
            } else if (temp == "FALSE") {
                var temp = prompt("You die, and descend to the next stage. How many words did you write?")
                exit(temp);
                words += temp;
                alive = false;
                advance = true;
            } else {
                alert("Unknown choice. Try again?")
            }
        }
    } else if (weapon == "FISHING POLE") { //If the user picked a fishing pole, run this loop.
        alert("To claim the fishing pole, write 200 words");
        words += 200;
        alert("You're down by the lake, fishing, far away from any disturbance. You catch a huge fish, but then look around because this is prime bear territory. You tuck the fish under your arm and start back up. However, a bear appears and quickly disposes of you.");
        alert("Write for 10 minutes as you descend from this life to the next.");
        var temp = prompt("How many words did you write?");
        exit(temp);
        words += temp;
        alive = false;
        advance = true;
    } else {
        alert("Unknown choice. Try again?");
    }
}
advance = false; //Reset the advance variable at the end of each loop, so that the next one can use it safely.
 
if (alive == true) {
    alert("You stumble down, back to your village and collapse in the medic’s house. However, they’re swamped with the other people that came in, and don’t notice you until it’s too late.");
    alert("Write five hundred words as you descend from this life to the next.");
    words += 500;
    alive = false;
}
 

//alert("")
 
//alert("You wrote at least " + words + " words.");


alert ("You wake up on a field, and write for 10 minutes.")
var temp = prompt("How many words did you write?");
exit(temp);
words+=temp;
alert("Write 100 words as you explore and look around. The field is full of long golden grass. The sky overhead is dark blue. You can't seem to find the sun or moon though.");
words+=100;
alert("Write 500 words a you glance around, looking for the golden orb that hovers over you.");
words+=100;
alert("You eventually find a crescent moon that looks strange- too cartoonish, and too close. Write 100 words as you attempt to figure it out.");
words+=100;
alert("Just as you think you know where you are, a dark haired girl sweeps through the field. She's covered in blue tattoos, and smiling.");
alert("Write 200 words as you attempt to ask her where you are.");
words+=200;
var temp=prompt("Want to keep going?");
exit(temp);
alert("Once you manage to ask her, she explains patiently that you're dead- and this is the after life. Write 400 words as you process her words");
words+=400;
alert("She takes your hand, soon, and leads you through the grassy field to a building, painted in spirals. Inside a council sits, already in session. There are two missing spots. Write 1000 words as the girl leads you up to one of them. She takes the other.");
words+=1000;
alert("Immediately they begin to debate whether or not your death was noble. Write for ten minutes.")
var death=""; 
while (!advance) {
    var temp=prompt("How many words did you write?")
    exit(temp)
    if (temp<=250) {
        alert("They decide that your death was quite stupid and assign you to a simple path.");
        death="STUPID";
        advance=true;
    } else if (temp<=899 && temp>=251) {
        alert("They decide that your death was average and assign you to a regular path.");
        death="AVERAGE";
        advance=true;
    } else if (temp>=900){
        alert ("They decide that your death was quite noble and assing you the hardest path.");
        death="NOBLE";
        advance=true;
    }
    else {
        alert("Unknown choice. Try again?");
    }
}
words+=temp;
advance=false;
alert("The girl starts to explain. Here in the afterlife, everyone must go on a quest to determine if they are wrorthy to stay. If not, they die. Again. If they are, they get to stay for eternity- though they can leave whenever they want to. Write 300 words as you process this.")
alert("The girl soon leads you to a rickety old bus that appears as if it's falling aprt. She explains that you get to take one companion.")
alert("Depending on how much you write, different companions can be chosen. If you want a crow, write 500 words. If you want a vulture, write 1000. If you want a cat, write 1,500.")
var companion="";
while (!advance) {
    var temp=prompt("Which companion do you want? The CAT, the VULTURE, or the CROW?").toUpperCase()
    exit(temp)
    if (temp=="CAT") {
        alert("You have chosen the cat.");
        words+=1500;
        advance=true;
    } else if (temp=="VULTURE") {
        alert("You have chosen the vulture.");
        words+=1000;
        advance=true;
    } else if (temp=="CROW") {
        alert("You have chosen the crow.");
        words+=500;
        advance=true;
    } else {
        alert("Unknown choice. Try again?");
    }
}
var companion=prompt("What would you like to name your companion?");
exit(companion)
alert("You have named your companion " + companion + ".");
alert ("Write 1,000 words a you mount the bus.");
words+=1000;
//alert("You have written" + words + "words");
alert ("The ride starts out normally enough, though you and " + companion + " are the only ones on it besides the bus driver.");
if (death=="STUPID") {
    alert ("Write two hundred words in boredom.");
    words+=200;
} else if (death=="AVERAGE") {
    alert("Write 500 words as you strike up conversation with the bus driver.");
    words+=500;
} else {
    alert ("The bus breaks down. Write 1,500 words as you help the bus driver fix it.");
    words+=1500;
}
alert("Eventually you reach your destination, a nondescript ghost town.");
if (death=="STUPID") {
    alert("Write 400 words as you look around");
    words+=400; 
} else if (death=="AVERAGE") {
    alert("Write 800 words as you look around.");
    words+=800;
} else {
    alert("The bus breaks down! Write 1,600 words as you look around.");
    words+=1600;
}
var nanowrimoCount=prompt("What's your wordcount for nanowrimo so far?");
exit(nanowrimoCount)
var word=0;
alert("Something's moving. Write "+ temp*.03+ " words.")
if (death=="STUPID") {
    alert("The thing turns out to be a bunny. Write for 10 minutes as you pet it.");
    temp=prompt("How much did you write?");
    exit(temp)
    word+=temp
} else if (death=="AVERAGE") {
    alert("The thing is a dog. Write for 20 minutes as you try to decide if it's vicious.");
    temp=prompt("How much did you write?");
    exit(temp)
    word+=temp;
    var temp=Math.floor((Math.random() * 2) + 1);
    if (temp==1) {
        alert("The dog is viciou. Write 500 words as you combat it.");
        word+=500;
    } else {
        alert("The dog is friendly. Go ahead and pet it for a minute.");
    }
} else {
    alert("It's a monster! Write 500 words as it approaches, 1000 more as you battle it, and finally, 3000 words as you try to find where to put the body.");
    word+=4500;
}
alert("Shaking from the encoounter, you hold your weapon at the ready. You can't help but remember your family members. Write 200 words as you wonder if they're thinking about you.");
word+=200;
if (death=="NOBLE") {
    alert("Write an extra 1000 words as you wonder about your family, because you died a noble death.");
    word+=1000;
}
else {
    alert("You are sad, but force yourself to continue on.")
}
alert ("You walk through the empty ghost town, before coming out to the other end. A horse stands there, with a note pinned to it's saddle. Write for 10 minutes as you read the note.");
alert ("The note proclaims that the horse is yours to ride on.");
var temp=prompt("Do you know how to ride a horse? YES or NO.").toUpperCase
exit(temp)
while(!advance) {
if (temp=="YES"&&death=="STUPID") {
    alert("Write one hundred words as you figure out how to mount the horse.")
    word+=100;
    advance=true;
} else if (temp=="NO"&& death=="STUPID") {
    alert("Write 200 hundred words as you figure out how to mount the horse.")
    word+=200;
    advance=true;
} else if (temp=="YES" && death=="AVERAGE") {
    alert("Write 400 words while you figure out how to mount the horse.")
    word+=400;
    advance=true;
} else if (temp=="NO" && death=="AVERAGE") {
    alert("Write 800 words whle you figure out how to mount the horse.")
    word+=800;
    advance=true;
} else if (temp=="YES"&&death=="NOBLE") {
    alert("Write 1,000 words while you figure out how to mount the horse.");
    word+=1000
    advance=true;
} else if (temp=="NO"&&death=="NOBLE") {
    alert("Write 2,000 words while you figure out how to mount the horse.")
    word+=2000;
    advance=true;
} else {
    alert("Unknown choice. Try again?")
}
}
advance=false;
var temp=prompt("As you ride through the barren land, you start to note small bony creatures crawling around. Do you get off and check them out? YES or NO.");
while (!advance) {
if (temp=="YES") {
    alert("Write 500 words as you pick up a lizard, 500 words as you investigate it. Write 1000 words as you realize it's made of bone.");
    word+=2000;
    advance=true;
} else if (temp=="NO") {
    alert("Write 2000 words so you don't die of boredom.");
    word+=2000;
    advance=true;
}
else {
    alert("Unknown choice. Try again.")
}
}
advance=false;
alert('Suddenly, a large white misty bear appears. In a deep voice it says "Welcome to the journey of the dead. Will you proceed?"')
alert ("You say yes.");
if (death=="STUPID") {
    alert('"To move on," he says "You must write 500 words."')
    word+=500;
} else if (death=="AVERAGE") {
    alert('"To move on," he says "you must write 1000 words."');
    word+=1000
} else {
    alert('"To move on," he says "You must write 2000 words."');
    word+=2000
}
alert("He lets you through. Write 200 words as you look around in wonder at the icy white land. Spires of ice jut out at every interval, and your horse's hooves make crunching noises as they land on the ground. Write 500 words as you urge your horse into a gallop.");
word+=700;
if (death=="STUPID") {
    alert("Nothing confronts you. Write 100 words as you get through the icy wonderland.")
} else if (death=="AVERAGE") {
    alert("Your horse has to slow down. Write 200 words a you ride through the cold.")
    word+=200;
} else {
    var threePercent=word+nanowrimoCount+1500*.03
    alert("If you died a noble death, you are immediately attacked. Hold up your weapon and attack the icy beast- that looks kind of like a yeti now that you think about it. Write 1000 words, then do a five headed hydra, write " +threePercent + " of your word count, and to finish it off, do another five headed hydra. But wait! It’s got a vindictive cousin. As you fight the cousin, do five five headed hydras. Relax as you gloat over it’s body with 200 words in two minutes.");
    word+=1000;
    word+=500;
    word+=threePercent;
    word+=500;
    word+=2500
    word+=200
}
alert("The adventure is heating up as dark clouds roll in. You see the same lady who lead you here descend upon the filed. She immediately offers you three objects.");
if (death=="STUPID") {
    alert("Write 100 words as you try to choose.");
    words+=100;
} else if (death=="AVERAGE") {
    alert("Write 500 words as you try to choose.")
} else {
    //random number generator here with option to opt out.
}
