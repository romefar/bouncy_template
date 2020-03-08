const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const image = require('gulp-image');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
 
gulp.task('babelJS', () =>
    gulp.src('./src/js/index.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('./build/js'))
);


gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/styles'));
});    


gulp.task('pug', function buildHTML() {
    return gulp.src('./src/pages/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('./build/pages'));
  });    

  gulp.task('image', function () {
    return gulp.src('./src/images/*')
      .pipe(image())
      .pipe(gulp.dest('./build/images'));
  });
 
  gulp.task('fonts', function () { 
      return gulp.src('./src/fonts/**/*')
      .pipe(gulp.dest('./build/fonts'))
      
  });

  gulp.task('browserSync', function () {
      browserSync({
          server:{
              baseDir: 'build/',
              index: "pages/index.html"        
          }
      });
  });

  gulp.task('watch', gulp.series('sass', 'pug', 'fonts', 'babelJS', 'image', 'browserSync', function () {
      gulp.watch('./src/styles/*.scss', ['sass']);
      gulp.watch('./src/pages/index.pug', ['pug']);
      gulp.watch('./src/images/*', ['image']);
      gulp.watch('build/pages/*.html', browserSync.reload);
      gulp.watch('./build/css/**/*.css').on("change", browserSync.reload);
      gulp.watch('./build/js/**/*.js').on("change", browserSync.reload);
  }));

