// 1.
// ASCII String Value
// Write a function that determines and returns the ASCII string value of a string that is passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use charCodeAt() method to determine the ASCII value of a character.)


function ascii_value(string) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    result += string.charCodeAt(i);
  }

  return result;
}

// tests

ascii_value('Four score') === 984;
ascii_value('Launch School') === 1251;
ascii_value('a') === 97;
ascii_value('') === 0;

// 2
// After Midnight 1
// The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your method should work with any integer input.

// You may not use JS Date Object.
// Disregard Daylight Savings and Standard Time and other complications.


// Pseudo code
// declare an timeHours, a timeMinutes and a dayMinutes  variables initiate with 0 or with 24 and 60 - if the argument begins with -

// while the argument > dayMinutes(1440) - substract dayMinutes from the argument until the argument is smaller

// if the minutes between -60 and 0 add to minutes, timeHours = 23
// if the minutes between 0 and 60 add to minutes, timeHours = 00

// if the minutes absolute value > 60  and > than dayMinutes - divide by 60 - store the result in timeHours
// the remainder - store in timeMinutes

// display the result

function time_of_day(minutes) {
  var timeHours, timeMinutes;
  var dayMinutes = 1440;
  var result = "";

  if ((minutes).toString()[0] === "-") {
    timeHours = 24;
    timeMinutes = 60;
  } else {
    timeHours = 0;
    timeMinutes = 0;
  }

 while(Math.abs(minutes) > dayMinutes) {
    minutes = (Math.abs(minutes) - dayMinutes) * -1;
  }

  if (minutes > -60 && minutes < 0) {
    timeHours = 23;
    timeMinutes += minutes;
  }
  else if (minutes > 0 && minutes < 60) {
    timeHours = 0;
    timeMinutes += minutes;
  } else {
    timeHours += Math.floor(minutes / 60);
    timeMinutes += minutes % 60;
  }

  if (timeHours < 10) {
    timeHours = "0" + Math.abs(timeHours);
  }

  if (timeMinutes < 10) {
    timeMinutes = "0" + Math.abs(timeMinutes);
  }

  result = timeHours + ":" + timeMinutes; 
  return result;
}
// tests

time_of_day(0) === "00:00";
time_of_day(-3) === "23:57";
time_of_day(35) === "00:35";
time_of_day(-1437) === "00:03";
time_of_day(3000) === "02:00";
time_of_day(800) === "13:20";
time_of_day(-4231) === "01:29";


// 3.
// After Midnight 2
// As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both methods should return a value in the range 0..1439.

// You may not use JS Date Object.

// Pseudo
// split the parameter into hours and minutes
// multiply the hours with 60 and add the minutes
// if 24:00 return return 0

function after_midnight(time) {
  var numbers = time.split(":");
  var hours = +(numbers[0]);
  var minutes = +(numbers[numbers.length - 1]);

  if (hours === 24) {
    hours = 0;
  }
  return (hours * 60) + minutes; 
} 


// same approach as after_midnight
// handle the output if hours = 24 or 0 
// the total minutes will be subtracted from 1440(day minutes) and the result returned

function before_midnight(time) {
  var numbers = time.split(":");
  var hours = +(numbers[0]);
  var minutes = +(numbers[numbers.length - 1]);
  var minutesDay = 1440;

  if (hours === 24 || (hours === 0 &&  minutes === 0)) {
    hours = 0;
    minutesDay = 0;
  }

  return minutesDay - ((hours * 60) + minutes);  
}
// tests
after_midnight('00:00') === 0;
before_midnight('00:00') === 0;
after_midnight('12:34') === 754;
before_midnight('12:34') === 686;
after_midnight('24:00') === 0;
before_midnight('24:00') === 0;

// 4.
// Letter Swap
// Given a string of words separated by spaces, write a function that takes this string of words and returns a string in which the first and last letters of every word is swapped.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces

// approach
// split the string in words
// loop through the words
// swap the first with last letter of every word
  // if the word has one letter - return the letter
  // else return last letter + slice(second through second to last) + fist letter
  // push the new word into a new array
// join and return the new array 

// swap first and last letter - one string
function swapLetters(word) {
  var firstLetter = word[0];
  var lastLetter = word[word.length - 1];
 if (word.length === 1) {
  return word;
 } else {
   return lastLetter + word.slice(1, word.length -1) + firstLetter;
 }
}

function swap(string) {
  var words = string.split(" ");
  var newWords = [];
  var firstLetter, lastLetter, temporaryLetter, newWord;

  words.forEach(function(word) {
    var firstLetter = word[0];
    var lastLetter = word[word.length - 1];
   if (word.length === 1) {
    newWords.push(word);
   } else {
     newWords.push(lastLetter + word.slice(1, word.length -1) + firstLetter);
   }
  });

  return newWords.join(" ");
}

// refactor(1)

