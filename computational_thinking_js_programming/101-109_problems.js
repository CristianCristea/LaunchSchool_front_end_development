// Now I Know My ABCs

// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to just those words that do not use both letters from any given block. Each block can only be used once.

// Write a method that returns true if the word passed in as an argument can be spelled from this set of blocks, false otherwise.

function letterInString(letter, string) {
  var letters = string.split('');
  if (letters.indexOf(letter) === -1) {
    return false;
  } else {
    return true;
  }
}

function blockWord(word) {
  var letterGroups = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  var check = false;

  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < letterGroups.length; j++) {
      if (letterInString(word[i].toUpperCase(), letterGroups[j])) {
        letterGroups.splice(j, 1);
        check = true;
        break;
      } else {
        check = false;
      }
    }

    if (!check) {
      return false;
    }
  }

  return true;
}

blockWord('BATCH'); // true
blockWord('BUTCH'); // false
blockWord('jest'); // true

// 2.
// Lettercase Percentage Ratio

// In the easy exercises, we worked on a problem where we had to count the number of uppercase and lowercase characters, as well as characters that were neither of those two. Now we want to go one step further.

// Write a method that takes a string, and then returns a hash that contains 3 entries: one represents the percentage of characters in the string that are lowercase letters, one the percentage of characters that are uppercase letters, and one the percentage of characters that are neither.

// You may assume that the string will always contain at least one character.

// Input
  // string
// output
  // object type
  // { lowercase: 50, uppercase: 10, neither: 40 } - values are %



// count the uppercase, lowercase and other chars in a given string
  // based on ascii table
  // uppercase 65 - 90
  // lowercase 97 - 122
  // 1. split the string into an array of chars
    // reduce the array into an object
  // 2. loop through the string
    // check if the type of char
    // add it to an object 
// calculate the percentage from string length
  // (number / length) * 100 = procent
// return a new object

function quantityAsPercentage(number, whole) {
  return (number / whole) * 100;
}

function countChars(string) {
  var asciiCode;
  var results = {
    'uppercase': 0,
    'lowercase': 0,
    'neither'  : 0
  };

  for (var i = 0; i < string.length; i++) {
    asciiCode = string.charCodeAt(i);

    if (asciiCode >= 65 && asciiCode <= 90) {
      results.uppercase++;
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      results.lowercase++;
    } else {
      results.neither++;
    }
  }
  
  return {
    'lowercase': quantityAsPercentage(results.lowercase, string.length),
    'uppercase': quantityAsPercentage(results.uppercase, string.length),
    'neither'  : quantityAsPercentage(results.neither, string.length)
  };
}

// 3.
// Matching Parentheses?

// Write a method that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.


function pair(string) {
  var parents = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] == '(') {
      parents++;
    } else if (string[i] == ')') {
      parents--;
    } else if (parents < 0) {
      return false;
    }
  }

  if (parents !== 0) {
    return false;
  }

  return true;
}

// 4.
// Write a method that returns the number of Friday the 13ths in the year passed in as an argument. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom), and you may assume that the same calendar will remain in use for the foreseeable future.


// create an array of 13nth day of every month in that year
  // declare an empty array
  // loop 12 times
  // push to array a new date object with the 13 of the month in that year
// filter the array to fridays 13 using the getDay() method
// return the length of the new array

function friday13(year) {
  var day;
  var fridays = [];

  for (var month = 0; month < 12; month++) {
    day = new Date(year, month, 13);
    fridays.push(day);
  }

  return fridays.filter(function(date) {
    return date.getDay() === 5;
  }).length;
}

friday13(2019);

// 5.
// Next Featured Number Higher than a Given Value

// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, and whose digits occur exactly once each. So, for example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a method that takes a single integer as an argument, and returns the next featured number that is greater than the argument. Issue an error message if there is no next featured number.

// Input 
  // integer
// Output
  // integer
  // next featured number

// featured number n
  // n % 2 !== 0
  // n % 7 === 0
  // each digit occurs just once

// set foundNumber to false
// set featuredNumber to arg
// while found false 
  // add 7 to number
  // check if odd
  // if > 100 - helper uniq function
    // convert to string
    // all digits should be different


function uniqDigits(number) {
  var chars = number.toString();
  var char;

  if (number < 100) {
    return true;
  }
  
  for (var i = 0; i < chars.length; i++) {
    char = new RegExp(chars[i], 'g');
    if (chars.match(char).length > 1) {
      return false;
    }
  }

  return true;
}

// uniqDigits(111);

function featured(number) {
  var featuredNumber = number;
  do {
    featuredNumber++;
    if (featuredNumber % 7 === 0 && featuredNumber % 2 !== 0 && uniqDigits(featuredNumber)) {
      return featuredNumber;
    }
  } while (true);
}
