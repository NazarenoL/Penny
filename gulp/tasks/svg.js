'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();

gulp.task('svg', function() {
  return gulp.src('./src/svg/*.svg')
  .pipe(plugins.plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(plugins.svgmin()).pipe(plugins.svgstore({
    fileName: 'symbols.svg',
    inlineSvg: true
  })).pipe(plugins.cheerio({
    run: function(jQuery) {
      jQuery('[fill]').removeAttr('fill');
      return jQuery('[stroke]').removeAttr('stroke');
    },
    parserOptions: {
      xmlMode: true
    }
  })).pipe(gulp.dest('./src/pug/layouts/includes'));
});
