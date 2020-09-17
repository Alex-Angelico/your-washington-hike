var hikerName = "Hi " + prompt("What's your name?") + "! "
var greeting;
var date = new Date();
var weekDay = date.getDay();

if (weekDay == 0)  {
    greeting = "Happy Sunday!";
} else if (weekDay == 1)  {
    greeting = "Happy Monday!";
} else if (weekDay == 2)  {
    greeting = "Happy Tuesday!";
} else if (weekDay == 3)  {
    greeting = "Happy Wednesday!";
} else if (weekDay == 4)  {
    greeting = "Happy Thursday!";
} else if (weekDay == 5)  {
    greeting = "Happy Friday!";
} else if (weekDay == 6)  {
    greeting = "Happy Saturday!";
} else {
    greeting = "You're hiking on another planet!"
}

document.write(hikerName + greeting);