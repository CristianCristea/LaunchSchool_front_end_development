// 1.
// Searching 101

// Write a program that solicits 6 numbers from the user, then prints a message that describes whether or not the 6th number appears amongs the first 5 numbers

// get the first five numbers - user input 
// add them to an array
// get the 6th number
// check if the array includes the 6th number
  // check the indexOf the number
  // loop through the array and check every number

function searchingNumber() {
  var firstNumber = +(prompt("==> Enter the 1st number:"));
  var secondNumber = +(prompt("==> Enter the 2nd number:"));
  var thirdNumber = +(prompt("==> Enter the 3rd number:"));
  var fourthNumber = +(prompt("==> Enter the 4th number:"));
  var fifthNumber = +(prompt("==> Enter the 5th number:"));
  var lastNumber = +(prompt("==> Enter the last number:"));
  var numbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];

  var containsNumber = numbers.indexOf(lastNumber) !== -1 ? "appears" : "does not appear";

  return console.log("The number " + lastNumber + " " + containsNumber + " in " + numbers.toString());
} 

searchingNumber();

// tests

// ==> Enter the 1st number:
// 25
// ==> Enter the 2nd number:
// 15
// ==> Enter the 3rd number:
// 20
// ==> Enter the 4th number:
// 17
// ==> Enter the 5th number:
// 23
// ==> Enter the last number:
// 17
// The number 17 appears in [25, 15, 20, 17, 23].

// 2.
// Arithmetic integer
// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remanider and power. Do not worry about validating the input.

// get user input - the 2 numbers
// check if they are number type - min input validation
// perform operations 
// display results
function arithmeticInteger() {
  var firstNumber = +(prompt("==> Enter the first number: "));
  var secondNumber = +(prompt("==> Enter the second number:"));
  var sum, difference, product, quotient, remainder, power;

  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    return false;
  } else if (secondNumber === 0) {
    return false;
  }

  sum = firstNumber + secondNumber;
  difference = firstNumber - secondNumber;
  product = firstNumber * secondNumber;
  quotient = firstNumber / secondNumber;
  remainder = firstNumber % secondNumber;
  power = Math.pow(firstNumber, secondNumber);

  console.log("==> " + firstNumber + " + " + secondNumber + " = " + sum);
  console.log("==> " + firstNumber + " - " + secondNumber + " = " + difference);
  console.log("==> " + firstNumber + " * " + secondNumber + " = " + product);
  console.log("==> " + firstNumber + " / " + secondNumber + " = " + quotient);
  console.log("==> " + firstNumber + " % " + secondNumber + " = " + remainder);
  console.log("==> " + firstNumber + " ** " + secondNumber + " = " + power);                    
}

// tests

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

// 3.
// Counting the Number of Characters
// Write a program that will ask a user for an input of a word or multiple words and give back the numbers of characters. Spaces should not be counted as characters.

// get user input
// remove spaces
  // replace method
  // split at spaces into an array
  // then join without spaces
// return string length

function countingCharacters() {
  var string = prompt("Enter a string:");
  return string.replace(/ /g, "").length;
}

function countingCharacters() {
  var string = prompt("Enter a string:");
  return string.split(" ").join("").length;
}
countingCharacters();


// tests
// Please write word or multiple words: walk
// There are 4 characters in "walk".

// Please write word or multiple words: walk, don't run
// There are 13 characters in "walk, don't run".

// 4.
// Multiplying Two Numbers
// Create a method that takes two arguments, multiplies them together, and returns the result.

function multiply(a, b) {
  return a * b;
}

// tests

multiply(5, 3) == 15;

// 5.
// Squaring an Argument

// Using the multiply method from the "Multiplying Two Numbers" problem, write a method that computes the square of its argument (the square is the result of multiplying a number by itself).

function square(num) {
  return Math.pow(num, 2);
}

// tests -true

square(5) === 25;
square(-8) === 64;

// 6.
// Exclusive Or

