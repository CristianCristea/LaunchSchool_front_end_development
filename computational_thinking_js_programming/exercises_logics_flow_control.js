// Odd numbers

// Write a function that takes a positive integer as an argument, and print all the odd numbers from 1 to the passed in number(inclusive) to the console. All numbers should be printed on separate lines.

function printOddNumbers(number) {
  for (var i = 1; i <= number; i++) {
    if ((i % 2) !== 0) {
      console.log(i);
    }
  } 
}



printOddNumbers(19);

//output
// 1;
// 3;
// 4;
// 7;
// 0;
// 11;
// 13;
// 15;
// 17;
// 19;


// Write a function that prints out the integers from 1 to 100 (inclusive) that are multiples or either 3 or 5. If the number is divisible by both 3 and 5 add a "!" after the number;

function multiplesOfThreeAndFive() {
  for (var i = 0; i <= 100; i++) {
    if ((i % 5 === 0) && (i % 3 === 0) ) {
      console.log(i + "!");
    } else if (i === 3 || (i % 3) === 0 ) {
      console.log(i);
    } else if (i === 5 || (i % 5) === 0 ) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive();

// output on console
// 3
// 5
// 6
// 9
// 10
// 12
// 15!
// ... rest of output omitted for brevity

// further exploration

function multiplesOfThreeAndFive(min, max) {
  for (var i = min; i <= max; i++) {
    if ((i % 5 === 0) && (i % 3 === 0) ) {
      console.log(i + "!");
    } else if (i === 3 || (i % 3) === 0 ) {
      console.log(i);
    } else if (i === 5 || (i % 5) === 0 ) {
      console.log(i);
    }
  }
}

multiplesOfThreeAndFive(34, 2222);

// Print Multiples

// Write a function printMultiples that takes one argument number, and you can assume number is an integer between 1 and 100. The function needs to log out all the multiples of the number between 0 to 100, that are also odd numbers, in thedescending order.


// loop though 0 - 100
// check if the number is a multiple of the argument
// check if the num is odd
// log the number

function printMultiples(number) {
  for (var i = 100; i >= 0; i--) {
    if ( i % number === 0 && i % 2 !== 0) {
      console.log(i);
    }
  }
}


printMultiples(17);
// output (5x, 3x and 1x)
// 85
// 51
// 17

printMultiples(21);
// output (3x and 1x)
// 63
// 21

// FizzBuzz

// Write a function which iterates the integers from 1 to 100. For multiples of three log out "Fizz" to the console, instead of the number and for the multiples of five log "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// run a loop from 1 through 100 incrementing by 1 each iteration
// each time through the loop output the word "Fizz" if the current number is divisible by 3
// if divisible by 5 output "Buzz"
// if divisible by both 3 and 5 output "FizzBuzz"
// if not divisible by 3 or 5 just log the number

function fizzBuzz(num) {
  for(var i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 ) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// refactor

function fizzbuzz() {
  var message;

  for (var i = 1; i <= 100; i++) {
    message = "";
    if (i % 3 === 0) {
      message += "Fizz";
    }
    if (i % 5 === 0) {
      message += "Buzz";
    }
    console.log(message || i);
  }
}

// Prime Check

// Write a function that takes a number as argument, and returns whether the number is a prime number. You can assume that the input is always a positive integer

function isPrime(number) {
  if (number === 1) {
    return false;
  }


  for ( var i = 2; i <= number; i++) {
    if ( number % i === 0) {
      return false;
    }
  }

  return true;
}

isPrime(1);  // false
isPrime(2);  // true
isPrime(3);  // true
isPrime(43); // true
isPrime(55); // false
isPrime(0);  // false


// XOR

// The ||operator returns true if either both of its operands are true, false if both are false. The && operator returns true if both of its operands are true, and false if either operand is false. This works great until you need only one of two conditions to be true, the so-called "exclusive or".

// In this exercise, you will write a method named xor that takes two arguments, and returns true if exactly one of its arguments is true, false otherwise. Your function should be able to not only deal with the boolean values of true and false, but all JavaScript values based on thlir "thuthiness".


function isXor(arg1, arg2) {
  if (arg1 && !arg2) {
    return true;
  }

  if (!arg1 && arg2) {
    return true;
  }

  return false;
}


isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor("a", undefined);  // true
isXor(null, "");        // false
isXor("2", 23);         // false

// Guessing the Password

// Write a password guessing program to keep track of how many times the user has entered the password wrong. If it is more than 3 times, print "You have been denied access." and terminate the program. If the password is correct, print "You have successfully logged in." and terminate the program.

// password = "password"

// The program pops up a prompt for the user to enter a password.
// If the user puts in the wrong password, it keeps asking for up to 3 times
// before it logs on the console that the access is denied

  // What is the password: 123
  // What is the password: opensesame
  // What is the password: letmein

// message on the console
  // You have been denied access.

// If the user puts in the right password, show that the user is logged in
  // What is the password: password

// message on the console
  // You have successfully logged in.

function guessPassword () {
  var password = 'password';
  var counter = 0;

  while(true) {
    var guess = prompt("Enter the password:");
    if (password === guess) {
      console.log("You have successfully logged in.");
      break;
    }

    counter++;

    if(counter === 3) {
      console.log("You have been denied.");
      break;
    }
  }
}

// Student Grade

// Write a program that determines a student’s grade. The program will read three scores and determine the grade based on the following rules:

//     if the average score >=90 => grade: A
//     if the average score >= 70 and < 90 => grade: B
//     if the average score >= 50 and < 70 => grade: C
//     if the average score < 50 => grade: F

// You can assume the three arguments are all positive integers

// prompts to get the 3 scores
  // Enter score 1: 90
  // Enter score 2: 50
  // Enter score 3: 78

// log on the console
  // Based on the average of your 3 scores your letter grade is "B".

function studentGrade() {
  var score1 = +(prompt("Score 1: "));
  var score2 = +(prompt("Score 2: "));
  var score3 = +(prompt("Score 3: "));
  var average = 0;
  var message = "Base on the averyge of your 3 scores your letter grade is ";

  average =  (score1 + score2 + score3) / 3;
  // console.log(typeof average);

  if (average >= 90) {
    console.log(message + "'A'");
  } else if (average >= 70 && average < 90) {
    console.log(message + "'B'");
  } else if (average >= 50 && average < 70) {
    console.log(message + "'C'");
  } else if (average < 50) {
    console.log(message + "'F'");
  }
}

// further exploration
// create a function to return the average of n numbers
// refactor the function to take a variable amount of grades

// function averageNum() {
//   var args = Array.from(arguments);
//   var sum = 0;

//   for (var i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//  return sum / args.length;
// }

function averageNum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
 return sum / arr.length;
}

function studentGrade() {
  var message = "Base on the averyge of your 3 scores your letter grade is ";
  var counter = +(prompt("Enter the number of grades: "));
  var grades = [];
  var average = 0;

  while(counter > 0) {
    var grade = +(prompt("Enter the grade:"));
    grades.push(grade);
    counter--;
  }

  average = averageNum(grades);

  if (average >= 90) {
    console.log(message + "'A'");
  } else if (average >= 70 && average < 90) {
    console.log(message + "'B'");
  } else if (average >= 50 && average < 70) {
    console.log(message + "'C'");
  } else if (average < 50) {
    console.log(message + "'F'");
  }
}

// Greatest Common Divisor

// Create a function that gets the Greatest Common Divisor of 2 positive integers.

// Euclid's algoritm
// 1. divide a by b
// 2. divide b by remainder 1.
// 3. divide 1. by reminder 2.

function gcd(a, b) {
  while(b !== 0) {
    var temp = b;
    b = a % b;
    a = temp; 
  }
  return a;
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1

// Goldbach Numbers
// Write a function called checkGoldbach() which takes as its only parameter an integer n, and logs out all the combinations of two prime numberr whose sum is equal to n, putting the smaller number first. if n is less than 4m or n is odd then such two prime numbers can't find found. In this cae function should log out null. This is known as Glodbach's Conjecture.

// Your checkGoldbach() function MAY call the isPrime() function you wrote for a previous exercise.


// checkGoldbach(3);
// logs out to console:
// null

// checkGoldbach(4);
// logs out to the console:
// 2 2

// checkGoldbach(12);
// logs out to the console:
// 5 7

// checkGoldbach(100);
// logs out to the console:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  var num1 = 1;
  var num2;
  var found;

  do{
    num++;
    num2 = n - num1;
    if (isPrime(num1) && isPrime(num2)) {
      found = true;
      console.log(num1, num2);
    }
  } while(num1 !== num2);

  if (!found) {
    console.log(null);
  }
  return;
}

// Pattern Generation

// You can assume that n is greater than 1 and less than 10.
// Write a function that can take a single argument n, as number of rows, and log out a square of numbers of asterisks. For example, if n = 7, log out the following pattern:

function generatePattern(n) {
  var pattern = "";
  var string;

  for (var i = 0; i <= n; i++) {
    string = "";
    for (var j = 1; j <= i; j++) {
      string += String(j);
    }
    for (var k = i + 1; k <= n; k++) {
      string += "*";
    }
    console.log(string);
  }
}

generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567

// Index of Substring

// Write two functions that both take two strings as arguments. Their expected behaviors are:

    // the indexOf function returns the index of the first character in the firstString argument at the first instance that the secondString argument is found.
    // the lastIndexOf function returns the index of the first character in the firstString argument at the last instance that the secondString argument is found.
    // in either function, if there's no instance found of second string, return -1

function indexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;

  for (var i = 0; i <=limit; i++) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] == secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }
    if (matchCount == secondString.length) {
      return i;
    }
  }
  return -1;
}

