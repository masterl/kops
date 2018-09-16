const gulp    = require('gulp');
const webpack = require('webpack-stream');
const path    = require('path');

const build_dir = require('../../build_utils/build_dir');

const dest_dir = path.join(build_dir, 'js');

module.exports = () => {
  return gulp.src('src/app/startup.js')
    .pipe(webpack({
      mode:   'development',
      output: {
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            use:  {
              loader:  'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.pug$/,
            use:  ['apply-loader', 'pug-loader']
          },
          {
            test: /\.styl$/,
            use:  ['ignore-loader']
          }
        ]
      },
      resolve: {
        alias: {
          knockout: 'knockout/build/output/knockout-latest.js',
          page:     'page/page.js'
        }
      }
    }))
    .pipe(gulp.dest(dest_dir));
};