const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
    	'pubNote': './src/index.js'
	},

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public',
		historyApiFallback: true
	},

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['@babel/env', '@babel/react']
                }
            },
			{
				test: /\.scss?$/,
				use: [
					MiniCssExtractPlugin.loader,
					// 'style-loader',
					'css-loader',
					'sass-loader'
				],
				exclude: /node_modules/
			}
        ]
    },

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'public')
	},

	plugins: [
		new MiniCssExtractPlugin({'filename': 'style.css'})
	],

	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css']
	}
};