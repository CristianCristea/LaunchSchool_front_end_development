// Implement a function that takes a string as an argument and returns it in reverse

function reverse(string) {
  var characters = string.split("");
  return characters.reverse().join("");
}

// refactor
function reverse(string) {
  return string.split("").reverse().join("");
}

// tests
reverse("hello");               // returns "olleh"
reverse("The quick brown fox"); // returns "xof nworb kciuq ehT"
