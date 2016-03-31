var advance=false;

var crawls = { //A dictionary of crawls and details about them. Todo: Put in details about them. 
    "Pokemon Crawl": {},
    "Death Crawl": {
        "Version One": {},
        "Version Two:": {}
    }
};
var challenges = { //A dictionary of challenges and details about then.
    "Three Percent": {},
    "WordWar Bot": {}
};


function menu() {
    alert("Welcome to Crawl Control V 0.1");

  /*
    Cookie Stuff
  */

  /*
    End Cookie Stuff
  */

    while (true) {
        var selection = prompt("Would you like to see A) A list of available crawls B) Your words written so far this session C) a list of challenges, or D) a list of options?").toUpperCase();
        exit(selection);
        if (selection == "A") {
            var crawls = prompt("Which crawl would you like to see? A) Pokemon Crawl B) Death Crawl V.1 and V.2 ").toUpperCase(); //This needs to be kept.
            if (crawls == "A") {
                //To do this we're going to have to have some type of prompt system, or connect the crawls to this document. Perhaps a manager thing, like Craft said. 
            }
        } else if (selection == "B") {
            //Tricky, need other programs to pass wordcount. Maybe cookies again. TODO LEARN HOW COOKIES WORK DARN IT WAIT WE NEED TO LEARN HOW COOKIES WORK, THAT'S RIGHT. 
        } else if (selection == "C") {
            //challenges are going to be the things like the 3% challenge, the random prompt, and such. 
        } else if (selection == "D") {
            var options = prompt("Would you like to A) Make an account, B)l").toUpperCase();
            while(!advance) {
                if (options=="A") {
                    //Okay. Note for later self. This needs the code at the bottom that is labeled (LOGIN FOR OPTION A). That gets pasted here. Move the funtion to create a cookie above everything so it sits on top. Then, when this is called it will be calling an existing function.
                }
            }
        } else {
            alert("That isn't a valid menu option. Maybe you wanted to EXIT?");
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



var length = prompt("Welcome to the WordWar bot! How long would you like to wordwar in minutes?");
var words = Math.round(Math.random() * (length) + length * 100 / 2);
console.log(words);


//TODO: Add cookies so that users can 'log in' and then allow them to track their complete word count. This should be possible with cookies... I hope. 

/*function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}maybe this one */

/*
-----------------Hidden's Note Section------------
Javascript can read cookies. 
To create a cookie you use: document.cookie="username=John Doe"
You can add in an expiring date or 'expiry', in UTC time. By default the cookie is deleted when the browser is closed, unless one of these is added. The below statement can be used to do this: 
document.cookie="username=John Doe; expires=Thu, 18 Dec 3014 12:00:00 UTC";
Cookies can be read by var x= document.cookie;
If the expiry date is set a long time from now, the cookie will be safe. 
If you set a new cookie, older cookies are not overwritten. New cookies are added to document.cookie. If you read document.cookie again you will get something like: cookie1=value; cookie 2=value. 

Todo: Finish learning about cookies
Code more crawls
Code challenges
Put cookes in the code
Allow a log in/make account function- the log in function allows a cookie to be pulled, the make account function allows for a cookie to be created. 
Using cookies store all the words ever writen under options so that you can see how many words have been written using this. 
Html shell? 
*/-r/*
    --THINGS BELOW THIS LINE ARE EXPERIMENTAL/UNFINISHED--
*/
/*
COOKIE WORKSHOP

function createCookie(name, wordCount, password, domain) {

    var cookie = name + "=" + escape(wordCount) + escape(password) + ";";

    var expiration = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365 * 50); //Creates a cookie that expires in fifty years.
    cookie += "max-age=" + expiration.toGMTString() + ";";

    cookie += "path=/;";

    if (domain) {
        cookie += "domain=" + domain + ";";
    }

    document.cookie = cookie;
}

function updateCookie(name, password) {

}

LOGIN  FOROPTION  A
var username = prompt("What would you like your user name to be?");

var password=prompt("What would you like your password to be ? ");
createCookie(username,0,password,"");//w/what's the value asking for? Value is perhaps something that is stored in the cookie. Maybe the word count? 
//what's the path asking for?
//we set the domain, correct?
*/