alert("This crawl comes from Nanowrimo, and was first posted by the user gaegirl. To use this crawl, you have to have another window open, which is your writing software. If you're using scrivener or some other off of browser writing tool, don't worry about this. If you're using google docs, please open up a new browser to use this.");
alert("This is a guided word crawl that works through boxes like this. When a prompt like this is up you will not be able to use your browser, which is why this works best for off of browser writing systems. When asked for your wordcount or time, please only enter the number in numerical form (i.e 1, 2, 239, 300,) and do not include words after it. Thank you. Hit okay to continue.");
alert("This craw is long, and you can split it up over days, but with this guided program, unless you want to go over every step again, it is better to do it in one sitting, or to leave the browser up when you walk away.");
var start = prompt("You start in Pallet town, and do a 100 word sprint. How many minutes did it take?");
if (start <= 2) {
    var LessThanTwo = alert("Congratulations! Pick your favorite Gen 1 starter, and hit the road!");
} else {
    var MoreThanTwo = alert("Sorry, your favorite Gen 1 starter has already been taken, so pick another and hit the road.");
}
var Gen = prompt("What gen did you pick? Bulbasaur, charmander, or squirtle?").toLowerCase();
alert("Your first stop is Viridian City, but the gym is all locked up. Go to the store instead, and pick up a potion. You might need it later.");
alert("Your next stop is Pewter City, but to get there, you need to cross through Viridian Forest.");

