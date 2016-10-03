// 1.
// Short Long Short
// Write a function that takes two strings as arguments, determines the lonest of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

// compare the length of the 2 strings
// concatenate the strings
// return the result

function short_long_short(string1, string2) {
  if (string1.length > string2.length) {
    return string2.concat(string1, string2);
  } else {
    return string1.concat(string2, string1);
  }
}

// tests
short_long_short('abc', 'defgh') === "abcdefghabc";
short_long_short('abcde', 'fgh') === "fghabcdefgh";
short_long_short('', 'xyz') === "xyz";

// 2.
// What Century is That?
// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with st, nd, rd, or th as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901-2000 comprise the 20th century.


// 01-100 - 1
// 101 - 200 2
// 1991 - 2000 - 20
// 2001 - 2100 - 21
// 11201 - 11300 - 113

// if year between 1 - 100 -sec 1
// if year between 101 - 200 sec 2
// if year between 1000 - 10000 - sec first 2 + 1
// if year between 10000 - 100000 - sec first 3 + 1

function century(year) {
  var century = Math.floor(year / 100 + 1);
  var stringYear = year + "";
  var suffix = "";

  if (year % 100 === 0) {
    century--;
  }

  if (stringYear[stringYear.length - 1] === 1) {
    suffix = "st";
  } else if (stringYear[stringYear.length - 1] === 2) {
    suffix = "nd";
  } else {
    suffix = "th";
  }
  
  return century + suffix;
}

// tests
// century(1000) == '10th';
// century(2000) == '20th';
// century(2001) == '21st';
// century(1965) == '20th';
// century(256) == '3rd';
// century(5) == '1st';
// century(10103) == '102nd';
// century(1052) == '11th';
// century(1127) == '12th';
// century(11201) == '113th';

// 3.
// Leap Years (Part 1)

// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year unless the year is evenly divisible by 400.

// Assume this rule is good for any year greater than year 0. Write a method that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.


// x is a leap year if 
  // x % 4 === 0 && x % 100 !== 0
  // or x % 4 === 0 && x % 100 === 0 and && x % 400 === 0

function leap_year(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    return true;
  }
  return false;
}

// refactor

function leap_year(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return true;
  } else if (year % 4 === 0) {
    return true;
  }

  return false;
}

leap_year(2016) === true;
leap_year(2015) === false;
leap_year(2100) === false;
leap_year(2400) === true;
leap_year(240000) === true;
leap_year(240001) === false;
leap_year(2000) === true;
leap_year(1900) === false;
leap_year(1752) === true;
leap_year(1700) === false;
leap_year(1) === false;
leap_year(100) === false;
leap_year(400) === true;

// 4.
// Leap Years (Part 2)

// A continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, the Julian Calendar was used. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the method from the previous exercise to determine leap years both before and after 1752.

function leap_year(year) {
  if (year % 4 === 0 && year < 1752) {
    return true;
  } else if (year % 400 === 0) {
      return true;
  } else if (year % 100 === 0) {
      return true;
  } else if (year % 4 === 0) {
      return true;
  }

  return false;
}

// 5.
// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number that are a multiple of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// loop through the number from 1 to input number
// if the number is a multiple of 3 or 5 add it 
  // optional create a function to check if a number is a multiple of 3 or 5
// return the result

function multisum(number) {
  var sum = 0;
  for (var i = number; i >= 1; i--) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}

// tests
// multisum(3) === 3
// multisum(5) === 8
// multisum(10) === 33
// multisum(1000) === 234168

// 6. 
// Running totals
// Write a function that takes an Array of numbers and returns an Array with the same number of elements adn each element has the running total from the original Array

// loop through the original array
// calculate the running sum
// add the running sum as an element to the result Array
// return the new Array

function running_total(arr) {
  var sum = 0;
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  return result;
}

// refactor - abstraction

function running_total(arr) {
  var sum = 0;
  return arr.map(function(elem) {
    sum += elem;
    return sum; 
  });
}

// tests
running_total([2, 5, 13]) // => [2, 7, 20];
running_total([14, 11, 7, 15, 20]) // => [14, 25, 32, 47, 67];
running_total([3]) // => [3];
running_total([]) // => [];

// 7.
// Convert a String to a Number

// In this exercise, you are going to create your own conversion method.

// Write a function that takes a String of digits, and returns the appropriate number as an integer. You may not use any of the JS built-in conversion methods.

// For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JS. Your method should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

