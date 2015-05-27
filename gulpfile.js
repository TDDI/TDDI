var gulp = require('gulp');
//var livereload = require('gulp-livereload');
//var jshint = require('gulp-jshint');
//var stylish = require('jshint-stylish');
var browserSync = require('browser-sync');

/*
PASTE <script src="//localhost:35729/livereload.js"></script>
IN THE HEAD OF THE PAGE FOR LIVERELOAD TO WORK
 */

var browserSyncOptions = {
  port   : 3000,
  server : {
    baseDir: "./client/public/src"
  }
};


var paths = {
  scripts: 'client/public/src/assets/js/*.js',
  images: 'client/public/src/assets/img/*.*',
  styles: 'client/public/src/assets/css/*.css',
  reactScripts: 'client/public/src/app/**/*.js',
  html: ['client/public/src/index.html','client/public/app/**/*.html'],
  server: 'server/**/*.js',
  overall: 'client/public/src/**/*.{html,js,css}'
};

gulp.task('serve', function(event) {
  browserSync(browserSyncOptions);
  return gulp.watch(paths.overall).on('change', browserSync.reload);
});




// gulp.task('watch', [
//   'react:watch',
//   'css:watch',
//   'html:watch'
// ]);




// gulp.task('react', function() {
//   return gulp.src([
//     paths.reactScripts
//   ])
//   .pipe(jshint())
//   .pipe(jshint.reporter(stylish))
//   .pipe(livereload());
// });

// gulp.task('scripts', function() {
//   return gulp.src([
//     paths.scripts
//   ])
//   .pipe(jshint())
//   .pipe(jshint.reporter(stylish))
//   .pipe(livereload());
// });

// gulp.task('styles', function() {
//   return gulp.src([
//     paths.styles
//   ])
//   .pipe(livereload());
// });

// gulp.task('html', function() {
//   return gulp.src(
//     paths.html
//   )
//   .pipe(livereload());
// });

// gulp.task('images', function() {
//   return gulp.src([
//     paths.images
//   ])
//   .pipe(livereload());
// });

// gulp.task('server', function() {
//   return gulp.src([
//     paths.server
//   ])
//   .pipe(jshint())
//   .pipe(jshint.reporter(stylish));
// });

// gulp.task('watch', function () {
//   livereload.listen();
  
//   gulp.watch(paths.scripts,['scripts']);
//   gulp.watch(paths.html,['html']);
//   gulp.watch(paths.images,['images']);
//   gulp.watch(paths.styles,['styles']);
//   gulp.watch(paths.angularScripts,['angular']);
//   gulp.watch(paths.server,['server']);
// });

gulp.task('default', ['serve']);