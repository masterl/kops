const gulp   = require('gulp');
const minify = require('gulp-minify');
const babel  = require('gulp-babel');
const path   = require('path');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'js');

module.exports = () => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(minify({
      noSource: true,
      mangle:   true,
      ext:      {
        min: '.js'
      }
    }))
    .pipe(gulp.dest(dest_dir));
};
