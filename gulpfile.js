const gulp       = require('gulp');
const load_tasks = require('gulp-task-loader');

load_tasks();

const npm_tasks = [
  'npm:minify_js',
  'npm:copy_minified_js',
  'npm:css'
];

const compile_tasks = [
  'compile:index',
  'compile:templates',
  'compile:stylus',
  'compile:js'
];

gulp.task('default', npm_tasks.concat(compile_tasks), () => {
  gulp.watch('src/index.pug', ['compile:index']);
  gulp.watch('src/components/**/*.pug', ['compile:templates']);
  gulp.watch('src/stylus/**/*.styl', ['compile:stylus']);
  gulp.watch('src/**/*.js', ['compile:js']);
});
