'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();
var config = require('./config');

gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*')
  .pipe(plugins.newer('./dist/img'))
  .pipe(plugins.imagemin({
    progressive: true,
    multipass: true,
    svgoPlugins: [
      {
        removeViewBox: false,
        removeDimensions: true
      }
    ]
  }))
  .pipe(gulp.dest(config.exportPath + '/img/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
