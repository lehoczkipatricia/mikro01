const { src, dest, series } = require('gulp');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');



function streamTS(){
    return src('src/**/*.ts')
    .pipe(ts()).js
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('public'));
}

function streamHTML() {
    return src('src/*.html')
    .pipe(dest('public'));
}

exports.default = series(streamTS, streamHTML);