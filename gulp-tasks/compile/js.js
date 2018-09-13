const gulp   = require('gulp');
const minify = require('gulp-minify');
const babel  = require('gulp-babel');
const debug  = require('gulp-debug');
const path   = require('path');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'js');

module.exports = () => {
  return gulp.src('src/**/*.js')
    .pipe(debug({title: 'Before babel'}))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(debug({title: 'After babel'}))
    .pipe(minify({
      noSource: true,
      mangle:   true,
      ext:      {
        min: '.js'
      }
    }))
    .pipe(gulp.dest(dest_dir));
};
