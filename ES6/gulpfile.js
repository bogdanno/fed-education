var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

function compile(watch) {
  var bundler = watchify(browserify({
    entries:'./src/script.js',
    debug: true }))
    .transform(babelify.configure({
        presets: ['es2015']
    }))

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('script.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('dist/'))
      .pipe(gulp.dest('dist/'));
  }
  rebundle();
}

function watch() {
  return compile(true);
};

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);

// var gulp = require('gulp');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var browserify = require('browserify');
// var watchify = require('watchify');
// var babelify = require('babelify');
// var sourcemaps = require('gulp-sourcemaps');

// function build() {
// 	const bundler = browserify('src/script.js', {debug: true, transform: [babelify]});

// 	return bundler.bundle()
// 		.pipe(source('script.js', 'import.js'))
// 		.pipe(buffer())
// 		.pipe(sourcemaps.init({ loadMaps: true }))
//     	.pipe(sourcemaps.write('dist/'))
//     	.pipe(gulp.dest('dist/'));
// }

// gulp.task('build', build);




