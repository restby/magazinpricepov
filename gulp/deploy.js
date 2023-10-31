// const rev = require('gulp-rev');
// const revRewrite = require('gulp-rev-rewrite');
// const revDel = require('gulp-rev-delete-original');
// const zip = require('gulp-zip');

// const cache = () => {
//   return src(`${buildFolder}/**/*.{css,js,svg,png,jpg,jpeg,webp,woff2}`, {
//     base: buildFolder
//   })
//     .pipe(rev())
//     .pipe(revDel())
//     .pipe(dest(buildFolder))
//     .pipe(rev.manifest('rev.json'))
//     .pipe(dest(buildFolder));
// };

// const rewrite = () => {
//   const manifest = readFileSync('app/rev.json');
//   src(`${paths.buildCssFolder}/*.css`)
//     .pipe(revRewrite({
//       manifest
//     }))
//     .pipe(dest(paths.buildCssFolder));
//   return src(`${buildFolder}/**/*.html`)
//     .pipe(revRewrite({
//       manifest
//     }))
//     .pipe(dest(buildFolder));
// }
// const zipFiles = (done) => {
//   del.sync([`${buildFolder}/*.zip`]);
//   return src(`${buildFolder}/**/*.*`, {})
//     .pipe(plumber(
//       notify.onError({
//         title: "ZIP",
//         message: "Error: <%= error.message %>"
//       })
//     ))
//     .pipe(zip(`${rootFolder}.zip`))
//     .pipe(dest(buildFolder));
// }

// exports.cache = series(cache, rewrite);

// exports.zip = zipFiles;

// const toProd = (done) => {
//   isProd = true;
//   done();
// };
