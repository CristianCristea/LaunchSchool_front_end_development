$(function() {
  $('#team a').not('.modal a').on('click', function(e) {
    e.preventDefault();
    var $link = $(this);

    $link.siblings('.modal').css('top', $(window).scrollTop() + 30);
    $link.nextAll('div').fadeIn(400);
  });

  $('.modal a').on('click', function(e) {
    e.preventDefault();

    $('.modal, .overlay').filter(':visible').fadeOut(400);
  });

  $('.overlay').on('click', function() {
    $('.modal, .overlay').filter(':visible').fadeOut(400);
  });
});