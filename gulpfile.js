const {series, src, dest} = require('gulp'); // para importar
const sass = require('gulp-sass')(require('sass'));


function css( ) {
    return src('./src/img/scss/app.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(dest('./bouil/css'))
}

exports.css = css;