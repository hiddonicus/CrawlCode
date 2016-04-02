var advance = false;    //used for running while loops, so that the sequence repeats if the user doesn't enter a valid input.
var words = 0;          //keeps track of words a user is supposed to have written, and/or claims to have written.

//call after each and every prompt, to see if the user wants to get out.
function exit(text) {
    if (text == "ESCAPE" || text == "EXIT" || text == "STOP") {
        throw new Error("Program killed mid-run");
    }
}

function DeathCrawl() {
    alert("Welcome to the death crawl, JS version. Type escape at any prompt to exit, and have fun.");

    /*
        Part 1 of the crawl, from the start of your day until you die. And you will die.
    */
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
                exit(temp);

                if (temp == "STAY") {
                    alert("You stay on the hill, write 500 words as you pick off the soldiers.");
                    words += 500;
                    advance = true;
                } else if (temp == "HEAD DOWN") {
                    alert("You go down, write 1000 words as you attempt to keep them off of you.");
                    words += 1000;
                    advance = true;
                } else {
                    alert("Unknown choice. Try again?");
                }
            }
        } else if (weapon == "SWORD") { //If the user picked a Sword, run this loop.
            alert("To claim the sword, write 700 words");
            words += 700;
            alert("After that, you get note that something’s going on down at the lake. You head down.");
            alert("you realize there are enemy soldiers. You head down and start slashing them up. Participate in a 10 minute word war.");

            while (!advance) {
                var temp = prompt("Did you win?", "TRUE or FALSE").toUpperCase();
                exit(temp);

                if (temp == "TRUE") {
                    var temp = prompt("You survive with a gash. How many words did you write?");
                    exit(temp);
                    words += temp;
                    advance = true;
                } else if (temp == "FALSE") {
                    var temp = prompt("You die, and descend to the next stage. How many words did you write?");
                    exit(temp);
                    words += temp;
                    alive = false;
                    advance = true;
                } else {
                    alert("Unknown choice. Try again?");
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

    /*
        Part 2 of the crawl, you wake up in the underworld and start on your adventure.
    */
    alert("Write for 10 minutes as you wake up in a field.");
    var temp = prompt("How much did you get?");
    exit(temp);
    words += temp;
    alert("Write 100 words as you explore, and look around. The field is full of long, golden grass. The sky overhead is dark blue. You can’t seem to find the sun or moon though.");
    words += 100;
    alert("Write 500 words as you glance around, looking for the golden orb that hovers over you.");
    words += 500;
    alert("You eventually find a crescent moon that looks strange- too cartoonish, and too close. Write 100 words as you attempt to figure it out.");
    words += 100;
    alert("Just as you think you know where you are, a dark haired girl sweeps through the field. She’s covered in blue tattoos, and smiling. Write 200 words as you attempt to figure out how to ask her where you are.");
    words += 200;
    alert("Once you manage to ask her, she explains patiently that you’re dead- and this is the after life. Write 400 words as you process her words.");
    words += 400;
    alert("She takes your hand, soon, and leads you through the grassy field to a building, painted  in spirals. Inside, a council sits, already in session. There are two missing spots. Write 1000 words as the girl leads you up to one of them. She takes the other.");
    words += 1000;

    alert("Immediately, they begin to debate whether or not your death was noble. Write for ten minutes.");
    var death = "";
    while (!advance) {
        var temp = prompt("How much did you get?");
        exit(temp);
        words += temp;

        if(temp < 250) {
            alert("They decide that your death was quite stupid, and condemn you to the easiest path.");
            death = "STUPID";
            advance = true;
        } else if (temp >= 250 && temp < 900) {
            alert("They decide that your death was average, and assign you to a regular path.");
            death = "AVERAGE";
            advance = true;
        } else if (temp >= 900) {
            alert("They decide that your death was quite noble, and assign you the hardest path.");
            death = "NOBLE";
            advance = true;
        } else {
            alert("That's not a valid number. Try again?");
        }
    }
    advance = false;

    alert("The girl starts to explain. Here in the afterlife, everyone must go on a quest to determine if they are worthy to stay. If they aren’t, they die. Again. If they are, they get to stay for eternity- though they can leave when they want to. Write 300 words as you process this.");
    words += 300;

    alert("The girl soon leads you to a rickety old bus that appears as if it’s falling apart. She explains that you get to take one companion.");
    while (!advance) {
        var companion = prompt("You can take a CROW, a VULTURE, or a CAT.").toUpperCase();
        exit(companion);

        if (companion == "CROW") {
            alert("Write 500 words, as you take the crow for a companion.");
            words += 500;
            advance = true;
        } else if (companion == "VULTURE") {
            alert("Write 1000 words, as you take the vulture as your companion.");
            words += 1000;
            advance = true;
        } else if (companion == "CAT") {
            alert("Write 1500 words, as the cat takes you for a companion.");
            words += 1500;
            advance = true;
        } else {
            alert("Unknown choice. Try again?");
        }
    }
    advance = false;

    var companionName = prompt("Having chosen a companion, what would you like their name to be? Leave blank to just call them " + companion);
    exit(name);
    if (companionName == "") {
        companionName = companion.toLowerCase();
    }

    /*
        Part 3. Your choices and your death weighed, adventure is afoot.
    */
    alert("Write 1000 words as you mount the bus. The bus ride starts normally enough, though you and " + companionName + " are the only ones on it, besides the bus driver.");
    if (death == "STUPID") {
        alert("Write 200 words in boredom.");
        words += 200;
    } else if (death == "AVERAGE") {
        alert("Write 500 words as you strike up conversation with the bus driver.");
        words += 500;
    } else if (death == "NOBLE") {
        alert("The bus breaks down.  Write 1,500 words as you help the bus driver fix it.");
        words += 1500;
    }

    alert("Eventually you reach your destination, a nondescript ghost town.");
    if (death == "STUPID") {
        alert("Write 400 words as you look around.");
        words += 400;
    } else if (death == "AVERAGE") {
        alert("Write 800 words as you look around.");
        words += 800;
    } else if (death == "NOBLE") {
        alert("Write 1,600 words as you look around.");
        words += 1600;
    }

    alert("Something’s moving. Write 3% of your word count for this crawl, " + (words *.03) + ".");
    if (death == "STUPID") {
        alert("The thing turns out to be a bunny. Write for 10 minutes as you pet it.");
        var temp = prompt("How many words did you get?");
        exit(temp);
        words += temp;
    } else if (death == "AVERAGE") {
        alert("The thing is a dog. Write for 20 minutes as you try to decide if it’s vicious.");
        var temp = prompt("How many words did you get?");
        exit(temp);
        word += temp;
        if (Math.round(Math.random()) == 1) {
            alert("the dog is vicious. Write 500 words as you combat it.");
            words += 500;
        } else {
            alert("The dog is friendly, and allows you to pet it as you pass freely by.");
        }
    } else if (death == "NOBLE") {
        alert("It’s a monster! Write 500 words as it approaches.");
        words += 500;
        alert("Now 1000 more as you battle it!");
        words += 1000;
        alert("And finally, 3000 words as you try to find where to put the massive body.");
    }

    if (death != "NOBLE") {
        alert("Shaking from the encounter, you hold your weapon at the ready. You can’t help but remember your family members. Write 200 words as you wonder if they’re thinking about you.");
        words += 200;
    } else {
        alert("Shaking from the encounter, you hold your weapon at the ready. You can’t help but remember your family members. Write 1200 words as you wonder about your family, and whether they're thinking about you.");
        words += 1200;
    }

    alert("You walk through the empty ghost town, before coming out to the other end. A horse stands there, with a note pinned to it’s saddle. Write for 10 minutes as you read the note.");
    var temp = prompt("How many words did you get?");
    exit(temp);
    words += temp;

    while(!advance) {
        var riding = prompt("The note proclaims that the horse is yours to ride on. Now the question is, do you know how to ride a horse? YES or NO").toUpperCase();
        if(riding == "YES") {
            riding = true;
            advance = true;
        } else if (riding == "NO") {
            riding = false;
            advance = true;
        } else {
            alert("Unknown choice. Try again?");
        }
    }
    advance = false;
    if (death == "STUPID") {
        if(riding) {
            alert("Write 100 words as you mount the horse's comfortable and relaxing saddle proficiently.");
            words += 100;
        } else {
            alert("Write 200 words as you struggle to mount the horse's soft saddle.");
            words += 200;
        }
    } else if (death == "AVERAGE") {
        if(riding) {
            alert("Write 400 words as you hop up into the simple saddle with ease.");
            words += 400;
        } else {
            alert("Write 800 words as you struggle onto the regular old saddle.");
            words += 800;
        }
    } else if (death == "NOBLE") {
        if (riding) {
            alert("Write 1000 words as you easily pull yourself onto the bare back.");
            words += 1000;
        } else {
            alert("Write 2000 words as you struggle to mount and stay on the horse's soft fur without a saddle.");
            words += 2000;
        }
    }

    while (!advance) {
        var temp = prompt("As you ride through the barren land, you start to note small bony creatures crawling around. Do you get off and check them out? YES or NO").toUpperCase();
        exit(temp);
        if (temp == "NO") {
            temp = true;
            advance = true;
        } else if (temp == "YES") {
            temp = false;
            advance = true;
        } else {
            alert("Unknown choice. Try again?");
        }
    }
    if (temp == true) {
        alert("Write 2000 words to resist dying of boredom.");
        words += 2000;
    } else {
        alert("Write 500 words as you pick up a lizard.");
        words += 500;
        alert("Write 500 words as you investigate it.");
        words += 500;
        alert("Write 1000 words as you realize it’s made of bone.");
        words += 1000;
    }

    alert("Suddenly, a large white, misty bear appears. In a deep voice it says “Welcome to the journey of the dead. Will you proceed?” You say yes.");
    if (death == "STUPID") {
        alert("“To move on,” He says “You must write 500 words.”");
        words += 500;
    } else if (death == "AVERAGE") {
        alert("“To move on,” He says “you must write 1000 words.”");
        words += 1000;
    } else if (death == "NOBLE") {
        alert("“To move on,” He says “you must write 2000 words.”");
        words += 2000;
    }

    alert("He lets you through. Write 200 words as you look around in wonder at the icy white land.");
    words += 200;
    alert("Spires of ice jut out at every interval, and your horse’s hooves make crunching noises as they land on the ground. Write 500 words as you urge your horse into a gallop.");
    words += 500;
    if (death == "STUPID") {
        alert("If you died a stupid death, nothing confronts you. Write 100 words as you get through the icy wonderland.");
        words += 100;
    } else if (death == "AVERAGE") {
        alert("If you died an average death your horse has to slow down. Write 200 words.");
        words += 200;
    } else if (death == "NOBLE") {
        alert("If you died a noble death, you are immediately attacked. Hold up your weapon and attack the icy beast- that looks kind of like a yeti now that you think about it. Write 1000 words");
        words += 1000;
        alert("Now do a five headed hydra, then write 3% of your word count!");
        var temp = prompt("How many words did you write in the hydra?");
        exit(temp);
        words += temp;
        words += Math.round(words*0.03);
        alert("and to finish it off, do another five headed hydra!");
        var temp = prompt("How many words did you write in the hydra?");
        exit(temp);
        words += temp;

        alert("But wait! It’s got a vindictive cousin. As you fight the cousin, do five five headed hydras.");
        var temp = prompt("How many words did you get, from all five added together?");
        exit(temp);
        words += temp;

        alert("Relax as you gloat over it’s body with 200 words in two minutes.");
        words += 200;
    }

    alert("The adventure is heating up as dark clouds roll in. You see the same lady who led you here descend upon the field. She immediately offers you three objects.");
    if (death == "STUPID") {
        alert("Write 100 words as you try to choose.");
    } else if (death == "AVERAGE") {
        alert("Write 500 words as you consider each choice.");
    } else if (death == "NOBLE") {
        var temp = Math.round(Math.random()*30001) + 20000;
        alert("Write " + temp + " words as you agonize over the decision. ((If this is too much- and you’re not up for a 50K day any time soon, do " + temp/10 + " words insted.)) If you’re in a condition to write 50,000 words and can, write 50,000 words. This step cannot be skipped by people with the username of Elluna Hellen.");

        while (!advance) {
            var didYou = prompt("Did you write the larger or the smaller amount? LARGER or SMALLER.").toUpperCase();
            exit(didYou);

            if (didYou == "LARGER") {
                words += temp;
                advance = true;
            } else if (didYou == "SMALLER") {
                words += temp/10;
                advance = true;
            } else {
                alert("That's not a valid number. Try again?");
            }
        }
        advance = false;
    }

    while (!advance)
        {
            var choice = prompt("The objects are a VIAL colored green, a DAGGER, and a SCROLL.").toUpperCase();
            exit(choice);

            if (choice == "VIAL") {
                alert("Wordwar with someone for fifteen minutes as you take a sniff of the potion. If you lose write 100 more words as you steady yourself from a sudden bout of dizziness.");
                while (!advance) {
                    var temp = prompt("Did you win? YES or NO").toUpperCase();
                    exit(temp);

                    if (temp == "YES") {
                        var temp = prompt("How many words did you get?");
                        exit(temp);
                        words += temp;
                        advance = true;
                    } else if (temp == "NO") {
                        var temp = prompt("How many words did you get?");
                        exit(temp);
                        words += temp + 100;
                        advance = true;
                    } else {
                        alert("Unknown choice. Try again?");
                    }
                }
            } else if (choice == "DAGGER") {
                alert("Write 750 words as you examine your new dagger.");
                words += 750;
                advance = true;
            } else if (choice == "SCROLL") {
                alert("Do three five-minute words wars as you read the text in your new scroll.");
                var temp = prompt("How many words did you get from all three wars?");
                exit(temp);
                words += temp;
                advance = true;
            } else {
                alert("Unknown choice. Try again?");
            }
        }
        advance = false;

        alert("You gallop on, while writing 500 words.");
        words += 500;
        alert("Suddenly, you find yourself in a dark cave, with your horse gone. Around you, blue mist drifts like fog. As you stumble to your feet, a glowing blue man appears in front of you. “So,” He says, “They sent someone to test me.” He snaps his fingers, and you find yourself in an arena.");
        if (death == "STUPID") {
            alert("Write 300 words to block his first attacks, then win a 30 minute word war to deliver a series of simple strikes that take him down.");
            words += 300;
            var temp = prompt("How many words did you write in your word war[s]?");
            exit(temp);
            words += temp;
            alert("The arena fades away and you return to the cave.");
        } else if (death == "AVERAGE") {
            alert("Write 1000 words to stagger the man, and a 10 minute word war to win the battle.");
            words += 1000;
            var temp = prompt("How many words did you write?");
            exit(temp);
            words += temp;
            alert("The arena and man fade away and you return to the cave.");
        } else if (death == "NOBLE") {
            alert("First, write 10000 words as you get into the battle.");
            words += 10000;
            alert("Do ten five-headed hydras as you fend off his lightning attacks!");
            var temp = prompt("How many words did you get from all ten?");
            exit(temp);
            words += temp;
            alert("Do a word war for 20 minutes against someone with equal writing speed, as you gain equal footing and battle back and forth.");
            var temp = prompt("How many words did you get?");
            exit(temp);
            words += temp;

            while (!advance) {
                var temp = prompt("Did you win? YES or NO").toUpperCase();
                exit(temp);

                if (temp == "YES") {
                    alert("Write 2500 words as you gain the upper hand, giving him a gash across the chest.");
                    words += 2500;
                    advance = true;
                } else if (temp == "NO") {
                    alert("Write 5000 words as he almost gains the upper hand, giving you a cut across the cheek that will surely become a dramatic scar someday.");
                    words += 5000;
                    advance = true;
                } else {
                    alert("Unknown choice. Try again?");
                }
            }
            advance = false;

            alert("You have ten minutes to write 1111 words, as you take a gamble and launch an assault.");
            while (!advance) {
                var temp = prompt("Did you succeed? YES or NO").toUpperCase();
                exit(temp);

                if (temp == "YES") {
                    var temp = prompt("How many words did you write?");
                    exit(temp);
                    words += temp;
                    alert("Your assault succeeds, and you deliver a killing blow. Write 5000 words as both the arena and the man fade away.");
                    words += 5000;
                    advance = true;
                } else if (temp == "NO") {
                    var temp = prompt("How many words did you write?");
                    exit(temp);
                    words += temp;
                    alert("Your assault fails, and the man's sword swings down towards your neck. Write 10000 words to block the strike, and taking advantage of the man's short surprise, drive upwards to finish him off. The arena and man fade away, and you are returned to the cave.");
                    words += 10000;
                    advance = true;
                } else {
                    alert("Unknown choice. Try again?");
                }
            }
            advance = false;
        }

        alert("Write " + Math.round(words*0.1) + " words as you nurse your wounds.");
        words += Math.round(words*0.1);
        alert("You start heading back to the field, as you have finished. Write 500 words as you do this.");
        words += 500;
        alert("You reach where it should be, only to realize that it’s been replaced by a city.");
        if (death == "STUPID") {
            alert("Write 900 words as you walk into the city and are greeted by a long lost relative.");
            words += 900;
        } else if (death == "AVERAGE") {
            alert("Write 1000 words as you walk into the city and are greeted by a party of your ancestors.");
            words == 1000;
        } else if (death == "NOBLE") {
            alert("Write " + Math.round(words*0.1) + " as you are greeted by a massive party, the city welcoming a new hero.");
            words += Math.round(words*0.1);
        }

    /*
        Part 4. Having completed the quest, here is the total of your adventure.
    */
    alert("Congratulations on completing the Death Crawl! You still alive there?");
    alert("Here are some details about your performance:");
    alert("You chose " + weapon.toLowerCase() + " as a weapon, and in death chose " + choice.toLowerCase() + " as your object of choice.");
    alert("You took a " + companion.toLowerCase() + " as your companion, and named them " + companionName + ".");
    alert("You died a " + death.toLowerCase() + " death.")
    alert("You wrote at least " + words + " words. Awesome!");
    alert("That's all I have. Farewell! And good luck on your afterlife.");
}