if (Gen == "bulbasaur") {
    alert("Bulbasaur is weak to bug types. Fight them off with a fifteen minute wordwar, and try for 750 words."); //An actual note, I had this at 1000, then I realized that was way too much. 750 is good maybe? IDK
    var didYaDoIt = prompt("How many words did you write?"); //Not enough
    if (didYaDoIt >= 750) {
        alert("You did it!");
    } else {
        alert("You fainted! Sprint 1,000 words to be revived.");
    }
} else if (Gen == "charmander") {
    alert("Fire is super effective against bugs! With Charmander, take a leisurely stroll through the forest by doing a freewrite for 10 minutes. Hit okay when you've finished.");
} else if (Gen == "squirtle") {
    alert("Squirtle isn't weak or strong to bug pokemon, so spend the next 10 minutes working on any scene you think could be a bit stronger.");
} else {
    alert("Sorry, but that's an option.");
}
alert("You arive in Pewter City, ready to rock. You head towards the gym to face Brock.");
if (Gen == "squirtle") {
    alert("Squirtle is strong to rock. Do a sprint to the nearest hundred.");
} else if (Gen == "bulbasaur") {
    var youWillBeOkay = prompt("Vinewhip gets you through alright. Do a five minute word war. How many words did you write?");
    if (youWillBeOkay >= 150) {
        alert("You win the war, you beat the bugs! You may now continue on your way.");
    } else {
        alert("You either entered an invalid answer, or got less than 150 words. Try again! Once you've written 150 though, feel free to continue.");
    }
} else if (Gen == "charmander") {
    var YouAreScrewed = prompt("Sorry, but rock is strong to fire, so show your skill by completing a 10 minute word war. How many words did you get?");
    if (YouAreScrewed >= 350) {
        alert("You win the war with " + YouAreScrewed + " words!");
    } else {
        var ThisAmountNeeded = 350 - YouAreScrewed;
        prompt("You either entered an invalid answer, or got less than 350 words. Write " + ThisAmountNeeded + " words to continue.");
    }
}
alert("You made it through Pewter City, and are one step closer to becoming the Pokemon Master! You cut through Mount Moon to get to Cerulean City.");
alert("There are zubats everywhere! They attack.");
var doYouWin = Math.floor((Math.random() * 6) + 1);
if (doYouWin <= 3) {
    alert("You rolled through with no problem! Grab a potion, and move on.");
} else {
    alert("You make it through, but barely. Sprint " + doYouWin * 100 + " words to move on.");
}
alert("After your battle in Mount Moon, you come into Cerulean City ready to make a splash. You have to fight gym leader Misty for your Cascade badge.");
if (Gen == "bulbasaur") {
    alert("If you picked Bulbasaur, your grass soaks up all the water your competition can spray at you with no problem. Free write a scene you've been looking forward to writing for ten minutes. After that, get your Cascade badge and move on.");
} else if (Gen == "squirtle") {
    alert("Squirtle is weak to water, so you'll have a bit of a tougher time. Work on a scene you've been putting off for the next ten minutes. After that, get your Cascade Badge and move on.");
} else {
    alert("Charmander is weak to water, so you'll have a bit of a tougher time. Work on a scene you've been putting off for the next ten minutes. After that, get your Cascade Badge and move on.");
}
var evolutionIsntJustForScientists = prompt("Wow! What is this? Your pokemon is evolving! Do a 200 word sprint. How many minutes did it take you?");
if (evolutionIsntJustForScientists <= 2) {
    alert("Congratulations! You get a potion for doing it in under two minutes.");
} else {
    alert("Sorry, you took too long. That's okay though, continue on with no penalty!");
}
alert("You get to Vermilion City and find that S.S.Anne is in the port. This pokemon party ship only lets the best on board. Prove that you're the best by picking your favorite pokemon and sprinting five times it's pokedex number if it's a triple digit, sprint ten times the number if it's a double digit, and one hundred times the number if it's a single digit!(You can find the pokedex number here :http://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Kanto_Pok%C3%A9dex_number)");
alert("Enjoy your time on the ship by taking a writing break. You deserve it!. Sadly, the internet is still off limits.");
alert("Alright, that was fun! But back to business. You go up against Lieutenant Surge and his electric pokemon now.");
var howManyDoYouNeed = Math.floor((Math.random() * 10) + 1);
alert("All starters have normal effects against electricity, so sprint " + howManyDoYouNeed * 100 + " words.");
alert("You've gotten your thunder badge, congratulations!");
alert("You stop in Lavender Town. It's a spooky place, there's no gym, and it's haunted by ghost pokemon. Sprint to the nearest hundred to leave as soon as you can.");
var doYouWantAPotion = confirm("You soon arrive in Celadon, the big city. The giant shopping center is a great place to buy a potion, if you want it. Hit okay if you want to try for a potion, and cancel if you don't.");
if (doYouWantAPotion == true) {
    alert("Do a fifteen minute word war. If you win the war, you get the potion.");
} else {
    alert("You head towards the gym.");
}
alert("Erika awaits you with grass types, standing between you and a Rainbow badge.");
if (Gen == "charmander") {
    alert("Charmeleon burns through these grass pokemon, so burn through your novel by finishing the page you are currently on.");
} else if (Gen == "bulbasaur") {
    prompt("Ivysaur stuggles against the grass types. Do an hour long word war. Win or lose, then take your badge and move on.");
} else {
    prompt("Wartortle stuggles against the grass types. Do an hour long word war. Win or lose, then take your badge and move on.");
}
alert("Saffron City awaits you with its Psychic pokemon, and trainer Sabrina! Beat them for a Marsh Badge!");
alert("Physic pokemon can wreak havoc on you, and make you want to quit. Sprint to the nearest thousand to show them you are tougher than that, and earn your fifth badge!");
alert("Only three more badges to go before you can take on the Elite Four and prove that you truly are the very best, like no one ever was. You are on your way to Fuchsia City.");
var favoritePokemon = prompt("You are taking a stroll through the Safari zon, which is in Fuchsia City. It holds all type of cool pokemon. Sudenly, a wild pokemon appears. It's your favorite type. What kind of pokemon is it?");
var whatTypeOfPokemon = prompt("One of your pokemon's types is " + favoritePokemon + "?").toLowerCase();
if (whatTypeOfPokemon == "ground" || whatTypeOfPokemon == "pyschic") {
    alert("You're strong gainst your enemies. Show your strength by completing a 30 minute word war.");
} else if ((Gen == "bulbasaur" && whatTypeOfPokemon == "fighting") || (Gen == "bulbasaur" && whatTypeOfPokemon == "poison") || (Gen == "bulbasaur" && whatTypeOfPokemon == "bug")) {
    alert("Your pokemon are weak against your enemies. Win a 60 minute wordwar to earn your Soul badge. If you lose, write 1,000 words.");
} else {
    alert("Your character isn't weak or strong, so win a 30 minute word war to earn your badge and move on. If you lose, write 500 words.");
}
var evolvedAgain = prompt("You are on your way to Cinnabar Island to earn your seventh badge, the Volcano badge, when suddenly, your starter evolves again! Sprint 400 words to hurry the process along. How many minutes did it take you?");
if (evolvedAgain <= 2) {
    alert("You win a potion!");
} else {
    alert("Good job!");
}
alert("The gym on Cinnabar Island is home to Blaine and his white-hot fire types. Do what you can to cool them off, and collect your second to last badge.");
if (whatTypeOfPokemon == "water" || whatTypeOfPokemon == "ground" || whatTypeOfPokemon == "rock" || Gen == "squirtle") {
    alert("Quench the flames while you quench your thirst. Get a beverage of your choosing, and write at your own pace until it is gone. Your volcano Badge will be waiting for you on the other side.");
} else if (whatTypeOfPokemon == "fire" && Gen == "bulbasaur" || whatTypeOfPokemon == "grass" && Gen == "bulbasaur" || whatTypeOfPokemon == "ice" && Gen == "bulbasaur" || whatTypeOfPokemon == "steel" && Gen == "bulbasaur" || whatTypeOfPokemon == "bug" && Gen == "bulbasaur") {
    alert("You sruggle to handle the heat. Sprint to the nearest thousand to outrun the flames, and earn your Volcano Badge");
} else {
    alert("You throw out a little fire of your own, by writing for ten minutes. The scene heats up (it can be literal figre, a fight, a moment of passion, a day in the sun, anything you want) before taking your badge and going on your way");
}
alert("For the last badge, head back to Viridian City and face Giovanni, the leader of Team Rocket, notorious pokemon villains! He wants to crush your dreams with his Ground types, but don't let him!");
if (whatTypeOfPokemon == "water" || whatTypeOfPokemon == "grass" || whatTypeOfPokemon == "ice" || Gen == "squirtle") {
    alert("Your heroic spirit overcomes your enemies with ease! Free write a scene where the protagonist comes out on top.");
} else if (whatTypeOfPokemon == "electric" || whatTypeOfPokemon == "poison" || whatTypeOfPokemon == "rock") {
    alert("It looks like you are doomed, unless you can write a scene where the antagonist comes out on top!");
} else {
    alert("Write about an interaction between the protagonist and antagonist. Who comes out on top? You win, either way.");
}
alert("Now that you have all eight badges, you can challenge the Elite Four! These four masterful trainers are considered the best in the land, but you can beat them all!");
alert("To beat the Elite Four, do four 60 minute word sprints. You're almost there! Once you've finished all four, you truly are the very best. Enjoy your time as pokemon master, and enjoy the dent you just made in your wrod count. The entire poke-universe applauds your skill");
alert("This JavaScript version of the crawl was made by user HiddenStorys with thanks to CraftSpider for their help. Thank you for participating, and congratulations on winning!");
var needACode = prompt("To access new levels, enter in a code below! If you don't know the code, that's alright, just put in any random thing and hit enter.").toLowerCase();
if (needACode == "ptp") {
    //make the pokemon get left with someone not run away thanks
    var PTPokemon = prompt("A wild Max appears. A wild Hidden appears. A wild Craft appears. A wild Dino appears. A wild Hawthorn appears. Which do you go after?").toLowerCase();
    if (PTPokemon == "max" || PTPokemon == "wild max") {
        alert("You have chosen the wild Max. They attack with glitterbrush!");
        alert("Your pokemon get scared and run.");
        alert("The wild Max takes pity on you because you lost your pokemon. They agree to be your pokemon.");
        alert("You have captured the wild Max!");
    }
    if (PTPokemon == "hawthorn" || PTPokemon == "wild hawthorn") {
        alert("You have chosen the wild Hawthorn. They attack with sharpie, and doodle all over your pokemon.");
        alert("Your pokemon, embarrased because of being doodled on, run away.");
        alert("The wild Hawthorn takes pity on you because you lost your pokemon. They agree to be your pokemon.");
        alert("You have captured the wild Hawthorn!");
    }
    if (PTPokemon == "hidden" || PTPokemon == "wild hidden") {

    }
} else {
    prompt("Sorry, the code was incorrect.");
}
