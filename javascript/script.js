// the function element declares that what follows is going to be a function - in this case, it represents something similar to a "while" or "for" loops, but the function occurs every time the button is pressed
function setGreeting() {
    //let declares variables that can be changed later on - eg, be assigned a different value
    let now = new Date(); //built in class in Javascript
    //console.log prints out the string in the log in inspection tools -
    // mainly used for debugging purposes - but in this case, can also be put as text in a website
    console.log("I am printing time: " + now.getHours());

    //.getHours() is a function that gets the hours from the built in Date Class
    let hours = now.getHours();
    let greeting = "";

    //if else if and else statement, used for conditionals, to check something and then something else happens
    //if the hours from the getHours() function is less than 12 and greater than 0... print out good morning
    if (hours < 12 && hours > 0) {
        greeting += "Good morning!";
    }
    //else if the hours from the getHours() function is greater and equal to 12 and less than 18... print out good afternoon
    else if (hours >= 12 && hours < 18) {
        greeting += "Good afternoon!";
    }
    //else, print out good night
    else {
        greeting += "Good night!";
    }

    console.log(greeting);
    //in the DIV element (as that is the id it is associated with here), put the greeting element, so that when the button is pressed, depending on the time of day, the respective greeting is shown
    //updates the text displayed inside a specific HTML element on a webpage
    document.getElementById("greetingOutput").textContent = greeting;

}
//this function waits until the entire webpage 
// to finish loading, and then it runs the JavaScript function setGreeting();
window.onload = function () {
    setGreeting();
}
//this function sets the text in the respective div element when the button is pressed
function setButtonText() {
    document.getElementById("buttonClickText").textContent = "Hello world - I am learning JavaScript :)"
}

//this function sets the date tot the respective div elements when the button is pressed
function setButtonDateTime() {
    let dateTime = new Date();
    //updates the text displayed inside a specific HTML element on a webpage
    document.getElementById("buttonDateTime").textContent = dateTime;
}

//this function is to add 2 numbers together, and then will display the final amount when the button is pressed
function addNumbers() {
    //since the document.ElementById("id").value recieves a string, we have to convert the
    //string to a number for it to be added properly -- and so, parseInt converts a String to an integer
    //gets the number from the text 1 field
    let num1 = parseInt(document.getElementById("number1").value);
    //gets the number from the text 2 field
    let num2 = parseInt(document.getElementById("number2").value);
    //this adds the 2 numbers together and then stores it in a variable
    let sum = num1 + num2;

    //updates the text displayed inside a specific HTML element on a webpage
    document.getElementById("buttonSum").textContent = sum;
}

// this function finds the length of the user input 
function findLen() {
    //gets the text from the text field 
    let strLength = document.getElementById("fetchLetters").value;
    //the .length counts the number of characters there are in the text box and assigns it to a variable
    let length = strLength.length;
    //updates the text displayed inside a specific HTML element on a webpage
    document.getElementById("buttonLength").textContent = strLength + " has " + length + " characters";
}

//this function toggles the password from being hidden to being seen to protect the privacy
function togglePassword() {
    //finds an HTML element with the id of "togglePassword" and stores a reference to it in a variable named passwordInput - for easy access later on
    let passwordInput = document.getElementById("togglePassword");
    //force checks the type with the === 
    //if the type of the element in the text field is password... change it to text --> the type determines what it will be, for example, 1 would be an integer, so type number and Hello! would be a string, so type text
    if (passwordInput.type === "password") 
    {
        passwordInput.type = "text";
    }
    //else, change the type to password 
    else 
    {
        passwordInput.type = "password";
    }
}

//the function changes the text size of a text in the p element
function changeTextSize() {
    let changeStyle = document.getElementById("changeText");
    let color;
    let text;
    //this changes the color of the text to red
    color = changeStyle.style.color = "red";
    //this changes the size of the text to 32 pixels
    text = changeStyle.style.fontSize = "32px";
}

//the function is for hiding and showing text in the DIV element
//setting a counter = 0, the purpose is for the program to keep track whether the text should be hidden or shown
let counter = 0;
//only for when the button is clicked - acts like a while/for loop in itself!
function hideShowFeature() {
    let text = "This is a moody message";
    let fakeText = "";

    //if the counter is even, that means that the text should be displayed since the starting text (the one in the DIV element, is part of the count = 0, which is even)
    if (counter % 2 === 1) {
        //updates the text displayed inside a specific HTML element on a webpage
        document.getElementById("hide-show-text").textContent = text;
    }
    //if the counter is odd, that means that the text should not be displayed, and instead what should be displayed is an empty string
    else 
    {
        //updates the text displayed inside a specific HTML element on a webpage
        document.getElementById("hide-show-text").textContent = fakeText;
    }

    //each time the button is pressed, at the end of the functions, add 1 to the counter so the if/else condition doesn't get stuck only on one output
    counter++;
}

//example way of doing example 8 shown in class - very similar to mine, just that it uses booleans instead
// let toggled = false;
// function hideShowFeature()
// {
//     toggled = !toggled;
//     if (toggled)
//     {
//         document.getElementById("hide-show-text").textContent = "";
//     }
//     else
//     {
//         document.getElementById("hide-show-text").textContent = "This is a moody message";
//     }
// }
