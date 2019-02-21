module.exports = function () {
  $.gulp.task('pug', function () {
    return $.gulp.src('src/index.pug')
      .pipe($.glp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest('./'))
      .on('end', $.bs.reload);
  });
};