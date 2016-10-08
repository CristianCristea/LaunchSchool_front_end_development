// 1.
// Welcome Stranger

// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, :title and :occupation, and the appropriate values. Your method should return a greeting that uses the person's full name, and mentions the person's title.

// Approach
// extract the name from the array
// return one string using the the title and ocupations key - values

function greetings(arr, obj) {
  var name = arr.join(" ");
  var title = obj.title;
  var occupation = obj.occupation;

  return "Hello, " + name + "! Nice to have a " + title + " " + occupation + " around";
}

// Example:

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
// => Hello, John Q Doe! Nice to have a Master Plumber around.

// 2.
// Double Doubles

// A double number is a number with an even number of digits whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, 7676 are all double numbers. 444, 334433, and 107 are not.

// Write a method that returns 2 times the number provided as an argument, unless the argument is a double number; double numbers should be returned as-is.

// Approach
// create a function to check if a number is a double number
  // convert to string
  // if the length prop value is odd return false
  // else calculate the middle 
  // create a loop first char through middle
  // check if the first and middle + iterator characters are equal - return true or false
// if the argument is not a double number return the number * 2
// else return the double number

function isDouble(number) {
  var characters = number.toString();
  var middle = Math.floor(characters.length / 2);

  if (characters.length % 2 !== 0) {
    return false;
  }

  for (var i = 0; i < middle; i++) {
    if (characters[i] !== characters[middle + i]) {
      return false;
    }
  }

  return true;
}

function twice(number) {
  if (isDouble(number)) {
    return number;
  } else {
    return number * 2;
  }
}

// Examples:

twice(37) == 74;
twice(44) == 44;
twice(334433) == 668866;
twice(444) == 888;
twice(107) == 214;
twice(103103) == 103103;
twice(3333) == 3333;
twice(7676) == 7676;
twice(5) == 10;

// 3.
// Always Return Negative

// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the number is 0 or negative, return the original number.

// Approach
// if the number is 0 return the number
// else return the calculate the absolute value and return the opposite
// or
// if the number is > 0 return his opposite
// else return the number

function negative(number) {
  if (number === 0) {
    return number;
  } else {
    return -(Math.abs(number));
  }
}

function negative(number) {
  if (number > 0) {
    return -number;
  } else {
    return number;
  }
}

function negative(number) {
  return number > 0 ? -number : number;
}

negative(5) == -5;
negative(-3) == -3;
negative(0) == 0;

// 4.
// Counting Up

// Write a method that takes an integer argument, and returns an Array of all integers, in sequence, between 1 and the argument.
// You may assume that the argument will always be a valid integer that is greater than 0.

// Approach
// create a loop 1 through number
// push the iterator into a new array 
// return the array

function sequence(number) {
  var numbers = [];

  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  }

  return numbers;
}

// Examples:

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]

// 5.
// Uppercase Check

// Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase, false otherwise. Characters that are not alphabetic should be ignored.

// Approach
// transform the string to uppercase 
// compare it to itself
// return true or false

function uppercase(string) {
  return string.toUpperCase() === string;
}

// Examples:

uppercase('t') == false
uppercase('T') == true
uppercase('Four Score') == false
uppercase('FOUR SCORE') == true
uppercase('4SCORE!') == true
uppercase('') == true

// 6.
// How long are you?

// Write a function that takes a string as an argument, and returns an Array that contains every word from the string, to which you have appended a space and the word length.

// You may assume that words in the string are separated by exactly one space, and that any substring of non-space characters is a word.

// Approach
// split the string into words
// iterate through the words array
// create a string from every word space and word.length
// push it into a new array
// return the array

function word_lengths(string) {
  var words = string.split(" ");
  return words.map(function(word) {
    return word + " " + word.length;
  });
}


// Examples
word_lengths("cow sheep chicken")// => ["cow 3", "sheep 5", "chicken 7"]

word_lengths("baseball hot dogs and apple pie")// =>
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

word_lengths("It ain't easy, is it?")// => ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

word_lengths("Supercalifragilisticexpialidocious")// =>
  ["Supercalifragilisticexpialidocious 34"]

word_lengths("") //=> []

// 7.
// Name Swapping

// Write a function that takes a first name, a space, and a last name passed as a single String argument, and returns a string that contains the last name, a comma, a space, and the first name.

function swap_name(string) {
  var words = string.split(" ");
  return words[words.length - 1] + ", " + words[0];
}

// Examples

swap_name('Joe Roberts') == 'Roberts, Joe';

// 8.
// Sequence Count

// Create a function that takes two integers as arguments. The first argument is a count, and the second is the first number of a sequence that your method will create. The method should return an Array that contains the same number of elements as the count argument, while the values of each element will be multiples of the starting number.

// You may assume that the count argument will always have a value of 0 or greater, while the starting number can be any integer value. If the count is 0, an empty list should be returned.

// Approach
// if first argument is 0 return []
// create a loop 
// multiply the number with the iterator(begin at 1) and push the number into an array
// return the array

function sequence(counter, number) {
  var result = [];
  if (counter === 0) {
    return [];
  }

  for(var i = 1; i <= counter; i++) {
    result.push(number * i);
  }

  return result;
}

// Examples:

sequence(5, 1); //=> [1, 2, 3, 4, 5]
sequence(4, -7); //=> [-7, -14, -21, -28]
sequence(3, 0); //=> [0, 0, 0]
sequence(0, 1000000); //=> []

// 9.
// Grade book

// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter value associated with that grade.

// Numerical Score Letter Grade 90 <= score <= 100 'A' 80 <= score < 90 'B' 70 <= score < 80 'C' 60 <= score < 70 'D' 0 <= score < 60 'F'

// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

// Approach
// create a getAverage function

// calculate the average
// check where the average is and return the respective letter

function getAverage(a, b, c) {
  return (a + b + c) / 3;
}

function get_grade(a, b, c) {
  var averageScore = getAverage(a, b, c);

  if (averageScore <= 100 && averageScore >= 90 ) {
    return "A";
  } else if (averageScore <= 90 && averageScore >= 80 ) {
    return "B";
  } else if (averageScore <= 80 && averageScore >= 70 ) {
    return "C";
  } else if (averageScore <= 70 && averageScore >= 60 ) {
    return "D";
  } else {
    return "F";
  }
}

// Example:

get_grade(95, 90, 93) === "A";
get_grade(50, 50, 95) === "D";

// 10.
// Grocery List

// Write a function which takes a grocery list (array) of fruits with quantities and converts it into an array of the correct number of each fruit.

function times(array) {
  var result = [];
  var counter = array[1];
  var string = "";

  while (counter > 0) {
    result.push(array[0]);  
    counter--;
  }

  return result;
}

function buy_fruit(array) {
  return array.map(function(elem) {
    return times(elem);
  })
}


// Example:

buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) // =>
  ["apples", "apples", "apples", "orange", "bananas","bananas"]
