const path = require('path')

const outputDirectory = 'src/client/public'

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, outputDirectory)
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, 
            {
                test: /.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.scss$/,
                use: ["node-sass"]
            },
            {
                test: /.(png|svg)$/,
                use: {
                    loader: 'url-loader?limit=100000'
                }
            }
        ]
    },
    devServer: {
        port: 8080,
        open: true,
        proxy: {
            '/': 'http://localhost:80'
        }
    }
}