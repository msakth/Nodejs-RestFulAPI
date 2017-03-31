const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  nodemon({
    script:'tools/serverSetUp.js',
    ext:'js',
    env:{
      PORT: 8080
    },
    ignore:['/node_modules/**']
  }).on('restart',function() {
    console.log('Restarting...');
  })

});
