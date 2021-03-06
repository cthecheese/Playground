var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');

gulp.slurped = false;

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

// gulp.task('default', function(){
//   return gulp.src('src/js/main.js')
//         .pipe(babel())
//         .on('error', console.error.bind(console))
//         .pipe(gulp.dest('dist'));
// });
