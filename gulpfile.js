var gulp = require('gulp'),
	inlinesource = require('gulp-inline-source'),
	htmlmin = require('gulp-htmlmin'),
	shell = require('gulp-shell');


gulp.task('build', function () {
		gulp.src('./src/font/**/*')		
		.pipe(gulp.dest('./build'));

		gulp.src('./src/index.html')
		.pipe(inlinesource())
		.pipe(htmlmin({
			minifyCSS: true
		}))
    	.pipe(gulp.dest('./build'));
});

gulp.task('deploy', shell.task([
  'rsync -rvz --delete build/* root@plgm.403.io:/var/www/plgm.403.io/',
]));