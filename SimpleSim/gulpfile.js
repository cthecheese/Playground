var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');

gulp.slurped = false;

gulp.task('copyHTML', function(){
  gulp.src('layout/*.html')
          .pipe(gulp.dest("public"))
          .pipe(livereload());
});

gulp.task('babelLayout', function(){
  gulp.src("layout/**/*.js")
    .pipe(babel())
    .on('error', console.error.bind(console))
    .pipe(concat("main.js"))
    .pipe(gulp.dest("public/js"))
    .pipe(livereload());
});

gulp.task('babelSimpleSim', function(){
  gulp.src("engine/**/*.js")
      .pipe(babel())
      .on('error', console.error.bind(console))
      .pipe(concat("SimpleSim.js"))
      .pipe(gulp.dest("public/js"))
      .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('layout/*.html', ['copyHTML']);
  gulp.watch('layout/**/*.js', ['babelLayout']);
  gulp.watch('engine/**/*.js', ['babelSimpleSim']);
});

gulp.task('default', ['watch']);
