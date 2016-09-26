// Write a function that takes a string as argument, and returns true if the parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching "(" and ")" pairs.

function isBalanced(string) {
  var parensCount = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      parensCount++;
    } else if (string[i] === ")") {
      parensCount--;
    }

    if (parensCount < 0) {
      return false;
    }
  }

  return parensCount === 0;
}

isBalanced("What (is) this?");        // true
isBalanced("What is) this?");         // false
isBalanced("What (is this?");         // false
isBalanced("((What) (is this))?");    // true
isBalanced("((What)) (is this))?");   // false
isBalanced("Hey!");                   // true
isBalanced(")Hey!(");                 // false
isBalanced("What ((is))) up(");       // false