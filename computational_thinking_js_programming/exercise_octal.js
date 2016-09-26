// Write a Function, octalToDecimal, that implements octal to decimal conversion. When invoked with a String that contains a representation of an octal number, the Function should return a decimal version of that value as a Number. Implement the conversion yourself. Do not use something else to perform the conversion for you.

// Decimal, the numbering system we're most familiar with, is a base-10 system.

// A number 233 in base 10 notation can be understood as a linear combination of powers of 10:

    // The rightmost digit gets multiplied by 100 = 1
    // The next number gets multiplied by 101 = 10
    // ...
    // The nth number gets multiplied by 10n-1.
    // All these values are summed.

function octalToDecimal (numberString) {
  var decimalParts = numberString.split("").map(function(digitChar, index) {
      return +(digitChar) * Math.pow(8, numberString.length - index - 1);
  });

  return decimalParts.reduce(function(sum, number) {
    return sum + number;
  });
}