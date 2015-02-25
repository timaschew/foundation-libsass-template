var gulp = require('gulp');
var jade = require('gulp-jade');
var coffee = require('coffee-script');
var fs = require('fs');
var config = require('../config');
var navigationContent = fs.readFileSync(config.navigation, 'utf8');
var navigation = coffee.eval(navigationContent); 

gulp.task('jade', function () {
    gulp.src(
        ['./src/templates/**/*.jade',
        '!./src/templates/**/_*.jade']) 
        .pipe(jade({
          locals: {nav: navigation},
          pretty: true
        }))
    .pipe(gulp.dest(config.dest));
});