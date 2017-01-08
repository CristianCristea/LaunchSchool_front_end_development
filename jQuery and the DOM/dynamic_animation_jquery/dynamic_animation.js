$(function() {
  var $canvas = $('#canvas');

  // return all the inputs and values from the form - as an object
  function getFormObject($form) {
    var object = {};
    $form.serializeArray().forEach(function(input) {
      object[input.name] = input.value;
    });

    return object;
  }

  // create the new div elem
  function createElement(formData) {
    var $elem = $('<div>', {
      'class': formData.shape_type,
      data: formData,       // store the original object
      css: ({
        left: +formData.start_x,
        top: +formData.start_y
      })
    });

    return $elem;
  }

  // animate a single Elem
  function animateElement() {
    var $elem = $(this),
        data = $elem.data(); // retrive the object stored in data attribute on the DOM element
    // console.log(data);
    resetElement($elem, data);


    $elem.animate({
      left: +data.end_x,
      top: +data.end_y
    }, 1000);
  }

  // reset the elem position
  function resetElement($elem, data) {
     $elem.css({
        left: +data.start_x,
        top: +data.start_y
      });
  }

  function stopAnimations() {
    $canvas.find('div').stop();
  }

  $('form').on('submit', function(event) {
    event.preventDefault();

    var $form = $(this),
        data = getFormObject($form);

    $canvas.append(createElement(data));
  });

  $('#start_animation').on('click', function(event) {
    event.preventDefault();

    $canvas.find('div').each(animateElement);
  });

  $('#stop_animations').on('click', function(event) {
    event.preventDefault();

    stopAnimations();
  });

});