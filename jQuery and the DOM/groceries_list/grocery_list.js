$(function() {
  $('form').on('submit', function(e) {
    var $item = $('#item_name').val();
    var $quantity = $('#quantity').val() || 1;
    var $groceries_list = $('#groceries_list');
    var $li;

    e.preventDefault();
    if (!$item) {
      alert('Please enter an item..');
    } else {
      $li = ('<li>' + $quantity + '  ' + $item + '</li><hr>');
      $groceries_list.append($li);
      $(this).get(0).reset();
    }
  });
});