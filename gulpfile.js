var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass')

gulp.task('pug', function () {
  return gulp.src('src/index.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
})

gulp.task('sass', function () {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});