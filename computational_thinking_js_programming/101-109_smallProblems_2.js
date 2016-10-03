// 1.
// Build a program that randomly generates and prints Tedd's age. To get the age, you should generate a random number between 20 and 200.

// Approach
// generate a random number between 20 and 200
  // set a min age
  // set a max age
  // call random() method multiplied with max - min;
// display the result

function ageTeddy() {
  var minAge = 20;
  var maxAge = 200;
  var age = minAge + (Math.floor(Math.random() * (maxAge - minAge)));

  return console.log("Teddy is " + age + " years old!");
}

ageTeddy();

// test output

// Teddy is 69 years old!

// 2.
// Build a program that asks a user for the length and with of a room in meters and then displays the area of the room in both square meters and square feet.

// Approach
// prompt the width and length of the room - store in var
// calculate the room area in m - store in a var
// transform the area in feet
// display the result

function roomArea() {
  var length = +(prompt("Enter the length of the room in meters"));
  var width = +(prompt("Enter the width of the room in meters"));
  var areaMeters = Math.round((length * width) * 100) / 100;
  var areaFeet = Math.round((areaMeters * 10.7639) * 100) / 100;

  return console.log("The area of the room is " + areaMeters + " square meters (" + areaFeet + " square feet).");
}

roomArea();

// Note: 1 square meter = 10.7639 feet
// Do not worry about validating the input

// test 

// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The are of the room is 70.0 square meters (753.47 square feet)

// 3.
// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip and then display both the tip and the total amount of the bill.

// Approach
// prompt the bill amount and tip percentage
// calculate the tip
// calculate the total bill
// display the tip and total bill

function billCalculator() {
  var bill = +(prompt("What is the bill?"));
  var tipPercentage = +(prompt("What is the tip percentage?"));
  var tip = bill * tipPercentage / 100;
  var totalBill = bill + tip;

  console.log("The tip is $" + tip);
  console.log("The total is $" + totalBill);
}

billCalculator();

// test
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.
// The total is $230.


// 4.
// Build a program that displays when the user will retire and how many years she has to work till retirement.

// Approach
// get the user actual age and retirement age
// get the current year 
// calculate the remaining years of work
// calculate the retirement year
// display the results

function retirement() {
  var actualAge = +(prompt("What is your age?"));
  var retirementAge = +(prompt("At what age would you like to retire?"));
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  var remainingYearsOfWork = retirementAge - actualAge;
  var retiremetYear = currentYear + remainingYearsOfWork;

  return "It's " + currentYear + ". You will retire in " + retiremetYear + ".\nYou have only " + remainingYearsOfWork + " years of work to go!";
}

retirement();

// test
// What is your age? 30
// At what age woult you like to retire? 70

// It's 2016. You will retire in 2056
// You have only 40 years of work to go!

// 5.
// Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back at the user.

// Approach
// get the user input
// check if the input has an "!" at the end
  // use regex to check for "!"
  // use array bracket syntax and length property to check the last char
// greet the user with the appropriate answer

function greeting() {
  var name = prompt("What is your name?");
  if (name[name.length - 1] === 
    "!") {
    return console.log("HELLO " + name.toUpperCase() + ". WHY ARE WE SCREAMING?")
  } else {
      return console.log("Hello " + name);
    }
}

greeting();

// tests
// What is your name? Bob
// Hello Bob.
// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?

// 6.
// Print all odd numbers from 1 to 99, inclusive. All numbers should be printed on separate lines.

// Approach
// loop through the numbers from 1 to 99
// check every number if it is odd
// alternative increment i with 2 and print the number
// if true print to the console

function oddNumbers() {
  for (var i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

function oddNumbers() {
  for ( var i = 1; i < 100; i += 2) {
    console.log(i);
  }
}

oddNumbers();

// 7.
// Print all the even numbers from 1 to 99, inclusive. All numbers should be printed on separate lines.

// Approach
// same approach as above
// alternative use a while loop

function evenNumbers() {
  var number = 1;
  while(number < 100) {
    if (number % 2 === 0) {
      console.log(number);
    }
    number += 1;
  }
}
evenNumbers();

function evenNumbers() {
  var number = 2;
  while (number < 100) {
    console.log(number);
    number +=2;
  }
}

evenNumbers();

// 8.
// Sum or product of consecutive integers
// Write a program that asks the user to enter an integer greater than 0, then asks if the user wants to determine the sum or porduct of all numbers between 1 and the entere integer.

// Approach
// get the user input - number
// convert to a number
// get the user input - s or p
// declare a total variable
// loop from 1 to the user number through
// calculate the sum or product based on user choice
// display result

function sumOrProduct() {
  var number = +(prompt(">> Please enter an integer greater than 0:"));
  var choice = prompt(">> Enter 's' to compute the sum, 'p' to compute the product.").toLowerCase();
  var total = 1;
  var displayChoice = "";

  if (choice === "s") {
    displayChoice = "sum";
  } else if (choice === "p") {
    displayChoice = "product";
  } else {
    alert("Please enter a valid choice!");
  }

  for (var i = 2; i <= number; i++) {
    if (choice === "s") {
      total += i;
    } else if (choice === "p") {
      total *= i;
    }
  }

  return console.log("The " + displayChoice + " of the integers between 1 and " + number + " is " + total);
}

sumOrProduct();


// tests

// Please enter an integer greater than 0: 5
// Enter 's' to compute the sum, 'p' to compute the product

// The sum of the integers between 1 and 5 is 15.
// or
// The product of integers between 1 and 5 is 120.

// 9.
// String Assignment
// Take a look at the following code:

var name = "Bob";
var save_name = name;
var name = "Alice";
console.log(name + ", " + save_name);

// What does this code print out?
// Alice Bob

var name = "Bob";
var save_name = name;
name.toUpperCase();
console.log(name + ", " + save_name);

// Bob Bob
// the result of name.toUpperCase is not stored into a variable for a later use and strings in JS are immutable.