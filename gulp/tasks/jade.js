'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();


gulp.task('jade', function() {
  return gulp.src('src/jade/**/*.jade')
  .pipe(plugins.accord('jade', {
    pretty: true,
    basedir: '/src/jade'
  }))
  .pipe(gulp.dest('./dist/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
