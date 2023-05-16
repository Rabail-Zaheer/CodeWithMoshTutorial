"use strict";
console.log("Hello World");

/* VARIABLE */

/* Can not be a reserved keyword
Should be meaningful
Can not start with a number (1name)
Can not contain a space or hyphen (-)
Are Case-sensitive */
let name1 = "Rabail";

console.log(name1);

let interestRate = 0.3;
interestRate = 1;

console.log(interestRate);

/* CONST */

const interestRate1 = 0.3;

/* WE CAN NOT REASSIGN A CONSTANT */

console.log(interestRate1);

/* PRIMITIVE AND VALUE TYPES */

/* Strings
Number
Boolean
Undefined
Null
*/

let firstName = "Rabail"; // String Literal

let age = 30; // Number Literal
let isApproved = false; // Boolean Literal

let lastName = undefined; // Undefined

let selectedColor = null; // Null

/* STATIC LANGUAGE

In static languages when we declare a variable the type of that variable is set and it can not be changed in the future.

*/

/* DYNAMIC LANGUAGE
In a dynamic Language like JavaScript the type of a variable can change at runtime.
*/

/* type of = reserved keyword */
console.log(typeof firstName); // String
console.log(typeof age); // number
console.log(typeof isApproved); // Boolean
console.log(typeof lastName); // Undefined
console.log(typeof selectedColor); // Object

/* REFERENCE TYPES */

/* OBJECTS , ARRAYS AND FUNCTIONS */

/* OBJECTS */

let person = {
  firstN: "Rabail",
  lastN: "Zaheer",
  age1: 23,
};

console.log(person.firstN);

/* DOT NOTATION */

person.firstN = "Komal";

console.log(person.firstN);

/* BRACKET NOTAION */

person["firstN"] = "Tanzila";

console.log(person.firstN);

/* ARRAYS 

An array is a datastructure that we used to display a list of items*/

let selectedColors = ["red", "blue"]; // Array Literal
console.log(selectedColors);

console.log(selectedColors[0]);

selectedColors[2] = "lavendar";
console.log(selectedColors);

console.log(selectedColors.length);

/* FUNCTIONS 

Fundamental building blocks in JavaScripts -
It is basically a set of statements that performs a task or calculates a value.
*/

function greet() {
  //body of the function
  // the logic for this function should be to display a message

  console.log("Hello World");
}

greet();

function greet1(fName) {
  console.log("Hello" + " " + fName);
}
/* the fName is an parameter to the greet1 function */

/* Rabail and Jawad are the arguments for the greet1 function */
greet1("Rabail");
greet1("Jawad");

function greet2(fName, lName) {
  console.log("Hello" + " " + fName + " " + lName);
}
greet2("Rabail", "Zaheer");
greet2("Jawad", "Alee");

/* PERFORMING A TASK */

// Calculating a value

function square(number) {
  return number * number;
}

// storing the value in a variable
let number = square(2);

console.log(number);

/* FUNCTION IS A SET OF STATEMENTS THAT EITHER PERFORMS A TASK OR CALCULATE AND RETURNS A VALUE */

/* A REAL WORLD APPLICATION IS ESSENTIALLY A COLLECTION OF HUNDREDS OR THOUSANDS OF FUNCTIONS WORKING TOGETHER TO PROVIDE THE FUNCTIONALITY OF THAT APPLICATION*/
