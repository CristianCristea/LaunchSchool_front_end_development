// Write a Function that, when called with a word and a list of possible anagrams, selects the correct sublist that contains the anagrams of the word.

// For example, given the word "listen" and a list of candidates like "enlists", "google", "inlets", and "banana", the program should return a list containing "inlets".

function anagram(word, list) {
  return list.filter( function(candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(candidate, word) {
  var sourceLetters = stringToSortedLetters(candidate);
  var targetLetters = stringToSortedLetters(word);
  return compareArrays(sourceLetters, targetLetters);
}

function stringToSortedLetters(string) {
  var letters = string.split("");
  return letters.sort(function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(function(letter, index) {
    return letter === arr2[index];
  });
}