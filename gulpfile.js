var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var paths = {
    sass: [
        'css/style.scss',
    ]
};



gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('css/style.scss', ['sass']);


});