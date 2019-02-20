module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('src/pug/*.pug', $.gulp.series('pug'));
    $.gulp.watch('src/stylus/*.styl', $.gulp.series('stylus'));
    $.gulp.watch('src/js/*.js', $.gulp.series('scripts'));
  });
};