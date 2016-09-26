// Implement a function that takes a string as an argument and returns an object containing the count of repeated characters.


function repeatedCharacters(string) {
  var result = {};
  var lowerCaseString = string.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (result[lowerCaseString[i]] !== undefined) {
      result[lowerCaseString[i]]+= 1; // if the pair already exist increment the value by 1
    } else {
      result[lowerCaseString[i]] = 1; // create the letter: 1 pairs
    }
  }

  // delete the properties with the value of 1
  for (var key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}

//test 

repeatedCharacters("Programming");    // { r: 2, g: 2, m: 2 }
repeatedCharacters("Combination");    // { o: 2, i: 2, n: 2 }
repeatedCharacters("Pet");            // {}
repeatedCharacters("Paper");          // { p: 2 }
repeatedCharacters("Baseless");       // { s: 3, e: 2 }