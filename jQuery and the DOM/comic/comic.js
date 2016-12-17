$(function() {
  var $blinds = $('[id^=blind]');
  var delayTime = 800;
  var speedTime = 250;

  function startAnimation(delayTime, speedTime) {
    $blinds.each(function(index) {
      $blind = $blinds.eq(index);

      $blind.delay(delayTime * index + speedTime).animate({
        top: '+=' + $blind.height(),
        height: 0
      }, speedTime);
    });
  }

  $('a').on('click', function(event) {
    event.preventDefault();
    $blinds.finish().removeAttr('style');
    startAnimation(delayTime, speedTime);
  });

  startAnimation(delayTime, speedTime);
});