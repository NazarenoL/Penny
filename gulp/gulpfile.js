'use strict'

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence').use(gulp);
var requireDir = require('require-dir');


requireDir('./tasks', {
  recurse: true
});


// Server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    }
  })
})



gulp.task('watch', ['browserSync'], function() {
  gulp.watch('src/jade/**', ['jade']);
  gulp.watch('src/scss/**/', ['sass']);
  gulp.watch('src/js/app/*.js', ['scripts']);
  gulp.watch('src/img/**', ['imagemin']);
  gulp.watch('src/svg/**', ['svg', 'jade']);
  gulp.watch('src/fonts/**/*', ['fonts']);
})


gulp.task('default', function() {
  runSequence([
    'clean:dist',
    'sass',
    'vendors',
    'scripts',
    'imagemin',
    'fonts',
    'jade',
    'svg',
    'browserSync',
    'watch'
    ]
  )
})
