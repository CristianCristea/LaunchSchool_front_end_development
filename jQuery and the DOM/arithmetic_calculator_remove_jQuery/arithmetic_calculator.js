function $(id_selector) {
  return document.getElementById(id_selector);
}

window.onload = function() {
  var first_number;
  var second_number;
  var operator;
  var p = $('display');
  var result;

  document.getElementsByTagName('form')[0].onsubmit = function(e) {
    e.preventDefault();

    first_number = Number($('first_number').value);
    second_number = Number($('second_number').value);
    operator = document.getElementsByTagName('select')[0].value;

    console.log(first_number, second_number, operator);
    
    switch (operator) {
      case 'add':
        result = first_number + second_number;
        break;
      case 'subtract':
        result = first_number - second_number;
        break;
      case 'multiply':
        result = first_number * second_number;
        break;
      case 'divide':
        result = first_number / second_number;
        break;
    }
    
    // console.log(result);
    p.textContent = result;
  };
};