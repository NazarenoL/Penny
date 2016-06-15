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


gulp.task('watch', function() {
  gulp.watch('src/jade/**', ['jade']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['imagemin']);
  gulp.watch('src/fonts//*.otf', ['fonts']);
})


gulp.task('default', function(callback) {
  runSequence([
    'clean:dist',
    'sass',
    'vendors',
    'scripts',
    'imagemin',
    'fonts',
    'jade',
    'browserSync',
    'watch'
    ]
  )
})
