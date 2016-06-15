'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();
var config = require('./config');

gulp.task('vendors', function() {
  return gulp.src(config.scriptFiles)
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.concat('vendor.js'))
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(config.exportPath + '/js/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});


gulp.task('production:vendors', function() {
  return gulp.src(config.scriptFiles)
  .pipe(plugins.concat('vendor.js'))
  .pipe(plugins.uglify({
    preserveComments: 'license'
  }))
  .pipe(gulp.dest(config.exportPath + '/js/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
