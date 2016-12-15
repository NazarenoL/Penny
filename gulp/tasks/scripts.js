'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();
var config = require('./config');

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
  .pipe(plugins.plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.concat('app.js'))
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(config.exportPath + '/js/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

// Build
gulp.task('build:scripts', function() {
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
