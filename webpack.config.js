module.exports = {
    entry: "./js/index.js",
    
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    
    devtool: 'source-map',
    
    module: {
    
    loaders: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
    }
};
