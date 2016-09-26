// 1.

// Write a function, indexOf, that accepts two arguments: an Array and a value. The function should return the first index in the Array where the value is found, or -1 if the value is not found.

function indexOf(arr, elem) {
  var index = -1;
  
  for ( var i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      index = i;
      break;
    }
  }
  return index;
}

// test
indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1

// 2. 

// Write a function, lastIndexOf, that accepts two arguments: an Array and a value. The function should return the last index in the Array where the value is found, or -1 if the value is not found.

function lastIndexOf(arr, elem) {
  var index = -1;

  for ( var i = arr.length -1; i >= 0; i--) {
     if (arr[i] === elem) {
      index = i;
      break;
    }
  }

  return index;
}

// test
lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1