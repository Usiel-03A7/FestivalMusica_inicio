const {series, src, dest, watch} = require('gulp'); // para importar
const sass = require('gulp-sass')(require('sass'));


function css( ) {
    return src('./src/img/scss/app.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(dest('./bouil/css'))
}
function watchArch() {
    watch('./src/img/scss/app.scss', css);
}
exports.css = css;
exports.watchArch = watchArch;