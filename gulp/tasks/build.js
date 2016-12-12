'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence').use(gulp);


gulp.task('build:watch', ['browserSync'], function() {
  gulp.watch('src/pug/**', ['build:pug']);
  gulp.watch('src/scss/**/', ['build:sass']);
  gulp.watch('src/img/**', ['imagemin']);
  gulp.watch('src/bower/**', ['build:scripts', 'build:sass']);
  gulp.watch('src/js/app/*.js', ['build:scripts']);
});


gulp.task('build', function() {
  runSequence([
    'clean:dist',
    'build:pug',
    'build:vendors',
    'build:scripts',
    'assets',
    'imagemin',
    'build:sass',
    'build:watch'
    ]
  )
})