indexOf("Some strings", "s");      // 5
indexOf("Blue Whale", "Whale");    // 5
indexOf("Blue Whale", "Blute");    // -1
indexOf("Blue Whale", "leB");      // -1

lastIndexOf("Some strings", "s");                  // 11
lastIndexOf("Blue Whale, Killer Whale", "Whale");  // 19
lastIndexOf("Blue Whale, Killer Whale", "all");    // -1


function lastIndexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;


  for (var i = limit; i >= 0; i--) {
    matchCount = 0;

    for (var j = 0; j < secondString.length; j++) {
      if (firstString[i + j] == secondString[j]) {
        matchCount++;
      } else {
        break;
      }
    }

    if (matchCount == secondString.length) {
      return i;
    }
  }

  return -1;
}

// Trimming Empty Spaces

// Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends.
// Don't use any other JavaScript's built-in string methods, other than the square brackets ([]) for index access of characters in a string.

trim("  abc  ");  // "abc"
trim("abc   ");   // "abc"
trim(" ab c");    // "ab c"'
trim(" a b  c");  // "a b  c"
trim("      ");   // ""
trim("");    

function trim(string) {
  var trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

// copy the string's characters in a new string if they are not equal to " " return the new string

function trimLeft(string) {
  var newString = "";
  var copyMode = false;

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      copyMode = true;
    }
    if (copyMode) {
      newString += string[i];
    }
  }

  return newString;
}


