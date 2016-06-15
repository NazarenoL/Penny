'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();
var config = require('./config');

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.concat('app.js'))
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(config.exportPath + '/js/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});


gulp.task('production:scripts', function() {
  return gulp.src('src/js/*.js')
  .pipe(plugins.concat('app.js'))
  .pipe(plugins.uglify({
    preserveComments: 'license'
  }))
  .pipe(gulp.dest(config.exportPath + '/js/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
