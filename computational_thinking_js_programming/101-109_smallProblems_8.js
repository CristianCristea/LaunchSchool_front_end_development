// 1.
// Sum of Sums

// Write a method that takes an Array of numbers and then returns the sum of the sums of each leading subsequence for that Array. You may assume that the Array always contains at least one number.

// Approach

// create a function to return the sum of one array elem
// call the function for each 'smaller' array that can be formed from the 'bigger' array
// add them and return the result

function arraySum(arr) {
  return arr.reduce(function(sum, elem) {
    return sum += elem;
  });
} 

function sum_of_sums(arr) {
  var result = 0;
  arr.forEach(function(elem, index) {
    result += arraySum(arr.slice(0, index +1));
  });

  return result;
}
// Examples:
sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) // # -> (21)
sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) //# -> (36)
sum_of_sums([4]) == 4
sum_of_sums([1, 2, 3, 4, 5]) == 35

// 2.
// Madlibs

// Mad libs are a simple game where you create a story template with blanks for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

// Approach 
// prompt for user input
// form the sentence and return it

function madLibs() {
  var noun = prompt("Enter a noun:");
  var verb = prompt("Enter a verb:");
  var adjective = prompt("Enter an adjective:");
  var adverb = prompt("Enter an adverb:");

  return console.log("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + " ? That's hilarious!");
}

madLibs();
// Example

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// Do you walk your blue dog quickly? That's hilarious!

// 3.
// Leading Substrings

// Write a method that returns a list of all substrings of a string that start at the beginning of the original string. The return value should be arranged in order from shortest to longest substring.

// Approach
// iterate through the string characters
// slice the string using the loop iterator as length
// push the new words in a result array
// return the array

function substrings_at_start(string) {
  var result = [];

  for (var i = 0; i < string.length; i++) {
    result.push(string.slice(0, i + 1));
  }

  return result;
}

// Examples:
// substrings_at_start('abc') == ['a', 'ab', 'abc']
// substrings_at_start('a') == ['a']
// substrings_at_start('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']

// 4.
// All Substrings

// Write a method that returns a list of all substrings of a string. The returned list should be ordered by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, the substrings at a given position should be returned in order from shortest to longest.

// You may (and should) use the substrings_at_start method you wrote in the previous exercise:

// Approach
// declare an iterator
// while the iterator < string.length
// create new strings with the iterator
// call the substrings_at_start for each string
// push the result into a new array
// return the array 

function substrings(string) {
  var result = [];
  counter = 0;

  while (counter < string.length) {
   result = result.concat(substrings_at_start(string.slice(counter)));
    counter++;
  }

  return result;
}

// Examples:

// substrings('abcde') == [
//   'a', 'ab', 'abc', 'abcd', 'abcde', 
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e'
// ]

// 5.
// Palindromic Substrings

// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as it does backwards. The return value should be arranged in the same sequence as the substrings appear in the string. Duplicate palindromes should be included multiple times.

// You may (and should) use the substrings method you wrote in the previous exercise.

// For the purposes of this exercise, you should consider all characters and pay attention to case; that is, "AbcbA" is a palindrome, but neither "Abcba" nor "Abc-bA" are. In addition, assume that single characters are not palindromes.


// approach
// check if one word is palidrom
  // create a loop
  // check if the first and last letter are the same
  // then the second and second to last
  // if they are not the same return false
  // else return true 
// use the substring function to split the string in all possible words
// check each word with the palidrom function
// push the matches in a new array
// return the new array


function isPalindrom(string) {
  var leftSide = 0;
  var rightSide = string.length - 1;

  while (leftSide < rightSide) {
    if (string[leftSide] !== string[rightSide]) {
      return false;
    }

    leftSide++;
    rightSide--;
  }
  
  if (string.length >= 2) {
    return true;
  }
}

function palindromes(string) {
  var possibleWords = substrings(string);
  return possibleWords.filter(function(word) {
    return isPalindrom(word);
  });   
}

// Examples:
// palindromes('abcd') == []
// palindromes('madam') == ['madam', 'ada']
// palindromes('hello-madam-did-madam-goodbye') == [
  // 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  // 'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  // '-madam-', 'madam', 'ada', 'oo'
// ]
// palindromes('knitting cassettes') == [
  // 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
// ]

// 6.
// fizzbuzz

// Write a function that takes two arguments: the first is the starting number, and the second is the ending number. Print out all numbers between the two numbers, except if a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz", and finally if a number is divisible by 3 and 5, print "FizzBuzz".

// Approach
// create a loop - num1 through num2
// check if the current number is div by 3 and 5 - log "FizzBuzz"
// check if the current number is div by 5 - log "Fizz"
// check if the current number is div by 3 - log "Buzz" 
// else log the current number

function fizzBuzz(num1, num2) {
 for (var i = num1; i <= num2; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
 }
}

// Example:

fizzBuzz(1, 15); //# -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

// 7.
// Double Char (Part 1)

// Write a function that takes a string, and returns a new string in which every character is doubled.


// Approach
// split the string into chars
// double the chars and push them into a new array
// join and return the array

function repeater(string) {
  var characters = string.split("");
  return characters.map(function(char) {
    return char + char;
  }).join("");
}

// Examples:

// repeater('Hello') == "HHeelllloo"
// repeater("Good job!") == "GGoooodd  jjoobb!!"
// repeater('') == ''

// 8.
// Double Char (Part 2)

// Write a function that takes a string, and returns a new string in which every consonant character is doubled. Vowels (a,e,i,o,u), digits, punctuation, and whitespace should not be doubled.

// Approach
// same approach as before
// check if the current character is a vowel, digit, punctuation or whitespace - add it once
// else add it twice

function double_consonants(string) {
 var characters = string.split("");
 var consonants = string.match(/[^aeiou \W\d_]/g);

  return characters.map(function(char) {
    if (consonants.indexOf(char) === -1) {
      return char;
    } else {
      return char + char;
    }
  }).join("");
}

// Examples:

// double_consonants('String') == "SSttrrinngg"
// double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
// double_consonants("July 4th") == "JJullyy 4tthh"
// double_consonants('') == ""

// 9.
// Convert number to reversed array of digits

// Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

// Approach
// convert the num to a string
// split into an array
// reverse the array
// loop through the array
// if it has an elem = 0 drop it 
// add it to a new array
// join, converse to number and return number

function reversed_number(num) {
  var stringNum = num.toString();
  var characters = stringNum.split("");

  var reversedString = characters.map(function(character) {
    if (character !== "0") {
      return character;
    }
  }).reverse().join("");

  return Number(reversedString);
}

// Examples:

// reversed_number(12345) == 54321
// reversed_number(12213) == 31221
// reversed_number(456) == 654
// reversed_number(12000) == 21 # Note that zeros get dropped!
// reversed_number(1) == 1

// 10.
// Get The Middle Character

// Write a function that takes a non-empty string argument, and returns the middle character or characters of the argument. If the argument has an odd length, you should return exactly one character. If the argument has an even length, you should return exactly two characters.

// Approach
// find the center of the string
  // string.length /2 
  // if string.length is odd return value of the string index = middle
  // else the index middle - 1 and middle

function center_of(string) {
  var middle = Math.floor(string.length / 2);
  if(string.length === 1) {
    return string;
  }

  if (string.length % 2 !== 0) {
    return string[middle];
  } else {
    return string[middle - 1] + string[middle];
  }
}

// Examples:

// center_of('I love ruby') == 'e'
// center_of('Launch School') == ' '
// center_of('Launch') == 'un'
// center_of('Launchschool') == 'hs'
// center_of('x') == 'x'