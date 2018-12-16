const { series, parallel } = require('gulp');
const chalk   = require('chalk');
const express = require('express');
const app     = express();

const build_dir = require('../build_utils/build_dir');

const PORT = 4000;

function serve_files (cb) {
  app.use(express.static(build_dir));
  app.listen(PORT, '0.0.0.0');

  console.log(chalk.bold.green(`\n\tServer running on localhost:${PORT}\n`));

  cb();
};

module.exports = series(
  parallel(
    require('./compile-app-bundle'),
    require('./compile-index'),
    require('./compile-stylus')
  ),
  serve_files
);
