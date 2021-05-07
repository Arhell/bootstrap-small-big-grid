$.glp.mozjpeg = require('imagemin-mozjpeg');

module.exports = function () {
  $.gulp.task('img', function () {
    return $.gulp.src('src/img/*')
      .pipe($.glp.imagemin(
        [$.glp.mozjpeg()],
        {verbose: true}
      ))
      .pipe($.gulp.dest('dist/img'));
  });
};