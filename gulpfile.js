var gulp = require('gulp');
// used for reloading the browser when assets change
var browserSync = require('browser-sync');
// enables client-side use of require statements
var browserify = require('browserify');
// enables translation of jsx code during browserify compilation
var reactify = require('reactify');
// used to turn browserify output into a stream (allows gulp to handle it)
var source = require('vinyl-source-stream');
// used to create a streamable string buffer (allows gulp to handle it)
var buffer = require('vinyl-buffer');
// minifies js
var uglify = require('gulp-uglify');
// allows calling of nodemon inside gulp
var nodemon = require('gulp-nodemon');
// minify css
var minifyCss = require('gulp-minify-css');
// concatenate js files
var concat = require('gulp-concat');
// compile .scss -> .css compilation
var sass = require('gulp-sass');
// allow for use of shell commands
var shell = require('gulp-shell');

// sets options for the browsersync server
var browserSyncOptions = {
  proxy: "localhost:8000",
  notify: false
};

var mainPaths = {
  src: 'client/public/src',
  dist: 'client/public/dist',
  build: 'client/public/build',
  server: 'server',
  clientTest: 'client/test',
  serverTest: 'test'
};

// maintain a common set of paths between tasks
var paths = {
  images: mainPaths.src+'/assets/images/*.*',
  sassStyles: mainPaths.src+'/assets/css/sass',
  stylesFolder: mainPaths.src+'/assets/css',
  styles: mainPaths.src+'/assets/css/**/*.css',
  appScripts: mainPaths.src+'/app/**/*.js',
  html: mainPaths.src+'/index.html',
  vendor: mainPaths.src+'/assets/lib/**/*.*',
  server: mainPaths.server + '/**/*.js',
  overall: mainPaths.src+'/**/*.{html,js,css}',
  appsource: mainPaths.src+'/app/App.js',
  appdist: mainPaths.dist + '/app/App.js',
  main: 'App.js',
  servertest: mainPaths.serverTest + '/server.spec.js',
  workers: mainPaths.src+'/assets/workers/*.js',
  distworkers: mainPaths.dist + '/assets/workers',
  buildworkers: mainPaths.build + '/assets/workers'
};

// starts up nodemon with the included options
gulp.task('server-start', function(){
  nodemon({
    script: 'server/bin/www',
    ext: 'js html',
    watch: 'server/**/*.*',
    env: { 'NODE_ENV': 'development' }
  });
});

// transforms react code from jsx to a single concatenated js file
gulp.task('browserify', function(){
  return browserify(paths.appsource)
    // transforms jsx code to js code
    .transform(reactify)
    // bundles all the js files together
    .bundle()
    // changes bundled js into gulp accessible stream
    .pipe(source(paths.main))
    .pipe(gulp.dest('client/public/dist/app'));
});

// same as browserify task, but minifies js too
gulp.task('browserify:min', function(){
  return browserify(paths.appsource)
  .transform(reactify)
  .bundle()
  .pipe(source(paths.main))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('client/public/build/app'));
});

// copies html to distribution folder
gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(mainPaths.dist));
});

// copies html to build folder
gulp.task('html:min', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest(mainPaths.build));
});

// transpiles .scss files to .css files
gulp.task('sass', function(cb) {
  gulp.src(paths.sassStyles+"/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.stylesFolder));
  cb();
});

// concatenates css files from source and places them in distribution folder
gulp.task('css', function() {
  return gulp.src(paths.styles)
    .pipe(concat('main.css'))
    .pipe(gulp.dest(mainPaths.dist+'/assets/css'));
});

// same as css task, but also minifies css and puts it in the build folder
gulp.task('css:min', function() {
  return gulp.src(paths.styles)
    .pipe(concat('main.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(mainPaths.build+'/assets/css'));
});

// currently img and img:min just move images to their respective folders
gulp.task('img', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest(mainPaths.dist+'/assets/images'));
});

// tentatively planning to add the gulp imagemin plugin
gulp.task('img:min', function() {
  return gulp.src(paths.images)
    .pipe(gulp.dest(mainPaths.build+'/assets/images'));
});

// moves vendor library to distribution folder
gulp.task('vendor', function() {
  return gulp.src(paths.vendor)
    .pipe(gulp.dest(mainPaths.dist+'/assets/lib'));
});

// moves vendor library to build folder
gulp.task('vendor:min', function() {
  return gulp.src(paths.vendor)
    .pipe(gulp.dest(mainPaths.build+'/assets/lib'));
});

gulp.task('workers', function() {
  return gulp.src(paths.workers)
    .pipe(gulp.dest(paths.distworkers));
});

gulp.task('workers:min', function() {
  return gulp.src(paths.workers)
    .pipe(uglify())
    .pipe(gulp.dest(paths.buildworkers));
});

gulp.task('populate-db', shell.task([
  'node populateDB.js'
]));

// prepares js, css, html, and images through their seperate build tasks,
// starts a backend server, connects browserSync server to our existing backend
// server, and watches all files to be dynamically reloaded on change
gulp.task('serve',['browserify','workers','sass','html','css','img','vendor','server-start'], function(event) {
  
  // starts up browsersync server
  // this is a server that serves our front end assets
  // and passes server calls to our backend server.
  // This is used instead of live-reload since gulp livereload is limited
  browserSync(browserSyncOptions);
  // proactively watches assets for changes and reloads front end
  gulp.watch(paths.html, ['html-watch']);
  gulp.watch(paths.styles, ['css-watch']);
  gulp.watch(paths.images, ['img-watch']);
  gulp.watch(paths.appScripts, ['jsx-watch']);
  gulp.watch(paths.vendor, ['vendor-watch']);
  gulp.watch(paths.sassStyles+"/**/*.scss", ['sass']);
  gulp.watch(paths.workers,['workers']);
});

// watch tasks that handle assets and then reload the browsersync server
gulp.task('html-watch', ['html'], browserSync.reload);
gulp.task('css-watch', ['css'], browserSync.reload);
gulp.task('img-watch', ['img'], browserSync.reload);
gulp.task('jsx-watch', ['browserify'], browserSync.reload);
gulp.task('vendor-watch', ['vendor'], browserSync.reload);


// builds out assets in the dist folder for the dev environment
gulp.task('dist',['browserify','html','sass','css','img','vendor','workers']);

// builds out assets for production implementation of application
gulp.task('build',['browserify:min','html:min','sass','css:min','img:min','workers:min','vendor:min','populate-db']);

// sets the default task (the one call by just calling gulp on command line)
gulp.task('default', ['serve']);