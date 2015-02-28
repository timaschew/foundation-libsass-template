var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var config = require('../config');
var gitRemote = require('remote-origin-url');

gulp.task('deploy', function () {
    // User & Organization Pages
    var orgOrUser = process.env.ORGNAME || 'your_organisation';
    var optionsOrgPage = {
        remoteUrl: 'https://github.com/'+orgOrUser+'/' + orgOrUser + '.github.io.git',
        origin: 'origin',
        branch: 'master',
        cacheDir: './deploy-repo'
    }; 
    gitRemote(function(err, url) {
        if (err) throw err;
        
        var optionsProjectPage = {
            remoteUrl: url,
            origin: 'origin',
            branch: 'gh-pages',
            cacheDir: './deploy-repo'
        }; 
        return gulp.src(config.dest + '/**/*')
            .pipe(deploy(optionsProjectPage));
    });
    
});