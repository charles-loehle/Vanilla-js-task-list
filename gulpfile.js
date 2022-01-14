const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
	// look in the sass folder for any .scss file or subfolder (indicated by **) containing .scss files
	return (
		src('./sass/**/*.scss')
			.pipe(sass({ outputStyle: 'expanded' })) // compile the sass
			//.pipe(purgecss({ content: ['*.html'] }))
			.pipe(dest('css'))
	); // destination file for compiled css
}

function watchTask() {
	watch(['./sass/**/*.scss', '*.html'], buildStyles); // watch all .scss files in the sass folder and watch all .html files for changes
}

exports.default = series(buildStyles, watchTask);
