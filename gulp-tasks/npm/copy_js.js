const gulp = require('gulp');
const path = require('path');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'js', 'vendor');

module.exports = () => {

  return gulp.src([
    'node_modules/knockout/build/output/knockout-latest.js'
  ])
    .pipe(gulp.dest(dest_dir));
};
