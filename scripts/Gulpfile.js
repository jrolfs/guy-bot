var gulp       = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel      = require('gulp-babel');
var coffee     = require('gulp-coffee');
var del        = require('del');

gulp.task('clean', function () {
  del(['scripts/**/*']);
});

gulp.task('babel', function () {
  return gulp.src('commands/**/*.es')
    .pipe(sourcemaps.init())
    .pipe(babel({ stage: 0 }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('scripts'));
});

gulp.task('coffee', function () {
  return gulp.src('commands/*.coffee')
    .pipe(sourcemaps.init())
    .pipe(coffee({ bare: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('scripts'));
});

gulp.task('default', ['clean', 'babel', 'coffee']);
