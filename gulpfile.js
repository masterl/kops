const gulp       = require('gulp');
const load_tasks = require('gulp-task-loader');

load_tasks();

const npm_tasks = [
  'npm:copy_js',
  'npm:css'
];

const compile_tasks = [
  'compile:index',
  'compile:stylus'
];

gulp.task('default',npm_tasks.concat(compile_tasks), () => {
  gulp.watch('src/index.pug', ['compile:index']);
  gulp.watch('src/stylus/**/*.styl', ['compile:stylus']);
});
