var gulp = require('gulp');
var inlinesource = require('gulp-inline-source'),
	htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
	return gulp.src('./src/index.html')
    		.pipe(inlinesource())
    		.pipe(htmlmin({
    			minifyCSS: true
    		}))
    		.pipe(gulp.dest('./build'));
});