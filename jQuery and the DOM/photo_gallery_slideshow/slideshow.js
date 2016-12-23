$(function() {
  var $slideshow = $('#slideshow');
  var $nav = $slideshow.find('ul');

  $nav.on('click', 'a', function(e) {
    e.preventDefault();

    var $li= $(e.currentTarget).closest('li');
    var index = $li.index();

    $nav.find('li').filter('.active').removeClass('active');
    $li.addClass('active');

    $slideshow.find('figure')
      .filter(':visible').stop().fadeOut(300).end()
      .eq(index).delay(300).fadeIn(300);
  });
});
