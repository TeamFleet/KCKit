// Include gulp
const gulp = require('gulp');

const fs = require('fs');
const path = require('path');

// Include Plugins
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');




gulp.task('KCKit-js', function () {
    return gulp.src([
        './src/kckit.js'
    ])
        .pipe(babel({
            'highlightCode': false,
            'comments': true,
            'compact': false,
            'ast': false,
            "presets": [
                "latest"
            ],
            "plugins": [
                "transform-minify-booleans"
            ]
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./dist'));
})

gulp.task('KCKit-watch', function () {
    gulp.watch(
        './src/*.js',
        ['KCKit-js']
    )
})

gulp.task('default', [
    'KCKit-js',
    'KCKit-watch'
])