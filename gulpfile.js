require('harmonize')();
var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var jest = require('gulp-jest');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');

var browserSyncOptions = {
  proxy: "localhost:8000",
  notify: false
};

var paths = {
  images: 'client/public/src/assets/images/*.*',
  styles: 'client/public/src/assets/css/*.css',
  appScripts: 'client/public/src/app/**/*.js',
  html: 'client/public/src/index.html',
  vendor: 'client/public/src/assets/lib/**/*.*',
  server: 'server/**/*.js',
  overall: 'client/public/src/**/*.{html,js,css}',
  appsource: 'client/public/src/app/App.js',
  appdist: 'client/public/dist/app/App.js',
  distfolder: 'client/public/dist',
  main: 'App.js',
  servertest: 'test/server.spec.js'
};

gulp.task('test-client', function () {
  return gulp.src('client/__tests__').pipe(jest({
    scriptPreprocessor: "./spec/support/preprocessor.js",
    unmockedModulePathPatterns: [
      "node_modules/react"
    ],
    testDirectoryName: "spec",
    testPathIgnorePatterns: [
      "node_modules",
      "spec/support"
    ],
    moduleFileExtensions: [
      "js",
      "json",
      "react"
    ]
  }));
});

gulp.task('test-server', function() {
  return gulp.src(paths.servertest)
           .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('server-start', function(){
  nodemon({
    script: 'server/bin/www',
    ext: 'js html',
    watch: 'server/**/*.*',
    env: { 'NODE_ENV': 'development' }
  });
});

gulp.task('browserify', function(){
  return browserify(paths.appsource)
    .transform(reactify)
    .bundle()
    .pipe(source(paths.main))
    .pipe(gulp.dest('client/public/dist/app'));
});

gulp.task('browserify:min', function(){
  return browserify(paths.appsource)
  .transform(reactify)
  .bundle()
  .pipe(source(paths.main))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('client/public/dist/app'));
});

gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.distfolder));
});

gulp.task('html:min', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.distfolder));
});

gulp.task('css', function() {
  return gulp.src(paths.styles)
    .pipe(gulp.dest(paths.distfolder+'/assets/css'));
});

gulp.task('css:min', function() {
  return gulp.src(paths.styles)
    .pipe(concat('styles.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.distfolder+'/assets/css'));
});

gulp.task('img', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest(paths.distfolder+'/assets/images'));
});

gulp.task('img:min', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest(paths.distfolder+'/assets/images'));
});

gulp.task('vendor', function() {
  return gulp.src(paths.vendor)
    .pipe(gulp.dest(paths.distfolder+'/assets/lib'));
});

gulp.task('vendor:min', function() {
  return gulp.src(paths.vendor)
    .pipe(gulp.dest(paths.distfolder+'/assets/lib'));
});

gulp.task('serve',['browserify','html','css','img','vendor','server-start'], function(event) {
  
  browserSync(browserSyncOptions);
  gulp.watch(paths.html, ['html-watch']);
  gulp.watch(paths.styles, ['css-watch']);
  gulp.watch(paths.images, ['img-watch']);
  gulp.watch(paths.appScripts, ['jsx-watch']);
  gulp.watch(paths.vendor, ['vendor-watch']);
});

gulp.task('html-watch', ['html'], browserSync.reload);
gulp.task('css-watch', ['css'], browserSync.reload);
gulp.task('img-watch', ['img'], browserSync.reload);
gulp.task('jsx-watch', ['browserify'], browserSync.reload);
gulp.task('vendor-watch', ['vendor'], browserSync.reload);

gulp.task('build',['browserify','html','css','img','vendor','test-client','test-server']);

gulp.task('default', ['serve']);