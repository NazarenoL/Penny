'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();

gulp.task('scripts', function() {
  return gulp.src('src/js/app/*.js')
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.concat('app.js'))
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/js'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
