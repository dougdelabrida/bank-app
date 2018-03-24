var { exec } = require('child_process');
var gulp = require('gulp');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config');

gulp.task('webpack:watch', function () {
  exec('webpack-dev-server --mode development --open')
});

gulp.task('server', function (cb) {
  exec('node src/server/index.js')
});

gulp.task('default', ['webpack:watch', 'server'])
