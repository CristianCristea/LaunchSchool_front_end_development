// 1.
Combine Two Lists

// Write a function that combines two Arrays passed in as arguments, and returns a new Array that contains all elements from both Array arguments, with the elements taken in alternation.

// You may assume that both input Arrays are non-empty, and that they have the same number of elements.

// Approach
// loop through one array (they have the same length)
// push the elements into a new array
// use the same iterator for both arrays

function interleave(arr1, arr2) {
  var result = [];
  arr1.forEach(function(elem, index) {
    result.push(elem, arr2[index]);
  });
  return result;
}

// Example:
// interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

// 2.
// Lettercase Counter

// Write a method that takes a string, and then returns an object that contains 3 entries: one represents the number of characters in the string that are lowercase letters, one the number of characters that are uppercase letters, and one the number of characters that are neither.


// Approach
// lowercase 97-122
// uppercase 65-90
// declare an object with lowercase, uppercase, neither keys - value = 0
// create a loop - length <= argument.length
// check if the char is an uppercase or lowercase letter
// increment the correct key-value
// return the object

function letter_case_count(string) {
  var result = {
    lowercase: 0,
    uppercase: 0,
    neither:   0
  };
  for(var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      result.lowercase++;
    } else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      result.uppercase++;
    } else {
      result.neither++;
    }
  }

  return result;
}

// refactor using regex exp

function letter_case_count(string) {
  var lowercase = /[a-z]/g;
  var uppercase = /[A-Z]/g;
    var result = {
    lowercase: 0,
    uppercase: 0,
    neither:   0
  };
  for(var i = 0; i < string.length; i++) {
    if (string.charAt(i).match(lowercase)) {
      result.lowercase++;
    } else if (string.charAt(i).match(uppercase)) {
      result.uppercase++;
    } else {
      result.neither++;
    }
  }

  return result;
}

// Examples

letter_case_count('abCdef 123'); // => { lowercase: 5, uppercase: 1, neither: 4 }
letter_case_count('AbCd +Ef'); // => { lowercase: 3, uppercase: 3, neither: 2 }
letter_case_count('123'); // => { lowercase: 0, uppercase: 0, neither: 3 }
letter_case_count(''); // => { lowercase: 0, uppercase: 0, neither: 0 }

// 3.
// Capitalize Words

// Write a function that takes a single String argument and returns a new string that contains the original value of the argument, but the first letter of every word is now capitalized.

// You may assume that words are any sequence of non-blank characters, and that only the first character of each word must be considered.

// Approach
// capitalize one word - maybe a separate function
  // capitalize the first letter
  // join the new capitalized letter to the rest of the string
  // return the new string
          // or
  // replace the first letter with the capitalized first letter - replace method
// split the string into words
// capitalize each word
// join the array
// return the new string

function word_cap(string) {
  var words = string.split(" ");
  return words.map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());  
  }).join(" ");
}

// or
function capitalize_word(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function word_cap(string) {
  var words = string.split(" ");
  return words.map(function(word) {
    return capitalize_word(word);
  }).join(" ");
}
// Examples

word_cap('four score and seven'); // => 'Four Score And Seven'
word_cap('the javaScript language'); // => 'The JavaScript Language'
word_cap('this is a "quoted" word'); // => 'This Is A "quoted" Word'

// 4.
// Swap Case

// Write a function that takes a string as an argument and returns a new string in which every uppercase letter is replaced by its lowercase version, and every lowercase letter by its uppercase version. All other characters should be unchanged.

// Approach
// strings are immutable
// split the string into letters(array)
// iterate through the array
// check the case of the letter, swap it and push into a new array
// if the char is not a letter just push it into the new array
// join and return the new array

function is_uppercased(letter) {
  return letter.match(/[A-Z]/);
}

function is_lowercased(letter) {
  return letter.match(/[a-z]/);
}

function swapcase(string) {
  var result = [];
  var characters = string.split("");

  characters.forEach(function(letter) {
    if (is_lowercased(letter)) {
      result.push(letter.toUpperCase());
    } else if (is_uppercased(letter)) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter);
    }
  });

  return result.join("");
}

