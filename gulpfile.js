const {series, src, dest, watch} = require('gulp'); // para importar
const sass = require('gulp-sass')(require('sass'));
// const imagemin = import('gulp-imagemin');
const imagemin = require('gulp-imagemin');


function css( ) {
    return src('./src/scss/app.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(dest('./build/css'))
}
function mini( ) {
    return src('./src/scss/app.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('./build/css'))
}
function imagenes() {
    return src('./src/img/**/*')
    .pipe( imagemin() )
    .pipe(dest('./build/img'))
    
}
function watchArch() {
    watch('./src/scss/**/*.scss', css); // * sirve para archivos igual y del mismo nivel... ** todos los archivos debajo del nivel con esa extención
}
exports.imagenes = imagenes;
exports.watchArch = watchArch;
exports.mini = mini;