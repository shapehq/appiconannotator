var gm = require('gm').subClass({ imageMagick: true });
var async = require('async');

var Renderer = function() {}

Renderer.prototype.render = function(options, done) {
  var input = options.input;
  var output = options.output;
  var topText = options.topText;
  var bottomText = options.bottomText;
  var topTextColor = options.topTextColor;
  var topBackgroundColor = options.topBackgroundColor;
  var topFontSize = options.topFontSize;
  var bottomTextColor = options.bottomTextColor;
  var bottomBackgroundColor = options.bottomBackgroundColor;
  var bottomFontSize = options.bottomFontSize;
  var baseLength = 87; // Sizes are based on the 87x87 icon.
  var img = gm(input).size(function(err, size) {
    if (err) { return done(err); }
    var scale = parseFloat(size.width) / parseFloat(baseLength);
    gm(input);
    if (topText != null) {
      img.fill(topBackgroundColor)
         .drawRectangle(0, 0, size.width, (parseInt(topFontSize) + 2) * scale)
         .fill(topTextColor)
         .pointSize(topFontSize * scale)
         .drawText(0, 0, topText, 'north');
    }
    if (bottomText != null) {
      img.fill(bottomBackgroundColor)
         .drawRectangle(0, size.height - (parseInt(bottomFontSize) - 2) * scale, size.width, size.height)
         .fill(bottomTextColor)
         .pointSize(bottomFontSize * scale)
         .drawText(0, 0, bottomText, 'south');
    }    
    img.write(output, done);
  });
}

Renderer.prototype.render_all = function(options, done) {
  var files = options.input;
  var renderer = this;
  async.each(files, function(file, callback) {
    var renderOptions = options;
    renderOptions.input = file;
    renderOptions.output = file;
    renderer.render(renderOptions, callback);
  }, done);
}

module.exports = Renderer;