// refactor with map()

function swapcase(string) {
  var result = [];
  var characters = string.split("");

  return characters.map(function(letter) {
    if (is_lowercased(letter)) {
     return letter.toUpperCase();
    } else if (is_uppercased(letter)) {
      return letter.toLowerCase();
    } else {
      return letter;
    }
  }).join("");
}
// Example:

swapcase('CamelCase') === 'cAMELcASE';
swapcase('Tonight on XYZ-TV') === 'tONIGHT ON xyz-tv';

// 5.
// Staggered Caps (Part 1)

// Write a function that takes a String as an argument, and returns a new String that contains the original value using a staggered capitalization scheme in which every other character is capitalized, and the remaining characters are lowercase. Characters that are not letters should not be changed, but count as characters when switching between upper and lowercase.

// Approach
// create a return string
// The string will always begin with an uppercased Letter
// set a boolean to true and change it to false after each iteration
// if the boolean is true add an uppercased letter 
// if false add a lowercased Letter
// return the string

function staggered_case(string) {
 var result = "";
 var uppercase = true;

 for(var i = 0; i < string.length; i++) {
  if (uppercase) {
    result += string[i].toUpperCase();
  } else {
    result += string[i].toLowerCase();
  }

  uppercase = !uppercase;
 }

 return result;
}

// Example:

staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!';
staggered_case('ALL_CAPS') == 'AlL_CaPs';
staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS';

// 6.

// Multiplicative Average

// Write a function that takes an Array of integers as input, multiplies all of the numbers together, divides the result by the number of entries in the Array, and then prints the result rounded to 3 decimal places.


// Approach
// reduce the array to the product of the elements
// result / length of the array
// round to 3 decimals and return

function show_multiplicative_average(arr) {
  var result;
  var product = arr.reduce(function(a, b) {
    return a * b;
  });

  result = (product / arr.length).toFixed(3);
  return result;
}

// Examples

// show_multiplicative_average([3, 5])
// The result is 7.500

// show_multiplicative_average([2, 5, 7, 11, 13, 17])
// The result is 28361.667

// 7.

// Multiply Lists

// Write a function that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

// Approach
// iterate through the first array use the same iterator to access the elem from the second array
// multiply elements 
// push the result into a new array
// return the array

function multiply_list(arr1, arr2) {
  var result = [];
  arr1.forEach(function(elem, index) {
    result.push(elem * arr2[index]);
  });
  return result;
}

// with a simple for loop

function multiply_list(arr1, arr2) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }

  return result;
}

// Examples:
// multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

// 8.
// Multiply All Pairs

// Write a function that takes two Array arguments in which each Array contains a list of numbers, and returns a new Array that contains the product of every pair of numbers that can be formed between the elements of the two Arrays. The results should be sorted by increasing value.

// You may assume that neither argument is an empty Array.

// Approach
// compare the array lengths
// iterate through the 1st array
// iterate through the 2nd array inside the first loop
// multiply the elements
// sort and return the result

function multiply_all_pairs(arr1, arr2) {
  var len1 = arr1.length;
  var len2 = arr2.length;
  var result = [];

  for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len2; j++) {
      result.push(arr1[i] * arr2[j]);
    }
  }

  return result.sort(function(a, b) {
    return a - b;
  });
}

// Examples:

// multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

// 9.
// The End is Near But Not Here

// Write a function that returns the next to last word in the String passed to it as an argument.
// Words are any sequence of non-blank characters.
// You may assume that the input String will always contain at least two words.

// Approach
// split the string into words
// return the next to the last word in the array

function penultimate(string) {
  var words = string.split(" ");
  return words[words.length - 2];
}

// Examples:
// penultimate('last word') == 'last'
// penultimate('Launch School is great!') == 'is'