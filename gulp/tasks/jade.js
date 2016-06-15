'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();

gulp.task('jade', function() {
  return gulp.src('./src/jade/**/!(_)*.jade')
  .pipe(plugins.accord('jade', {
    pretty: true,
    basedir: '/src/jade'
  }))
  .pipe(gulp.dest('./dist/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

//Production
gulp.task('production:jade', function() {
  return gulp.src('./src/jade/**/!(_)*.jade')
  .pipe(plugins.accord('jade', {
    basedir: './src/jade'
  }))
  .pipe(gulp.dest('./dist/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
