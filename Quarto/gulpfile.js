var gulp = require('gulp')
var livereload = require('gulp-livereload')
var babel = require('gulp-babel')
var concat = require('gulp-concat')

var src = {
  js: 'src/js/*.js',
  css: 'src/sass/*.scss',
  html: 'src/*.html'
}

var pub = {
  js: 'public/js',
  css: 'public/css',
  html: 'public'
}

gulp.task('babel', function(){
  gulp.src('src/js/*.js')
  .pipe(babel())
  .pipe(concat('main.js'))
  .pipe(gulp.dest('public/js'))
  .pipe(livereload())
})

gulp.task('sass', function(){
  gulp.src('src/sass/*.scss')
  .pipe(sass())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('public/css'))
  .pipe(livereload())
})

gulp.task('html', function(){
  gulp.src('src/*.html')
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
