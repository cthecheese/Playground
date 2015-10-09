var gulp = require('gulp')
var babel = require('gulp-babel')
var concat = require('gulp-concat')
var sass = require('gulp-sass')
var livereload = require('gulp-livereload')
var webpack = require('webpack')
var gutil = require('gulp-util')
var webpackConfig = require('./webpack.config.js')
var stream = require('webpack-stream')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('simplejs', function(){
  gulp.src('sim/**/*.js')
  .pipe(sourcemaps.init())
  .pipe(stream(webpackConfig))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/js'))
  .pipe(livereload())
})

gulp.task('webjs', function(){
  gulp.src('web/js/*.js')
  .pipe(concat('main.js'))
  .pipe(babel())
  .pipe(gulp.dest('public/js'))
  .pipe(livereload())
})

gulp.task('websass', function(){
  gulp.src('web/css/*.scss')
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(gulp.dest('public/css'))
  .pipe(livereload())
})

gulp.task('webhtml', function(){
  gulp.src('web/*.html')
  .pipe(gulp.dest('public'))
  .pipe(livereload())
})

gulp.task('watch', function(){
  livereload.listen()
  gulp.watch('sim/**/*.js', ['simplejs'])
  gulp.watch('web/js/*.js', ['webjs'])
  gulp.watch('web/css/*.scss', ['websass'])
  gulp.watch('web/*.html', ['webhtml'])
})

gulp.task('default', ['watch'])
