'use strict';

global.$ = {
  gulp: require('gulp'),
  glp:  require('gulp-load-plugins')(),
  bs:   require('browser-sync').create(),
  path: {
    tasks: require('./gulp/path/tasks')
  }
};

$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('pug', 'stylus', 'scripts', 'img'),
  $.gulp.parallel('watch', 'bs')
));