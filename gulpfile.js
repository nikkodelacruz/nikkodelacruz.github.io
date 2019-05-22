// series = execute tasks in order
// parallel = for tasks to run max concurrency (executed out of order)

const { src, dest, parallel, watch } = require('gulp');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Depracated
// gulp default
// gulp.task('default', function(){
	// return console.log('gulp is running...');
// });

// gulp.task('uglify', function(){
// 	gulp.src('assets/js/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist/js'))
// });

// nested directories (js inside folders)
// 'script/**/*.js'

/* JS */
// Minify script
// Concatinate(combine) all script files into one file
function js(){
	return src('assets/js/*.js')
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js'))
}

/* STYLE */
// Convert LESS to CSS
// Minify CSS
function css(){
	return src('assets/css/less/*.less')
	.pipe(less())
	.pipe(cleanCSS())
	.pipe(rename( {basename:'style',suffix:'.min'} ))
	.pipe(dest('dist/css'))
}

// run these tasks on gulp command
// exports.js = js;
// exports.css = css;
// exports.default = parallel( js, css );
exports.default = function(){
	watch('assets/js/*.js',js);
	watch('assets/css/less/**/*.less',css);
	
	// Or a composed task
	// watch('src/*.js', series(clean, javascript));
}
