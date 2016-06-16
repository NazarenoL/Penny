'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();
var config = require('./config');


gulp.task('assets', function() {
  return gulp.src(config.assets)
  .pipe(gulp.dest(config.exportPath + '/assets/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
