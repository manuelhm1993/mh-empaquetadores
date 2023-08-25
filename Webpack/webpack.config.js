// Objeto para manipular rutas de directorios y archivos
const path = require('path');

// Exportar el config globalmente
module.exports = {
    // Entradas: archivos a ser compilados
    entry: './src/index.js',
    // Salida: assets o archivos compilados
    output: {
        filename: 'app.js', // Nombre del archivo compilado
        path: path.resolve(__dirname, 'dist'), // Directorio donde se ubicará la salida
    },
    // Modo de trabajo
    mode: 'development',
};
