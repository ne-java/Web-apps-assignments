function setGreeting() {
    let now = new Date(); //built in class in Javascript
    console.log("I am printing time: " + now.getHours());

    let hours = now.getHours();
    let greeting = "";

    if (hours < 12 && hours > 0) {
        greeting += "Good morning!";
    }
    else if (hours >= 12 && hours < 18) {
        greeting += "Good afternoon!";
    }
    else
    {
        greeting += "Good night!";
    }

    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;

}

window.onload = function () {
    setGreeting();
}

function setButtonText()
{
    document.getElementById("buttonClickText").textContent = "Hello world - I am learning JavaScript :)"
}

function setButtonDateTime()
{
    let dateTime = new Date();
    document.getElementById("buttonDateTime").textContent = dateTime;
}

function addNumbers()
{
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let sum = num1 + num2;
    
    document.getElementById("buttonSum").textContent = sum;
}
