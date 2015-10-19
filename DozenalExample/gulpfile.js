var gulp = require('gulp')
var livereload = require('gulp-livereload')

gulp.task('js', function(){
  gulp.src('src/js/*.js')
  .pipe(gulp.dest('public/js'))
  .pipe(livereload())
})

gulp.task('css', function(){
  gulp.src('src/css/*.css')
  .pipe(gulp.dest('public/css'))
  .pipe(livereload())
})

gulp.task('html', function(){
  gulp.src('src/*.html')
  .pipe(gulp.dest('public'))
  .pipe(livereload())
})

gulp.task('clock', function(){
  gulp.src('src/clock/*')
  .pipe(gulp.dest('public/clock'))
  .pipe(livereload())
})

gulp.task('watch', function(){
  livereload.listen()
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch('src/css/*.css', ['css'])
  gulp.watch('src/*.html', ['html'])
  gulp.watch('src/clock/*', ['clock'])
})

gulp.task('default', ['watch'])
