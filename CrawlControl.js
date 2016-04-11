var advance = false;
var wordAmount = 0;
var crawlsPerSession = 0;
var challengesPerSession = 0;
var generatorsPerSession = 0;
var loggedIn = false;
var userName;
var baseURL = "https://hiddenstorys.github.io/CrawlCode/"

var crawls = { //A dictionary of crawls and details about them. Todo: Put in details about them. 
  "Pokemon Crawl": {
    "Author": "gaegirl",
    "Converter": "HiddenStorys",
    "Description": "Today's the day! It's time to start on your journey as a pokemon trainer. Pick a starter, and battle your way through the region.",
    "Theme": "Pokemon Trainer"
  },
  "Death Crawl V1": {
    "Author": "HiddenStorys",
    "Converter": "HiddenStorys",
    "Description": "",
    "Theme": "Trip through the Underworld"
  },
  "Death Crawl V2": {
    "Author": "HiddenStorys",
    "Converter": "CraftSpider",
    "Description": "",
    "Theme": "Trip through the Underworld",
    "WordMin": 11452,
  }
};

var challenges = { //A dictionary of challenges and details about then.
  "Three Percent": {
    "Author": "HiddenStorys",
    "Description": "Take three percent of your current word count, and sprint to that amount."
  },
  "Word War Bot": {
    "Author": "HiddenStorys",
    "Description": ""
  },
  "Race Bot": {
    "Author": "HiddenStorys",
    "Description": ""
  },

};

var generators = {
  "Prompt Generator": {
    "Author": "HiddenStorys",
    "Description": ""
  },
  "Truth or Dare Generator": {
    "Author": "HiddenStorys",
    "Description": ""
  }
};

var scriptList = [
  baseURL + 'Crawls/DeathCrawlV2.js',
  baseURL + 'Crawls/DeathCrawlV1.js',
  baseURL + 'Crawls/PokemonCrawl.js',
  baseURL + 'Challenges/Racebot.js',
  baseURL + 'Challenges/WordWarBot.js'
];


/*
    Initialization code
*/

function ccInit() {
  var jquery = document.createElement('script');
  jquery.setAttribute('type', 'text/javascript');
  jquery.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js');
  jquery.onload = function() {
    loadScript(0);
  };
  document.head.appendChild(jquery);
}

ccInit();

alert("Welcome to Crawl Control V 0.1");

function loadScript(id) {
  if (id >= scriptList.length) {
    menu();
  } else {
    var url = scriptList[id];
    if (/\.js$/.exec(url)) { //If it's a javascript file...
      $.getScript(url, function() {
        loadScript(id + 1);
      });
    } else if (/\.css$/.exec(url)) { //If it's a CSS file...
      $('<link>').attr({
          rel: 'stylesheet',
          type: 'text/css',
          href: url
        }).appendTo($('head'));
      loadScript(id + 1);
    } else { //If it's neither of those...
      console.log('Error loading script: ' + url);
      loadScript(id + 1);
    }
  }
}

loadScript(0);
/*
    End initialization code
*/

function setStorage(key, value) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(key, value);
  } else {
    alert("Sorry, your device doesn't support local storage, but we'll still store your stats for this session.");
    //Get a new device.
  }
}

function getStorage(key) {
  if (typeof(Storage) !== "undefined") {
    return localStorage.getItem(key);
  } else {
    alert("Sorry, your device doesn't support local storage, but we'll still store your stats for this session.");
    //Get a new device.
  }
}

function removeStorage(key) {
  if (typeof(Storage) !== "undefined") {
    localStorage.removeItem(key);
  } else {
    alert("Sorry, your device doesn't support local storage, but we'll still store your stats for this session.");
    //Get a new device.
  }
}

function createAccount() {
  var tempUserName = prompt("What would you like your username to be?").toUpperCase();
  var passWord = prompt("What would you like your password to be?");

  if (getStorage(tempUserName) !== tempUserName) {
    userName = tempUserName;
    setStorage(userName, passWord);
    setStorage(userName + "Words", wordAmount);
    loggedIn = true;
    alert("An account has been created. Greetings, " + userName);
  } else {
    alert("That user appears to already exist, sorry.");
  }
}

function login() {
  var tempUserName = prompt("What's your username?").toUpperCase();
  var passWord = prompt("What's your password?\n(Warning: Case Sensitive)");

  if (getStorage(tempUserName) == passWord) {
    userName = tempUserName;
    wordAmount = getStorage(userName + "Words");
    loggedIn = true;
    alert("You've been logged in. Welcome back, " + userName);
  } else {
    alert("Username or password unrecognized.");
  }
}

function logout() {
  if (loggedIn) {
    setStorage(userName + "Words", wordAmount);
    userName = null;
    loggedIn = false;
  } else {
    alert("You're already not logged in!");
  }
}

function removeAccount() {
  if (loggedIn) {
    removeStorage(userName);
    removeStorage(userName + "Words");
    userName = null;
    loggedIn = false;
  } else {
    alert("You're already not logged in!");
  }
}

