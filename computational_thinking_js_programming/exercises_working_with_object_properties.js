// 1.

// Write a function, objectHasProperty, that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should return true. Otherwise, it should return false.

function objectHasProperty(obj, string) {
  var properties = Object.keys(obj);
  return keys.indexOf(string) !== -1;
}

// test
var pets = { cat: "Simon", dog: "Dwarf", mice: null };
objectHasProperty(pets, "dog");       // true
objectHasProperty(pets, "lizard");    // false
objectHasProperty(pets, "mice");      // true

// 2.

// Write a function, incrementProperty, that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property doesn't exist, the function should add a new property with a value of 1. The function should return the new value of the property.

function incrementProperty(obj, string) {
  if (obj.hasOwnProperty(string)) {
    obj[string] += 1;
  } else {
    obj[string] = 1;
  }

  return obj[string];
}

// test
var wins = { steve: 3, susie: 4 };
incrementProperty(wins, "susie");   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, "lucy");    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }

// 3. 

// Write a function, copyProperties, that takes two Objects as arguments. The function should copy all of the properties from the first object to the second one. The function should return the number of properties that were copied.

function copyProperties(obj1, obj2) {
  var count = 0;

  for (var prop in obj1) {
    obj2[prop] = obj1[prop];
    count++;
  }

  return count;
}

// test
var hal = { model: 9000, enabled: true };
var sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }

// 4. 

// Write a function, wordCount, that takes a single String as an argument. The function should return an Object containing the count of how many times each word appears in the provided String. The Object's keys should be the words, and the value of each key should be how many ocurrances of that word there were.

function wordCount(string) {
  var result = {};
  var words = string.split(" ");
  var word;

  for (var i = 0; i < words.length; i++) {
    word = words[i];
    if (!result[word]) {
      result[word] = 0;
    }
    result[word] += 1;
  }
  return result;
}

//test
wordCount("box car cat bag box");    // { box: 2, car: 1, cat: 1, bag: 1 }

