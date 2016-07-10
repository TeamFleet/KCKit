// Include gulp
var gulp = require('gulp'); 

var fs = require('fs');
var path = require('path');

// Include Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var replace = require('gulp-replace');





gulp.task('KCKit-js', function(){
	return gulp.src([
			'./src/kckit.js'
		])
		.pipe(babel({
			'highlightCode':	false,
			'comments':			true,
			'compact':			false,
			'ast':				false,
			"presets": 			[
					"es2015",
					"stage-0"
				],
			"plugins":			[
					"transform-minify-booleans"
				]
		}))
		.pipe(gulp.dest('./dist'))
		.pipe(uglify())
		.pipe(rename({ extname: '.min.js' }))
		.pipe(gulp.dest('./dist'));
})

gulp.task('KCKit-watch', function(){
	gulp.watch(
			'./source/*.js',
			['KCKit-js']
		)
})

gulp.task('default',[
	'KCKit-js',
	'KCKit-watch'
])