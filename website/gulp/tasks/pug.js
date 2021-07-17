module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src('src/*.pug')
      .pipe($.glp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest('./dist'))
      .on('end', $.bs.reload);
  });
};