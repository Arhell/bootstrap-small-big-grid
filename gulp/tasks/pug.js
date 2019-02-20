module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src('src/pug/*.pug')
      .pipe($.glp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest('./'))
      .on('end', $.bs.reload);
  });
};