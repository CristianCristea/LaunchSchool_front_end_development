// 1.
// Cute angles

// Write a function that takes a floating point number that represents an angle between 0 and 360 degrees and returns a String that represents that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


// Approach
// decimal degrees as input (dd)
// degrees = integer part of the number
// d = integer(dd)
// minutes (m) are equal to the integer part of the decimal degrees (dd) minus integer degrees (d) times 60:
// m = integer((dd - d) × 60)
// seconds (s) are equal to the decimal degrees (dd) minus integer degrees (d) minus minutes (m) divided by 60 times 3600:
// s = (dd - d - m/60) × 3600

// Example

// Convert 30.263888889° angle to degrees,minutes,seconds:
// d = integer(30.263888889°) = 30°
// m = integer((dd - d) × 60) = 15'
// s = (dd - d - m/60) × 3600 = 50"
// 30.263888889° = 30° 15' 50"

// calculate and return the result 

function dms(decimalDegrees) {
  var degrees = Math.floor(decimalDegrees);
  var minutes = Math.floor((decimalDegrees - degrees) * 60);
  var seconds = Math.round((decimalDegrees - degrees - minutes / 60) * 3600);

  return console.log(degrees + "°" + minutes + "'" + seconds + '"');
}

// tests

dms(30); //=>30°00'00")
dms(76.73); //=>76°43'48")
dms(254.6); //=>254°36'00")
dms(93.034773); //=>93°02'05")
dms(0); //=>0°00'00")
dms(360); //=>360°00'00")

// 2.
// Delete vowels

// Write a function that takes an array of strings, and returns an array of the same string values, except with the vowels (a, e, i, o, u) removed.

// iterate through the array
// match the vowels with regex exp and replace them
// return a new array

function remove_vowels(arrayOfStrings) {
  return arrayOfStrings.map(function(word) {
    return word.replace(/[aeiou]/ig,"");
  });
}

// tests

remove_vowels(["abcdefghijklmnopqrstuvwxyz"]);//=> [bcdfghjklmnpqrstvwxyz]
remove_vowels(["green", "YELLOW", "black", "white"]);//=> [grn YLLW blck wht]
remove_vowels(["ABC", "AEIOU", "XYZ"]);//=> ['BC', '', 'XYZ']

// 3.
// Fibonacci Number Location By Length

// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first 2 numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a very simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075 -- that's enormous, especially considering that it takes 6 iterations to enter the 2 digit numbers.

// Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified as an argument. (The first Fibonacci number has index 1.)

// Approach
// use a loop to calculate the fibonacci numbers and increments a counter(index)
// check if the number has n digits
  // if so break and return the index
  // else continue
// return the counter(index)

function find_fibonacci_index_by_length(n) {
  var firstNum = 1;
  var secondNum = 1;
  var counter = 2; // starts at position 2
  var fibonacci;
  
  while (true){
    fibonacci = secondNum + firstNum;
    if (String(secondNum).length === n) {
      break;
    }

    firstNum = secondNum;
    secondNum = fibonacci;
    counter++;
  }

  return counter;
}

// tests

find_fibonacci_index_by_length(2) === 7; // - first Fibonacci number with 2 digits is 13 and has the index of 7(starting at 1)
find_fibonacci_index_by_length(10) === 45;


// 4. 
// Reversed Arrays (Part 1)

// Write a function that takes an Array as an argument, and reverses its elements in place; that is, mutate the Array passed in to this method. The return value should be the same Array object.

// You may not use reverse() method.

// Approach
// check if the array has more than one elem - if not return the array
// iterate through the array and add the reversed elem to a new array
// assign the new array to argument
// return the modified argument

