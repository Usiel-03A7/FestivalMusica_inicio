const {series, parallel}= require('gulp'); // para importar

function hola (done){
    console.log('Hola mundo, comilando en "Hola" ');

    done();
}
function js(done) {
    console.log('compilando JS')
    done();
}

function compilacion(done) {
    console.log('compilando compilacion')
    done();
}


exports.hola = hola;
exports.js = js;
exports.default = parallel(hola, js, compilacion); // Series o paralel (lo que queremos que se ejecute)