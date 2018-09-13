const gulp   = require('gulp');
const path   = require('path');
const rename = require('gulp-rename');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'js', 'vendor');

module.exports = () => {

  return gulp.src([
    'node_modules/knockout/build/output/knockout-latest.js',
    'node_modules/@babel/polyfill/dist/polyfill.min.js'
  ])
    .pipe(rename(path => {
      // .min filename
      const regex = /(.+).min/g;

      const results = regex.exec(path.basename);

      if (results) {
        path.basename = results[1];
      }

      return path;
    }))
    .pipe(gulp.dest(dest_dir));
};