// each digit add it to the 10 times the previous calculated value (10 * 0 + 4 = 4; 10 * 4 + 3 = 43; 10 * 43 + 1 = 431)

var numbers = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
} 

function string_to_integer(string) {
  var chars = string.split("");
  var numbersKeys = Object.keys(numbers);
  var digits = [];
  var value = 0;

  console.log(chars);

  for (var i = 0; i < numbersKeys.length; i++) {
    if (includeElem(chars[i], numbersKeys)) {
      digits.push(numbers[chars[i]]);
    }  
  }
  console.log(digits);

  digits.forEach(function(elem) {
    value = 10 * value + elem;
  });
  return value;
}

function includeElem(elem, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(elem) !== -1) {
      return true;
    }
  }

  return false;
}

// refactor

function string_to_integer(string) {
  var chars = string.split("");
  var numbersKeys = Object.keys(numbers);
  var digits = [];
  var value = 0;

  console.log(chars);

  numbersKeys.forEach(function(number, index, arr) {
    if (includeElem(chars[index], arr)) {
      digits.push(numbers[chars[index]]);
    }
  });

  console.log(digits);

  digits.forEach(function(elem) {
    value = 10 * value + elem;
  });
  return value;
}

function includeElem(elem, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(elem) !== -1) {
      return true;
    }
  }

  return false;
}

// tests
string_to_integer('4321') === 4321;
string_to_integer('570') === 570;

// 8.
// Convert a String to a Signed Number
// In the previous exercise, you developed a method that converts simple numeric strings to Integers. In this exercise, you're going to extend that method to work with signed numbers.

// Write a function that takes a String of digits, and returns the appropriate number as an integer. The String may have a leading + or - sign; if the first character is a +, your method should return a positive number; if it is a -, your method should return a negative number. If no sign is given, you should return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in JS. You may, however, use the string_to_integer method from the previous lesson.


var numbers = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
} 

function string_to_integer(string) {
  var chars = string.split("");
  var numbersKeys = Object.keys(numbers);
  var digits = [];
  var value = 0;
  var sign = "";
  if (string[0] === "+") {
    sign = "+";
  } else if (string[0] === "-") {
    sign = "-";
  } else {
    sign = "+";
  }

  console.log(chars);
  console.log(sign);

  numbersKeys.forEach(function(number, index, arr) {
    if (includeElem(chars[index], arr)) {
      digits.push(numbers[chars[index]]);
    }
  });

  console.log(digits);

  digits.forEach(function(elem) {
    value = 10 * value + elem;
  });
 
 if (sign === "+") {
   return value;
 } else {
  return value * -1;
 }
}

function includeElem(elem, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(elem) !== -1) {
      return true;
    }
  }

  return false;
}

// refactor

function string_to_integer(string) {
  var chars = string.split("");
  var numbersKeys = Object.keys(numbers);
  var digits = [];
  var value = 0;
  var sign = "";

  switch(string[0]) {
    case "-":
      sign = "-";
      break;
    default:  
      sign = "+";
  }

  console.log(chars);
  console.log(sign);

  numbersKeys.forEach(function(number, index, arr) {
    if (includeElem(chars[index], arr)) {
      digits.push(numbers[chars[index]]);
    }
  });

  console.log(digits);

  digits.forEach(function(elem) {
    value = 10 * value + elem;
  });
 
 if (sign === "+") {
   return value;
 } else {
  return value * -1;
 }
}

// tests
string_to_signed_integer('4321') === 4321;
string_to_signed_integer('-570') === -570;
string_to_signed_integer('+100') === 100;

// 9.
// Convert a Number to a String
// In the previous two exercises, you developed methods that convert simple numeric strings to signed Integers. In this exercise and the next, you're going to reverse those methods.

// Write a function that takes a positive integer or zero, and converts it to a string representation.

// You may not use any of the standard conversion methods available in JS. Your method should do this the old-fashioned way and construct the string by analyzing and manipulating the number.


// Pseudo
// declare an object with numbers as keys and string-type numbers as values

// iterate through the numbers obj 
  // if the key

// iterate through the first array(obj keys)
  // if a key matches the value from the "parameter" - array - add the value coresponding to the key to a result array

// join and return the result array

var numbers = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
} 


function integer_to_string(number) {
 var numbers 
}

// tests

integer_to_string(4321) === '4321';
integer_to_string(0) === '0';
integer_to_string(5000) === '5000';
