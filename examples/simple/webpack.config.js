var path = require('path'),
    itemplateLoaderPath = path.join(__dirname, '..', '..', 'index');

module.exports = {
    context: __dirname,
    entry: './main',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.ejs$/,
            exclude: /node_modules/,
            loader: itemplateLoaderPath,
            query: {
                // pass itemplate option here
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.ejs'],
        root: [path.join(__dirname, 'views')],
        modulesDirectories: ['node_modules']
    }
};