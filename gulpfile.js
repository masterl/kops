const gulp       = require('gulp');
const load_tasks = require('gulp-task-loader');

load_tasks();

gulp.task('default',['npm:copy_js'], () => {

});
