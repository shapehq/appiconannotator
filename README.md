# appiconannotator

Annotates app icons with a text in the top and/or bottom. Works well with the `annotate_app_icons` action for Fastlane as described in [fastlane-plugin-shapelane](https://bitbucket.org/shapedk/fastlane-plugin-shape/overview).

## Installation

Install using [npm](http://npmjs.com).

```
#!bash

npm install -g git+ssh://git@bitbucket.org:shapedk/appiconannotator.git
```

## Usage

appiconannotator supports the following two commands for annotating app icons. For more information about the commands, run `appiconannotator [command] --help`.

#### annotate

Write text on the input app icon.

```
#!bash

appiconannotator annotate -i appicon.png -o annotated_appicon.png --top-text "1.0 (14)" --bottom-text "feature/swift3"
```

| **Option** | **Description**
|-|-|
| -h, --help | output usage information |
| -i, --input <file> | input app icon to write on |
| -o, --output <file> | output destination to save the resulting app icon |
| --top-text <str> | text rendered in the top |
| --bottom-text <str> | text rendered in the bottom |
| --top-font-size <int> | size of the text in the top |
| --top-text-color <hex> | color of the text rendered in the top |
| --top-background-color <hex> | background color the text rendered in the top |
| --bottom-font-size <int> | size of the text in the bottom |
| --bottom-text-color <hex> | color of the text rendered in the bottom |
| --bottom-background-color <hex> | background color the text rendered in the bottom |

#### annotate-all

Scan for app icons in the directory and write on all icons found.

```
#!bash

appiconannotator annotate-all -i . --top-text "1.0 (14)" --bottom-text "feature/swift3"
```

| **Option** | **Description**
|-|-|
| -h, --help | output usage information |
| -i, --input <dir> | directory to scan for app icons |
| --top-text <str> |  text rendered in the top |
| --bottom-text <str> | text rendered in the bottom |
| --top-font-size <int> | size of the text in the top |
| --top-text-color <hex> | color of the text rendered in the top |
| --top-background-color <hex> | background color the text rendered in the top |
| --bottom-font-size <int> | size of the text in the bottom |
| --bottom-text-color <hex> | color of the text rendered in the bottom |
| --bottom-background-color <hex> | background color the text rendered in the bottom |