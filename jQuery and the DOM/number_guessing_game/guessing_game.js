// check input type
// parse number
// declare a counter
// generate a random number 1..100
// check with the input
// while input !== random
// if smaller return smaller and increment counter
// if greater return greater and increment counter
// return true and counter value

$(function() {
  var answer = Math.floor(Math.random() * 100) + 1;
  var message = '';
  var $display = $('#display_result');
  var guess;
  var counter = 0;

  // console.log(answer);

  $('form').on('submit', function(e) {
    e.preventDefault();

    guess = +$('#guess').val();
    counter++;

    if (guess < answer) {
      message = 'My number is bigger than ' + guess;
    }

    if (guess > answer) {
      message = 'My number is lower than ' + guess;
    }

    if (guess === answer) {
      message = 'You won. It took you ' + counter + ' guesses';
    }

    $display.text(message);
  });

  $("a").on("click", function(e) {
    e.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    // console.log(answer);
    $display.text("Guess a number from 1 to 100");
    guess = $('#guess').val('');
  });
});