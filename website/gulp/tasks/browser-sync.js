module.exports = function () {
  $.gulp.task('bs', function () {
    $.bs.init({
      server: {
        baseDir: "./"
      }
    });
  });
};