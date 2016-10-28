var recursive = require('recursive-readdir');

var Scanner = function() { }

Scanner.prototype.scan = function(dir, done) {
  recursive(dir, function (err, files) {
    if (err) { return done(err); }
    var iconPaths = files.filter(function(e) {
      var isInAppIconSet = e.indexOf('.appiconset') != -1;
      var isImage = e.match(/.(png|jpg|jpeg|gif)$/);
      return isInAppIconSet && isImage;
    });
    done(null, iconPaths);
  });
}

module.exports = Scanner;
