'use strict'

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var browserSync = require('browser-sync');
var plugins = gulpLoadPlugins();

gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.sass({
    outputStyle: 'compact'
  }))
  .pipe(plugins.autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(plugins.groupCssMediaQueries())
  .pipe(plugins.csscomb())
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
})


gulp.task('production:sass', function() {
  return gulp.src('./src/scss/**/*.scss')
  .pipe(plugins.sass())
  .pipe(plugins.autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(plugins.groupCssMediaQueries())
  .pipe(plugins.csscomb())
  .pipe(plugins.cssnano())
  .pipe(gulp.dest('./dist/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});
