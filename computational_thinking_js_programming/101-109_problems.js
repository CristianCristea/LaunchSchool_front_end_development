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

// 6.
// Sum Square - Square Sum

// Write a method that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

// helper function
  // count from 1 through n
  // push to an array
  // reduce the array to the sum of elem
// helper function
  // same approach
  // reduce to sum of squares of elem
// calculate the difference

function digitsSum(number) {
  var numbers = [];

  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  }

  return numbers.reduce(function(sum, elem) {
    return sum + elem;
  });
}

function digitsSquareSum(number) {
  var numbers = [];

  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  }

  return numbers.reduce(function(sum, elem) {
    return sum + Math.pow(elem, 2);
  }, 0);
}

function sumSquareDifference(number) {
  return Math.pow(digitsSum(number), 2) - digitsSquareSum(number);
}

// Delete Vowels

// Write a function that takes an array of strings, and 
// returns an array of the same string values without the vowels (a, e, i, o, u).

// input
  // array of strings
// output
  // the array - every string without vowels (a, e, i, o, u);

// helper function to remove vowels from one string 
  // define an array with the vowels
  // loop through the string
  // add the curren char to an output string
  // if the current char is a vowel skip it
  // retur the output string
// filter the array to remove vowels
// return value

function removeVowelsFromString(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var output = '';

  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1 || vowels.indexOf(string[i].toUpperCase()) !== -1) {
      continue;
    }
    output += string[i];
  }

  return output;
}


function removeVowelsFromString(string) {
  return string.replace(/[aeiou]/ig, '');
}

function removeVowels(arr) {
  return arr.map(removeVowelsFromString);
}



// Example:

removeVowels(['abcdefghijklmnopqrstuvwxyz']);             // ['bcdfghjklmnpqrstvwyxz']
removeVowels(['green', 'YELLOW', 'black', 'white']);      // ['grn', 'YLLW', 'blck', 'wht']
removeVowels(['ABC', 'AEIOU', 'XYZ']);                    // ['BC', '', 'XYZ']

// Lettercase Counter

// Write a function that takes a string, and then returns an object 
// that contains 3 properties: one representing the number of characters 
// in the string that are lowercase letters, one representing the number 
// of characters that are uppercase letters, and finally one representing 
// the number of characters that are neither.

// input
  // string
// output
  // object {'lowercase': value, 'uppercase': value, 'neither': value}

// split to an array
// reduce to an object
  // use char code value
// return the value

function charCase(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return 'uppercase';
  } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return 'lowercase';
  } else {
    return 'neither';
  }
}

function letterCaseCount(string) {
  var chars = string.split('');

  return chars.reduce(function(obj, elem) {
    if (!obj[charCase(elem)]) {
      obj[charCase(elem)] = 1;
    } else {
      obj[charCase(elem)]++;
    }
    return obj;
  }, {});
}

function charCase(char) {
  var output = {
    'lowercase': 0, 
    'uppercase': 0, 
    'neither': 0
  };

  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    output.uppercase++;
  } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    output.lowercase++;
  } else {
    output.neither++;
  }

  return output;
}


// Examples

letterCaseCount('abCdef 123'); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');   // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');        // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');           // { lowercase: 0, uppercase: 0, neither: 0 }

// Capitalize Words

// Write a function that takes a single string argument and returns a new string that contains the original value of the argument with the first character of every word capitalized and all succeeding characters in lowercase.

// You may assume that words are any sequence of non-blank characters.

// helper function capitalizeWord()
// split to words
// map to new array - call capitalizeWord on every elem

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function wordCap(string) {
  return string.split(' ').map(capitalizeWord).join(' ');
}

// Examples

wordCap('four score and seven')    // 'Four Score And Seven'
wordCap('the javaScript language') // 'The Javascript Language'
wordCap('this is a "quoted" word') // 'This Is A "quoted" Word'

// Swap Case

// Write a function that takes a string as an argument and returns a new string in which lowercase letters replace every uppercase and vice versa. Leave all other characters unchanged.

// input
  // string - lower and upper case letters
// output
  // same string - letter with inverted case

// loop through the string
// identify current char case
  // string.charCodeAt()
// change the case or copy the char
// return output

function swapcase(string) {
  var output = '';
  
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      output += string[i].toLowerCase();
    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      output += string[i].toUpperCase();
    } else {
      output += string[i];
    }
  }

  return output;
}

// Example:

swapcase('CamelCase');         // 'cAMELcASE'
swapcase('Tonight on XYZ-TV'); // 'tONIGHT ON xyz-tv'



// Take 2 strings s1 and s2 including only letters from ato z. 
// Return a new sorted string, the longest possible, containing distinct letters,
 // - each taken only once - coming from s1 or s2.

// Examples:

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
longest(a, b); // -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz";
longest(a, a); // -> "abcdefghijklmnopqrstuvwxyz"

// helper function - remove doubles
  // loop through the string
  // if current char === the next char -> skip
  // else -> add to output
  // return output
// concat the 2 strings
// remove doubles again
// split to array of letters
// sort, join and return the result


function removeDoubles(string) {
  var output = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      continue;
    } else {
      output += string[i];
    }
  }

  return output;
}

function longest(str1, str2) {
  var cleanStr1 = removeDoubles(str1);
  var cleanStr2 = removeDoubles(str2);
  var output = (cleanStr1 + cleanStr2).split('').sort().join('');

  return removeDoubles(output);
}

// Longest Palindrome

// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, return value must be 0.

// input
  // string of chars
// output
  // number - integer type
  // repr. length of the longest palindromic string

// get an array of substrings
  // declare an output array
  // loop through the string
    // push one substring at a time - slice(0, i) - iterator = 1
  // return the output
// filter to an array of palindromic strings
  // helper function isPanlindrome(word)
    // reverse the string
    // compare it to itself
    // return boolean
// sort the substrings asc by length
// return the last elem


function substrings(string) {
  var output = [];

  for (var i = 1; i <= string.length; i++) {
    output.push(string.slice(0, i));
  }

  return output;
}

function allSubstrings(string) {
  var output = [];

  for (var i = 0; i <= string.length; i++) {
    output.push(substrings(string.slice(i)));
  }

  return output;
}

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}


function flattenArray(array) {
  var output = [];

  array.forEach(function(arr) {
    output = output.concat(arr);
  });

  return output;
}


function longestPalindrome(string) {
  var arrayOfSubstrings = flattenArray(allSubstrings(string));
  var palindromicSubstrings = arrayOfSubstrings.filter(isPalindrome);
  var longestString =  palindromicSubstrings.sort(function(a, b) {
    return b.length - a.length;
  })[0];

  if (string === '') {
    return 0;
  }

  return longestString.length;
}

"zzbaabcd";// -&gt; 4


'abcde'
'a'
'ab'
'abc'
'abcd'
'abcde'

// Example:

"a";// -&gt; 1 
"aab";// -&gt; 2  
"abcde";// -&gt; 1

"";// -&gt; 0
