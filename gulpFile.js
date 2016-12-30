var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('css',function() {
    gulp.src('src/search.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'))
})