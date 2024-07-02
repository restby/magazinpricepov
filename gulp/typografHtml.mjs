import gulp from 'gulp';
import typograf from 'gulp-typograf';

const typografHtml = () =>
  gulp.src('source/**.html', {base: 'source'})
      .pipe(typograf({
        locale: ['ru', 'en-US'],
      }))
      .pipe(gulp.dest('build'));

export {typografHtml};
