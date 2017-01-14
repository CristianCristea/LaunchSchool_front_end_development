$(function() {
  var templates = {},
      photos,
      first_comment;

  // Add all the handlebars templates to the templates object - script_id: templateFunction
  $('script[type="text/x-handlebars"]').each(function() {
    var $template = $(this);
    templates[$template.attr('id')] = Handlebars.compile($template.html());
  });

  // Register all partials
  $('[data-type="partial"]').each(function() {
    $partial = $(this);
    Handlebars.registerPartial($partial.attr('id'), $partial.html());
  });

  // slideshow functionality

  var slideshow = {
    $el: $('#slideshow'),
    duration: 500,
    prevSlide: function(e) {
      e.preventDefault();
      // find the current visible photo
      var $current = this.$el.find($('figure:visible'));
      var $prev = $current.prev('figure');

      // if they are no prev elem change to last
      if (!$prev.length) {
        $prev = this.$el.find('figure').last();
      }
      $current.fadeOut(this.duration);
      $prev.fadeIn(this.duration);
      // generate photo info and comments
      this.renderPhotoContent($prev.attr('data-id'));
    },
    nextSlide: function(e) {
      e.preventDefault();
      var $current = this.$el.find($('figure:visible'));
      var $next = $current.next('figure');

      if (!$next.length) {
        $next = this.$el.find('figure').first();
      }

      $current.fadeOut(this.duration);
      $next.fadeIn(this.duration);
      // generate photo info and comments
      this.renderPhotoContent($next.attr('data-id'));
    },
    renderPhotoContent: function(idx) {
      $('[name=photo_id]').val(idx);
      renderPhotoInformation(+idx);
      getCommentsFor(idx);
    },
    // bind the click events(left right arrow) - event delegation
    bind: function() {
      // use $.proxy to change the context from the DOM element to the slideshow object
      this.$el.find("a.prev").on('click', $.proxy(this.prevSlide, this));
      this.$el.find("a.next").on('click', $.proxy(this.nextSlide, this));
    },
    init: function() {
      this.bind();
    }
  };

  $.ajax({
    url: '/photos',
    sync: true,
    success: function(json) {
      photos = json;

      renderPhotos();
      renderPhotoInformation(photos[0].id);
      slideshow.init();
      getCommentsFor(photos[0].id);
    }
  });

  // update the like and favorites btn - delegate event
  // this is pointing to the header DOM elem - that's why we use the event obj
  $('section > header').on('click','.actions a', function(e) {
    e.preventDefault();
    var $e = $(e.target);

    $.ajax({
      url: $e.attr('href'),
      type: 'post',
      data: 'photo_id=' + $e.attr('data-id'),
      success: function(json) {
        // replace only the number form the btn with the total property of the returned obj
        $e.text(function(i, currentText) {
          return currentText.replace(/\d+/, json.total);
        });
      }
    });
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var $f = $(this);

    $.ajax({
      url: $f.attr('action'),
      type: 'post',
      data: $f.serialize(),
      success: function(json) {
        // render a single comment
        $('#comments ul').append(templates.comment(json));
      }
    });
  });

  function renderPhotos() {
    // template.photos - the compiled #photos template
    // photos: - just a added prop to create an obj to be passed to the template function
    // last photos - the json array data
    $('#slides').html(templates.photos({photos: photos}));    
  }

  function renderPhotoInformation(idx) {
    var photo = photos.filter(function(item) {
      return item.id === idx;
    })[0];
    $('section > header').html(templates.photo_information(photo));
  }
  
  function getCommentsFor(idx) {
    $.ajax({
      url: '/comments',
      data: 'photo_id=' + idx,
      success: function(comment_json) {
        // because in the template the #each loops through an object with the comments property
        // we create {comments: json_data}
        $('#comments ul').html(templates.comments({comments: comment_json}));
      }
    });
  }
});