const gulp = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  console.log('hello world')
  cb();
}

exports.default = defaultTask