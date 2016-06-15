'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence').use(gulp);


gulp.task('production:watch', ['browserSync'], function() {
  gulp.watch('src/jade/**', ['production:jade']);
  gulp.watch('src/scss/**/', ['production:sass']);
  gulp.watch('src/img/**', ['imagemin']);
  gulp.watch('src/js/app/*.js', ['production:scripts']);
  return gulp.watch('src/fonts/**/*', ['fonts']);
});


gulp.task('production', function() {
  runSequence([
    'clean:dist',
    'production:jade',
    'production:vendors',
    'production:scripts',
    'fonts',
    'imagemin',
    'production:sass',
    'production:watch'
    ]
  )
})


///////////////

// gulp.task('production:watch', ['browserSync'], function() {
//   gulp.watch('src/jade/**', ['production:jade']);
//   gulp.watch('src/sass/**', ['production:sass']);
//   gulp.watch('src/coffee/**', ['production:coffee']);
//   gulp.watch('src/bower/**', ['production:scripts', 'production:sass']);
//   gulp.watch('src/img/**', ['imagemin']);
//   gulp.watch('src/assets/**', ['assets']);
//   gulp.watch('src/svg/**', ['svg', 'production:jade']);
//   return gulp.watch('src/fonts/**/*', ['fonts']);
// });

// gulp.task('production', function() {
//   return runSequence('clean',
//     'production:scripts',
//     'production:coffee',
//     'fonts',
//     'production:sass',
//     'imagemin',
//     'assets',
//     'svg:inline',
//     'svg:external',
//     'production:jade',
//     'production:watch');
// });


