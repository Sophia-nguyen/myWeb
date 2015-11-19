// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var paths = {
    app: 'app',
    dist: 'dist',
    component: 'bower_components'
  },
  jshint = require('gulp-jshint'),
  sass   = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  minifyCss = require('gulp-minify-css'),
  del    = require('del'),
  server = require('gulp-server-livereload');

// run a local webserver with live reload
gulp.task('server', function() {
  gulp.src(paths.app)
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true,
      defaultFile: 'index.html'
    }));
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src(paths.app + 'scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp
    .src(paths.app + '/styles/**/*.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(paths.app + '/styles'))
    .pipe(gulp.dest(paths.dist + '/styles'));
});

// Copy & Minify JS
gulp.task('scripts', function() {
  return gulp.src(paths.app + '/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + '/scripts'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('scripts/**/*.js', ['lint', 'scripts']);
  gulp.watch('styles/**/*.scss', ['sass']);
});

// Clean dist
gulp.task('clean', function() {
  return del([paths.dist, paths.app + '/styles/main.css']);
});

// run Task
gulp.task('run', function() {
  gulp.run(
    'clean',
    'sass',
    'scripts',
    'server'
  );
});
