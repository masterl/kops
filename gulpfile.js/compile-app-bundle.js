const { src, dest } = require('gulp');
const webpack       = require('webpack-stream');
const path          = require('path');

const build_dir = require('../build_utils/build_dir');

const webpack_config = require('../webpack.config.js');

const dest_dir = path.join(build_dir, 'js');

function compile_app_bundle ()
{
    return src('src/app/startup.js')
        .pipe(webpack(webpack_config))
        .pipe(dest(dest_dir));
}

module.exports = compile_app_bundle;
