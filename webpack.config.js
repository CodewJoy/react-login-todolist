const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        contentBase: './dist',
    },
    module: {
        // 當 webpack 包裝 js 檔案，採用 babel-loader 來做編譯
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }]
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            }
        ]
    }
};