// The || operator returns true if either or both of its operands are true, false if both operands are false. The && operator returns true if both of its operands are true, and false if either operand is false. This works great until you need only one of two conditions to be true, the so-called exclusive or.

// In this exercise, you will write a method named xor that takes two arguments, and returns true if exactly one of its arguments is true, false otherwise.

// check if one argument evaluates to true
// return true
// if both arguments evaluate to false 
// return false

function even(num) {
  return num % 2 === 0;
}

function odd(num) {
  return num % 2 !== 0;
}

function xor(a, b) {
  if (a) {
    return true;
  } else if (b) {
    return true;
  }

  return false;
}

function xor(a, b) {
  if (a && !b || !a && b) {
    return true;
  }
  return false;
}

// refactor
function xor(a, b) {
  return a && !b || !a && b;
}
// tests
xor(even(5), even(4)) === true;
xor(odd(5), odd(4)) === true;
xor(odd(5), even(4)) === false;
xor(even(5), odd(4)) === false;

// 7.
// Odd Lists
// Write a function that return an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th and do on elements of the argument Array.

// declare a result array
// loop through the argument array
// check if the index is an even number (arrays indexes are 0 based - so index 0 is the first element of the array)
// if true push into the result array else move to the next one
// or push the first element of the array and increment the loop iterator with 2
// return result

function oddities(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i +=2) {
    result.push(arr[i]);
  }
  return result;
}

// refactor
// user the filter method on the array
// filter and return the even indexes

function oddities(arr) {
  return arr.filter(function(element, index) {
    return index % 2 === 0;
  });
}

// tests
oddities([2, 3, 4, 5, 6]) // => [2, 4, 6];
oddities(['abc', 'def']) // => ['abc'];
oddities([123]) // => [123];
oddities([]) // => [];

// 8.
// Palidromic Strings
// Write a function thatreturn true if the string passed as an argument is a palindrome, false otherwise (A palidrome reads the same forwards and backwards). Case matters, and all characters should be condsidered.


// inverse the string
   // split the string into letters -array
   // reverse the array
   // join the array
// compare it to itself
// return the result

function palindrome(string) {
  var newString = string.slice();
  var reversedString = newString.split("").reverse().join("");
  return reversedString === string; 
}

// tests

// palindrome('madam') === true
// palindrome('Madam') === false          # (case matters)
// palindrome("madam i'm adam") === false # (all characters matter)
// palindrome('356653') === true

// 9.
// Palidromic Strings (2)
// Write another method that returns true if the string passed as an argument is a palindrome, false otherwise. This time, however, your method should be case-insensitive, and it should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the palindrome? method you wrote in the previous exercise.

function real_palindrome(string) {
  var newString = string.toLowerCase().replace(/,|'| /g,"").slice();
  var reversedString = newString.split("").reverse().join("");
  return reversedString === newString;
}


// refactor regex

function real_palindrome(string) {
  var newString = string.toLowerCase().replace(/[^a-z0-9]/g,"").slice();
  var reversedString = newString.split("").reverse().join("");
  return reversedString === newString;
}

// tests

// real_palindrome('madam') === true
// real_palindrome('Madam') === true           # (case does not matter)
// real_palindrome("Madam, I'm Adam") === true # (only alphanumerics matter)
// real_palindrome('356653') === true
// real_palindrome('356a653') === true
// real_palindrome('123ab321') === false

// 10.
// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, false otherwise. A palindromic number reads the same forwards and backwards

// basic input validation - number
// convert the number to string
// reverse the string 
// compare the string with the revered string
// return the result

function palindromic_number(number) {
  if (typeof number !== "number") {
    return false;
  }

  var numberString = number + "";
  var reversedString = numberString.split("").reverse().join("");
  return numberString === reversedString;
}

// tests
palindromic_number(34543) === true;
palindromic_number(123210) === false;
palindromic_number(22) === true;
palindromic_number(5) === true;