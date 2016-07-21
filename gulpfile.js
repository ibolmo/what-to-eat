var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var wait = require('gulp-wait');

gulp.task('start', function () {
  livereload.listen();

  nodemon({
    script: './bin/www',                // file that starts server
    ext: 'js',                          // which files to restart server
    env: { 'NODE_ENV': 'development' }  // environment variables
  }).on('start', function(){
    gulp.src('bin/www')
      .pipe(wait(500))                  // prevent browser 'offline'
      .pipe(livereload());
  });

});

gulp.task('default', ['start']);
