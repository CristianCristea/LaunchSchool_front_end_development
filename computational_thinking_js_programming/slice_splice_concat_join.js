// 1.

// Write a function, slice, that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array, starting at the the first index and up to but not including the second index. The original Array should not be modified.

// push function from previous ex
function push(arr, elem) {
  arr[arr.length] = elem;
  return elem;
}

function slice(arr, start, end) {
  var newArray = [];

  for ( var i = start; i < end; i++) {
    push(newArray, arr[i]);
  }

  return newArray;
}

// You can use functions that were answers to previous exercises to complete this one.

// test

slice([1,2,3,4,5], 0, 2);                      // [ 1, 2 ]
slice(["a", "b", "c", "d", "e", "f", "g"], 1, 3);  
// [ 'b', 'c' ]


// 2. 

// Write a function, splice, that accepts three arguments: an Array, a start index, and a number of values to remove. The function should remove values from the original Array, starting at the the first index and removing the specified number. The method should return the removed values in a new Array.

// You can use functions that were answers to previous exercises to complete this one.

function splice(arr, start, numElem) {
  var removedElem = [];

  for (var i = start; i < arr.length; i++) {
   if (i < start + numElem) {
    push(removedElem, arr[i]);
   }
   arr[i] = arr[i + numElem];
  }
  arr.length = arr.length - numElem;

  return removedElem;
}

// test
var count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);        // [ 3, 4, 5, 6 ]
count;                      // [ 1, 2, 7, 8]


// 3. 



// Write a function, concat, that accepts two arguments: both Arrays. The function should return a new Array containing the values from each of the passed Arrays.

// You can use functions that were answers to previous exercises to complete this one.


function concat(firstArray, secondArray) {
  var newArray = [];
  for (var i = 0; i < firstArray.length; i++) {
    push(newArray, firstArray[i]);
  }
  for (var i = 0; i < secondArray.length; i++) {
    push(newArray, secondArray[i]);
  }
  return newArray;
}

// refactor
function concat(arr1, arr2) {
  var newArr = [];
  newArr = arr1.splice(0);

  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]); 
  }

  return newArr;
}

// test
concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]


// 4. 

// Write a function, join, that accepts two arguments: an Array and a String. The function should convert each value in the Array into a String, and join those values together using the second argument as a separator.

// You can call the toString() method on any JavaScript value to obtain a String representation of it.

function join(arr, string) {
  var result = "";

  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
    result += string;
  }

  return result;
}

//test

join(["bri", "tru", "wha"], "ck ");       // 'brick truck wha'
join([1, 2, 3], " and ");                 // '1 and 2 and 3'