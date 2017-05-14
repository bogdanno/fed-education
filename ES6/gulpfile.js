// const gulp = require('gulp');
// var babel = require('babel-core');
// const babelify = require('babelify');
// const browserify = require('gulp-browserify');

// gulp.task('es6', function() {
// 	return browserify('src/script.js')
// 		.transform('babelify', {
// 			presets: ['es2015']
// 		})
// 		.bundle()
// 		.pipe(source('script.js'))
// 		.pipe(buffer())
// 		.pipe(gulp.dest('dist/script.js'));
// });

// gulp.task('default', ['es6'], function() {
// 	gulp.watch('src/script.js', ['es6'])
// });