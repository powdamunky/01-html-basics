console.log("Hello World!")

//syntax structure - pseudo code
//if (condition ---> switch is on) {
//    action --->light is on
//} else if (condition --->switch is off) {
//    action ---> light is off}
//

// I want to store the boolean values in variables

let switchOn = true;
let switchOff = false;

if (switchOn){
console.log("The light is on");
} else if (switchOff) {
console.log("The light is off")
}

//this results in a message of "The light is on" as the value is truthy, the condition has been met and therefore the action is triggered first and the rest of the code is not run

if (switchOff) {
    console.log("The light is off")
}
//This will not run as the condition is falsey. Conditionals check id a value is truthy, and then, the action will run. TRUTHY = the conditional has be met, FALSY = the conditional isn't met.

//I want to store apples and pears

let apples = 5;
let pears = 9;

//Now, I want to compare the apples and pears and I want to know which one is greater or less than the other.

// if (apples is greater than pears) {
//     action ---> console.log("Apples is greater than pears")
// } else if (apples is less than pears) {
//     action ---> console.log("Apples is less than pears")
// }

if (apples > pears) { //falsey
    console.log("Apples is greater than pears");
} else if (apples < pears) { //truthy
    console.log("Apples is less than pears");
} else if (apples == pears) {
    console.log("Apples and pears are equal");
} else {
    //else will always run if the other conditions are falsey, good to catch 
    console.log("Check your fruit bowl");
}
// === using triples equals checks the value and the data type of the 
 
//the conditional will stop running when one condition is truthy