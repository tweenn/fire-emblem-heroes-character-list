const gulp = require('gulp');
const serve = require('gulp-serve');
const surge = require('gulp-surge');
const imagemin = require('gulp-imagemin');

const webp = require('gulp-webp');

gulp.task('img:webp', () => {
	return gulp.src('./static/**/*.webp')
		.pipe(webp({
			quality: 100,
			alphaQuality: 100,
			method: 6,
			sns: 100,
			lossless: true,
			resize: {
				width: 60,
				height: 60
			}
		}))
		.pipe(gulp.dest('./static/'));
});

gulp.task('img:png', () => {
	return gulp.src('./static/**/*.png')
		.pipe(imagemin([
			imagemin.optipng({
				optimizationLevel: 7
			})
		]))
		.pipe(gulp.dest('./static/'));
});

gulp.task('img', gulp.parallel('img:webp', 'img:png'));

gulp.task('serve', serve({
	root: ['./static'],
	port: 3000
}));

gulp.task('deploy', (done) => {
	const surgePath = './static';

	Promise.all([
		surge({
			project: surgePath, // Path to your static build directory
			domain: 'feh-character-list.zuntini.ninja' // Your domain or Surge subdomain
		}),
		surge({
			project: surgePath, // Path to your static build directory
			domain: 'feh-character-list.surge.sh' // Your domain or Surge subdomain
		}),
	]).then(() => {
		done();
	})
})
