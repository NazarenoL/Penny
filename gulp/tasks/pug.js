'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();
var config = require('./config');

gulp.task('pug', function() {
  return gulp.src('./src/pug/**/!(_)*.pug')
  .pipe(plugins.plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(plugins.pug({
    pretty: true,
    basedir: '/src/pug'
  }))
  .pipe(gulp.dest(config.exportPath + '/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

//Build
gulp.task('build:pug', function() {
  return gulp.src('./src/pug/**/!(_)*.pug')
  .pipe(plugins.pug({
    basedir: './src/pug',
  }))
  .pipe(gulp.dest(config.exportPath + '/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
