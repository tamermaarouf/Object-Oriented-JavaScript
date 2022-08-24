const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');

// Gulp task to copy HTML files to output directory
gulp.task('html', ()=> {
  gulp.src('index.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('styles', () => {
  gulp
    .src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
      }),
    )
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('lint', () => {
  return;
  gulp
    .src(['scripts/*.js'])
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
    .pipe(eslint())
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

gulp.task('default', () => {
  gulp.watch('sass/**/*.scss', gulp.series('styles'));
  gulp.watch('js/*.js', gulp.series('lint'));
    gulp.watch('./index.html', gulp.series('html'));
  gulp.watch('./dist/index.html').on('change', browserSync.reload);

  browserSync.init({
    server: './',
  });

  console.log('hello world!');
});