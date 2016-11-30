// 1. Palidromic Strings 1

// Write a function that returns true if the string passed as an argument is a palindrome, false otherwise. (A palindrome reads the same forwards and backwards.) Case matters, and all characters should be considered.

// Examples:

isPalindrome('madam')                    // true
isPalindrome('Madam')                    // false (case matters)
isPalindrome('madam i\'m adam')          // false (all characters matter)
isPalindrome('356653')                   // true


// input 
// string
// output 
// boolean value

// input validation?

// reverse the string
  // split the string into an array 
  // reverse method
  // join the array and return
  // or
  // loop backwards through the string 
  // add each char to a new string 
  // return the new string
// check if word === reverseWord

function reverseString(string) {
  var result = '';

  for (var i = string.length -1; i >= 0; i--) {
    result += string[i];
  }

  return result;
}

function isPalindrome(string) {
  return reverseString(string) === string;
}  

// 2. Palindromic Strings Part 2

// Write another function that returns true if the string passed as an argument is a palindrome, false otherwise. This time, however, your function should be case-insensitive, and it should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

isRealPalindrome('madam')               // true
isRealPalindrome('Madam')               // true (case does not matter)
isRealPalindrome('Madam, I\'m Adam')    // true (only alphanumerics matter)
isRealPalindrome('356653')              // true
isRealPalindrome('356a653')             // true
isRealPalindrome('123ab321')            // false

// same approach
// filter input
  // use regex to filter the alphanumerics
  // convert to lowercase
// apply reverseString and isPalindrome

function isRealPalindrome(string) {
  var filterString = string.replace(/[^a-zA-Z\d]/g,'').toLowerCase();

  return isPalindrome(filterString);
}

// 3. Palindromic Number

// Write a function that returns true if its integer argument is palindromic, false otherwise. A palindromic number reads the same forwards and backwards.

// Examples:

isPalindromicNumber(34543)        // true
isPalindromicNumber(123210)       // false
isPalindromicNumber(22)           // true
isPalindromicNumber(5)            // true

// get absolute value
// convert to string 
// if string.length === 1 return true
// else same approach as isPalidrome


function isPalindromicNumber(number) {
  var stringValue = Math.abs(number) + '';

  if (stringValue.length === 1) {
    return true;
  }

  return isPalindrome(stringValue);
}

// 4. Running Totals

// Write a function that takes an array of numbers, and returns an array with the same number of elements, and each element has the running total from the original array.

// Examples:

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);      


// input 
// an array 
// output
// an array - each elem is the sum of the elem befor him

// declare a new array
// loop throught the array
// add the elem to the sum
// push the sum into the new array
// return the new array

// or use map method

function runningTotal(arr) {
  var newArr = [];
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    newArr.push(sum);
  }

  return newArr;
} 

function runningTotal(arr) {
  var sum = 0;

  return arr.map(function(elem) {
    return sum += elem;
  });
}

// 5. Letter Swap

// Given a string of words separated by spaces, write a function that takes this string of words and returns a string in which the first and last letters of every word is swapped.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces.

// Examples:

swap('Oh what a wonderful day it is');    // 'hO thaw a londerfuw yad ti si'
swap('Abcde');                            // 'ebcdA'
swap('a');                                // 'a'


// 2 parts
// swap the first and last letter of a word
  // use 3 var to swap the letters
// swap the letters of every word - swapLetter()
  // split at spaces into an array of words
  // map to an array - call swapLetter() on every letter


function swapLetter(word) {
  var first = word[0];
  var last = word[word.length - 1];

  return last + word.slice(1, word.length - 1) + first;
}

function swap(sentence) {
  var words = sentence.split(' ');

  return words.map(function(word) {
    return swapLetter(word);
   }).join(' ');
}

// 6. Letter Counter Part 1

// Write a function that takes a string with one or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any string of characters that do not include a space.

// Examples

wordSizes('Four score and seven.');                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes('What\'s up doc?');                             // { "6": 1, "2": 1, "4": 1 }
wordSizes('');                                            // {}

// split to an array of words
// loop through the array
// compute the length of every word
// set the length as a object prop with value of 1
// if the another word has the same length increment the prop with 1
// else add as a new prop

function wordSize(word) {
  return word.length;
}

function wordSizes(sentence) {
  var words = sentence.split(' ');

  return words.reduce(function(obj, word) {
    if (!obj[word.length]) {
      obj[word.length] = 1;
    } else {
      obj[word.length]++;
    }

    return obj;
  }, {});
}

