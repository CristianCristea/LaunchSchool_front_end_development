var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

var preloader = {
  path: 'img/',
  srcs: ['1.jpg', '2.jpg', '3.jpg'],
  createImage: function(index, src) {
    var $img = $('<img />', { src: this.path + src });
    // after the img are loaded call the manipulator.process on each one
    $img.on('load', manipulator.process.bind(manipulator));
    $('.color').append($img);
  },
  run: function() {
    $.each(this.srcs, this.createImage.bind(this));
  }
};

var manipulator = {
  drawImage: function(img) {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  },
  getData: function() {
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  },
  convertToGrayscale: function() {
    var image_data = this.getData(),
        gray_data;

    for (var i=0, len = image_data.data.length; i < len; i += 4) {
      gray_data = image_data.data[i] * 0.3086 + image_data.data[i + 1] * 0.6094 + image_data.data[i + 2] * 0.0820;
      image_data.data[i] = gray_data;
      image_data.data[i + 1] = gray_data;
      image_data.data[i + 2] = gray_data;
    }
    ctx.putImageData(image_data, 0, 0);
  },
  writeImage: function() {
    var img = document.createElement('img');

    img.src = canvas.toDataURL();
    $('.gray').append(img);
  },
  process: function(event) {
    var img = event.target;
    this.drawImage(img);
    this.convertToGrayscale();
    this.writeImage();
  }
};
// load event
$(preloader.run.bind(preloader));