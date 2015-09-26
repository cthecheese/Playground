var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require('gulp-rename');

gulp.task("webpack", function(callback) {
  gulp.src('./src/entry.js')
      .pipe(webpack({
        module: {
          loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }]
        }
      }))
      .pipe(rename('main.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.js', ['webpack']);
});

gulp.task('default', ['watch']);