function clearSession() {
  if (loggedIn) {
    setStorage(userName + "Words", wordAmount);
    wordAmount = 0;
    userName = null;
    loggedIn = false;
  } else {
    wordAmount = 0;
  }
  crawlsPerPerson = 0;
  challengesPerSession = 0;
  generatorsPerSession = 0;
}

function menu() {
  while (true) {
    var selection = prompt("Would you like to see A) A list of available crawls, B) a list of challenges, C) a list of generators, D) a list of options, E) Your statistics so far this session, or F) Your overall statistics?").toUpperCase();
    exit(selection);
    if (selection == "A") {
      var crawl = prompt("Which crawl would you like to see? A) Pokemon Crawl B) Death Crawl").toUpperCase(); //This needs to be kept.
      exit(crawl);
      if (crawl == "A") {
        crawls["Pokemon Crawl"];
        crawlsPerSession++;
        //To do this we're going to have to have some type of prompt system, or connect the crawls to this document. Perhaps a manager thing, like Craft said. 
        //Maybe a JSON file with crawl information?
      } else if (crawl == "B") {
        var Tadvance = false;
        while (!Tadvance) {
          var temp = prompt("Would you like to do V1, or V2?").toUpperCase();
          if (temp == "V1") {
            crawls["Death Crawl V1"];
            crawlsPerSession++;
            DeathCrawlV1();
          } else if (temp == "V2") {
            crawls["Death Crawl V2"];
            DeathCrawlV2();
            crawlsPerSession++;
          }
        }
      }
    } else if (selection == "B") {
      var FAdvance = false;
      //challenges are going to be the things like the 3% challenge, the random prompt, and such.
      while (!FAdvance) {
        var challengeSelection = prompt("Would you like to  A) Do the 3% challenge, B) Battle the wordwar bot, or C) Battle the race bot? ").toUpperCase();
        exit(challengeSelection);
        if (challengeSelection == "A") {
          challenges["Three Percent"];
          challengesPerSession++;
          FAdvance = true;
        } else if (challengeSelection == "B") {
          challenges["WordWar Bot"];
          WordWarBot();
          challengesPerSession++;
          FAdvance = true;
        } else if (challengeSelection == "C") {
          challenges["Race Bot"];
          RaceBot();
          challengesPerSession += 1;
          FAdvance = true;
        } else {
          alert("Sorry, that's not an option.");
          var temp = prompt("Would you like to EXIT?");
          temp(exit);
        }
      }
    } else if (selection == "C") {
      var generator = prompt("Would you like to visit A) The Truth or Dare Generator, or B) The Random Prompt Generator?");
      if (generator == "A") {
        generators["Truth or Dare Generator"];
        generatorsPerSession++;
      } else if (generator == "B") {
        generators["Prompts Generator"];
        generatorsPerSession++;
      } else {
        alert("That's not a recognized generator, sorry.");
      }
    } else if (selection == "D") {
      advance = false;
      while (!advance) {
        var options = prompt("Would you like to A) Make an account, " +
          (loggedIn ? "B) Log-out" : "B) Log-in") +
          (loggedIn ? ", C) Delete Account" : "") + ", " +
          (loggedIn ? "D) Clear Session Data" : "C) Clear Session Data") +
          "?").toUpperCase();
        exit(options);

        if (options == "A") {
          createAccount();
          advance = true;
        } else if (options == "B") {
          (loggedIn ? logout() : login());
          advance = true;
        } else if (options == "C") {
          (loggedIn ? removeAccount() : clearSession());
          advance = true;
        } else if (options == "D") {
          (loggedIn ? clearSession() : '');
          advance = true;
        } else {
          alert("That isn't a valid menu option. Maybe you wanted to EXIT?");
        }
      }
      advance = false;
    } else if (selection == "E") {

      alert("So far this session you have:\nWritten " + wordAmount + " words.\nUsed the generators " + generatorsPerSession + " times.\nDone " + challengesPerSession + " challenges.\nAnd done " + crawlsPerSession + " crawls.");
      
    }
  }
}

function exit(text) { //Allows user to escape the loop at any time by writing either Escape, exit, stop, get out, or yes.
  if (text == "ESCAPE" || text == "EXIT" || text == "STOP" || text == "GET OUT" || text == "YES") {
    var check = confirm("You are exiting the editor");
    if (check === true) {
      throw new Error("Program killed mid-run");
    }
  }
}

//TODO: Add local storage lo that users can 'log in' and then allow them to track their complete word count. This should be possible with HTML5 Local Storage... I hope. 

/* Note Section 
------------------------------------------------------
var classone=prompt("Example.") 
localStorage.setItem('a',classone)
var two=localStorage.getItem('a')
console.log(two)
*/

/* Todo: 
-Make a different set of options/user interface for those that are logged in
-Figure out how to import word count (if possible.) 
  -If not, make a prompt that asks how much they wrote in that crawl/challenge. 
-Upload the different challenges to github
-Finish the different challenges
  -name generator 
    =collect names
      -Figure out ways to make these names alphabetizable 
  -Look for more chalhlnges on the Nanowrimo forumsleec
    -
*/
