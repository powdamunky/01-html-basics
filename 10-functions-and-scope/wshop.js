function sayHello() {
    console.log("Hello World!");
}

sayHello();
sayHello();


function sayWelcome(message, user, location) { 
    let welcomeMessage = message;
    let userName = user;
    let userLocation = location;
    console.log(`${welcomeMessage} ${userName} in ${userLocation}`);
    
    return userLocation;
}

sayWelcome("Hola","Sam","Norwich");
sayWelcome("Greetings","Human", "Dereham");

function greet(greeting, userName) {
    console.log(greeting + " " + userName + "!");
  }
  
  greet("Good morning", "Bob");
  greet("Buenos dias", "Alice"); 
  greet("Bonjour", "Charlie");

function add(a, b) {
    return a + b;
}

const result = add(1, 5);
console.log("The result is", result);
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult);

function multiply(a, b){
    return a * b;
}
const multiplication = multiply(4, 5);
console.log("The result is", multiplication);
const anotherMultiplication = multiply(2, 15);
console.log("Another result is", anotherMultiplication);

function subtract(a, b){
    return a - b;
}
const subtraction = subtract(4, 5);
console.log("The result is", subtraction);
const anotherSubtraction = subtract (2, 15);
console.log("Another result is", anotherSubtraction);

function divide(a, b){
    return a / b;
}
const dividing = divide(4, 5);
console.log("The result is", dividing);
const anotherDividing = divide (2, 15);
console.log("Another result is", anotherDividing);

function calculate(a, b, operator){
if (operator === "+") {
    return add(a,b);
} else if (operator === "-") {
    return subtract(a,b);
} else if (operator === "*") {
    return multiply(a,b);
} else if (operator === "/") {
    return divide(a,b);
}
}

// You can also use the switch statement to achieve the same result, while potentially being slightly easier to read:

// function calculate(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return add(a, b);
//     case "-":
//       return subtract(a, b);
//     case "*":
//       return multiply(a, b);
//     case "/":
//       return divide(a, b);
//   }
// }

const sum = calculate(1, 9, "*")
console.log("The result is", sum);
const anotherSum = calculate(2, 5, "/");
console.log("The result is", anotherSum);