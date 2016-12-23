$(function() {
  var $slideshow = $('#slideshow');
  var $nav = $slideshow.find('ul');
  var $controls = $slideshow.find('.controls');

  $nav.on('click', 'a', function(e) {
    e.preventDefault();

    var $li= $(e.currentTarget).closest('li');
    var currentIndex = $li.index();

    $nav.find('.active').removeClass('active');
    $li.addClass('active');

      $slideshow.find('figure')
      .filter(':visible').stop(true, true).fadeOut(300).end()
      .eq(currentIndex).delay(300).fadeIn(300);
  });
});

