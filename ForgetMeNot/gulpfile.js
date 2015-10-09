var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var babel = require('gulp-babel')
var livereload = require('gulp-livereload')

gulp.task('copyHTML', function(){
  gulp.src('src/*.html')
          .pipe(gulp.dest("public"))
          .pipe(livereload());
});

gulp.task('babel', function(){
  gulp.src("src/**/*.js")
    .pipe(babel())
    .on('error', console.error.bind(console))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("public/js"))
    .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  if(!gulp.slurped){
      gulp.watch('gulpfile.js', ['default']);
      gulp.watch('src/*.html', ['copyHTML']);
      gulp.watch('src/js/**/*.js', ['babel']);
      gulp.slurped = true;
  }
});

gulp.task('default', ['watch']);
