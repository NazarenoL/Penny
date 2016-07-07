'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence').use(gulp);


gulp.task('production:watch', ['browserSync'], function() {
  gulp.watch('src/pug/**', ['production:pug']);
  gulp.watch('src/scss/**/', ['production:sass']);
  gulp.watch('src/img/**', ['imagemin']);
  gulp.watch('src/bower/**', ['production:scripts', 'production:sass']);
  gulp.watch('src/js/app/*.js', ['production:scripts']);
  return gulp.watch('src/fonts/**/*', ['fonts']);
});


gulp.task('production', function() {
  runSequence([
    'clean:dist',
    'production:pug',
    'production:vendors',
    'production:scripts',
    'fonts',
    'assets',
    'imagemin',
    'production:sass',
    'production:watch'
    ]
  )
})