function trimRight(string) {
  var newString = "";
  var copyMode = false;

  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      copyMode = true;
    }
    if (copyMode) {
      newString = string[i] + newString;
    }
  }

  return newString;
}

// Splitting a String

// Write a function that takes two arguments

// 1. a string to be split
// 2. a delimeter string

// Don't use any other JavaScript's built-in string methods, other than the square brackets ([]) for index access of characters in a string, for example:


  // loop through each character and check if its a delimiter
  // If it is not, incrementaly build a temporary string unitl a delimiter is found
  //  Once the delimiter is found, log out the temporary string and reset it
  // If the end of the string is reached and no delimiter is found just log out the temporary string
function splitString(string, delimeter) {
  var tempString = "";
  
  for (var i = 0; i < string.length; i++) {
    if (string[i] === delimeter) {
      console.log(tempString);
      tempString = "";
    } else if (delimeter === "") {
      console.log(string[i]);
    } else {
      tempString += string[i];
    }
  }

  if (tempString) {
    console.log(tempString);
  }
}

splitString("abc,123,hello world", ",");
// logs out:
// abc
// 123
// hello world

splitString("hello");
// logs out:
// hello

splitString("hello", "");
// logs out:
// h
// e
// l
// l
// o

splitString("hello", ";");
// logs out:
// hello

splitString(";hello;", ";");
// logs out:

// hello


// Repeating Strings

// Implement a function that takes a string and a number times as an argument. The function returns the string repeated times number of times. You can assume times is an integer. If times is a negative number, return undefined. If times is 0, return an empty string. If times is passed in as a non-number, return undefined as well.


function repeat(string, times) {
  var newString = "";

  if (times === -1 || isNaN(times)) {
      return undefined;      
  } else if (times === 0) {
    return "";
  }

  for (var i = 1; i <= times; i++) {
    newString += string;
  }
  return newString;
}

