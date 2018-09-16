const pug  = require('gulp-pug');
const gulp = require('gulp');
const path = require('path');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'js', 'components');

module.exports = () => {
  return gulp.src('src/components/**/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest(dest_dir));
};
