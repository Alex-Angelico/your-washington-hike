function questionHikerName() {
    var hikerName = prompt("What's your name?");
    while (hikerName === "") {
        hikerName = prompt("We need your name before we can get going.");
        continue;
    }
        hikerName = "Welcome " + hikerName + ", ";
        return hikerName;
}

function greetingWeekDay() {
    var greeting;
    var date = new Date();
    var weekDay = date.getDay();
    
    if (weekDay === 0)  {
        greeting = "happy Sunday!";
    } else if (weekDay === 1)  {
        greeting = "happy Monday!";
    } else if (weekDay === 2)  {
        greeting = "happy Tuesday!";
    } else if (weekDay === 3)  {
        greeting = "happy Wednesday!";
    } else if (weekDay === 4)  {
        greeting = "happy Thursday!";
    } else if (weekDay === 5)  {
        greeting = "happy Friday!";
    } else if (weekDay === 6)  {
        greeting = "happy Saturday!";
    } else {
        greeting = "you're hiking on another planet!";
    }
        return greeting;
}

function questionHiking() {
    while (!confirm("Are you ready to hit the trail?")) {
        if (confirm("That's not a can-do hiking attitude. Once again: are you ready to go hiking?")) {
            response = " Let's find a place to go hiking!";
            break;
        } else {
            confirm("That's not a can-do hiking attitude. Once again: are you ready to go hiking?");
        }
        break;
    }
        response = " Let's find a place to go hiking!";
        return response
}

function numberGuess() {
    var number = '72';
    var guess = prompt("That's what I like to hear! Oh by the way, I've got a game to play while you're out hiking with a buddy: guess the number. Play between 1 and a 1,000,000 and see how many miles go by before one of you guesses--or pushes the other down a switchback!\n\nBefore you move on to check out the trails, let's try a practice run...\n\nWhat number am I thinking of between 1 and 100?");
    for (var i = 1; i < 10; i++) {
        if (i < 3 && guess === number) {
            message = "That was fast! ";
            return message;
            break;
        } else if (i < 3 && guess !== number) {
            guess = prompt("Nope. Guess again.");
        } else {
            if ((i >= 3 && i < 6) && guess === number) {
                message = "There you go. ";
                return message;
                break;
            } else if ((i >= 3 && i < 6) && guess !== number) {
                if (i === 3) {
                    guess = prompt("I'll give you a hint: It's a number bigger than 50.");
                } else {
                    guess = prompt("Nope. Guess again.");
                }
            } else {
                if ((i >= 6 && i < 9) && guess === number) {
                    message = "Whew! That took a while. ";
                    return message;
                    break;
                } else if ((i >= 6 && i < 9) && guess !== number) {
                    if (i === 6) {
                        guess = prompt("Alright, one more hint: It's a number between than 70 and 79.");
                    } else {
                        guess = prompt("Nope. Guess again.");
                    }
                } else if (i === 9 && guess !== number) {
                    message = "Fine, I'll just let you through. The number was 72. ";
                    return message;
                }
            }
        }
    }
}

welcomeMessage = questionHikerName() + greetingWeekDay() + questionHiking();

document.write((guessMessage = numberGuess()) + welcomeMessage);