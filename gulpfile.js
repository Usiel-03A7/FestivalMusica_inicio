const {series, src, dest, watch} = require('gulp'); // para importar
const sass = require('gulp-sass')(require('sass'));


function css( ) {
    return src('src/img/scss/app.scss')
    .pipe(sass())
    .pipe(dest('./build/css'))
}
function mini( ) {
    return src('./src/img/scss/app.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('./build/css'))
}
function watchArch() {
    watch('./src/img/scss/**/*.scss', css); // * sirve para archivos igual y del mismo nivel... ** todos los archivos debajo del nivel con esa extención
}

exports.watchArch = watchArch;
exports.mini = mini;