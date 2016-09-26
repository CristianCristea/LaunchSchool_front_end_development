// For this exercise, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function, totalArea, that takes an Array of rectangles as an argument. The Function should return the total area covered by all of the rectangles.


function totalArea(rectangles) {
  // map the two dimensional array into one array of rectangle areas
  var areas = rectangles.map(rectangleArea);
  // reduce this array into a single number by adding up all the areas
  return areas.reduce(add);
}

function rectangleArea(arr) {
  return arr[0] * arr[1];
}

// test 
var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles); // 141


// Now write a second Function, totalSquareArea. This Funcition should be like total area, except it should only count the area of a triangle if it is a square;

function add(a, b) {
  return a + b;
}

function squareArea(arr) {
  if (arr[0] === arr[1]) {
    return arr[0] * arr[1];
  } else {
    console.log("The rectangle is not a square.");
  }
}

function totalSquareArea(squares) {
  var areas = squares.map(squareArea);
  return areas.reduce(add);
}

// refactor with the filter method

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangel[1];
  });

  var areas = squares.map(squareArea);
  return areas.reduce(add);
}
