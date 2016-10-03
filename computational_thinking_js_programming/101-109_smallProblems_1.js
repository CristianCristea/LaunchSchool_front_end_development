//  1.
// Write a function that takes two arguments, a string and a positive integer, and prints the string as many times as the integer indicates.

function repeat(string, number) {
  for (var i = 0; i < number; i++) {
    console.log(string);
  }
}

//  test
repeat('Hello', 3);

// Hello
// Hello
// Hello

// 2.
// Write a  function that takes one argument in the form of an integer or a float; this argument may be either positive or negative. This function should check if a number is odd, returning true if its absolute value is odd. Floats should only return true if the number is equal to its integer part and the integer is odd.

function isOdd(number) {
  if (number !== parseInt(number)) {
    return false;
  } else if (number % 2 !== 0 ) {
    return true;
  }

  return false;
}

// test

isOdd(2)    // # => false
isOdd(5)    // # => true
isOdd(-17)  // # => true
isOdd(-8)   // # => false
isOdd(7.1)  // # => false
isOdd(-5.0) // # => true

// 3.
// Write a function that takes one argument, a positive integer, and return a list of the digits in the number.

function digitList(number) {
  var numbers = number + '';
  var returnArr = [];

  if (number <= 9) {
    returnArr.push(number);
    return returnArr;
  }

  for (var i = 0; i < numbers.length; i++) {
    returnArr.push(+(numbers[i]));
  }

  return returnArr;
}

// tests

digitList(12345)  //  [1, 2, 3, 4, 5];
digitList(7)      //  [7];
digitList(375290) //  [3, 7, 5, 2, 9, 0];
digitList(444)    //  [4, 4, 4];

// 4.
// Write a function that counts the number of occurrences of each element in a given array.

vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

// create an object
// loop through the array
// add the elem as a key and initialize with 1
// if the key value pair already exists increment the value with 1
// output result

function countOccurrences(arr) {
  var occurrences = {};

  arr.forEach(function(elem) {
    if (!occurrences[elem]) {
      occurrences[elem] = 1;
    } else {
      occurrences[elem]++;
    }
  });

  return displayObject(occurrences);
}

function displayObject(obj) {
  for (var key in obj) {
    console.log(key + ' => ' + obj[key]);
  }
}

countOccurrences(vehicles);
// output

// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// 5.
// Write a function that takes one argument, a string, and return the same string with the words in reverse order.

function reverseSentence(text) {
  // split the text in words
  // inverse the words
  // return the transformed text

  var words = text.split(" ");
  return words.reverse().join(" ");
}

// test - return true
reverseSentence('') === '';
reverseSentence('Hello World') === 'World Hello';
reverseSentence('Reverse these words') === 'words these Reverse';


// 6.
// Write a function that takes one argument, a string containing one or more words, and returns the given string with all five or more letter words reversed. Each string will consist of only letters and spaces.Spaces should only be included when more than one word is present.

// reverse a string
  // split the string into letters
  // reverse the letters
  // join and return the string
// reverse the sentence
  // if a word has more than 5 letters reverse it
  // output the result


function reverseWords(text) {
  var words = text.split(" ");
  var returnWords = [];

  words.forEach(function(word) {
    if (word.length >=5) {
      returnWords.push(word.split("").reverse().join(""));
    } else {
      returnWords.push(word);
    }
  });

  return returnWords.join(" ");
}


// 7.
// Write a function that takes one argument, a positive integer, and returns a string of alternating 1s and 0s, always starting with 1. The length of the string should match the given integer

// create a return string var initialize with 1
// create a loop upto the number
// add 0s and 1s inside the loop
// return the string

function stringy(number) {
  var returnString = "";
  var stringLength = Math.floor(number / 2);
  for (var i = 0; i < stringLength; i++) {
    returnString += "10";
  }

  if (number % 2 !== 0) {
    returnString += "1";
  }
  return returnString;
}

// tests return true
stringy(6) == '101010'; 
stringy(9) == '101010101';  
stringy(4) == '1010'; 
stringy(7) == '1010101';

// refactor

function odd(number) {
  return !!(number % 2 !== 1);
}

function stringy(number) {
  var string = [];

  for (var i = 0; i < number; i++) {
    if (odd(i)) {
      string.push("1");
    } else {
      string.push("0");
    }
  }

  return string.join("");
}

// 8.
// Write a function that takes one argument, an array containing integers, and returns the average of all numbers in the array. The array will never be empty and the numbers will always be positive integers.

function average(arr) {
  // calculate the sum of the elem
    // loop through the array and add the elements
  // devide through the arr.length
  // return the result

  var total = 0;

  arr.forEach(function(number) {
    total += number;
  });

  return Math.floor(total/arr.length);
}

// test - true

average([1, 5, 87, 45, 8, 8]) == 25;
average([9, 47, 23, 95, 16, 52]) == 40;

// refactor with reduce()

function average(arr) {
  var sum = arr.reduce(function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  });

  return Math.floor(sum / arr.length);
}

// 9.
// Write a function that takes one argument, a positive integer, and returns the sum of his digits.

// check if the argument is a number
// convert the number to a string
// create an array of string-numbers
// convert back to numbers and add
// return the result

function sum(num) {
  var numbers = (num + '').split("");
  
  if (typeof num !== 'number') {
    return false;
  }

 return numbers.reduce(function(firstNumber, secondNumber) {
  return Number(firstNumber) + Number(secondNumber);
 });
}

// tests - true
sum(23) == 5;
sum(496) == 19;
sum(123456789) == 45;

// 10.

// Write a function that takes two arguments, a positive integer and a boolean and calculates the bonus for a given salary. If the boolean is true, the bonus should be half of the salary. If the boolean is false, the bonus should be 0;


// set the bonus value
// return the bonus
function calculateBonus(salary, bonus) {
 return bonus ? Math.round(salary / 2) : 0;
}

// tests - true

calculateBonus(2800, true) == 1400;
calculateBonus(1000, false) == 0;
calculateBonus(50000, true) == 25000;