function swap(string) {
  var words = string.split(" ");

  return words.map(function(word) {
    var firstLetter = word[0];
    var lastLetter = word[word.length - 1];
   if (word.length === 1) {
    return word;
   } else {
     return lastLetter + word.slice(1, word.length -1) + firstLetter;
   }
  }).join(" ");
}

// refactor(2) - abstraction
function swap(string) {
  var words = string.split(" ");

  return words.map(swapLetters).join(" ");
}

// tests

swap('Oh what a wonderful day it is') === 'hO thaw a londerfuw yad ti si';
swap('Abcde') === 'ebcdA';
swap('a') === 'a';

// 5.
// Clean up the words
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (the result should never have consecutive spaces).


// approach
// use a regex expression to match all the non-alphabetical characters (one or more)
// replace the match with one space
// return the new string
// use a copy of the argument for no side effects

function cleanup(string) {
  var newString = string.slice(0);
  return newString.replace(/[^a-z]+/g, " ");
}

// test
cleanup("---what's my +*& line?") === ' what s my line ';

// 6.
// Letter Count (1)
// Write a function that takes a string with one or more space separated words and returns an object that shows the number of words of different sizes.

// Words consist of any string of characters that do not include a space.

// return words length - number
// split the string into words
// check the words length
  // if the length already exists (as key) increment by one
  // else add it as key and initialize with 1
// return the object

function word_sizes(string) {
  var words = string.split(" ");
  var wordLength;

  if (string === "") {
    return {};
  }

  return words.reduce(function(object, word){
    wordLength = word.length;
    if (!object[wordLength]) {
      object[wordLength] = 1;
    } else {
      object[wordLength]++;
    }
    return object;
  }, {});
}

// refactor

function word_sizes(string) {
  var words = string.split(" ");
  var wordLength;

  if (string === "") {
    return {};
  }

  return words.reduce(function(object, word){
    wordLength = word.length;
    object[wordLength] = (object[wordLength] + 1) || 1;
    return object;
  }, {});
}

// tests
word_sizes('Four score and seven.');//=> { 3: 1, 4: 1, 5: 1, 6: 1 };
word_sizes('Hey diddle diddle, the cat and the fiddle!');//=> { 3: 5, 6: 1, 7: 2 }
word_sizes("What's up doc?");//=> { 6: 1, 2: 1, 4: 1 };
word_sizes('');//=> {};

// 7.
// Letter Counter (2)
// Modify the word_sizes method from the previous exercise to exclude non-letters when determining word size. For instance, the length of "it's" is 3, not 4.

function word_sizes(string) {
  var stringCopy = string.slice(0);
  var words = stringCopy.replace(/[^a-z| ]/ig,"").split(" ");
  var wordLength;

  if (string === "") {
    return {};
  }

  return words.reduce(function(object, word){
    wordLength = word.length;
    object[wordLength] = (object[wordLength] + 1) || 1;
    return object;
  }, {});
}

// tests
word_sizes('Four score and seven.');//=> { 3: 1, 4: 1, 5: 2 }
word_sizes('Hey diddle diddle, the cat and the fiddle!');//=> { 3: 5, 6: 3 }
word_sizes("What's up doc?");//=> { 5: 1, 2: 1, 3: 1 }
word_sizes('');//=> {}

// 8.

// Alphabetical Numbers

// Write a function that takes an Array of Integers between 0 and 19, and returns an Array of those Integers sorted based on the English words for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

var numberNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function  alphabeticalNumbers(arr) {
 return arr.sort(function(firstElem, secondElem) {
  if (numberNames[firstElem] < numberNames[secondElem]) {
    return -1;
  } else if (numberNames[firstElem] > numberNames[secondElem]) {
    return 1;
  } else {
    return 0;
  }
 });
}

// alphabeticalNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

// 9.
// ddaaiillyy ddoouubbllee

// Write a method that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// split the argument into an array of chars
// filter - return the char if is not equal as the one before him


function crunch(string) {
  var chars = string.split("");
  return chars.filter(function(elem, index, array) {
    return elem !== array[index + 1];
  }).join("");
}

// 10. Bannizer
// Write a function that will take a short line of text, and print it within a box.
// You may assume that the input will always fit in your terminal window.

// declare a hyphen var containing the "-" 
// create a line of hyphens and one of spaces based on the string length
  // use a loop to add hyphens and spaces
// display the result

function bannizer(string) {
  var hyphen = "-";
  var line = "";
  var lineSpace = "";
  var plus = "+";
  var space = " ";
  var margin = "|";

  for (var i = 0; i < string.length + 2; i++) {
    line += hyphen;
    lineSpace += space;
  }

  console.log(plus + line + plus);
  console.log(margin + lineSpace + margin);
  console.log(margin + " " + string + " " + margin);
  console.log(margin + lineSpace + margin);
  console.log(plus + line + plus);
}

// bannizer('To boldly go where no one has gone before.')
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+