var gulp = require('gulp')
var livereload = require('gulp-livereload')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

gulp.task('html', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('public'))
  .pipe(livereload())
})

gulp.task('js', function(){
  gulp.src('src/js/*.js')
  .pipe(babel())
  .pipe(gulp.dest('public/js'))
  .pipe(livereload())
})

gulp.task('sass', function(){
  gulp.src('src/css/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/css'))
  .pipe(livereload())
})

gulp.task('watch', function(){
  livereload.listen()
  gulp.watch('src/*.html', ['html'])
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/css/*.scss', ['sass'])
})

gulp.task('default', ['watch'])
