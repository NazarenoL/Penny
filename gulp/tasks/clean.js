'use strict'

var gulp = require('gulp');
var del = require('del');
var cache = require('gulp-cache');

//Clean dist folder
gulp.task('clean:dist', function() {
  return del.sync('dist');
})