function reverse(arr) {
  var result = [];
  if (arr.length <= 1) {
    return arr;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  arr = result;
  return arr;
}

// tests

list = [1,2,3,4];
reverse(list); //# => [4,3,2,1]
list = [4, 3, 2, 1];

list = ["a", "b", "c", "d", "e"];
reverse(list); // # => ["e", "d", "c", "b", "a"]
list = ["e", "d", "c", "b", "a"];

list = ['abc'];
reverse(list); // # => ["abc"]
list = ["abc"];

list = [];
reverse([]); // # => []
list = [];

// 5.
// Reversed Arrays (Part 2)

// Write a function that takes an Array as an argument, and reverses its elements. The return value should be a new Array object.

// You may not use reverse() method.

// Approach
// check if the array has more than one elem - if not return the array
// iterate through the array and add the reversed elem to a new array
// return the new array

function reverse(arr) {
  var result = [];
  if (arr.length <= 1) {
    return arr;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// tests

list = [1,2,3,4];
reverse(list); //# => [4,3,2,1]
list = [1,2,3,4];

list = ["a", "b", "c", "d", "e"];
reverse(list); // # => ["e", "d", "c", "b", "a"]
list = ["a", "b", "c", "d", "e"];

list = ['abc'];
reverse(list); // # => ["abc"]
list = ["abc"];

list = [];
reverse([]); // # => []
list = [];


// 6.
// Combining Arrays

// Write a function that takes two Arrays as arguments, and returns an Array that contains all of the values from the argument Arrays. There should be no duplication of values in the returned Array, even if there are duplicates in the original Arrays.

// Approach
// compare the 2 array lengths - iterate through the bigger array
// if one elem is undefined do not add it to the new array (one array bigger than the other)
// if two elements are the same - add just one
// return the new array 

// test
merge([1, 3, 5], [3, 6, 9]) // # => [1, 3, 5, 6, 9]

function merge(arr1, arr2) {
  var len = 0;
  var result = [];
  if (arr1.length >= arr2.length) {
    len = arr1.length;
  } else {
    len = arr2.length;
  }

  for (var i = 0; i < len; i++) {
    if (typeof arr1[i] !== 'undefined' && result.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }

    if (typeof arr2[i] !== 'undefined') {
      result.push(arr2[i]);
    }
  }

  return result;
}
// #> [1, 3, 6, 5, 9]

function merge(arr1, arr2) {
  var result = [];
  var len = arr1.length >= arr2.length ? arr1.length : arr2.length;

  for (var i = 0; i < len; i++) {
    if (typeof arr1[i] !== 'undefined') {
      result.push(arr1[i]);
    }
  }

  for (var j = 0; j < len; j++) {
    if (typeof arr2[j] !== 'undefined' && result.indexOf(arr2[j]) === -1) {
      result.push(arr2[j]);
    }
  }

  return result;
}

// # => [1, 3, 5, 6, 9]

// 7.
// Halvsies

// Write a function that takes an Array as an argument, and returns two Arrays that contain the first half and second half of the original Array, respectively. If the original array contains an odd number of elements, the middle element should be placed in the first half Array.

// Approach
// determine the array half
  // if odd then first half + 1
  // slice the array in two parts
// add the parts to a new array
// return the new array

function halvsies(arr) {
  var half = arr.length % 2 === 0 ? arr.length / 2 : Math.ceil(arr.length / 2);
  var firstArray = arr.slice(0, half);
  var secondArray = arr.slice(half, arr.length);
  var result = [];
  result.push(firstArray, secondArray);
  return result;
}

// tests

halvsies([1, 2, 3, 4])// #=> [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3])// #=> [[1, 5, 2], [4, 3]]
halvsies([5])// #=> [[5], []]
halvsies([])// #=> [[], []]

// 8.
// Find the Duplicate

// Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), how would you determine which value occurs twice? Write a function that will find and return the duplicate value that is known to be in the array.

// iterate through the array
// if indexOf an elem (in the array) is not -1 return the elem

function find_dup(arr) {
  var duplicate;
  arr.forEach(function(elem, index, array) {
    if (array.indexOf(elem) !== -1) {
      duplicate = elem;
    }
  });

  return duplicate;
}

// tests

find_dup([1, 5, 3, 1]); // # => 1
find_dup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7,  34, 57, 74, 45, 11, 88, 67,  5, 58]); // # => 73

// 9.
// Does My List Include This?

// Approach
// use indexOf method to find the elem in the array
// else return false

function include(arr, value) {
  if (arr.indexOf(value) !== -1) {
    return true;
  } else {
    return false;
  }
}

// Write a function named include? that takes an Array and a search value as arguments. This function should return true if the search value is in the array, false if it is not.

// tests
include([1,2,3,4,5], 3); //=== true
include([1,2,3,4,5], 6); //=== false
include([], 3); //=== false


// 10.
// Right Triangles

// Write a function that takes a positive integer, n, as an argument, and displays a right triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

// Approach
// n = argument
// number of characters (star or spaces) n
// loop - while counter < n(begin at 0)
// will always begin with one star - rest spaces
// will end with 0 spaces and n stars

function times(string, times) {
  var line = "";
  for (var i = 0; i <= times; i++) {
    line += string;
  }
  return line;
}

function triangle(n) {
  var length = n;
  var star = "*";
  var space = " ";

  for (var i = 0; i < n; i++) {
    console.log(times(space, (n - i)) + times(star, i));
  }
}

// tests

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
