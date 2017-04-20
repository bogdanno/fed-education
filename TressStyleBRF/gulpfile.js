var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    webserver = require('gulp-webserver'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat');

gulp.task('default', ['img','webserver', 'watch']);

const params = {
    out: 'dist/',
    stylesSass: 'app/sass/*.sass'
};

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            host: '0.0.0.0',
            open: true
        }));
});

gulp.task('sass', function() {
    return gulp.src(params['stylesSass'])
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*.+(png|ico|jpeg|jpg)')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('watch',['sass'], function() {
    gulp.watch(['app/**/*.sass', 'app/**/*.scss'], ['sass']);
    gulp.watch(['app/img/**/*.+(png|ico|jpeg|jpg)'],['img']);
});
