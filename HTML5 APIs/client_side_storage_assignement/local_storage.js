$(function() {
  $("nav a").on("click", function(e) {
    e.preventDefault();
    var $e = $(this),
        class_name = "active",
        idx = $e.closest("li").index();

    $e.closest("nav").find("." + class_name).removeClass(class_name);
    $e.addClass(class_name);
    $("#tabs article").hide().eq(idx).show();
    localStorage.setItem("active_nav", idx);
  });

  $(':radio').on('change', function(e) {
    var color = $(this).val();

    $(document.body).css('background-color', color);
    localStorage.setItem('background-color', color);
  });

  $(window).on('unload', function(e) {
    localStorage.setItem('note', $('textarea').text());
  });

  setActiveNav(localStorage.getItem('active_nav'));
  setBackgroundColor(localStorage.getItem('background-color'));
  setNote(localStorage.getItem('note'));
});

function setActiveNav(idx) {
  if (idx === null) { return; }
  $("nav a").eq(idx).click();
}

function setBackgroundColor(color) {
  if (color === null) { return; }
  $('[value=' + color +']').prop('checked', true).change();
}

function setNote(note) {
  $('textarea').text(note);
}
