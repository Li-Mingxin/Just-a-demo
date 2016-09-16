var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlminify = require('gulp-html-minify');

// 压缩javascript
gulp.task('script', function () {
  gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});

// 压缩css
gulp.task('css', function () {
  gulp.src('./dist/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist'));
});

// 压缩html
gulp.task('html' , function(){
  gulp.src('./dist/*.html')
    .pipe(htmlminify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['script', 'css', 'html']);
