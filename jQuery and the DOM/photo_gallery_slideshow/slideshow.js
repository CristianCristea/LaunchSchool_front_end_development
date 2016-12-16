$(function() {
  $('#thumbnails img').on('click', function() {
    var index = $(this).index();

    $(this).addClass('active').siblings().removeClass('active');
    $('#photos img').eq(index).fadeIn(400).siblings().fadeOut(400);
  });
});