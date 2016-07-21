var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {

  nodemon({
    script: './bin/www',                // file that starts server
    ext: 'js',                          // which files to restart server
    env: { 'NODE_ENV': 'development' }  // environment variables
  });

});

gulp.task('default', ['start']);
