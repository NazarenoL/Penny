'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var config = require('./config');

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*.otf')
  .pipe(plugins.plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(plugins.cache(plugins.cssfont64()))
  .pipe(plugins.concat('fonts.css'))
  .pipe(gulp.dest(config.exportPath + '/css/'));
});
