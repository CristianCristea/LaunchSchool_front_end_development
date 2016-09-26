// 1.

// Write a function, push, that accepts two arguments: an Array and any other value. The function should add the second argument to the end of the Array and return the value.

function push(arr, elem) {
  arr[arr.length] = elem;
  return elem;
}

// test
var count = [1, 2, 3];
push(count, 4);   // 4
count;            // [ 1, 2, 3, 4 ]

// 2.

// Write a function, pop, that accepts one arguments: an Array. The function should remove the last element from the array and return it.

function pop(arr) {
  var newLength = arr.length - 1;
  var elem = arr[newLength];
  arr.length = newLength;
  return elem;
}

// test
var count = [1, 2, 3];
pop(count);           // 3
count;                // [ 1, 2 ]

// 3. 

// Write a function, unshift, that accepts two arguments: an Array and a value. The function should add the value to the beginning of the Array and return the new length of the array. You'll need to use a for loop for this one.


function unshift(arr, elem) {
  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = array[i - 1];
  }
  arr[0] = elem;
  return arr.length;
}

//test

var count = [1, 2, 3];
unshift(count, 0);        // 4
count;                    // [ 0, 1, 2, 3 ]

// 4.

// Write a function, shift, that accepts one argument: an Array. The function should remove the first value from the beginning of the Array and return it.

function shift(arr) {
  var firstElem = arr[0];
  for ( var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  array.length = array.length -1;
  return firstElem;
}

// test
var count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]