var gm = require('gm').subClass({ imageMagick: true });

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
  var img = gm(input).size(function(err, size) {
    if (err) { return done(err); }
    gm(input);
    if (topText != null) {
      img.fill(topBackgroundColor)
         .drawRectangle(0, 0, size.width, parseInt(topFontSize) + 2)
         .fill(topTextColor)
         .pointSize(topFontSize)
         .drawText(0, 0, topText, 'north');
    }
    if (bottomText != null) {
      img.fill(bottomBackgroundColor)
         .drawRectangle(0, size.height - parseInt(bottomFontSize) - 2, size.width, size.height)
         .fill(bottomTextColor)
         .pointSize(bottomFontSize)
         .drawText(0, 0, bottomText, 'south');
    }    
    img.write(output, done);
  });
}

module.exports = Renderer;

