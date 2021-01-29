const gulp = require("gulp"),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');

gulp.task('connect', function() {
    connect.server({
        root: './',
        port: 8080
    });
});

gulp.task('scss-concat', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/src/css'));
});

gulp.task("default", ["cssmin", "js-concat", "scss-concat"], function() {

    gulp.watch("assets/scss/**/*.scss", ["scss-concat"]);

});



gulp.task('run', ['connect', 'scss-concat']);