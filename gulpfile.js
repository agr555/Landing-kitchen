'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');


gulp.task('less', function () {
    return gulp.src('src/styles/styles.less')// откуда
        .pipe(less({}))
        .pipe(concatCss("styles.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));//куда
});
gulp.task('watch', function () {
   return gulp.watch('src/styles/*.less', gulp.series('less'));
});
gulp.task('default', gulp.series('less', 'watch'));
//gulp.task('default', gulp.series('less'));
// gulp.task('default', gulp.series('less', 'less1', 'less2', 'less3','less4','less5','less6','less7','less8'));
