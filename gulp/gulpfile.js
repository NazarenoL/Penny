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
  gulp.watch('src/pug/**', ['pug']);
  gulp.watch('src/scss/**', ['sass']);
  gulp.watch('src/bower/**', ['scripts', 'sass']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/assets/**', ['assets']);
  gulp.watch('src/img/**', ['imagemin']);
  gulp.watch('src/svg/**', ['svg', 'pug']);
})


gulp.task('default', function() {
  runSequence([
    'clean:dist',
    'sass',
    'vendors',
    'scripts',
    'assets',
    'imagemin',
    'pug',
    'svg',
    'browserSync',
    'watch'
    ]
  )
})
