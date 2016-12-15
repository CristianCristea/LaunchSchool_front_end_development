// get first number
// get second number
// get operator
// calculate
// print to page
  // get the p tag
  // change the content


$(function() {
  var $first_number;
  var $second_number;
  var $operator;
  var $p = $('#display');
  var result;

  $('form').on('submit', function(e) {
    e.preventDefault();

    $first_number = Number($('#first_number').val());
    $second_number = Number($('#second_number').val());
    $operator = $('select').val();

    // console.log($first_number, $second_number, $operator);
    
    switch ($operator) {
      case 'add':
        result = $first_number + $second_number;
        break;
      case 'subtract':
        result = $first_number - $second_number;
        break;
      case 'multiply':
        result = $first_number * $second_number;
        break;
      case 'divide':
        result = $first_number / $second_number;
        break;
    }
    
    // console.log(result);
    $p.text(result);
  });
});