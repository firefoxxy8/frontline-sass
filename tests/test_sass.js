var path     = require('path');
var sassTrue = require('sass-true');

// Files to test
// ENHANCEMENT: glob files
const testFiles = [
  'variables/_fs-base-font-size.scss',
  'variables/_fs-breakpoints.scss',
  'variables/_fs-colors.scss',
  'variables/_fs-easings.scss',
  'variables/_fs-svg-icons.scss',
  'variables/_fs-zindex.scss',
];

// Loop through each file name and run the test file.
testFiles.forEach(function(file) {
  let sassFile = path.join(__dirname, file);
  sassTrue.runSass({file: sassFile}, describe, it);
});

var sassFile = path.join(__dirname, 'functions/_color.scss');
sassTrue.runSass({file: sassFile}, describe, it);
