function questionHikerName() {
    var hikerName = "Hi " + prompt("What's your name?") + ", ";
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

function questionHiking(){
    if (confirm("Are you ready to hit the trail?")) {
        response = " Let's find a place to go hiking!";
    } else {
        response = " Here are some beautiful trails to plan for the next time you head out.";
    }
        return response;
}

document.write(questionHikerName() + greetingWeekDay() + questionHiking());
