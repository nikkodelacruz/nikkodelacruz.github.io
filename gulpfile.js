// series = execute tasks in order
// parallel = for tasks to run max concurrency (executed out of order)

const { src, dest, parallel, watch } = require('gulp');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

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
// Babel
function js(){
	return src('assets/js/*.js')
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(dest('dist/js'))
	.pipe(browserSync.stream())
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
	.pipe(browserSync.stream())
}

/* BROWSER SYNC */
function browsersync(){
	var files = 'index.html';
	browserSync.init(files, {
		proxy: 'localhost/portfolio',
		injectChanges: true
	});
}

// run these tasks on gulp command
// exports.js = js;
// exports.css = css;
// exports.default = parallel( js, css );
exports.default = function(){
	watch('index.html',browsersync)
	watch('assets/js/*.js',js);
	watch('assets/css/less/**/*.less',css);
	
	// Or a composed task
	// watch('src/*.js', series(clean, javascript));
}
