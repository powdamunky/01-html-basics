console.log("Hello World!")

//we can access the blueprint of our website in JS
console.log(document); //a basic blueprint of our website
console.dir(document); //more detailed view with object structure

//Actions you can perform in the DOM
//Create a new element
//document.createElement("p");
const pTag = document.createElement("p");

console.log(document.createElement("p"));

//Change the text content value of our element, won't work with div

pTag.textContent = "Hello there, I was made in DOM"

console.log(pTag);
//Once our element has been created and updated with a value, we can append it to the DOM
document.body.appendChild(pTag);
//Creating content at the DOM level allows for more dynamic content (user specific messages)

//====================================================================
//I want to interact with the button I just created: when the user clicks the button, a message appears on the page
//STEP 1: Select the button - The object requires a unique ID or class in order to select it. ID is preferred for JS, class for CSS.
const btnClick = document.getElementById("btn-click")
console.log(btnClick);

//STEP 2: We need to make the button interactive ---> event
// An event is an action that will happen AFTER the user interacts with an element
// An event has two parts:
// An action that will happen ---> event handler
// The user interacts with an element ---> event listener
