var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    runSequence = require('run-sequence'),
    webserver = require('gulp-webserver'),
    livereload = require('gulp-livereload');

gulp.task('default', ['img', 'sass', 'webserver']);

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
        .pipe(gulp.dest('dist/css'))
});

gulp.task('img', function() {
    return gulp.src('app/img/*.+(png|ico|jpeg|jpg)')
        .pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
});

// gulp.task('server', function() {
//     browserSync.init({
//         notify: false,
//         server: {
//             host: '0.0.0.0',
//             baseDir: "./dist",
//         }
//     });

//     browserSync.watch(path.join(params['out'], '**', '*.*')).on(
//         'change',
//         browserSync.reload
//     );
// });

// gulp.task('watch', ['sass'], function() {

//     browserSync.init({
//         server: {
//             baseDir: "./"
//         },
//         notify: false
//     });

//     gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
//     gulp.watch("*.html").on('change', reload);
// });