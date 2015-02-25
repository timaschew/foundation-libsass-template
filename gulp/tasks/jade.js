var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config');

gulp.task('jade', function () {
    gulp.src(
        ['./src/templates/**/*.jade',
        '!./src/templates/**/_*.jade']) 
        .pipe(jade({
          locals: {},
          pretty: true
        }))
    .pipe(gulp.dest(config.dest));
});