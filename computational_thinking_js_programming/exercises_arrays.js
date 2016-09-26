// 1.

// With arrays, we know we can always access the first value by using [0], but how would we access the last value? Write a function called lastInArray that receives an array as its argument. Within this function, use the length of the array to return the last value in the array.

function lastInArray(arr) {
  return arr.length -1;
}

console.log(lastInArray([1, 2, 3, 4])); // 4

// 2.

// Create an array with first names in it, like ["Steve", "Martha", "Pat"]. Create a function called rollCall that will take an array of names and use a for loop to log each name in order.

var names = ["Steve", "Martha", "Pat"];
function rollCat(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 3. 

// Make an array of the numbers 1 through 5 in order. Then create a function that will return a new array with the values in reverse order. To do this, you'll use the length property on the array to start off the for loop. Be sure to use one less than the length, since arrays are zero-based indexed. Rather than have the for loop increment the counter, decrement it. Use the counter to access the current array's value and push that onto a new array.

var numbers = [1, 2, 3, 4, 5];

function inverseArr(arr) {
  var newArr = [];

  for (var i = arr.length - 1; i >= 0; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(reversedArray(numbers));

// 4.

// Create a function that will find the first instance of a value from within an array and returns the position of the value. The function will take two arguments, the first being the value to search for and the second the array to search through. If the value isn't in the array, -1 should be returned. To make sure you don't return the last index of a value, when the first one is found you can exit the for loop using the break keyword, like this:

for (var i = 0; i < array.length; i++) {
  // if match is found
  break;
}

function firstInstance(value, arr) {
  var index = -1;

  for( var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(firstIndex(2, [1, 2, 3]));
console.log(firstIndex(9, [1, 2, 3]));

// 5. 
// Write a function that will take an array and return a string of all of the values in the same order as they are in the array. To do this, use a for loop to add each value to the end of a variable that starts off as an empty string, or "".

function arrString(arr) {
  var string = "";

  for (var i = 0; i < arr.length; i++) {
    string += arr[i];
  }
  return string;
}

console.log(arrayToString([1, 2, 3]));