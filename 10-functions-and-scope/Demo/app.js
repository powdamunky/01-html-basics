//I want to test that my JS is connected to my HTML
console.log("Hello World!");

//functions
//I want to say welcome to a user on my website

//Step 1: I want to store the welcome message and the user's name
//these variables exist for the rest of the code, and can be used anywhere else in your code - this is known as global scope
let welcomeMessage = "Hello";
let userName = "Gary";

//Step 2: I want to log the welcome message and the username in the console
console.log(welcomeMessage + " " + userName); //concatenation with +
console.log(`${welcomeMessage} ${userName}`); //string literals

//function structure
//function functionName(){
// the steps to complete the task go here
//}

//we bundle all our steps to complete the task into one function block
//this is a function delcaraion
function sayWelcome() {
    //the variables we declare inside the function only exist inside the function - this is known as block scope
    let welcomeMessage = "Ahoy";
    let userName = "Gary";

    console.log(`${welcomeMessage} ${userName}`);
}
//for a function to work, we need to invoke it or call it by refering to the function name, you should not use the function name elsewhere in your code, all functions, objects and variables should have unique names
sayWelcome();


function sayWelcomeToTim(){
    let welcomeMessage = "Hiya";
    let userName = "Tim";

    console.log(`${welcomeMessage} ${userName}`);
}
sayWelcomeToTim()

//I need a way to reuse my sayWelcome function for ALL my users
//we can use parameters (in regular brackets) in our function to be filled in with arguments (data goes in the function call) when we know it
//parameters should refer to values and not variables

function sayWelcome(message, user, location) { 
    let welcomeMessage = message;
    let userName = user;
    let userLocation = location;
    console.log(`${welcomeMessage} ${userName} in ${userLocation}`);

    return location;
}
//the return keyword allows an element inside a function's block scope to be used globally

sayWelcome("Howdy","Sam","Norwich");
sayWelcome("Greetings","Human", "Dereham");

//you can place invocations anywhere in your sript as it wll not be invoked until the browser finds the function itself