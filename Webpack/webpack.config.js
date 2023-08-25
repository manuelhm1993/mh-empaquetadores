// Objeto para manipular rutas de directorios y archivos
const path = require('path');

// Clase para crear plantillas con los assets de webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Clase para extraer el CSS en un archivo aparte
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Exportar el config globalmente
module.exports = {
    // Entradas: archivos a ser compilados
    entry: './src/index.js',
    // Salida: assets o archivos compilados
    output: {
        filename: 'app.js', // Nombre del archivo compilado
        path: path.resolve(__dirname, 'dist'), // Directorio donde se ubicará la salida
    },
    // Cargadores: permiten procesar css, estilos y sass con javascript
    module: {
        // Reglas para los cargadores
        rules: [
            {
                test: /\.css$/i, // Expresión regular para identificar que extensiones procesar
                use: [MiniCssExtractPlugin.loader, 'css-loader'], // Array para indicar la lista de cargadores a usar
            },
        ],
    },
    // Plugins: paquetes adicionales para añadir funciones especiales
    plugins: [
        // Plugin HTML
        new HtmlWebpackPlugin({
            minify: true, // Si el archivo resultante está minificado
            scriptLoading: 'blocking', // Donde ubica la etiqueta script, en este caso al final del body
            template: './src/index.html', // Plantilla de trabajo
            filename: './index.html' // Asset resultante con los css y js incorporados
        }),
        // Plugin CSS
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ],
    // Modo de trabajo: en producción minifica el código y en desarrollo agrega ayudas para el debugging
    mode: 'development',
};
