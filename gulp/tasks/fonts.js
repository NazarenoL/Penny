'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*.otf')
  .pipe(plugins.cache(plugins.cssfont64()))
  .pipe(plugins.concat('fonts.css'))
  .pipe(gulp.dest('./dist/css'))
});
