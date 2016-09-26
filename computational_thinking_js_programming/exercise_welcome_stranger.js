// Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, produce a person's name. The object will contain two keys, title and occupation, and the appropriate values. Your function should then display a greeting that uses the person's full name, and mentions the persons title.

function greetings(arr, obj) {
  console.log("Hello " + arr.join(" ") + "!" +" Nice to have a "+ obj.title + " " + obj.occupation + " around.");
}

// refactor

function greetings(name, status) {
  var nameGreet = "Hello, " + name.join(" ") + "!";
  var statusGreet = "Nice to have a " + status.title + " " + status.occupation + " around.";

  return nameGreet + " " + statusGreet;
}



// test

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.