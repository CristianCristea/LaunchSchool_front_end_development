// In each exercise below, we'll ask you to write a function to work with arrays. You are expected to look up the available Array Methods and use them to solve the exercises.

// 1. 

// Write a function that returns a new array of the elements in odd positions of an array parameter.

function oddElementsOf(arr) {
  var return_array = [];

  for (var i=1; i<arr.length; i++) {
    if((i % 2) !== 0) {
      return_array.push(arr[i]);
    }
  }

  return return_array;
}

var digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits); // Returns [8, 16, 42]

// 2.

// Write a function that accepts two arrays and returns a new array whose even positions are from the first array and odd positions are from the second array. Assume both arrays are equal length.

function combinedArray(even, odd) {
  var combined = [];

  for (var i = 0, len = even.length; i < len; i++) {
    combined.push(even[i]);
    combined.push(odd[i]);
  }

  return combined;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ["A", "L", "V", "A", "R", "H"];

combinedArray(digits, letters); // Returns [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]


// 3. 

//Write a function that returns a new array that contains a combination of the existing array elements as-is and the array elements in reverse order.

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

var digits = [4, 8, 15, 16, 23, 42];
mirroredArray(digits); // Returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]

// without slice method the reverse method will be called first which mutates the value of the arr variable.

// 4. Write a function that accepts an array and a strig. The function should return a string of the array elem hoind together with the string. An array ["a", "b", "c"] should return "a+b+c". if no string is passed use an empty string.

function joinArray(arr, joiner) {
  return arr.join(joiner || "");
}

joinArray(["a", "b", "c"], "+"); // returns "a+b+c"
joinArray([1, 2, 3, 4, 5]); // returns "12345"

// 5. 

// Using the array sort method, create a function that accepts an array of numbers and returns a new array of the numbers sorted in descending order.

function sortDescending(arr) {
  var new_arr = arr.slice(0);

  new_arr.sort(function(num1, num2) {return num2 - num1 });

  return new_arr;
}

sortDescending([23, 4, 16, 42, 8, 15]); // Returns [42, 23, 16, 15, 8, 4]

// 6. Write a function that accepts an array of arrays and returns a new array containing the sums of each of the sub arrays.

function matrixSums(arr) {

  // create an array to hold the result
   var result = [],
      current_sum;

  // iterate over parent array - each elem will be an array

  for (var i = 0; i < arr.length; i++) {
    current_sum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      current_sum += arr[i][j];
    }

    result.push(current_sum);
  }

  return result;
  // iterate over each array and get the sum of elem
  // push the sum of the inner array to the result array
  // return the result array
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]); // Returns [15, 60, 12]


// 7.

// Write a function that takes an array and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  // ...
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]); // Returns [1, 2, 3, 4, 5]

function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach'); 
// New veggies collection is : potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach'); 
// spinach already exists in the veggies collection.