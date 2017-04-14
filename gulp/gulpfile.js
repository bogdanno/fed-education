var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imageop = require('gulp-image-optimization'),
    webserver = require('gulp-webserver'),
    buffer = require('vinyl-buffer'),
    imagemin = require('gulp-imagemin');

gulp.task('webserver', function() {
    gulp.src('build')
        .pipe(webserver({
            livereload: true,
            host: '0.0.0.0',
            // directoryListing: true,
            open: true
        }));
});

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//     		baseDir: "./build",
//     		index: "index.html",
// 		}
//     });
// });

gulp.task('html', function() {
    return gulp.src('frontend/*.html')
        .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
    return gulp.src('frontend/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 10 versions'] }))
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'))
});

gulp.task('img', function() {
    return gulp.src('frontend/img/*.+(png|ico)')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
});


gulp.task('js', function() {
    return browserify({
            entries: './frontend/scripts/app.js',
            debug: true
        })
        .transform(babelify.configure({
            presets: ['es2015']
        }))
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['styles', 'img', 'js', 'webserver'])