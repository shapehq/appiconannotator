var program = require('commander');
var Renderer = require('./renderer');

var App = function() {}

App.prototype.run = function() {
  program
    .version('0.0.1');
  
  program
    .command('write')
    .description('Write text on the input app icon')
    .option('-i, --input <file>', 'input app icon to write on')
    .option('-o, --output <file>', 'output destination to save the resulting app icon')
    .option('--top-text <str>', 'text rendered in the top')
    .option('--bottom-text <str>', 'text rendered in the bottom')
    .option('--top-font-size <int>', 'size of the text in the top', '15')
    .option('--top-text-color <hex>', 'color of the text rendered in the top', '#ffffff')
    .option('--top-background-color <hex>', 'background color the text rendered in the top', '#000000')
    .option('--bottom-font-size <int>', 'size of the text in the bottom', '15')
    .option('--bottom-text-color <hex>', 'color of the text rendered in the bottom', '#ffffff')
    .option('--bottom-background-color <hex>', 'background color the text rendered in the bottom', '#000000')
    .action(function(options) {
      cmdValue = options;
      var rendererOptions = {
        'input': options.input,
        'output': options.output,
        'topText': options.topText,
        'bottomText': options.bottomText,
        'topTextColor': options.topTextColor,
        'topBackgroundColor': options.topBackgroundColor,
        'topFontSize': options.topFontSize,
        'bottomTextColor': options.bottomTextColor,
        'bottomBackgroundColor': options.bottomBackgroundColor,
        'bottomFontSize': options.bottomFontSize
      };
      var renderer = new Renderer();
      renderer.render(rendererOptions, function(err) {
        if (err) {
          console.log('Could not process image.');
          console.log(err);
          process.exit(1);
        }
      });
    });

  program.parse(process.argv);
  
  if (typeof cmdValue === 'undefined') {
    program.help();
  }
}

module.exports = App;
