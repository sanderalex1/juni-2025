/******************************************************************************
Features and methods task

Read the assignment text CAREFULLY. Show some examples in your code that test
your functions and methods. Use a variation of arrow functions
and functions created with the keyword `function`.

Add comments to your code that briefly explain what it does.

******************************************************************************/

/******************************************************************************
1.

Create the following function:

The function should take in a number as a parameter and return
"Odd number" if the number is an odd number and "Even number" if the number is an even number.
(PS: The function should use return, you should not use console log inside the
function)

******************************************************************************/

// function oddEven(n) {
//   if (n % 2 === 0) {
//     return "It is odd number";
//   } else {
//     return "It is even number";
//   }
// }

// console.log(oddEven(5));

const OddEven = (n) => (n % 2 === 0 ? "It is odd number" : "It is even number"); // returns whether the number odd or even

console.log(OddEven(4));

/******************************************************************************/
/******************************************************************************
2.

Create the following function:

The function should take in a string as a parameter and return the string
in CAPITAL LETTERS with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

const changeStr = (str) => str.toUpperCase(); // returns string in upper case

console.log(changeStr("hello"));
/******************************************************************************

3.

Create the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour value is less than 0.
"Good night (name received)" if the hour value is between 0 and 5.
"Good morning (name received)" if the hour value is between 6 and 11.
"Good day (name received)" if the hour value is between 12 and 17.
"Good evening (name received)" if the hour value is between 18 and 23.
"Invalid time" if the hour value is greater than 23.

If no hour value is received, the function should return an error message.

******************************************************************************/

// prettier-ingore
function greetingFunc(name, time) {
  if (time == undefined) {
    return Error("Missing time input");
  }

  if (time >= 0 && time <= 5) {
    return `Good night, ${name}`;
  } else if (time >= 6 && time <= 11) {
    return `Good morning, ${name}`;
  } else if (time >= 12 && time <= 17) {
    return `Good day, ${name}`;
  } else if (time >= 18 && time <= 23) {
    return `Good evening, ${name}`;
  } else {
    return "Invalid time";
  }
}

console.log(greetingFunc("Alex", 12));

/******************************************************************************
4.

Create the following function:

The function should take in an array as a parameter and return the array
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"].

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"].

******************************************************************************/

const anotherChangeArr = (arr) => arr.slice(1, arr.length - 1); //returns an array with first and last parameter missing

console.log(anotherChangeArr([1, 2, 3, 4, 5]));

Array.prototype.firstAndLast = function () {
  return this.slice(1, this.length - 1);
}; // John's fancy way of doing this task

console.log([1, 2, 3, 4, 5].firstAndLast());

/******************************************************************************
5.

Create the following function:

The function should take in a string as a parameter.

Use string methods on the string to do the following:
 - Replace the word "difficult" with "fun".
 - Remove spaces from the start and end of the string.

Then return the updated string.

Example 1: "Javascript is hard" should return "Javascript is fun".
Example 2: "Using methods is hard" should return "Using methods is fun".
Example 3: "difficult" should return "fun".

******************************************************************************/

const notHardButFun = (str) =>
  str.trim().replace("hard", "fun").replace("difficult", "fun"); //replace hard to fun

console.log(notHardButFun("difficult"));

/******************************************************************************
6.

Complete the following steps to manipulate the items array. Each step should
be completed using the appropriate array methods.

*******************************************************************************/

const items = ["Book", "Pen", "Notebook", "Eraser", "Pencil", "Marker"];

/*******************************************************************************
Step 1: Remove the first item ("Book") from the array using the appropriate method.

Step 2: Find and replace "Eraser" with "Ruler" in the array.

Step 3: Use the splice method to remove both "Pen" and "Notebook", and add "Marker pen" in their place.

Step 4: Combine all elements of the array into a single string using " | " as a separator.

Extra challenge: Create a new array that only includes elements containing the letter "e".

******************************************************************************/
missingItem = items.shift(); //removes the first parameter from the array
console.log(items);

const index = items.indexOf("Eraser"); // finds an index of the parameter
if (index !== -1) {
  items[index] = "Ruler"; //replacing found parameter
}
console.log(items);

const replace = items.splice(0, 2, "Marker pen"); //removes 2 parameters starting from 0 and adds a new one
console.log(items);

console.log(items.join(" | ")); //converting array into a string using custom separator

const eWords = items.filter((e) => e.includes("e")); //finds all words that includes letter "e"
console.log(eWords);

/******************************************************************************
7.

EXTRA CHALLENGE #1:

This is not mandatory, only for those who want an extra challenge.

Create the following function:

The function should take in 2 parameters, an array and a string.

Check if the array contains the string. If it does, remove the element
from the array and return the updated array.

If the array does not contain the string, add the string to the end
of the array and return the updated array.

Example 1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example 2: (["Red", "Green", "Blue"], "Green") --> ["Red", "Blue"]
Example 3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example 4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]

******************************************************************************/

function arrayIntheString(arr, str) {
  if (arr.includes(str)) {
    const index = arr.indexOf(str);
    arr.splice(index, 1);
  } else {
    arr.push(str);
  }
  return arr;
}

console.log(arrayIntheString(["Red", "Green"], "Blue"));

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Create the following function:

The function should take in one parameter.

If the parameter is a string:
Return the string with "😎" added to the start and end.

If the parameter is a number:
Double the value, convert it to a string, and return it with "😎" added to
the start and end.

If the parameter is a boolean:
Return "😎Yes😎" if the parameter is true, or "😎Off😎" if the parameter is false.

If the parameter is a different data type:
Return "😎Primitive values only😎".

******************************************************************************/

function whatDataType(parameter) {
  if (typeof parameter === "string") {
    return `😎${parameter}😎`;
  } else if (typeof parameter === "number") {
    return `😎${parameter * 2}😎`;
  } else if (typeof parameter === "boolean") {
    return parameter ? "😎Yes😎" : "😎Off😎";
  } else {
    return "😎Primitive values only😎";
  }
}
console.log(whatDataType(true));
