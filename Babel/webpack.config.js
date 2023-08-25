// Importaciones
const path = require('path');

// Variables
const basePath = __dirname; // Ruta absoluta desde el directorio raíz
const targetPath = 'dist'; // Ruta del directorio resultante

// Exportaciones
module.exports = {
    // Desde donde empieza la aplicación
    entry: {
        app: './src/index.js', // Es posible crear un objeto para tener varias entradas
    },
    // Donde se guardan los archivos compilados
    output: {
        path: path.join(basePath, targetPath), // Unir la ruta actual con el directorio resultante
        filename: 'bundle.js',
    },
    // Modo de funcionamiento
    mode: 'production',
};
