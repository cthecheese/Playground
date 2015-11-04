var gulp = require('gulp')
var livereload = require('gulp-livereload')
var babel = require('gulp-babel')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('babel', function(){
  gulp.src('src/js/*.js')
  .pipe(babel())
  .on('error', handleError)
  .pipe(concat('main.js'))
  .pipe(gulp.dest('public/js'))
  .pipe(livereload())
})

gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
  .pipe(sass())
  .on('error', handleError)
  .pipe(concat('main.css'))
  .pipe(gulp.dest('public/css'))
  .pipe(livereload())
})

gulp.task('html', function(){
  gulp.src('src/*.html')
  .on('error', handleError)
  .pipe(gulp.dest('public'))
  .pipe(livereload())
})

gulp.task('watch', function(){
  livereload.listen()
  gulp.watch('src/js/*.js', ['babel'])
  gulp.watch('src/sass/*.scss', ['sass'])
  gulp.watch('src/*.html', ['html'])
})

gulp.task('default', ['watch'])