repeat("abc", 1);    // "abc"
repeat("abc", 2);    // "abcabc"
repeat("abc", -1);   // undefined
repeat("abc", 0);    // ""
repeat("abc", "a");  // undefined


// refactor

function repeat(string, times) {
  var repeated = "";

  if (times < 0 || isNaN(times)) {
    return undefined;
  }

  for (var i = 0; i < times; i++) {
    repeated += string;
  }

  return repeated;
}

// String StartsWith
//Implement a function that determines if a string starts with another string. If it does the function should return true and false otherwise.
// Don't use any other JavaScript's built-in string methods, other than the square brackets ([]) for index access of characters in a string


// iterate over the two strings at the same time, and compare character by character
// At any point that the characters don't match the function should return false
// If you reach the end of the searchString and all characters are matched then return true.

function startsWith(string, searchString) {
  for (var i = 0; i < searchString.length; i++) {
      if (string[i] !== searchString[i]) {
        return false;
    }
  }
  return true;
}

var str = "We put comprehension and mastery above all else";
startsWith(str, "We");       // true
startsWith(str, "We put");   // true
startsWith(str, "");         // true
startsWith(str, "put");      // false

var longerString = "We put comprehension and mastery above all else!";
startsWith(str, longerString);      // false


// Converting Strings to Lower Case

// Write a function that turns a string into a lower-cased string manually.

// The way to convert a single upper-cased character to a lower-cased one is to get its numeric representation in the ASCII table, add 32 to that number, and convert the number back to a string character. You can use the String.fromCharCode and the charCodeAt methods on a string for those purposes. For example:

var string = "A";
asciiNumeric = string.charCodeAt(0);                 // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);          // "a", converted to lower case

function toLowerCase(string) {
  var newString = "";
  var charCode;

  for ( var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode <=90) {
      charCode += 32;
    }

    newString += String.fromCharCode(charCode);
  }
  return newString;
}

toLowerCase("ALPHABET");      // "alphabet"
toLowerCase("123");           // "123"
toLowerCase("abcDEF");        // "abcdef"

// Substring(1)

// Write a function that returns a substring of a string based on a starting index and length of the substring


// the start argument is the starting index. If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)
// if the length number makes the substring go beyond the last character of the string, the substring should stop at the last character of the string.

// Don't use any other JavaScript's built-in string methods, other than the square brackets ([]) for index access of characters in a string

function substr(string, start, length) {
  var newString = "";
  var index = 0;

  if (start < 0) {
    start = string.length + start;
  }

  for (var i = 0; i < length; i++) {
    index = start + i;
    
    if (string[index] === undefined) {
      break;
    }
    
    newString += string[index];

  }

  return newString;
}

var string = "hello world";

substr(string, 2, 4);     // "llo "
substr(string, -3, 2);    // "rl"
substr(string, 8, 20);    // "rld"
substr(string, 0, -20);   // ""
substr(string, 0, 0);     // ""


// Substring(2)

// This exercise is similar to the previous one, but this time both arguments passed in are indices of the string provided, with the following rules:


    // if both start and end are positive integers, start is less than end, and both are within the boundary of the string, return the substring from the start index (inclusive), to the end index (NOT inclusive).
    // if the value of start is greater than end, the function swaps the value of the two.
    // if start is equal to end then substring will return an empty string
    // if end is not provided, the end variable inside of the function will become undefined. In this case return the substring up to the end of the string.
    // if either start or end is less than 0 or NaN, it is treated as 0.
    // if either start or end is greater than the length of the string, then it is treated to be equal to the length of the string instead.


function substring(string, start, end) {
 var newString = "";
 var index = 0;
 var temp = start;

 if (start > end) {
  start = end;
  end = temp;
}
if (start === end) {
  return newString;
}

if (end === undefined) {
  end = string.length;
}

if (start < 0 || isNaN(start)) {
  start = 0;
}

if (end < 0 || isNaN(end)) {
  end = 0;
}
if (start < 0) {
  start = string.length + start;
}

if (end < 0) {
  end = string.length + end;
}

 for (var i = 0; index < end - 1; i++) {
  index = start + i;

  if (string[index] === undefined) {
    break;
  }
  newString += string[index]; 
 }
 return newString;
}

var string = "hello world";

substring(string, 2, 4);    // "ll"
substring(string, 4, 2);    // "ll"
substring(string, 0, -1);   // ""
substring(string, 2);       // "llo world"
substring(string, "a");     // "hello world"
substring(string, 8, 20);   // "rld"
