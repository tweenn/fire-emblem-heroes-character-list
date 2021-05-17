const gulp = require('gulp');
const serve = require('gulp-serve');
const surge = require('gulp-surge');

gulp.task('serve', serve({
	root: ['./static'],
	port: 3000
}));

gulp.task('deploy', () => {
	return surge({
		project: './static', // Path to your static build directory
		domain: 'feh-character-list.surge.sh' // Your domain or Surge subdomain
	});
})
