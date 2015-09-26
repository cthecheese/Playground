var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var webpack = require('gulp-webpack');
var rename = require('gulp-rename');

gulp.task('index', function(callback){
  gulp.src('./entry.js')
      .pipe(webpack({
        module: {
          loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }]
        }
      }))
      .pipe(rename('index.js'))
      .pipe(gulp.dest('./'));
    });

gulp.task('htmlClone', function(){
  gulp.src('src/*.html')
      .pipe(gulp.dest('./public'))
      .pipe(livereload());
});

gulp.task('babel', function(callback){
  gulp.src('./src/js/entry.js')
      .pipe(webpack({
        module: {
          loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }]
        }
      }))
      .pipe(rename('main.js'))
      .pipe(gulp.dest('./public/js'))
      .pipe(livereload());
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./srcIndex.js', ['index']);
  gulp.watch('src/**/*.js', ['babel']);
  gulp.watch('src/*.html', ['htmlClone']);
});

gulp.task('default', ['watch']);
