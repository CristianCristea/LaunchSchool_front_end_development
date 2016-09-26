// In each exercise below, we'll ask you to write a function to work with arrays. You are expected to look up the available Array Methods and use them to solve the exercises.

// 1. 

// Write a function that will return the first element of an array that is passed to it as an argument


function firstElementArr(arr) {
  return arr[0];
}

firstElementArr(["U", "S", "A"]); // returns "U"


// 2. 

// Write a function that will return the last element of an array that is passed to it as an argument

function lastElementArr(arr) {
  return arr[arr.length-1];
}

lastElementArr(["U", "S", "A"]); // returns "A"

// 3. Write a function that will accept two arguments, an array and an integer representing the position of the element to be returned by the function. What happens when we pass an index greater than the length of the array? What about negative number?

function nthElementArr(arr, index) {
  return arr[index];
}

// index greater than the length of the array or negative index will return undefined

var digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3); // Returns 16
nthElementOf(digits, 8); // Returns undefined
nthElementOf(digits, -1); // Returns undefined

// 4. 

// Can we add data into an arry at a negative index? If so, why possible?

// Yes it is possible, because all arrays are objects in JS.

digits[-1] = -42;
nthElementOf(digits, -1);
digits[-1];
digits["-1"]; // Note that we are using a string to obtain an element at an index

// 5.

// Write a function that accepts an arry as the first argument and a number as the second. Return a new array of elements that go from the first element and selects elements up to that count.
// Ex: passing 3 would return the first 3 elements of an array

function firstNOf(arr, length) {
  return arr.slice(0, length);
}

var digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3); // Returns [4, 8, 15];

// 6. 

// Write a function like the previous one, except return the last n elements as a new array

function lastNOf(arr, length) {
  return arr.slice(arr.length - length);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3); // Returns [16, 23, 42];

// 7 

// Using the function we have supplied you in the previous solution, what happens if you pass a count greater than the length of the array? How can you fix the behavior to return a new instance of the entire array if the count is greater than the array length?

function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }
  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8); // Returns [4, 8, 15, 16, 23, 42]

// 8

// Write a function that accepts two arrays as arguments and returns an array with the first element in the first array as well as the last element in the second array.

function endsOf(beginning_arr, ending_arr) {
  return [beginning_arr[0], ending_arr[ending_arr.length - 1]];
}

endsOf([4, 8, 15], [16, 23, 42]); // Returns [4, 42]