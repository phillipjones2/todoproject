const gulp = require('gulp'),
      pug  = require('gulp-pug'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      watch = require('gulp-watch'),
      livereload = require('gulp-livereload');

gulp.task('pug-compile', () => {
  return gulp.src('./src/views/*.pug')
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload());
});

gulp.task('sass-compile', () => {
  return gulp.src(['./src/styles/main.scss', './src/styles/guide.scss', './src/styles/dash.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload());
});

gulp.task('babel-compile', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest('./public/js/'))
    .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('./src/scripts/*.js', ['babel-compile']);
  gulp.watch('./src/styles/*.scss', ['sass-compile']);
  gulp.watch('./src/views/*.pug', ['pug-compile']);
});

gulp.task('default', ['watch']);
