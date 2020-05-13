const path    = require('path');
const src_dir = require('./build_utils/src_dir');

const mode = process.env.KOPS_DEV ? 'development' : 'production';

module.exports = {
    mode,
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
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.pug$/,
                use:  [
                    'apply-loader',
                    'pug-loader'
                ]
            },
            {
                test: /\.styl$/,
                use:  [
                    'ignore-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            knockout: 'knockout/build/output/knockout-latest.js',
            page:     'page/page.js',
            app:      path.join(src_dir, 'app')
        }
    }
};
