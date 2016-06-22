'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();
var config = require('./config');


gulp.task('sass', function() {
  return gulp.src('./src/scss/**/!(_)*.scss')
  .pipe(plugins.plumber({
    errorHandler: function (err) {
      console.log(err);
      this.emit('end');
    }
  }))
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sass({
    includePaths: config.sassIncludes,
    outputStyle: 'compact'
  }))
  .pipe(plugins.autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(plugins.groupCssMediaQueries())
  .pipe(plugins.csscomb())
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(config.exportPath + '/css/'))
  .pipe(browserSync.reload({
    stream: true
  }));
})


gulp.task('production:sass', function() {
  return gulp.src('./src/scss/**/!(_)*.scss')
  .pipe(plugins.sass({
    includePaths: config.sassIncludes,
    outputStyle: 'compact'
  }))
  .pipe(plugins.autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(plugins.uncss({
    html: config.uncssHtml,
    ignore: config.uncssIgnore
  }))
  .pipe(plugins.groupCssMediaQueries())
  .pipe(plugins.csscomb())
  .pipe(plugins.cssnano())
  .pipe(gulp.dest(config.exportPath + '/css/'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
