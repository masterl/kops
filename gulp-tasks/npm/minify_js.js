const gulp   = require('gulp');
const path   = require('path');
const minify = require('gulp-minify');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'js', 'vendor');

module.exports = function () {

  return gulp.src([
    'node_modules/requirejs/require.js',
  ])
    .pipe(minify({
      noSource: true,
      mangle:   false,
      ext:      {
        min: '.js'
      }
    }))
    .pipe(gulp.dest(dest_dir));
};
