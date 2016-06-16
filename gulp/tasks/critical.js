'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var config = require('./config');
var critical = require('critical').stream;

//Critical path -> Inline and minify into new html
gulp.task('critical', function () {
  return gulp.src('./dist/*.html')
  .pipe(critical({
    base: 'dist/',
    minify: true,
    inline: true,
    extract: true,
    dimensions: [{
      width: 320,
      height: 480
    },{
      width: 768,
      height: 1024
    },{
      width: 1280,
      height: 960
    }],
    css: ['dist/css/styles.css']}))
  .pipe(gulp.dest(config.exportPath + '/critical'))
});
