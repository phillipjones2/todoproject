const gulp = require('gulp'),
      pug  = require('gulp-pug'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      watch = require('gulp-watch');

gulp.task('pug-compile', () => {
  return gulp.src('./src/views/*.pug')
    .pipe(pug({
      pretty: true,
    }))
    .pipe(gulp.dest('./public/'))
});
