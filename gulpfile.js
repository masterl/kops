const gulp       = require('gulp');
const load_tasks = require('gulp-task-loader');

load_tasks();

const npm_tasks = [
  'npm:copy_js'
];

const compile_tasks = [
  'compile:index'
];

gulp.task('default',npm_tasks.concat(compile_tasks), () => {

});
